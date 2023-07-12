import { Frame } from "../entities/frame";
import { Photo } from "../entities/photo";

export interface GetPhoto {
  getList(): Promise<Frame>
  getInfo(): Promise<Photo>
}