const vimeoRegex = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;

export default (url) => {
  var match = url.match(vimeoRegex);

  if (typeof match === 'undefined' || typeof match[3] === 'undefined') {
    return false;
  }

  return match[3];
}
