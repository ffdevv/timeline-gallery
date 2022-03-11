import axios from 'axios'
import Config, { getConfigEndpoint } from './config'

const promise = (data, delay) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, delay || 250);
});

export const testApi = {
  getTimelineData: () => promise({
    itemsArray: [
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
    ],
    itemsMap: {
      "1": {
        data: "2019-12-05",
        label: "First milestone",
        id: 1
      },
      "2": {
        data: "2020-01-21",
        label: "Second milestone",
        id: 2
      },
      "3": {
        data: "2020-02-25",
        label: "Third milestone",
        id: 3
      },
      "4": {
        data: "2020-03-16",
        label: "Fourth milestone",
        id: 4
      },
      "5": {
        data: "2020-04-19",
        label: "Fifth milestone",
        id: 5
      },
      "6": {
        data: "2020-05-23",
        label: "Sixth milestone",
        id: 6
      }
    },
  }, 500),
  getImagesData: () => promise({
    imagesArray: [],
    imagesMap: {}
  }, 500)
}

export default {
  getImagesData: () => axios({
    'method':'GET',
    'url': getConfigEndpoint('getImagesData'),
    'headers': {
      'content-type':'application/json',
    },
  })
}