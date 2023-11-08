const TextIntroFields = `
fragment TextIntroFields on TextIntroRecord {
    id
    _modelApiKey
    title
    subtitle
    description {
        links
        value
    }
    roles {
      title
      items {
        title
      }
    }
    titleSize

    verticalPaddingTop
    verticalPaddingBottom
    verticalPaddingTopMobile
    verticalPaddingBottomMobile
 
}  
`;

export default TextIntroFields;
