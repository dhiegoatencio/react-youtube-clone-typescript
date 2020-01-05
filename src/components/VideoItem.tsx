import { Grid, Paper, Typography } from '@material-ui/core';

import React from 'react';
import { YoutubeVideo } from '../models/YoutubeVideo';
import { jsx } from '@emotion/core'; /** @jsx jsx */



const VideoItem: React.FC<{
  video: YoutubeVideo,
  onVideoSelect(video: YoutubeVideo): void
}> = ({
  video,
  onVideoSelect,
}) => {
  return (
    <Grid item xs={12}>
      <Paper
        onClick={() => onVideoSelect(video)}
        css={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
          css={{
            marginRight: '20px'
          }}
        />

        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem;
