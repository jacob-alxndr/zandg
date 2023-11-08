import "../styles/app.globals.scss";
import Head from "next/head";
import { useEffect } from "react";
import { mobileDetect } from "@utils/mobileDetect";
import GlobalNavigation from "@components/Global/GlobalNavigation";

import { workSans } from "@lib/fonts";
import { useStore } from "@lib/store";
import { useRouter } from "next/router";

import GlobalDrawer from "@components/Global/GlobalDrawer";

export default function App({ Component, pageProps }) {
  const isTouch = useStore(({ isTouch }) => isTouch);
  const setIsTouch = useStore((state) => state.setIsTouch);

  const drawerData = useStore(({ drawerData }) => drawerData);
  const drawerIsOpen = useStore(({ drawerIsOpen }) => drawerIsOpen);
  const router = useRouter();
  const pageKey = router.asPath;

  useEffect(() => {
    if (isTouch) {
      document.body.classList.add("is-touch");
    } else {
      document.body.classList.remove("is-touch");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]);
  useEffect(() => {
    if (drawerIsOpen) {
      document.body.classList.add("is-locked");
    } else {
      document.body.classList.remove("is-locked");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerIsOpen]);

  useEffect(() => {
    setIsTouch(mobileDetect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="preconnect" href={`https://graphql.datocms.com`}></link>
        <link rel="dns-preconnect" href="https://datocms-assets.com"></link>
        <link rel="dns-prefetch" href="https://datocms-assets.com"></link>
        <link rel="icon" href="/favicon.ico" />
        {/* EXAMPLE:: Adobe typekit integration */}
        {/* <link
          rel="stylesheet"
          href="https://use.typekit.net/fqk8hnt.css"
        ></link> */}
        <style>{`
          :root {
            --font-primary: ${workSans.style.fontFamily};
          }
        `}</style>
      </Head>
      <GlobalNavigation />
      <GlobalDrawer {...drawerData} />
      <Component {...pageProps} key={pageKey} />
    </>
  );
}
