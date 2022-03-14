import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Spinner } from 'react-bootstrap';
import {toArrAndMap} from '../helpers';

export default function Gallery({images, currentMilestone, idKey}){
  const [imagesArray, imagesMap] = toArrAndMap(images, idKey || 'id');
  return(
    <>
      {JSON.stringify(images)}
    </>
    // <ImageGallery
    //   // ref={i => this._imageGallery = i}
    //   items={images}
    //   // onClick={this._onImageClick.bind(this)}
    //   // onImageLoad={this._onImageLoad}
    //   // onSlide={this._onSlide.bind(this)}
    //   // onPause={this._onPause.bind(this)}
    //   // onScreenChange={this._onScreenChange.bind(this)}
    //   // onPlay={this._onPlay.bind(this)}
    //   // infinite={this.state.infinite}
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
}