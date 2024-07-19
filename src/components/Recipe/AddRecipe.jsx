// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addRecipe } from '../../redux/slices/recipeSlice';

// const AddRecipe = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       description: '',
//       ingredients: ''
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Required'),
//       description: Yup.string().required('Required'),
//       ingredients: Yup.string().required('Required')
//     }),
//     onSubmit: (values) => {
//       const newRecipe = {
//         id: new Date().toISOString(),
//         name: values.name,
//         description: values.description,
//         ingredients: values.ingredients.split(','),
//         author: 'Current User', // Replace with actual user data
//       };
//       dispatch(addRecipe(newRecipe));
//       navigate('/home');
//     }
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         id="name"
//         name="name"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.name}
//       />
//       {formik.errors.name ? <div>{formik.errors.name}</div> : null}
//       <label htmlFor="description">Description</label>
//       <input
//         id="description"
//         name="description"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.description}
//       />
//       {formik.errors.description ? <div>{formik.errors.description}</div> : null}
//       <label htmlFor="ingredients">Ingredients (comma separated)</label>
//       <input
//         id="ingredients"
//         name="ingredients"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.ingredients}
//       />
//       {formik.errors.ingredients ? <div>{formik.errors.ingredients}</div> : null}
//       <button type="submit">Add Recipe</button>
//     </form>
//   );
// };

// export default AddRecipe;