import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';

import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import prodApi, {testApi} from './api';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function App() {
  return (
    <div className="App">
      <Timeline api={testApi}/>
      <Gallery images={images} />
    </div>
  );
}

export default App;
