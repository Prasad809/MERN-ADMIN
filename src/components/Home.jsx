import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from './../globel/UserContext'

// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { logos } from '../../images.json'
function Home() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9999/getUsers')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const isActive = useRef(false)
    const handleActive = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Active this User!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Active User!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Actived!",
                    text: "Your user has been Actived.",
                    icon: "success"
                });
                axios.patch('http://localhost:9999/users/'+ id, { isActive: true })
                    .catch(err => console.log(err))
                window.location.reload()
            } else {
                console.log("Not Actived");
            }
        });
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                axios.delete('http://localhost:9999/delete/' + id)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
                window.location.reload()
            } else {
                console.log("Not deleted");
            }
        });
    }
    return (
        <Container>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"><h1 id="heading">An Admin Portal.....</h1></div>
                <div className="col-4"><Link to={'/'}><img src={logos[2].url} id="in" /></Link></div>
            </div>
            <div>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>Id of User</th>
                            <th>Name of the User</th>
                            <th>Date of Birth</th>
                            {/* <th>Admin</th> */}
                            <th>Email of User</th>
                            <th>Phone Number</th>
                            <th>password</th>
                            <th>Active Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                {/* <td>{user.isAdmin ? <p  id='active'/> : <p id="inActive"/>}</td> */}
                                <td>{user.dob}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.password}</td>
                                <td>{user.isActive ? <button className="btn btn-success" >Active</button> :
                                    <button className="btn btn-secondary" ref={isActive} onClick={() => handleActive(user._id)}>Active</button>}
                                    <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>delete</button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                {/* <div className="card">
                    <div className="card-header">Information About User</div>
                    <div className="card-body">
                        <h5 className="card-title">Name of the User</h5>
                        <p className="card-text">Date of Birth : 19091999</p>
                        <p className="card-text">Gender      : Male</p>
                        <p className="card-text">Passout year</p>
                        <p className="card-text">Qualification</p>
                        <p className="card-text">Name of University</p>
                        <p className="card-text">Percentage</p>
                        <p className="card-text">Phone</p>
                        <button className="btn btn-primary">Go somewhere</button>
                        <button className="btn btn-primary">Go somewhere</button>
                    </div>
                </div> */}
            </div>
        </Container>
    )
}
export default Home;