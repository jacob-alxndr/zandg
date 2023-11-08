import TextIntroFields from "operations/fragments/textIntro";
import FullBleedImageFields from "operations/fragments/fullBleedImage";
import TextPromoFields from "operations/fragments/textPromo";
import MediaPromoFields from "operations/fragments/mediaPromo";
import VideoPlayerFields from "operations/fragments/videoPlayer";
import GlobalDrawerFields from "operations/fragments/drawer";
import LandingPageFooterFields from "operations/fragments/landingPageFooter";
const GET_LANDING_PAGE = `
query LandingPageQuery($slug: String) {
    page: allLandingPages( filter: {slug: {eq: $slug}}) {
        _modelApiKey
        textIntro {
            ...TextIntroFields
          }
          components {
            ... on FullBleedImageRecord {
                ...FullBleedImageFields
            }
            ... on TextPromoRecord {
                ...TextPromoFields
            }
            ... on MediaPromoRecord {
                ...MediaPromoFields
            }
            ... on VideoPlayerRecord {
                ...VideoPlayerFields
            }
          }
          landingPageFooter{ ${LandingPageFooterFields}}
    }   
    globalDrawer {${GlobalDrawerFields}} 
    
}
${TextIntroFields}
${FullBleedImageFields}
${TextPromoFields}
${MediaPromoFields}
${VideoPlayerFields}


`;
export default GET_LANDING_PAGE;
