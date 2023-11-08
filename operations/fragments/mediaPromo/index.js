import Buttons from "../../imports/buttons";
import ImageFields from "../../imports/media/image";

const MediaPromoFields = `
fragment MediaPromoFields on MediaPromoRecord {
    _modelApiKey
    title
    content {
        links
        value
    }
    image {
        ... on ImageRecord { 
         ${ImageFields}
        } 
      }
      flex
    titleSize
    alignment
    textBlockWidth
    verticalPaddingBottom
    verticalPaddingTop
    verticalPaddingBottomMobile
    verticalPaddingTopMobile
    ${Buttons}

}  
`;

export default MediaPromoFields;
