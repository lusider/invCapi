import { FETCH_POST_SUCCESS, REQUEST_POST } from '../types'
import { combineReducers } from 'redux'


const initSelectedStock = () => {

	const item = (state = {}, action) => {

		switch(action.type) {
			case FETCH_STOCK_SUCCESS:
				return action.stock
			default:
				return state	
			}
		}

		const isFetching = (state = false, action) => {
			switch(action.type) {
				case REQUEST_STOCK: 
					return true
				case FETCH_STOCK_SUCCESS:
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

const selectedStock = initSelectedStock()

export default selectedStock