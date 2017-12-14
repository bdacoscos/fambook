import tokenService from './tokenService';
import userService from './../utils/userService';

const BASE_URL = '/api/posts/';

// grab all posts for family and index
function index() {
  return fetch(BASE_URL, getAuthRequestOptions('GET'))
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad credentials');
    })
    .then(creds => creds);
}

/*----- Helper Functions -----*/

function createNewPost(post) {
  console.log(post);
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({...post, ...userService.getUser() })
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