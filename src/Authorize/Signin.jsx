import { Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import { logos } from '../../images.json'

function SignIn() {

    const validationSchema = yup.object().shape({
        //Basic Details
        name: yup.string().required("Name Required")
            .min(5, "Name Must Contains Minimun 5 Charecters")
            .max(20, "Name contains Exccess Charecters"),
        email: yup.string().required('Email Required')
            .email('InValid Email'),
        dob: yup.string().nullable().required('Date of Birth Required')
            .test('age', "Age must be 18+", (value) => {
                const today = new Date();
                const dob = new Date(value)
                const dobYear = today.getFullYear() - dob.getFullYear();
                return dobYear >= 18;
            }),
        gender: yup.string().required("Select the gender"),
        //Eduction Details
        university: yup.string().required("Required your University Name"),
        // passyear:yup.string().required("Required PassOut Year"),
        qualify: yup.string().required("Required your Qualification Details"),
        //Other Details
        phone: yup.string().required("Phone number Required")
            .min(10, "Phone number Must be 10 Numbers")
            .max(10,"Phone Number Not exccess the 10 Numbers"),
        password: yup.string().required("Password Required"),
        confirmPassword: yup.string().required("Confirm Your Password")
            .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
        isAdmin: yup.bool(),
        isActive: yup.bool()
    })
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            dob: '',
            gender: '',
            university: '',
            passyear: '',
            percentage: '',
            qualify: '',
            phone: '',
            password: '',
            confirmPassword: '',
            isAdmin: false,
            isActive: false,
        },
        validationSchema,
        onSubmit: (data) => {
            axios.post('http://localhost:9999/signin/', data)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
            document.getElementsByClassName('hide')[0].removeAttribute("style")
        }
    })
    return (
        <Container id='bgm' style={{ paddingBottom: "100px" }}>
            <marquee><h4>This Page belongs to Registration</h4></marquee>
            <h1 id='heading' className='hide' style={{ "display": 'none' }}>Registration completed Successfully......!</h1>
            <h1 id='heading'>REGISTRATION FORM</h1>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-6"></div>
                <div className="col-2">
                    <span><Link to={'/'}><img src={logos[1].url} id='in' /></Link></span>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="row" >
                    <div className="col-4">
                        <h5>Basic Details</h5>
                        <div className="form-group">
                            <label htmlFor="Name">Fullname</label>
                            <input type="text" name="name"
                                className={'form-control' + (formik.errors.name && formik.touched.name ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                placeholder='Please Enter FullName' />
                            <div className="invalid-feedback">
                                {formik.errors.name && formik.touched.name ? formik.errors.name : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">UserEmail</label>
                            <input type="email" name="email"
                                className={'form-control' + (formik.errors.email && formik.touched.email ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder='Please Enter Email' />
                            <div className="invalid-feedback">
                                {formik.errors.email && formik.touched.email ? formik.errors.email : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" name="dob"
                                className={'form-control' + (formik.errors.dob && formik.touched.dob ? ' is-invalid' : ' ')}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.dob} />
                            <div className="invalid-feedback">
                                {formik.errors.dob && formik.touched.dob ? formik.errors.dob : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Gender">Gender</label>
                            <input type="text" name="gender"
                                className={'form-control' + (formik.errors.gender && formik.touched.gender ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                value={formik.values.gender} />
                            <div className="invalid-feedback">
                                {formik.errors.gender && formik.touched.gender ? formik.errors.gender : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Educational Details</h5>
                        <div className="form-group">
                            <label htmlFor="university">University Name</label>
                            <input type="text" name="university"
                                className={'form-control' + (formik.errors.university && formik.touched.university ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.university} />
                            <div className="invalid-feedback">
                                {formik.errors.university && formik.touched.university ? formik.errors.university : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passyear">PassedOut Year</label>
                            <input type="number" name="passyear"
                                className={'form-control' + (formik.errors.passyear && formik.touched.passyear ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                placeholder='Please Enter PassedOut Year'
                                onBlur={formik.handleBlur}
                                value={formik.values.passyear} />
                            <div className="invalid-feedback">
                                {formik.errors.passyear && formik.touched.passyear ? formik.errors.passyear : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Name">Percentage</label>
                            <input type="number" name="percentage"
                                className={'form-control' + (formik.errors.percentage && formik.touched.percentage ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                // placeholder='Please Enter the Percenatge'
                                value={formik.values.percentage} />
                            <div className="invalid-feedback">
                                {formik.errors.percentage && formik.touched.percentage ? formik.errors.percentage : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="qualify">Enter Your Qualification Details</label>
                            <input type="text" name="qualify"
                                className={'form-control' + (formik.errors.qualify && formik.touched.qualify ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                value={formik.values.qualify}
                                onBlur={formik.handleBlur}
                            // placeholder='Please Enter your Graduation'
                            />
                            <div className="invalid-feedback">
                                {formik.errors.qualify && formik.touched.qualify ? formik.errors.qualify : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Other Details</h5>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone Number</label>
                            <input type="number" name="phone"
                                className={'form-control' + (formik.errors.phone && formik.touched.phone ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                placeholder='Please Enter the Phone number' />
                            <div className="invalid-feedback">
                                {formik.errors.phone && formik.touched.phone ? formik.errors.phone : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">UserEmail</label>
                            <input type="email" name="email"
                                className={'form-control' + (formik.errors.email && formik.touched.email ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder='Please Enter Email' />
                            <div className="invalid-feedback">
                                {formik.errors.email && formik.touched.email ? formik.errors.email : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"> Password </label>
                            <input
                                name="password"
                                type="password"
                                className={
                                    'form-control' +
                                    (formik.errors.password && formik.touched.password ? ' is-invalid' : '')}
                                placeholder='Please Enter password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />
                            <div className="invalid-feedback">
                                {formik.errors.password && formik.touched.password
                                    ? formik.errors.password
                                    : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm Password </label>
                            <input
                                name="confirmPassword"
                                type="password"
                                className={
                                    'form-control' +
                                    (formik.errors.confirmPassword &&
                                        formik.touched.confirmPassword
                                        ? ' is-invalid'
                                        : '')
                                }
                                placeholder='Please Enter the Confirmation Password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            <div className="invalid-feedback">
                                {formik.errors.confirmPassword && formik.touched.confirmPassword
                                    ? formik.errors.confirmPassword
                                    : null}
                            </div>
                        </div>
                        <div className="form-group form-check" id='checkbox'>
                            <input name="isAdmin" type="checkbox" className={'form-check-input'} value={false} disabled={true} />
                            <label htmlFor="isAdmin" className="form-check-label">isAdmin</label>
                        </div>
                        <div className="form-group form-check" id='checkbox'>
                            <input name="isActive" type="checkbox" className={'form-check-input'} value={false} disabled={true} />
                            <label htmlFor="isActive" className="form-check-label">isActive</label>
                        </div>
                    </div><br />
                    <div className="button-group" id='heading'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        <button onClick={()=>{
                            formik.handleReset
                            window.location.reload()
                        }} className='btn btn-danger'>reset</button>
                    </div>
                </div>
            </form>
        </Container>
    )
}
export default SignIn;