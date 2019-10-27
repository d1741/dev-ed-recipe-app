import React, { useEffect, useState } from 'react';

const App = () => {
	const APP_ID = 'd7aadb1a';
	const APP_KEY = '47582c17449a2bb44748510905b12ca0';

	const [recipes, setRecipes] = useState([]);
	useEffect(
		async () => {
			// whenever something renders the first time, or rerenders, useEffect will run
			getRecipes();
		},
		[] /* only runs when counter changes if you add counter to [] */
	);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		console.log(data.hits);
	};
	return (
		<div className='App'>
			<form className='search-form'>
				<input type='text' className='search-bar' />
				<button type='submit' className='search-button'>
					Search
				</button>
			</form>
			{/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
		</div>
	);
};

export default App;
