import React from 'react'
import ImageItem from "./image-item";
import './image-list.css'

const ImageList = props => {
    const images = props.images.map(image => <ImageItem key={image.id} image={image}/>)

    return <div className="image-list">{images}</div>
}

export default ImageList