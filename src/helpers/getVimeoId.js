const vimeoRegex = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/; // eslint-disable-line

export default (url) => {
  const match = url.match(vimeoRegex);

  if (typeof match === 'undefined' || typeof match[3] === 'undefined') {
    return false;
  }

  return match[3];
};
