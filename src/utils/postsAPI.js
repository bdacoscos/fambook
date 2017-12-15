import tokenService from './tokenService';
import userService from './../utils/userService';

const BASE_URL = '/api/posts';

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

function createNewPost(post, user) {
  console.log("i'm in postsAPI ", post, user);
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