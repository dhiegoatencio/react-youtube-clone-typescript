import { Grid } from "@material-ui/core";
import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetails';
import VideoList from './components/VideoList';
import youtube from './api/youtube';

interface State {
  videos: [],
  selectedVideo: any
}
class App extends React.Component<{}, State> {

  state: Readonly<State> = {
    videos: [],
    selectedVideo: null
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
    console.log(response);
  }

  render () {
    const { selectedVideo } = this.state;
    return(
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;
