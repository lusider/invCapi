import { combineReducers } from 'redux'
import posts from '../reducers/posts'
import selectedPost from '../reducers/selectedPost'
import auth from './auth'


const postApp = combineReducers({
	posts,
	selectedPost,
	auth
})

export default postApp