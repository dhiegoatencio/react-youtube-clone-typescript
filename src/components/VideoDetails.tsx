import { Paper, Typography } from '@material-ui/core';

import React from 'react';
import { YoutubeVideo } from '../models/YoutubeVideo';
import { jsx } from '@emotion/core'; /** @jsx jsx */

const VideoDetail: React.FC<{
  video: YoutubeVideo | null
}> = ({ video }) => {
  if (!video) return <></>;
  const videoSrc = `https://www.youtube.com/embed/${
    video.id.videoId
  }`;

  return (
    <React.Fragment>
      <Paper elevation={6} css={{
        height: '70%'
      }}>
        <iframe frameBorder="0"
          height="100%" width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>

      <Paper elevation={6} css={{ padding: '15px' }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>

        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        
        <Typography variant="subtitle2">
          {video.snippet.description}
        </Typography>
      </Paper>
    </React.Fragment>
  )
}
export default VideoDetail;