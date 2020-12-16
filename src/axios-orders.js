import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerbuilder-d1afd.firebaseio.com/'
})

export default instance
