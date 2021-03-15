import { 
    FETCH_POSTS_SUCCESS, 
    // FETCH_POST_SUCCESS,
    // REQUEST_POST,
    // SET_AUTH_USER,
    RESET_AUTH_STATE,
    } from '../types'
  
  import * as api from './api'
  


  export const fetchPosts = () => dispatch => 
    api
      .displayPosts()
      .then(posts => dispatch(
        {
          type: FETCH_POSTS_SUCCESS,
          posts
        }
      )
    )
  
//   export const fetchUserPosts = userId => dispatch =>
//     api.fetchUserPosts(userId).then(posts => 
//       dispatch({type: FETCH_USER_POSTS_SUCCESS, posts}))
  
//   export const fetchPostById = postId => (dispatch, getState) => {
  
//     const lastPost = getState().selectedPost.item
//     if (lastPost.id === postId) { return Promise.resolve() }
//     dispatch({type: FETCH_POST_SUCCESS, post: {}})
//     dispatch({type: REQUEST_POST, post: {}})
//     return api
//       .fetchPostById(postId)
//       .then(post => dispatch(
//         {
//           type: FETCH_POST_SUCCESS,
//           post
//         }
//       )
//     )
//   }
  
  
  
  export const createPost = (newPost, userId) => {
    newPost.prediction = parseInt(newPost.prediction, 0)
    newPost.user = userId
  
    return api
      .addPost(newPost)
      .then(postId => {
        return postId
      })
  }
  
  
//   export const register = registerFormData => api.register({...registerFormData})
//   export const login = loginFormData => api.login({...loginFormData})
  
//   export const logout = () => dispatch => 
//     api.logout()
//     .then(_ => dispatch({user: null, type: SET_AUTH_USER}))
  
//   export const onAuthStateChanged = (onAuthCallback) => api.onAuthStateChanged(onAuthCallback)
  
//   export const storeAuthUser = authUser => dispatch => {
  
//     if (authUser) {
  
//       return api
//         .getUserProfile(authUser.uid)
//         .then(userWithProfile => dispatch({user: userWithProfile, type: SET_AUTH_USER}))
//     } else {
//         return dispatch({user: null, type: SET_AUTH_USER})
//     }
//   }
  
  
  export const resetAuthState = () => ({type: RESET_AUTH_STATE})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  