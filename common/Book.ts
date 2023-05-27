export interface BookInfo {
  book_id?: string
  title: string
  author: string
  rating?: string
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
    }
  }
}

export interface AGoogleBook {
  id: string
  volumeInfo: {
    title: string
    authors: object
  }
}
