import axios from 'axios'

let commonAxios = axios.create({
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default commonAxios
