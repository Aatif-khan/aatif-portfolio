import { NextResponse } from "next/server";
import { Resend } from "resend";

// Helper function to sanitize user input and prevent HTML injection in emails
function sanitizeText(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website } = body;

    // 1. Spam Protection: Honeypot field check
    if (website && String(website).trim().length > 0) {
      // Silently discard bot submission with 200 OK
      return NextResponse.json(
        { success: true, message: "Thanks for reaching out." },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    const validationErrors: string[] = [];

    if (!trimmedName || trimmedName.length > 100) {
      validationErrors.push("Please provide a valid full name (up to 100 characters).");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      validationErrors.push("Please provide a valid email address.");
    }

    if (!trimmedSubject || trimmedSubject.length > 200) {
      validationErrors.push("Please provide a valid subject (up to 200 characters).");
    }

    if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
      validationErrors.push("Message must be between 10 and 5000 characters.");
    }

    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: validationErrors.join(" ") },
        { status: 400 }
      );
    }

    // 3. Environment Variables & Resend SDK initialization
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "pathanaatif6@gmail.com";
    const senderEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey || apiKey === "re_your_resend_api_key_here") {
      console.error(
        "[Contact API] Error: RESEND_API_KEY is not configured in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Something went wrong while sending your message. Please try again or email me directly.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // 4. Sanitize strings for HTML template safety
    const safeName = sanitizeText(trimmedName);
    const safeEmail = sanitizeText(trimmedEmail);
    const safeSubject = sanitizeText(trimmedSubject);
    const safeMessage = sanitizeText(trimmedMessage).replace(/\n/g, "<br/>");

    // 5. Send Email via Resend
    const emailResult = await resend.emails.send({
      from: `Aatif Khan Pathan <${senderEmail}>`,
      to: [recipientEmail],
      replyTo: trimmedEmail,
      subject: `Portfolio Contact: ${trimmedSubject}`,
      text: `New message from portfolio contact form:\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1e293b; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="margin-top: 0; color: #0f172a; font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
            New Portfolio Contact Message
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #64748b;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Subject:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeSubject}</td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #2563eb; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin: 0; text-align: right;">
            Sent from Aatif Khan Pathan Portfolio • ${new Date().toISOString()}
          </p>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("[Contact API] Resend API Error:", emailResult.error);
      return NextResponse.json(
        {
          error:
            "Something went wrong while sending your message. Please try again or email me directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thanks for reaching out. I'll get back to you as soon as possible.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Server Exception:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your message. Please try again or email me directly.",
      },
      { status: 500 }
    );
  }
}
