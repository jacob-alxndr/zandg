import Buttons from "../../imports/buttons";
import CardFields from "../card";
const CardListFields = `
fragment CardListFields on CardListRecord {
    _modelApiKey
    anchorId
 cards {
      ${CardFields}
  }
  verticalPaddingTop
  verticalPaddingBottom
  titleSize
  }
`;

export default CardListFields;
