import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const BLOGS_JSON = path.resolve(__dirname, '../public/blogs/blogs.json');
const BASE_HTML_PATH = path.resolve(DIST_DIR, 'index.html');

async function generateStaticSEO() {
    console.log('🚀 Starting SEO Static Page Generation...');

    if (!fs.existsSync(BASE_HTML_PATH)) {
        console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
        process.exit(1);
    }

    const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf-8');
    const blogs = JSON.parse(fs.readFileSync(BLOGS_JSON, 'utf-8'));

    for (const blog of blogs) {
        const slug = blog.slug;
        const blogDir = path.resolve(DIST_DIR, 'blog', slug);

        // Create directory
        if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir, { recursive: true });
        }

        const title = `${blog.title} | Uno Pro Services Chicago`;
        const description = blog.intro.substring(0, 160).replace(/"/g, '&quot;');
        const url = `https://unoproservices.com/blog/${slug}`;
        const image = `https://unoproservices.com/og-image.jpg`; // Default OG image

        // Prepare JSON-LD
        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.intro,
            "image": image,
            "datePublished": blog.date,
            "author": {
                "@type": "Organization",
                "name": "Uno Pro Services",
                "url": "https://unoproservices.com"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Uno Pro Services",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://unoproservices.com/logo.png"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": url
            }
        };

        const breadcrumbLd = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://unoproservices.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://unoproservices.com/blog"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": blog.title,
                    "item": url
                }
            ]
        };

        // Inject metadata and schemas into HTML
        let blogHtml = baseHtml
            .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
            .replace(
                /<\/head>/,
                `  <meta name="description" content="${description}" />\n` +
                `    <link rel="canonical" href="${url}" />\n` +
                `    <meta property="og:title" content="${title}" />\n` +
                `    <meta property="og:description" content="${description}" />\n` +
                `    <meta property="og:url" content="${url}" />\n` +
                `    <meta property="og:type" content="article" />\n` +
                `    <script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>\n` +
                `    <script type="application/ld+json">\n${JSON.stringify(breadcrumbLd, null, 2)}\n    </script>\n  </head>`
            );

        fs.writeFileSync(path.resolve(blogDir, 'index.html'), blogHtml);
        console.log(`✅ Generated: /blog/${slug}/index.html`);
    }

    console.log('✨ SEO Static Page Generation Complete!');
}

generateStaticSEO().catch(err => {
    console.error('❌ Error generating static SEO pages:', err);
    process.exit(1);
});
