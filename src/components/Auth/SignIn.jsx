import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      const result = await dispatch(loginUser(values));
      if (loginUser.fulfilled.match(result)) {
        console.log('Login successful, navigating to home');
        navigate('/home');
      } else {
        console.log('Login failed:', result);
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.sectionA}>
        <h1>Welcome back To <strong>Cooks Corner</strong></h1>
      </div>
      <div className={styles.sectionB}> 
         <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        {error && <div>{error}</div>}
        <button type="submit" disabled={loading}>Sign In</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>

      </div>
      
     
    </div>
  );
};

export default SignIn;
