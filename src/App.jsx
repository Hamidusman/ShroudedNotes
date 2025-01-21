import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/register';
import Home from './pages/landing'

function App() {

	return (
		
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/register" element={<Register />} />
	  </Routes>
	)
}

export default App
