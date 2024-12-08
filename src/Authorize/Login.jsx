import axios from 'axios';
import { useFormik } from 'formik'
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import Swal from "sweetalert2";
import {logos} from '../../images.json'

function LogIn() {
    const navigate=useNavigate()
    let validationSchema = yup.object().shape({
        email: yup.string().required('Email Required')
            .email('InValid Email'),
        password: yup.string().required('Password Required')
            .min(5, 'Password Must Contains 5 Charecters')
            .max(10, 'Password contains Exccess Charecters'),
        // isAdmin:yup.bool().oneOf([true], 'Admin Comfirmation'),
    })
    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            isAdmin: true
        },
        validationSchema,
        onSubmit: (data) => {
            Swal.fire({
                title: "Are you sure?",
                text: "Do You Want to sing into Admin Portal ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes..!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "successfully!",
                    text: "Welcome to Admin!",
                    icon: "success"
                  });
                  axios.post('http://localhost:9999/login', data)
                  .then(res => {
                    if (res.data.login === true) {
                        navigate('/home')
                    } else {
                        Swal.fire({
                            title: "Not Admin!",
                            text: "Enter Wrong Password!",
                            icon: "error"
                          });
                      }
                  }).catch(err =>{
                    Swal.fire({
                        title: "No Recard!",
                        text: "No Recard Founded!",
                        icon: "error"
                      });
                    console.log(err)
                })
                }else{
                    console.log("Not Actived");
                }
              });
        }   
    })
    return (
        <Container>
            <div className="row" id='bgm'>
                <marquee><h4>This Page belongs to Admin navigate the Admin Portal</h4></marquee>
                <div className="col-2"></div>
                <div className="col-4" id='card1'></div>
                <div className="col-4" id='card2'>
                <h1 id='heading'>ADMIN LOGIN</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Admin Email</label>
                            <input type="email" name="email"
                                className={'form-control' + (formik.errors.email && formik.touched.email ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                            <div className="invalid-feedback">
                                {formik.errors.email && formik.touched.email ? formik.errors.email : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input type="text" name="password"
                                className={'form-control' + (formik.errors.password && formik.touched.password ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                value={formik.values.password} />
                            <div className="invalid-feedback">
                                {formik.errors.password && formik.touched.password ? formik.errors.password : null}
                            </div>
                        </div>
                        <div className="form-group form-check" id='checkbox'>
                            <input name="isAdmin" type="checkbox" className={'form-check-input'} value={true} disabled={true} />
                            <label htmlFor="isAdmin" className="form-check-label">isAdmin</label>
                        </div>
                        <h6></h6>
                        <br />
                        <div className="button-group">
                            <button type='submit' className='btn btn-primary'>Submit</button>
                            <button onClick={formik.handleReset} className='btn btn-danger'>reset</button>
                        </div>
                    </form>
                </div>
                <div className="col-2">
                <Link to={'/'}><img src={logos[1].url} alt="ADMIN" id='in'/></Link>
                </div>
            </div>
        </Container>
    )
}
export default LogIn;