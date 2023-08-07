import axios from 'axios'

export async function getOnePieceOfNews(id: string | undefined) {
  const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`)
    .then((data) => {
      if(typeof data.data !== 'object') {
        throw new Error(data.data)
      }
      return data.data
    })
  return response
}