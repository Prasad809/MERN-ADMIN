import axios from 'axios';
import { useFormik } from 'formik'
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import Swal from "sweetalert2";
import {logos} from '../../images.json'
import { useState } from 'react';

function LogInActive(){
    const navigate = useNavigate()
    const [user,setUser]=useState(null)
    let validationSchema = yup.object().shape({
        email: yup.string().required('Email Required')
            .email('InValid Email'),
        password: yup.string().required('Password Required')
            .min(5, 'Password Must Contains 5 Charecters')
            .max(10, 'Password contains Exccess Charecters'),
    })
    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            isActive: false
        },
        validationSchema,
        onSubmit: (data) => {
            Swal.fire({
                title: "Are you sure?",
                text: "Do You Want to SignIn ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes..!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "successfully!",
                    text: "Welcome to Home!",
                    icon: "success"
                  });
                  axios.post('http://localhost:9999/active', data)
                  .then(res => {
                      if (res.data.Active) {
                          navigate('/homeAct')
                      } else {
                        Swal.fire({
                            title: "Wrong Password/Not Active",
                            text: "Enter Wrong Password!/Not Select the Active CheckBox!",
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
              setUser(data)
        }
    })
    return (
        <Container>
            <div className="row " id='bgm'> 
            <marquee><h4>This Page belongs to Students who are Actived by Admin</h4></marquee>
                <div className="col-2"></div>
                <div className="col-4" id='card1'></div>
                <div className="col-4" id='card2'>
                    <h1 id='heading'>SIGNIN</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">UserEmail</label>
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
                            <input type="password" name="password"
                                className={'form-control' + (formik.errors.password && formik.touched.password ? ' is-invalid' : ' ')}
                                onChange={formik.handleChange}
                                value={formik.values.password} />
                            <div className="invalid-feedback">
                                {formik.errors.password && formik.touched.password ? formik.errors.password : null}
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <input name="isActive" type="checkbox"
                                className={'form-check-input' + (formik.errors.isActive && formik.touched.isActive ? ' is-invalid' : '')}
                                onChange={formik.handleChange} value={formik.values.isActive} />
                            <label htmlFor="isActive" className="form-check-label">Are you Active ?</label>
                            <div className="invalid-feedback">
                                {formik.errors.isActive && formik.touched.isActive ? formik.errors.isActive : null}
                            </div>
                        </div>
                        <br />
                        <div className="button-group">
                            <button type='submit' className='btn btn-primary'>Submit</button>
                            <button onClick={formik.handleReset} className='btn btn-danger'>reset</button>
                            <Link to={'/search'}><p id='space'>Forget Password ?</p></Link>
                            <span id='space'>Don't have an Account?
                            <Link to={'/signin'}>SignUp</Link>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="col-2">
                    <Link to={'/login'}><img src={logos[0].url} alt={logos[0].name} /></Link>
                </div>
            </div>
        </Container>
    )
}
export default LogInActive;