import axios from 'axios';
// import { TheCatAPI } from '@thatapicompany/thecatapi';

axios.defaults.headers.common['x-api-key'] =
  'live_drDNDcXW7MqrUjPzwxlXPL5on6NTiYDZkSmh7erAzfboyskZJqkHzdNkyBjXKXoF';
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_drDNDcXW7MqrUjPzwxlXPL5on6NTiYDZkSmh7erAzfboyskZJqkHzdNkyBjXKXoF';

export function fetchBreeds() {
  const END_POINT = '/breeds';
  return fetch(`${BASE_URL}${END_POINT}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export function fetchCatByBreed(breedId) {
  const END_POINT = '/images/search?limit=5';
  const params = new URLSearchParams({
    breed_ids: breedId,
    api_key: API_KEY,
  });

  return fetch(`${BASE_URL}${END_POINT}&${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    // console.log(`${BASE_URL}${END_POINT}?${params}`);
    return resp.json();
  });
}
