import { FixedSizeList } from 'react-window'
import PhotoRow from './PhotoRow'
import { Photo } from '../../../../../domain/entities/photo'
import { useRef } from 'react'

const PhotoList = ({ photos, onScroll }:{ photos: Photo[], onScroll: (e: any, ref: any) => void  }) => {
  const ref = useRef()
  
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
      onScroll={(e) => onScroll(e, ref)}
      outerRef={ref}
    >
      {Row}
    </FixedSizeList>
  )
}

export default PhotoList