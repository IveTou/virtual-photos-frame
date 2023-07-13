import { RemoteGetPhoto } from "../../../controller/usecases/remote-get-photo"
import { GetPhoto } from "../../../domain/usecases/get-photo"
import { FetchHttpClient } from "../../../infra/http/http-client"
import { LoremPicsumService } from "../../../infra/services/photo-service"

interface WithRemoteProps {
  remoteGetPhoto: GetPhoto
}

export function withPhotoFactory<T extends WithRemoteProps = WithRemoteProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const fetchClient = new FetchHttpClient() 
  const loremPicsumService = new LoremPicsumService()
  const remoteGetPhoto = new RemoteGetPhoto(fetchClient, loremPicsumService)

  const ComponentWithTheme = (props: Omit<T, keyof WithRemoteProps>) => {
    const remoteProps = remoteGetPhoto
    return <WrappedComponent {...remoteProps} {...(props as T)} />
  }

  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  ComponentWithTheme.displayName = `withPhotoFactory(${displayName})`

  return ComponentWithTheme
}