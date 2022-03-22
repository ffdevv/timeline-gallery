import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import ImageGallery from 'react-image-gallery';
import { Spinner } from 'react-bootstrap';
import { SuitHeartFill, SuitHeart } from "react-bootstrap-icons";
import { toArrAndMap } from '../helpers';


const Gallery = forwardRef(({ images }, ref) => {
  const [imagesArray, imagesMap] = toArrAndMap(images);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const imageGallery = useRef(null);

  useImperativeHandle(ref, () => ({
    goToFirstTimelineId: (idx) => {
      console.debug("move to", idx);
    }
  }))

  const toggleFavorite = (id) => {
    if (favorites.has(id)) return favorites.delete(id);
    favorites.add(id)
  }

  const handleImageClick = (event) => {
    console.debug('clicked on image', event.target, 'at index', imageGallery.current.getCurrentIndex());
  }

  const handleImageLoad = (event) => {
    console.debug('loaded image', event.target.src);
  }

  const handleSlide = (index) => {
    // this._resetVideo(); VIDEO
    console.debug('sliding to index', index);
  }

  const handlePause = (index) => {
    console.debug('paused on index', index);
  }

  const handleScreenChange = (fullScreenElement) => {
    console.debug('changing fullscreen to', !!fullScreenElement);
  }

  const injectCustomControls = () => {
    const svgProps = {
      className: 'image-gallery-svg',
      style: {
        width: "28px",
        height: "28px"
      }
    }
    const mkSvg = () => favorites.has(imageGallery.current?.getCurrentIndex()) ? <SuitHeartFill {...svgProps} /> : <SuitHeart {...svgProps} />
    const svg = mkSvg();
    return <button
      className='image-gallery-icon'
      onClick={(e) => { toggleFavorite(imageGallery.current?.getCurrentIndex());; }}
      style={{
        padding: "20px",
        left: "0px",
        top: "0px"
      }}
    >
      {svg}
    </button>
  }

  return (
    <>
      {/* {JSON.stringify(images)} */}
      <ImageGallery
        ref={imageGallery}
        items={images}
        onClick={handleImageClick}
        onImageLoad={handleImageLoad}
        onSlide={handleSlide}
        onPause={handlePause}
        onScreenChange={handleScreenChange}
        // onPlay={this._onPlay.bind(this)}
        infinite={false}
        showBullets={false}
        showFullscreenButton={true}
        // showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
        showThumbnails={true}
        showIndex={false}
        showNav={true}
        // isRTL={this.state.isRTL}
        // thumbnailPosition={this.state.thumbnailPosition}
        // slideDuration={parseInt(this.state.slideDuration)}
        // slideInterval={parseInt(this.state.slideInterval)}
        // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
        additionalClass="app-image-gallery"
        renderCustomControls={injectCustomControls}
      // useWindowKeyDown={this.state.useWindowKeyDown}
      />
    </>
  )
});

export default Gallery;