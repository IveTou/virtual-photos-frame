import { FixedSizeList } from 'react-window'
import PhotoRow from './PhotoRow'
import { Photo } from '../../../../../domain/entities/photo'

const PhotoList = ({ photos }:{ photos: Photo[] }) => {
  const Row = ({ index, style } : { index: number, style: React.CSSProperties | undefined}) => (
    <div style={style}>
      <PhotoRow photo={photos[index]} />
    </div>
  )

  return (
    <FixedSizeList
      height={500}
      width={500}
      itemSize={120}
      itemCount={photos?.length}
    >
      {Row}
    </FixedSizeList>
  )
}

export default PhotoList