import { Photo } from "../../../../../domain/entities/photo"

const PhotoRow = ({ photo }:{ photo: Photo }) => (
  <div>
    {photo.id}
  </div>
)

export default PhotoRow
