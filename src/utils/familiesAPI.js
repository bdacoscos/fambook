import tokenService from './tokenService';

const BASE_URL = '/api/families/';

function index() {
  return fetch(BASE_URL, getAuthRequestOptions('GET'))
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad credentials');
    })
    .then(creds => creds);
}

/*----- Helper Functions -----*/

function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({ 'Authorization': 'Bearer ' + tokenService.getToken() })
  };
}

export default {
  index
};