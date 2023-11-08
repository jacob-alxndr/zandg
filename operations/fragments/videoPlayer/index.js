const VideoPlayerFields = `
fragment VideoPlayerFields on VideoPlayerRecord {
    _modelApiKey
    url
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

export default VideoPlayerFields;
