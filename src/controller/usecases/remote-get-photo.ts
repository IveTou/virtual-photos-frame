import { Frame } from "../../domain/entities/frame";
import { Photo } from "../../domain/entities/photo";
import { GetPhoto } from "../../domain/usecases/get-photo";
import { HttpClient } from "../adapters/http/http-client";
import { PhotoService } from "../adapters/services/photo-service";

export class RemoteGetPhoto implements GetPhoto {
  constructor (
    private readonly httpClient: HttpClient,
    private readonly photosService: PhotoService
  ){}

  async getFrame(params: GetPhoto.Params): Promise<Frame> {
    const url = this.photosService.getList(params)
    const data = await this.httpClient.fetch(url)
    
    return this.photosService.frameAdapter(data, params)
  }

  async getPhoto(params: GetPhoto.Params): Promise<Photo> {
    const url = this.photosService.getById(params)
    const data = await this.httpClient.fetch(url)
    
    return this.photosService.photoAdapter(data)
  }
}