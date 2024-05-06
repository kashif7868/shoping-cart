import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
const Login = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: '',
        gender: '',
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        gender: Yup.string().required('Gender is required'),
    });
    const onSubmit = (values) => {
        console.log(values);

        navigate('/');

    };
    return (
        <div className="login-container my-4">
            <h1>Login </h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field id="email" name="email" type="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <Field id="password" name="password" type="password" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <div className="form-group social-icons mx-2 my-2">
                            <Link className="link-fb" to="#"> <FaFacebook className="social-icon facebook my-2 mx-2" /><span>Facebook</span></Link>
                            <Link className="link-go" to="#"> <FaGoogle className="social-icon google my-2 mx-2" /><span>Google +</span></Link>
                        </div>
                        <button className="btn-submit" type="submit" disabled={isSubmitting}>Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login
