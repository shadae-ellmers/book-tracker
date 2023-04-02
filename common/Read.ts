export interface ReadInfo {
  title: string
  author: string
  date: string
  rating: number
  pages: number
  cover: string
}

export interface Read extends ReadInfo {
  id: number
}
