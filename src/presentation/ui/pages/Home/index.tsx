import { Frame } from "../../../../domain/entities/frame";
import { WithFetchPhotoProps, withFetchPhotoFactory } from "../../../main/factories/photo-factory"
import PhotoList from "../Info/components/PhotoList";

interface Props extends WithFetchPhotoProps {
  children?: React.ReactNode;
}

const Home = (props: Props) => {
  const { useGetData } = props

  const [data, error, loading] = useGetData('frame', { limit: 100, page: 1 })
  const frame = data as Frame // TODO: fix it when decouple useFetch Strategy

  return <PhotoList  photos={frame?.photos}/>/* <h1>Home</h1> */
}

export default withFetchPhotoFactory(Home)
  