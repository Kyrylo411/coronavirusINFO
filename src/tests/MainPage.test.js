import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import axios from 'axios';

import {baseUrl} from '../core/baseUrl'
import {rootReducer} from '../redux/reducers/rootReducer'
import  {MainPage}  from '../pages/index';

jest.mock('axios');

const data = {
	data: {
		Countries: [
				{
			 Country: "Afghanistan", TotalConfirmed: 89861
		},
		{
			Country: "Albania", TotalConfirmed: 132459
		},
		{
			Country: "Algeria", TotalConfirmed: 133388
		}
		]		
	}
}

const renderWithRedux = (component, {initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk))}={}) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	}
}
describe('Testing <MainPage /> component ', () => {
	it('fetching  tableData resolve', async () => {
		axios.get.mockImplementationOnce(() => Promise.resolve(data))
		const { findByText, findByRole } = renderWithRedux(<MainPage />)
		const table = await findByRole('table')
		expect(table).toBeInTheDocument()
		expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/summary`)
		expect(axios.get).toHaveBeenCalledTimes(1)
		const tableText = await findByText('Afghanistan')
		expect(tableText).toBeInTheDocument()
	})
	
	
	it('fetching tableData reject', async () => {
		const {findByText, queryByRole} = renderWithRedux(<MainPage />) 
		axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
		const message = await findByText(/sorry, something went wrong/i)
		expect(message).toBeInTheDocument()
		const table = queryByRole('table')
		expect(table).not.toBeInTheDocument()
	})
	
})