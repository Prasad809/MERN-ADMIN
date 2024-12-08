import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NoteHtml5 from './html5notes';


function Html() {
    return (
        <Container>
            <header>
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">The Information About the HTML5</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                     <a to={'noteshtml'}><a className="nav-link active" aria-current="page" >HTML5</a></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Syntex / Coding</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header> 
            <address>
                <NoteHtml5/>
            </address>
        </Container>
    )
}
export default Html;