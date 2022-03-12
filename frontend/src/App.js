import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';

import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import prodApi, {testApi} from './api';
import { useState } from 'react';

function App() {
  const api = testApi;
  const [currentItem, setCurrentItem] = useState(false);
  const [items, setItems] = useState({})
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState("loading ui");

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
  }, [])

  if (loading !== false){
    return (
      <div className="w-100 text-center">
        <Spinner animation="grow" variant="secondary" />
        {loading}
      </div>
    )
  }

  return (
    <div className="App">
      <Timeline items={items} />
      <Gallery images={images} />
    </div>
  );
}

export default App;
