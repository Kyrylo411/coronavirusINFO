import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import {rootReducer} from '../redux/reducers/rootReducer'
import Header from '../components/layout/header/Header';
import userEvent from '@testing-library/user-event';


const renderWithRedux = (component, {initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk))}={}) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	}
}


describe('Testing <Header /> component', () => {
	it('testing input', () => {
		const {getByPlaceholderText} = renderWithRedux(<Header />)
		expect(getByPlaceholderText(/search/i)).toBeInTheDocument()
	})

	it('testing input handleChange', () => {
		const{getByRole} = renderWithRedux(<Header />)
		const input = getByRole('textbox')
		expect(input.value).toBeFalsy()
		userEvent.type(input, 'Afganistan')
		expect(input.value).toBe('Afganistan')
	})
})



