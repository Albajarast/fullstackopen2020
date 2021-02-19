import axios from 'axios'
// const baseUrl = 'http://localhost:3003/api/notes'
const baseUrl = 'https://polar-cliffs-65918.herokuapp.com/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const methods = {
  getAll,
  create,
  update
}

export default methods
