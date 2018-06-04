import axios from 'axios'

/*
 * local開発環境において、
 * webpack dev serverを用いて動かす場合
 */
const baseURL = 'http://localhost:3000'
const httpClient = axios.create({baseURL: baseURL})

/*
 * 共通のエラー処理はかかなくてもよいのか？
 */
const tootAPI = {
  getAll (callback) {
    httpClient.get('/toots')
      .then(response => {
        callback(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  create (content, callback) {
    httpClient.post('/', content)
      .then(response => {
        callback(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default tootAPI
