/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "bg", "tr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
