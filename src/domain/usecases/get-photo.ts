import { Frame } from "../entities/frame";
import { Photo } from "../entities/photo";

export interface GetPhoto {
  getFrame: (params: GetPhoto.Params) => Promise<Frame>
  getPhoto: (params: GetPhoto.Params) => Promise<Photo>
}

export namespace GetPhoto {
  export type Params = {
    id?: number
    page?: number
    limit?: number
  }
}