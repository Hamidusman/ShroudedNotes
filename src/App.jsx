import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/register';
import Home from './pages/landing'
import Login from './pages/login';
import Text from './pages/form';

function App() {

	return (
		
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/register" element={<Register />} />
		<Route path="/login" element={<Login />} />
		<Route path="/message" element={<Text />} />
	  </Routes>
	)
}

export default App
