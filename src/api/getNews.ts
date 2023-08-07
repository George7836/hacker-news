import axios from 'axios'
import { NewsPage } from '../types/news';

export async function getNews() {
  const arr = new Array(4).fill(null);
  const res = await Promise.all(
    arr.map((_, page) => {
      return axios.get<NewsPage>(`https://api.hnpwa.com/v0/newest/${page + 1}.json`)
    })
  )
    .then((promises) => promises.map((promise) => {
      if(typeof promise.data !== 'object') {
        throw new Error(promise.data)
      }
      return promise.data
    }))
    .then((data) => data.flat().slice(0,100))
  return res
}