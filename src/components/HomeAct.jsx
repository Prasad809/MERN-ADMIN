import { Container } from "react-bootstrap";
import { images } from "../../images.json"
import { Link } from "react-router-dom";
import { UserContext } from './../globel/UserContext'


function HomeActive() {
    return (
        <Container>
            <marquee><h1 id="heading">The Information about the Below Technologies.........</h1></marquee>
            <UserContext/>
            <div className="row">
                {images.map((logo) =>
                    <div className="col-4" key={logo.id}>
                        <div className="card">
                            <img src={logo.url} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{logo.title}</h5>
                                <p className="card-text">{logo.text}</p>
                                <Link to={`${logo.path}`} className="btn btn-primary">More Info...</Link>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </Container>
    )
}
export default HomeActive;