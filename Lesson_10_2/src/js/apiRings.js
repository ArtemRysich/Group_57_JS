// https://the-one-api.dev/documentation
const BASE_URL = 'https://the-one-api.dev/v2/';
const character = 'character';
const movie = 'movie'
const bearer = 'Bearer XJlq9OFMcHAy8pAQK7xj';
const options = {
  headers: {
    Authorization: bearer
  }
}

export function apiRings(page = 1) {
  // https://the-one-api.dev/v2/character?limit=10&page=${page}
  return fetch(`${BASE_URL}${character}?limit=300&page=${page}`, options).then(response => {
    if (!response.ok) {
      throw new Error('fail')
    }
    return response.json()
  })
}


export function apiRingsMovie() {
  // https://the-one-api.dev/v2/character?limit=10&page=${page}
  return fetch(`${BASE_URL}${movie}`, options).then(response => {
    if (!response.ok) {
      throw new Error('fail')
    }
    return response.json()
  })
}