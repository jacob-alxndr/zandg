import ExternalButtonFields from "operations/imports/buttons/external";
import BackgroundImageFields from "../../imports/backgroundMedia/image";
import ImageFields from "operations/imports/media/image";
import InternalButtonFields from "operations/imports/buttons/internal";
import AnchorButtonFields from "operations/imports/buttons/anchor";
const HeroFields = `
fragment HeroFields on HeroRecord {
    id
    _modelApiKey
    title
    subtitle
    description {
        blocks
        links
        value
      }
      image {
          ... on ImageRecord {
              ${ImageFields}
            }
        }
        buttons{
        ... on ExternalButtonRecord{
            ${ExternalButtonFields}
        }
        ... on InternalButtonRecord{
            ${InternalButtonFields}
        }
        ... on AnchorButtonRecord{
            ${AnchorButtonFields}
        }
        }
        titleSize
        subtitleSize
        verticalPaddingTop
        verticalPaddingBottom
        verticalPaddingTopMobile
        verticalPaddingBottomMobile
 

}  
`;

export default HeroFields;
