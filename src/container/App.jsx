import React from 'react'
import {
 BrowserRouter, Routes, Route, Navigate, 
} from 'react-router-dom'
import HomePage from '@components/HomePage'

const App = () => (
		<BrowserRouter>
			<Routes>
				<Route
					element={(
						<HomePage />
					)}
					path="/"
				/>
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</BrowserRouter>
	)

export default App
