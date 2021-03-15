import { FETCH_USERS_SUCCESS } from '../types'
import { combineReducers } from 'redux'



const initUsers = () => {
	const all = (state = [], action) => {
		switch(action.type) {
			case FETCH_USERS_SUCCESS:
				return action.users
			default:
				return state
		}
	
	}

	return combineReducers({all})
}

const users = initUsers()

export default users