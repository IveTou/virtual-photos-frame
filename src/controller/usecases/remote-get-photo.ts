import { Frame } from "../../domain/entities/frame";
import { Photo } from "../../domain/entities/photo";
import { GetPhoto } from "../../domain/usecases/get-photo";
import { HttpClient } from "../adapters/http/http-client";

export class RemoteGetPhoto implements GetPhoto {
  constructor (
    private readonly httpClient: HttpClient,
    // private readonly photosService: PhotosService
  ){}

  async getFrame(params: GetPhoto.Params): Promise<Frame> {
    // TODO: I need a design pattern to transform fetched data into entity type
    // TODO: to also decouple the data model and API service too

    const data = await this.httpClient.fetch('https://picsum.photos/v2/list')

    const photos: Photo[] = data.map((p: any) =>
      ({
        id: p.id,
        author: p.author,
        width: p.width,
        height: p.height,
        url: p.download_url
      })
    )

    const frame: Frame = {
      photos: photos,
      page: params.page ?? 1,
      limit: params.limit ?? 100,
    }

    return frame
  }

  async getPhoto(params: GetPhoto.Params): Promise<Photo> {
    const data = await this.httpClient.fetch(`https://picsum.photos/id/${params.id}/info`)

    return {
      id: data.id,
      author: data.author,
      width: data.width,
      height: data.height,
      url: data.download_url
    }
  }
}