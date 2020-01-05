import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetails';
import VideoList from './components/VideoList';
import { YoutubeVideo } from './models/YoutubeVideo';
import { jsx } from '@emotion/core'; /** @jsx jsx */
import youtube from './api/youtube';

const App: React.FC<{}> = () => {

  const [videos, setVideos] = useState([] as YoutubeVideo[]);
  const [selectedVideo, setSelectedVideo] = useState(null as null | YoutubeVideo);

  useEffect(() => {
    handleSubmit('Bardo Royale as cegas Jinx OP');
  }, []);

  const handleSubmit = async (searchTerm: string) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBZhe3_b1PFUXnWbYx3TpLrl5jMIpt1lpc',
        q: searchTerm
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  return (
    <Grid xs={12} container spacing={3}>
      <Grid item xs={12}>
        <SearchBar onFormSubmit={handleSubmit} />
      </Grid>
      <Grid item md={8} xs={12} css={{ marginBottom: "90px" }}>
        <VideoDetail video={selectedVideo} />
      </Grid>
      <Grid item md={4} xs={12}>
        <VideoList videos={videos}
          onVideoSelect={video => setSelectedVideo(video)}
        />
      </Grid>
    </Grid>
  );
}

export default App;
