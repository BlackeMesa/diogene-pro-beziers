import { useEffect } from "react";

const Sitemap = () => {
  useEffect(() => {
    // Set the content type to XML
    const metaTag = document.createElement('meta');
    metaTag.httpEquiv = 'Content-Type';
    metaTag.content = 'application/xml; charset=utf-8';
    document.head.appendChild(metaTag);

    const lastmod = new Date().toISOString().split('T')[0];
    
    const urls = [
      { loc: 'https://lelienproprete34.com/', changefreq: 'weekly', priority: '1.0' },
      { loc: 'https://lelienproprete34.com/nettoyage-diogene', changefreq: 'monthly', priority: '0.9' },
      { loc: 'https://lelienproprete34.com/nettoyage-diogene-beziers', changefreq: 'monthly', priority: '0.9' },
      { loc: 'https://lelienproprete34.com/debarras-insalubre', changefreq: 'monthly', priority: '0.9' },
      { loc: 'https://lelienproprete34.com/prix-nettoyage-diogene-herault', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://lelienproprete34.com/appartement-tres-sale-que-faire', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://lelienproprete34.com/zone-intervention-herault', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://lelienproprete34.com/nettoyage-urgence-24h-herault', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://lelienproprete34.com/contact', changefreq: 'yearly', priority: '0.6' }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Replace the entire document with XML
    document.open();
    document.write(xml);
    document.close();

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  return null;
};

export default Sitemap;
