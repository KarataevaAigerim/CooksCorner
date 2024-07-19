// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const RecipeDetail = () => {
//   const { id } = useParams();
//   const recipe = useSelector((state) =>
//     state.recipes.recipes.find((r) => r.id === id)
//   );

//   if (!recipe) return <div>Recipe not found</div>;

//   return (
//     <div>
//       <h1>{recipe.name}</h1>
//       <img src={recipe.image} alt={recipe.name} />
//       <p>{recipe.description}</p>
//       <p>Author: {recipe.author}</p>
//       <p>Ingredients: {recipe.ingredients.join(', ')}</p>
//     </div>
//   );
// };

// export default RecipeDetail;