import React from 'react';

const Recipe = ({ title, calories, image, dietLabels, ingredients }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{dietLabels}</p>
			<p>{calories}</p>
			<img src={image} alt='image of recipe' />
			<ul>
				{ingredients.map(ingredient => (
					key={ingredient}
					<li>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
};

export default Recipe;
