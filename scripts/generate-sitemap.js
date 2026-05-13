import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
    const baseUrl = 'https://unoproservices.com';
    const today = new Date().toISOString().split('T')[0];

    // Core pages
    const corePages = [
        { path: '/', priority: '1.0' },
        { path: '/services', priority: '0.8' },
        { path: '/gallery', priority: '0.8' },
        { path: '/about', priority: '0.6' },
        { path: '/contact', priority: '0.7' },
        { path: '/blog', priority: '0.7' },
        { path: '/careers', priority: '0.5' },
    ];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add core pages
    corePages.forEach(page => {
        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}${page.path === '/' ? '' : page.path}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <priority>${page.priority}</priority>\n`;
        xml += `  </url>\n`;
    });

    // Add blog posts
    try {
        const blogsPath = path.resolve(__dirname, '../public/blogs/blogs.json');
        if (fs.existsSync(blogsPath)) {
            const blogsData = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
            if (Array.isArray(blogsData)) {
                blogsData.forEach(post => {
                    xml += `  <url>\n`;
                    xml += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
                    xml += `    <lastmod>${post.date || today}</lastmod>\n`;
                    xml += `    <priority>0.6</priority>\n`;
                    xml += `  </url>\n`;
                });
            }
        }
    } catch (err) {
        console.error('Error reading blogs.json for sitemap:', err);
    }

    xml += '</urlset>';

    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    console.log(`✅ Sitemap updated at: ${outputPath}`);
}

generateSitemap();
