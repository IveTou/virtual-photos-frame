import { PhotoService } from "../../controller/adapters/services/photo-service";
import { Frame } from "../../domain/entities/frame";
import { Photo } from "../../domain/entities/photo";
import { GetPhoto } from "../../domain/usecases/get-photo";

export class LoremPicsumService implements PhotoService {
  constructor(
    private readonly baseUrl: string = 'https://picsum.photos'
  ){}

  getList(params: GetPhoto.Params) {
    return `${this.baseUrl}/v2/list?page=${params.page}&limit=${params.limit}`
  }

  getById(params: GetPhoto.Params) {
    return `${this.baseUrl}/id/${params.id}/info`
  }

  frameAdapter(data: any, params: GetPhoto.Params): Frame {
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

  photoAdapter(data: any): Photo {
    return {
      id: data.id,
      author: data.author,
      width: data.width,
      height: data.height,
      url: data.download_url
    }
  }
}
