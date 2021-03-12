import { FETCH_POST_SUCCESS, REQUEST_POST } from '../types'
import { combineReducers } from 'redux'


const initSelectedPost = () => {

	const item = (state = {}, action) => {

		switch(action.type) {
			case FETCH_POST_SUCCESS:
				return action.post
			default:
				return state	
			}
		}

		const isFetching = (state = false, action) => {
			switch(action.type) {
				case REQUEST_POST: 
					return true
				case FETCH_POST_SUCCESS:
					return false
				default:
					return state
			}
		}

		return combineReducers({
			item,
			isFetching
	})
}

const selectedPost = initSelectedPost()

export default selectedPost