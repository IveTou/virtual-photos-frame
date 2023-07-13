import { GetPhoto } from "../../domain/usecases/get-photo";
import { HttpClient } from "../adapters/http/http-client";
import { PhotoService } from "../adapters/services/photo-service";

export class RemoteGetPhoto implements GetPhoto {
  constructor (
    private readonly httpClient: HttpClient,
    private readonly photosService: PhotoService
  ){}

  async getFrame(params: GetPhoto.Params): Promise<any> {
    const url = this.photosService.getList(params)
    return this.httpClient.fetch(url)
  }

  async getPhoto(params: GetPhoto.Params): Promise<any> {
    const url = this.photosService.getById(params)    
    return this.httpClient.fetch(url)
  }
}