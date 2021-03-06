import axios from 'axios'
import Config, { getConfigEndpoint } from './config'

const promise = (data, delay) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, delay || 250);
});

export const testApi = {
  getTimelineData: () => promise(
    [
      {
        data: "2019-12-05",
        label: "First milestone",
        id: 1
      },
      {
        data: "2020-01-21",
        label: "Second milestone",
        id: 2
      },
      {
        data: "2020-02-25",
        label: "Third milestone",
        id: 3
      },
      {
        data: "2020-03-16",
        label: "Fourth milestone",
        id: 4
      },
      {
        data: "2020-04-19",
        label: "Fifth milestone",
        id: 5
      },
      {
        data: "2020-05-23",
        label: "Sixth milestone",
        id: 6
      }
    ]
    , 500),
  getImagesData: () => promise(
    [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        id: 1,
        timeline: 1
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        id: 2,
        timeline: 1
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        id: 3,
        timeline: 2
      },
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        id: 4,
        timeline: 1
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        id: 5,
        timeline: 1
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        id: 6,
        timeline: 2
      },
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        id: 7,
        timeline: 1
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        id: 8,
        timeline: 1
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        id: 9,
        timeline: 2
      },
    ], 500)
}

export default {
  getImagesData: () => axios({
    'method': 'GET',
    'url': getConfigEndpoint('getImagesData'),
    'headers': {
      'content-type': 'application/json',
    },
  })
}