import { FETCH_USER_SUCCESS, REQUEST_USER } from '../types'
import { combineReducers } from 'redux'


const initSelectedPost = () => {

	const item = (state = {}, action) => {

		switch(action.type) {
			case FETCH_USER_SUCCESS:
				return action.user
			default:
				return state	
			}
		}

		const isFetching = (state = false, action) => {
			switch(action.type) {
				case REQUEST_USER: 
					return true
				case FETCH_USER_SUCCESS:
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

const selectedUser = initSelectedUser()

export default selectedUser