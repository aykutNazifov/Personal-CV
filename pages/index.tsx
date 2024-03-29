import Head from "next/head";
import Image from "next/image";
import MainBlock from "../blocks/MainBlock";
import SideBlock from "../blocks/SideBlock";
import Select from "react-select";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  interface LanguagesI {
    value: string;
    label: string;
    flag: string;
  }
  const languages: LanguagesI[] = [
    { value: "en", label: "English", flag: "/images/flag/en-flag.png" },
    {
      value: "bg",
      label: "Български",
      flag: "/images/flag/bg-flag.png",
    },
    { value: "tr", label: "Türkçe", flag: "/images/flag/tr-flag.svg" },
  ];

  const handleChangeLang = ({ value }) => {
    if (value == "en") {
      router.push({ pathname, query }, asPath, { locale: "en" });
    } else if (value == "bg") {
      router.push({ pathname, query }, asPath, { locale: "bg" });
    } else if (value == "tr") {
      router.push({ pathname, query }, asPath, { locale: "tr" });
    }
  };

  return (
    <div>
      <Head>
        <title>Aykut Nazifov CV</title>
        <meta name="description" content="Aykut Nazifov CV" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div id="download-pdf" className="grid grid-cols-3 px-0 md:px-5 lg:px-52 relative">
        <div className="absolute top-2 right-2 md:right-8 lg:right-56 w-[130px] h-[34px] text-primary">
          <Select<LanguagesI>
            options={languages}
            placeholder={locale.toUpperCase()}
            onChange={handleChangeLang}
            isSearchable={false}
            instanceId="select"
            className="select-container"
            classNamePrefix="select"
            getOptionLabel={(e): any => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="shrink-0 flex items-center">
                  <Image src={e.flag} alt={e.label} width={15} height={15} />
                </div>
                <span style={{ marginLeft: 5 }}>{e.label}</span>
              </div>
            )}
          />
        </div>
        <div className="col-span-3 md:col-span-1">
          <SideBlock />
        </div>
        <div className="col-span-3 md:col-span-2">
          <MainBlock />
        </div>
      </div>
    </div>
  );
}
