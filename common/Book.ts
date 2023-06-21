export interface BookInfo {
  book_id?: string
  title: string
  author: string
  rating?: string
  cover?: string
}

export interface Book extends BookInfo {
  id: number
}

export interface GoogleBook {
  items: {
    id: string
    volumeInfo: {
      title: string
      authors: object
      imageLinks: {
        thumbnail: string
      }
    }
  }
}

export interface AGoogleBook {
  id: string
  volumeInfo: {
    title: string
    authors: object
    imageLinks: {
      thumbnail: string
    }
  }
}
