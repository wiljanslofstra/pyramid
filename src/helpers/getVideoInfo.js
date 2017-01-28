import youtubeUrl from 'youtube-url';
import camelCaseRecursive from 'camelcase-keys-recursive';
import getYoutubeInfo from './getYoutubeInfo';
import getVimeoInfo from './getVimeoInfo';
import getVimeoId from './getVimeoId';

export default (videoUrl, cb) => {
  if (youtubeUrl.valid(videoUrl)) {
    getYoutubeInfo(videoUrl, (err, data) => {
      if (err) {
        cb(err);
        return;
      }

      const videoData = camelCaseRecursive(data);

      cb(null, videoData);
    });
  } else if (videoUrl.indexOf('vimeo.com') >= 0) {
    const videoId = getVimeoId(videoUrl);

    if (videoId) {
      getVimeoInfo(videoId, (err, data) => {
        if (err) {
          cb(err);
          return;
        }

        const videoData = {
          thumbnailUrl: data.thumbnail_medium,
          url: data.url,
          title: data.title,
          authorName: data.user_name,
        };

        cb(null, videoData);
      });
    }
  }
};
