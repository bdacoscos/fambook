import tokenService from './tokenService';

const BASE_URL = '/api/posts';

function index() {
  return fetch(BASE_URL, getAuthRequestOptions('GET'))
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad credentials');
    })
    .then(creds => creds);
}

/*----- Helper Functions -----*/

function createNewPost(post, user) {
  return fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      content: post,
      user: user
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
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
  createNewPost
};