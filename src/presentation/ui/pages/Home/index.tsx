import { WithFetchPhotoProps, withFetchPhotoFactory } from "../../../main/factories/photo-factory"

interface Props extends WithFetchPhotoProps {
  children?: React.ReactNode;
}

const Home = (props: Props) => {
  const { useGetData } = props

  const [data, error, loading] = useGetData('frame', { limit: 100, page: 1 })

  return <h1>Home</h1>
}

export default withFetchPhotoFactory(Home)
  