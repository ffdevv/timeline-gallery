import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';

import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import prodApi, {testApi} from './api';
import { useState } from 'react';

function App() {
  const api = testApi;
  const [currentMilestone, setCurrentMilestone] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getImagesData().then(data => {
      setImages(data.imagesArray);
      setIsLoading(false);
    })
  }, [])

  if (isLoading){
    return (
      <div className="w-100 text-center">
        <Spinner animation="grow" variant="secondary" />
      </div>
    )
  }

  return (
    <div className="App">
      <Timeline itemsArray={itemsArray} itemsMap={itemsMap} />
      <Gallery imagesArray={imagesArray} imagesMap={imagesMap} />
    </div>
  );
}

export default App;
