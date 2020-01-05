import { Grid } from '@material-ui/core';
import React from 'react';
import VideoItem from './VideoItem';
import { YoutubeVideo } from '../models/YoutubeVideo';

const VideoList: React.FC<{
  videos: YoutubeVideo[] | null,
  onVideoSelect(video: YoutubeVideo): void
}> = ({
  videos,
  onVideoSelect,
}) => {
  if (!videos) return <></>;
  if (!videos.length) return <div>Loading... </div>

  const listOfVideos = videos.map((video, id) =>
    <VideoItem
      key={id}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  );

  return (
    <Grid container spacing={4}>
      {listOfVideos}
    </Grid>
  )
}
export default VideoList;