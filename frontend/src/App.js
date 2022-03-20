import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import prodApi, { testApi } from './api';
import { useState, useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap';

import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';

function App() {
  const api = testApi;
  const [items, setItems] = useState([])
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState("loading ui");
  const [curTimelineIdx, _setCurTimelineIdx] = useState(-1);
  const gallery = useRef(null);

  useEffect(() => {
    setCurTimelineIdx(!!items.length ? 0 : -1);
  }, [items])

  useEffect(() => {
    setLoading("fetching timeline");
    api.getTimelineData().then(data => {
      setItems(data);
      setLoading("fetching images");
      api.getImagesData().then(data => {
        setImages(data);
        setLoading(false);
      })
    })
  }, [api])

  // override to inject the filtering after state change without having to re-render the <Gallery />
  const setCurTimelineIdx = (idx) => {
    _setCurTimelineIdx(idx);
    gallery.current?.goToFirstTimelineId(items[idx].id);
  }

  if (loading !== false) {
    return (
      <div className="w-100 text-center">
        <Spinner animation="grow" variant="secondary" />
        {loading}
      </div>
    )
  }

  return (
    <div className="App">
      <Timeline items={items} curIdx={curTimelineIdx} setCurIdx={setCurTimelineIdx} />
      <Gallery images={images} ref={gallery} />
    </div>
  );
}

export default App;
