import { Photo } from "./photo"

export type Frame = {
  photos: Photo
  page: number
  limit: number
}