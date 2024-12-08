import axios from "axios";
import { useFormik } from "formik";
import {  useState } from "react";
import * as yup from 'yup'
import {logos} from '../../images.json'
import { Link } from "react-router-dom";

function Search() {
    const [user, setUser] = useState({})
    const validationSchema = yup.object().shape({
        phone: yup.string().required('Enter Valid phone Number')
    })
    const formik = useFormik({
        initialValues: {
            phone: ''
        },
        validationSchema,
        onSubmit: (data) => {
            axios.get(`http://localhost:9999/search?phone=${data.phone}`)
                .then(res => setUser(res.data))
                .catch(err => console.log(err))
            document.getElementById('remove').removeAttribute('style')
        }
    })
        return (
        <div>
            <div className="row" id="bgm">
            <marquee><h4>This Page belongs to Who forget their password</h4></marquee>
                <div className="col-4"></div>
                <div className="col-4">
                    <h5>Enter Phone Number</h5>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" name="phone"
                                className={'form-control' + (formik.errors.phone && formik.touched.phone ? ' is-invalid' : ' ')}
                                value={formik.values.phone}
                                placeholder="Enter phone number"
                                onChange={formik.handleChange} />
                            <div className="invalid-feedback">
                                {formik.errors.phone && formik.touched.phone ? formik.errors.phone : null}
                            </div>

                        </div>
                        <div>
                       {user ? <p style={{'display':'none'}} id="remove">Password which is connected to this number is : <strong>{user.password}</strong></p>:<p style={{'color':'red'}}>There is No Recard to this Number</p>}
                    </div>
                        <br />
                        <div>
                            <button className="btn btn-primary" type="submit">submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-4">
                <Link to={'/'}><img src={logos[1].url} alt="ADMIN" id='in'/></Link>
                </div>
            </div>
        </div>
    )
}
export default Search;