import React, { useEffect, useState } from 'react';

const App = () => {
	const APP_ID = 'd7aadb1a';
	const APP_KEY = '47582c17449a2bb44748510905b12ca0';
	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log('Effect has run');
	});
	return (
		<div className='App'>
			<form className='search-form'>
				<input type='text' className='search-bar' />
				<button type='submit' className='search-button'>
					Submit
				</button>
			</form>
			<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
		</div>
	);
};

export default App;
