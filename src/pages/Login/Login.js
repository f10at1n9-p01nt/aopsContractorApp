import { Formik, Field, Form } from 'formik';
// import './login.scss';
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
            <div>
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
                <Form style={{width: '100%'}}>
                    <div>
                        <div className='column'>
                                <Field
                                    id='username'
                                    name='username'
                                    className='username'
                                    placeholder='username' />
                        </div>
                        <div className='column'>
                                <button type="submit">Enter Site</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;