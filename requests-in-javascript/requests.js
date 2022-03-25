const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
  const promises = ids.map(id => {
    const url = `${BASE_URL}/constellations/${id}`
    return axios.get(url).then(result => {
      const {data} = result
      let obj = {}
      obj.id = id
      return obj
    })
  })
  return Promise.all(promises)
}

const ids = ["KGQIwSq", "32TN5F8"];
bulkDelete(ids).then(console.log);