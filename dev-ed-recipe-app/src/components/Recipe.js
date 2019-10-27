import React from 'react';
import style from '../styles/recipe.module.css';

const Recipe = ({ title, calories, image, dietLabels, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<p>{dietLabels}</p>
			<p>{calories}</p>
			<img src={image} alt='image of recipe' />
			<ul>
				{ingredients.map(ingredient => (
					<li>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
};

export default Recipe;
