import Head from "next/head";
import { useEffect, useRef } from "react";
import { renderMetaTags } from "react-datocms";
import { ComponentLoader } from "core/ComponentLoader";
import { useStore } from "@lib/store";
import mappingNav from "@components/Global/GlobalNavigation/mapping";
import mappingDrawer from "@components/Global/GlobalDrawer/mapping";
import { motion as m, AnimatePresence } from "framer-motion";
import GlobalFooter from "@components/Global/GlobalFooter";
import PageTransition from "core/PageTransition";

export default function Layout({
  children,
  navigationData: cmsNavigationData,
  drawerData: cmsDrawerData,
  components,
  data,
  seo,
  siteSeo,
  context,
  preview,
}) {
  const navigationData = useStore(({ navigationData }) => navigationData);
  const setNavigationData = useStore((state) => state.setNavigationData);
  const drawerData = useStore(({ drawerData }) => drawerData);
  const setDrawerData = useStore((state) => state.setDrawerData);

  useEffect(() => {
    // console.log("context", context);
  }, []);

  useEffect(() => {
    if (!navigationData) {
      const mapped = mappingNav(cmsNavigationData);
      setNavigationData(mapped);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmsNavigationData]);

  useEffect(() => {
    if (!drawerData) {
      const mapped = mappingDrawer(cmsDrawerData);
      setDrawerData(mapped);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmsDrawerData]);
  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <AnimatePresence onExitComplete={onExitComplete} initial={false}>
      <Head key={"head"}>
        <title>Jaime Isaac Hernández</title>
        <meta property="og:title" content="Jaime Isaac Hernández" />
        <meta
          name="description"
          content="I’m a designer who specializes in digital product design and all things visual."
        />
        <meta
          property="og:description"
          content="I’m a designer who specializes in digital product design and all things visual."
        />
        <meta
          property="og:image"
          content="https://www.datocms-assets.com/101466/1686081873-jhdz-og-image.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {seo && siteSeo && renderMetaTags([...seo, ...siteSeo.faviconMetaTags])}
        <link rel="icon" href="/favicon.svg" />
        {/* <link rel="canonical" href={canonicalUrl || pageUrl} /> */}
      </Head>
      <ComponentLoader
        key={"ComponentLoader"}
        models={data}
        components={components}
        context={{
          ...context, // If you have data that needs to be shared with all components, provide a value to the context prop. The prop will be passed to each component.
        }}
      />
      {children}
      <GlobalFooter key={"GlobalFooter"} />
      {/* </m.div> */}
    </AnimatePresence>
  );
}
