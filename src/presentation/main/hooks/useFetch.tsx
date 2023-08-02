import { useEffect, useRef, useState } from "react";
import { GetPhoto } from "../../../domain/usecases/get-photo";
import { PhotoService } from "../../../controller/adapters/services/photo-service";
import { Photo } from "../../../domain/entities/photo";
import { Frame } from "../../../domain/entities/frame";

function useFetch(type: string, remote: GetPhoto, service: PhotoService, params: GetPhoto.Params) {
  const [data, setData] = useState<Photo | Frame | undefined>()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const paramRef = useRef(params)

  //TODO: decouple the strategy 
  const strategy = ({
    photo: { get: () => remote.getPhoto(paramRef.current), adapter: service.photoAdapter},
    frame: { get: () => remote.getFrame(paramRef.current), adapter: service.frameAdapter},
  })[type]

  useEffect(() => {
    if (!strategy) return

    strategy.get()
      .then(response => {
        if (response.ok) {
          return  response.json()
        }

        throw response
      })
      .then(data => {
        setData(strategy.adapter(data, paramRef.current))
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [paramRef])

  return [data, error, loading]
}

export default useFetch