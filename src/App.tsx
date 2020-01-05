import { Grid } from "@material-ui/core";
import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetails';
import VideoList from './components/VideoList';
import { YoutubeVideo } from './models/YoutubeVideo';
import youtube from './api/youtube';

interface State {
  videos: YoutubeVideo[] | null,
  selectedVideo: YoutubeVideo | null,
}
class App extends React.Component<{}, State> {

  readonly state: Readonly<State> = {
    videos: null,
    selectedVideo: null,
  }

  handleOnVideoSelect = (video: YoutubeVideo) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async (searchTerm: string) => {
    console.log(searchTerm);
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBZhe3_b1PFUXnWbYx3TpLrl5jMIpt1lpc',
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  render () {
    const {
      selectedVideo,
      videos,
    } = this.state;

    return(
      <Grid container>
        <Grid xs={12}>
          <Grid container xs={12} spacing={3}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList
                onVideoSelect={this.handleOnVideoSelect}
                videos={videos}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;
