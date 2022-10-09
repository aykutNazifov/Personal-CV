export default function useLocale(locale: string, json: string) {
  const data = require(`../public/locales/${locale}/${json}.json`);
  return data;
}
