/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pinterest-premium.example.com',
  generateRobotsTxt: true,
  sitemapSize: 7000
}
