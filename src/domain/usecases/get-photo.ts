import { Frame } from "../entities/frame";
import { Photo } from "../entities/photo";

export interface GetPhoto {
  getFrame: (params: GetPhoto.Params) => Promise<Frame>
  getPhoto: () => Promise<Photo>
}

export namespace GetPhoto {
  export type Params = {
    page: number
    limit: number
  }
}