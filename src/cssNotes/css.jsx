import { Container } from "react-bootstrap";
import { css3 } from "./notes";
import { useState } from "react";
import {logos,images} from '../../images.json'
import { Link } from "react-router-dom";
function Css3(){
    const [seleted, setSelected] = useState(null)
    const handleSelect = (getId) => {
        setSelected(getId === seleted ? null : getId)
    }
    return(
        <Container id="bgm">
            <h1 id="heading">CSS Means CASTCADE STYLESHEET</h1>
            <Link to={'/homeAct'}><img src={logos[3].url} id="in"/></Link>
            <div className="row">
                    <div className="col-4">
                        <img src={`${images[1].url}`} style={{'width':'300px','height':'300px'}}/>
                    </div>
                    <div className="col-8">
                    {css3.map((css) =>
                        <div key={css.id} onClick={() => handleSelect(css.id)} id='question'>
                            <h6>{css.id} ) {css.question} <span>@</span> </h6>
                            <div>
                                {seleted === css.id ?
                                <div id='Answer'><strong>Answer : </strong>{css.Answer}</div> : null}
                            </div>
                        </div>)}
                    </div>
                    {/* <div className="col-4"></div> */}
                </div>
                <div>
                </div>

        </Container>
    )
}
export default Css3;