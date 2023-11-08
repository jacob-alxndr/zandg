import InternalButtonFields from "../../imports/buttons/internal";

const LandingPageFooterFields = `
    _modelApiKey
      conclusion {
        id
        structuredText {
          blocks
          links
          value
        }
      }
    buttons{${InternalButtonFields}}  
    verticalPaddingBottom
    verticalPaddingTop
    verticalPaddingBottomMobile
    verticalPaddingTopMobile
`;

export default LandingPageFooterFields;
