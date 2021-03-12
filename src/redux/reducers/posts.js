import { FETCH_POSTS_SUCCESS } from '../types'
import { combineReducers } from 'redux'



const initPosts = () => {
	const all = (state = [], action) => {
		switch(action.type) {
			case FETCH_POSTS_SUCCESS:
				return action.posts
			default:
				return state
		}
	
	}

	return combineReducers({all})
}

const posts = initPosts()

export default posts