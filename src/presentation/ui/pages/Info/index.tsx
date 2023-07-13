import { WithFetchPhotoProps, withFetchPhotoFactory } from "../../../main/factories/photo-factory"
import { useLoaderData } from "react-router-dom";

interface Props extends WithFetchPhotoProps {
  children?: React.ReactNode
}

export async function loader({ params }: { params: any}) {
  return { photoId: params.photoId };
}

const Info = (props: Props) => {
  const { useGetData } = props
  const { photoId } = useLoaderData() as any
  const [data, error, loading] = useGetData('photo', { id: photoId, limit: 100, page: 1 })

  return <h1>Info</h1>
}

export default withFetchPhotoFactory(Info)
  