import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import ImageGallery from 'react-image-gallery';
import { Spinner } from 'react-bootstrap';
import { toArrAndMap } from '../helpers';

const Gallery = forwardRef(({ images }, ref) => {
  const [imagesArray, imagesMap] = toArrAndMap(images);
  const imageGallery = useRef(null);

  useImperativeHandle(ref, () => ({
    goToFirstTimelineId: (idx) => {
      console.log("move to " + idx);
    }
  }))

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

  return (
    <>
      {JSON.stringify(images)}
    </>
    // <ImageGallery
    //   ref={imageGallery}
    //   items={images}
    //   onClick={handleImageClick}
    //   onImageLoad={handleImageLoad}
    //   onSlide={handleSlide}
    //   onPause={handlePause}
    //   onScreenChange={handleScreenChange}
    //   // onPlay={this._onPlay.bind(this)}
    //   infinite={false}
    //   // showBullets={this.state.showBullets}
    //   // showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
    //   // showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
    //   // showThumbnails={this.state.showThumbnails}
    //   // showIndex={this.state.showIndex}
    //   // showNav={this.state.showNav}
    //   // isRTL={this.state.isRTL}
    //   // thumbnailPosition={this.state.thumbnailPosition}
    //   // slideDuration={parseInt(this.state.slideDuration)}
    //   // slideInterval={parseInt(this.state.slideInterval)}
    //   // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
    //   additionalClass="app-image-gallery"
    //   // useWindowKeyDown={this.state.useWindowKeyDown}
    // />
  )
});

export default Gallery;