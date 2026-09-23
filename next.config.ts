import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/resume/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Aatif_Khan_Pathan_Angular_Developer.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
