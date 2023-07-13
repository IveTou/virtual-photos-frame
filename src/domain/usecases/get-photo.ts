export interface GetPhoto {
  getFrame: (params: GetPhoto.Params) => Promise<any>
  getPhoto: (params: GetPhoto.Params) => Promise<any>
}

export namespace GetPhoto {
  export type Params = {
    id?: number
    page?: number
    limit?: number
  }
}