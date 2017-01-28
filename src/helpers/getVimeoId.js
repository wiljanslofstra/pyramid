const vimeoRegex = /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/; // eslint-disable-line

export default (url) => {
  const match = url.match(vimeoRegex);

  if (
    typeof match === 'undefined' ||
    !match ||
    typeof match[4] === 'undefined' ||
    !match[4]
  ) {
    return false;
  }

  return match[4];
};
