import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import './style.css';


const SignUp = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        re_password: '',
        gender: '',
        dob: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        re_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        gender: Yup.string().required('Gender is required'),
        dob: Yup.date().required('Date of Birth is required')
    });

    const onSubmit = (values) => {
        console.log(values);

        navigate('/');

    };

    return (
        <div className="login-container my-4">
            <h1>Sign Up</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <Field id="name" name="name" type="text" />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="re_password">Confirm Password:</label>
                            <Field id="re_password" name="re_password" type="password" />
                            <ErrorMessage name="re_password" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth:</label>
                            <Field id="dob" name="dob" type="date" />
                            <ErrorMessage name="dob" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <Field as="select" id="gender" name="gender">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="error-message" />
                        </div>
                        <div className="form-group social-icons mx-2 my-2">
                            <Link className="link-fb" to="#"> <FaFacebook className="social-icon facebook my-2 mx-2" /><span>Facebook</span></Link>
                            <Link className="link-go" to="#"> <FaGoogle className="social-icon google my-2 mx-2" /><span>Google +</span></Link>
                        </div>
                        <button className="btn-submit" type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;
