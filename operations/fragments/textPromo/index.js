import Buttons from "../../imports/buttons";

const TextPromoFields = `
fragment TextPromoFields on TextPromoRecord {
    _modelApiKey
    columnContent {
        id
        structuredText {
          value
          links
          blocks
        }
        id
      }
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

export default TextPromoFields;
