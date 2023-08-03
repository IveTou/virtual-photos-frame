import { useState } from "react";
import { Frame } from "../../../../domain/entities/frame";
import { WithFetchPhotoProps, withFetchPhotoFactory } from "../../../main/factories/photo-factory"
import PhotoList from "../Info/components/PhotoList";

interface Props extends WithFetchPhotoProps {
  children?: React.ReactNode;
}

const Home = (props: Props) => {
  const [page, setPage] = useState(1)
  const { useGetData } = props

  const [data, error, loading] = useGetData('frame', { limit: 10, page: page })
  const frame = data as Frame // TODO: fix it when decouple useFetch Strategy

  const scrollHandler = (e: any, ref: any) => {
    const scrollOffset = e.scrollOffset
    const scrollTopMax = ref.current.scrollTopMax

    if (scrollOffset !== 0 && scrollOffset === scrollTopMax) {
      setPage(prev => prev + 1)
    }
  }

  return <PhotoList  photos={frame?.photos} onScroll={scrollHandler}/>/* <h1>Home</h1> */
}

export default withFetchPhotoFactory(Home)
  