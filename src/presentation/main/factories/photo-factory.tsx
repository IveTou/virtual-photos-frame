import { RemoteGetPhoto } from "../../../controller/usecases/remote-get-photo"
import { GetPhoto } from "../../../domain/usecases/get-photo"
import { FetchHttpClient } from "../../../infra/http/http-client"
import { LoremPicsumService } from "../../../infra/services/photo-service"
import useFetch from "../hooks/useFetch"

export interface WithFetchPhotoProps {
  useGetData: (type: string, params: GetPhoto.Params) => (boolean | undefined)[]
}

export function withFetchPhotoFactory<T extends WithFetchPhotoProps = WithFetchPhotoProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const fetchClient = new FetchHttpClient() 
  const loremPicsumService = new LoremPicsumService()
  const remoteGetPhoto = new RemoteGetPhoto(fetchClient, loremPicsumService)
  // TODO: use Factory pattern to DRY. Bc I don't want to pass service again
  const useGetData = (type: string, params: GetPhoto.Params) => useFetch(type, remoteGetPhoto, loremPicsumService, params)

  const ComponentWithTheme = (props: Omit<T, keyof WithFetchPhotoProps>) => {
    return <WrappedComponent {...{ useGetData }} {...(props as T)} />
  }

  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  ComponentWithTheme.displayName = `withPhotoFactory(${displayName})`

  return ComponentWithTheme
}