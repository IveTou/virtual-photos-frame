import { Frame } from "../../domain/entities/frame";
import { Photo } from "../../domain/entities/photo";
import { GetPhoto } from "../../domain/usecases/get-photo";
import { HttpClient } from "../adapters/http/http-client";

export class RemoteGetPhoto implements GetPhoto {
  constructor (
    private readonly httpClient: HttpClient,
    private readonly url: string,
  ){}

  async getFrame(params: GetPhoto.Params): Promise<Frame> {
    // TODO: I need a design pattern to transform fetched data into entity type
    
    // const frame: Frame = {
    //   photos:
    //   page: params.page,
    //   limit: params.limit,
    // } 
    return this.httpClient.fetch(this.url)
  }

  async getPhoto(): Promise<Photo> {
    return this.httpClient.fetch(this.url)
  }
}