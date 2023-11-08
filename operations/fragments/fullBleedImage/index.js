import ImageFields from "operations/imports/media/image";
const FullBleedImageFields = `
fragment FullBleedImageFields on FullBleedImageRecord {
    _modelApiKey
    image {
      ... on ImageRecord { 
       ${ImageFields}
      } 
    }
    caption {
      blocks
      links
      value
    }
    verticalPaddingTop
    verticalPaddingBottom
    verticalPaddingTopMobile
    verticalPaddingBottomMobile
 

}  
`;

export default FullBleedImageFields;
