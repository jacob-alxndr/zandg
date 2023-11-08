const BackgroundImageFields = `
id
horizontalAlignment
verticalAlignment
mobileHorizontalAlignment
mobileVerticalAlignment
backgroundImage {
    url
    width
    height
    responsiveImage(imgixParams: {fit: max, auto: format}) {
        alt
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
    }
}
mobileBackgroundImage {
    url
    width
    height
    responsiveImage(imgixParams: {fit: max, auto: format}) {
        alt
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
    }
}
`;

export default BackgroundImageFields;
