import dynamic from "next/dynamic";
import GET_LANDING_PAGE from "operations/queries/getLandingPages";
import GET_ALL_LANDING_PAGES from "operations/queries/getAllLandingPages";
import { request } from "@lib/datocms";
import { getAllSlugs } from "@lib/data";
import Layout from "core/Layout";
import PageTransition from "core/PageTransition";

const components = {
  global_drawer: {
    comp: dynamic(() => import("@components/Global/GlobalDrawer")),
    mapping: require("@components/Global/GlobalDrawer/mapping"),
  },
  text_intro: {
    comp: dynamic(() => import("@components/TextIntro")),
    mapping: require(`@components/TextIntro/mapping`),
  },
  full_bleed_image: {
    comp: dynamic(() => import("@components/FullBleedImage")),
    mapping: require(`@components/FullBleedImage/mapping`),
  },
  text_promo: {
    comp: dynamic(() => import("@components/TextPromo")),
    mapping: require(`@components/TextPromo/mapping`),
  },
  media_promo: {
    comp: dynamic(() => import("@components/MediaPromo")),
    mapping: require(`@components/MediaPromo/mapping`),
  },
  video_player: {
    comp: dynamic(() => import("@components/VideoPlayer")),
    mapping: require(`@components/VideoPlayer/mapping`),
  },
  landing_page_footer: {
    comp: dynamic(() => import("@components/LandingPageFooter")),
    mapping: require(`@components/LandingPageFooter/mapping`),
  },
};

export default function LandingPage({ data }) {
  const {
    page: {
      0: {
        textIntro,
        components: bodyComponents,
        landingPageFooter: { 0: landingPageFooter },
      },
    },
    // _site,
    globalNavigation,
    globalDrawer,
    globalFooter,
  } = data;

  return (
    <PageTransition>
      <Layout
        components={components}
        navigationData={globalNavigation}
        drawerData={globalDrawer}
        footerData={globalFooter}
        data={[textIntro, ...bodyComponents, landingPageFooter]}
      />
    </PageTransition>
  );
}

export async function getStaticPaths() {
  const data = await request({
    query: GET_ALL_LANDING_PAGES,
  });
  const paths = getAllSlugs(data?.pages);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await request({
    query: GET_LANDING_PAGE,
    variables: { limit: 10, slug },
    includeDrafts: context.preview,
    preview: context.preview,
  });

  return {
    props: { data },
  };
}
