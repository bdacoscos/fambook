import tokenService from './tokenService';
import userService from './../utils/userService';

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

function createNewFamily(family) {
  return fetch(BASE_URL + 'newFamily', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(family)
  })
    .then(res => {
      if (res.ok) return res.json();
    });
}

function checkFamilyCode(code) {
  return fetch(BASE_URL + 'joinFamily', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ ...code, ...userService.getUser() })
  })
    .then(res => {
      if (res.ok) return res.json();
    });
}

function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({ 'Authorization': 'Bearer ' + tokenService.getToken() })
  };
}

export default {
  index,
  createNewFamily,
  checkFamilyCode
};