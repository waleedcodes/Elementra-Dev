import { NextResponse } from 'next/server';

// Ensure this route is treated as static when using `output: export`.
export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://elementra-ui.vercel.app';
  
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Elementra UI Blog</title>
    <description>Latest updates, tutorials, and insights about React component development</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    
    <item>
      <title>Introducing Elementra UI - Modern React Components</title>
      <description>Discover how Elementra UI can accelerate your React development with 50+ production-ready components.</description>
      <link>${baseUrl}/docs/Introduction</link>
      <guid>${baseUrl}/docs/Introduction</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    
    <item>
      <title>Getting Started with Elementra UI</title>
      <description>Learn how to install and use Elementra UI components in your React and Next.js projects.</description>
      <link>${baseUrl}/docs/Installation</link>
      <guid>${baseUrl}/docs/Installation</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    
    <item>
      <title>Building Accessible Components with Elementra UI</title>
      <description>How our component library ensures accessibility and follows WCAG guidelines.</description>
      <link>${baseUrl}/docs/Components</link>
      <guid>${baseUrl}/docs/Components</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
