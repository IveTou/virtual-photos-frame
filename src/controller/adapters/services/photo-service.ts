import { Frame } from "../../../domain/entities/frame"
import { Photo } from "../../../domain/entities/photo"
import { GetPhoto } from "../../../domain/usecases/get-photo"

export interface PhotoService {
    getList: (params: GetPhoto.Params) => string
    getById: (params: GetPhoto.Params) => string
    photoAdapter: (data: any) => Photo
    frameAdapter: (data: any, params: GetPhoto.Params) => Frame
}