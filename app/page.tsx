import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <main className="py-16 sm:py-24 space-y-16">
      <Container>
        {/* Phase 2A Foundation & Design System Verification Preview */}
        <div className="border-b border-border-subtle pb-8 mb-12">
          <Badge variant="accent" className="mb-3">
            Phase 2A Foundation
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-txt-primary mb-3">
            Portfolio Design System & Architecture
          </h1>
          <p className="text-lg text-txt-secondary max-w-2xl">
            Established design tokens, responsive typography scale, surface containers, button variants, keyboard accessibility, and color contrast.
          </p>
        </div>

        {/* 1. Typography Hierarchy */}
        <section className="space-y-6 mb-16">
          <SectionHeading
            label="Typography"
            title="Type Scale & Hierarchy"
            description="Responsive typography scale built on Geist Sans and Geist Mono."
          />
          <Card className="space-y-4">
            <div>
              <span className="text-xs font-mono text-txt-muted block mb-1">
                Display / H1 (36px - 48px)
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-txt-primary">
                Senior Frontend Engineer
              </h1>
            </div>
            <div className="border-t border-border-subtle pt-4">
              <span className="text-xs font-mono text-txt-muted block mb-1">
                Section Title / H2 (24px - 36px)
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-txt-primary">
                Scalable Enterprise Web Applications
              </h2>
            </div>
            <div className="border-t border-border-subtle pt-4">
              <span className="text-xs font-mono text-txt-muted block mb-1">
                Card Heading / H3 (18px - 24px)
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-txt-primary">
                Enterprise AI, Data & Workflow Platform
              </h3>
            </div>
            <div className="border-t border-border-subtle pt-4">
              <span className="text-xs font-mono text-txt-muted block mb-1">
                Body & Lead Text (16px - 18px)
              </span>
              <p className="text-base text-txt-secondary max-w-3xl leading-relaxed">
                6+ years of experience building enterprise web applications, SaaS platforms, data-driven interfaces, workflow systems, PWAs, and real-time streaming experiences.
              </p>
            </div>
            <div className="border-t border-border-subtle pt-4">
              <span className="text-xs font-mono text-txt-muted block mb-1">
                Mono & Code Label (13px - 14px)
              </span>
              <code className="text-xs sm:text-sm font-mono text-accent bg-accent-muted px-2 py-1 rounded">
                Angular • TypeScript • RxJS • Next.js
              </code>
            </div>
          </Card>
        </section>

        {/* 2. Button Foundation */}
        <section className="space-y-6 mb-16">
          <SectionHeading
            label="Interactive Primitives"
            title="Button System & Focus States"
            description="Accessible interactive components supporting primary, secondary, outline, ghost, and link variants."
          />
          <Card className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="md">
              Primary Action
            </Button>
            <Button variant="secondary" size="md">
              Secondary Action
            </Button>
            <Button variant="outline" size="md">
              Outline Action
            </Button>
            <Button variant="ghost" size="md">
              Ghost Action
            </Button>
            <Button variant="link" size="md" href="#foundation">
              Link Action &rarr;
            </Button>
            <Button variant="primary" size="md" disabled>
              Disabled Action
            </Button>
          </Card>
        </section>

        {/* 3. Badges & Tokens */}
        <section className="space-y-6">
          <SectionHeading
            label="Meta & Tokens"
            title="Badges & Metadata Tags"
            description="Categorized tokens and tag primitives."
          />
          <Card className="flex flex-wrap items-center gap-3">
            <Badge variant="default">Angular</Badge>
            <Badge variant="accent">TypeScript</Badge>
            <Badge variant="outline">RxJS</Badge>
            <Badge variant="muted">Next.js</Badge>
            <Badge variant="default">Enterprise SaaS</Badge>
            <Badge variant="accent">BPMN.js</Badge>
            <Badge variant="outline">WebSockets</Badge>
          </Card>
        </section>
      </Container>
    </main>
  );
}
