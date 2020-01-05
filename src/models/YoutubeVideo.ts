export interface YoutubeVideo {
  id: {
    videoId: string,
  },
  snippet: {
    title: string,
    channelTitle: string,
    description: string,
    thumbnails: {
      medium: {
        url: string,
      }
    }
  }
}