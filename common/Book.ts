export interface BookInfo {
  title: string
  author: string
  cover: string
}

export interface Book extends BookInfo {
  id: number
}

export interface GoogleBook {
  items: {
    volumeInfo: {
      id: number
      title: string
      authors: object
      thumbnail: string
    }
  }
}
