import { Formik, Field, Form } from 'formik';
import * as style from './login.scss';
// import Logo from '../images/AopS_Online_Logos_AOPS Online Cube.png';
import { authenticateUser } from '../../../schedule-app/main';

const Login = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        // authenticateUser(username);
        resetForm();
    }

    return (
        <div className='container'>
            <div className='row'>
                {/* <img src={Logo} alt="AoPS Online Logo" /> */}
                <img src="https://drive.google.com/uc?export=download&id=1FWBU6pBY7HQOgk-g0cUnepsRVtnf7fUQ" 
                    className='logo'></img>
            </div>
            <div className='row'>
                <h1>Instructor Scheduling</h1>
            </div>
            <Formik 
                initialValues={{username: ''}}
                onSubmit={handleSubmit}
            >
                <Form className='form'>
                    <div className='row'>
                        <div className='column col-field'>
                                <Field
                                    id='username'
                                    name='username'
                                    className='username'
                                    placeholder='username' />
                        </div>
                        <div className='column col-button'>
                                <button type="submit">Enter Site</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;