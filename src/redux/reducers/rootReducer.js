import { combineReducers } from 'redux'

import { mainPageReducer } from './mainPageReducer'
import { modalReducer } from './modalReducer'

export const rootReducer = combineReducers({
	mainPageReducer,
	modalReducer,
	
})