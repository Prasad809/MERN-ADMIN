import { useState } from "react";
import { Container } from "react-bootstrap";
import { jsEs6 } from "./notes";
function JsEs6() {
    const [seleted, setSelected] = useState(null)
    const handleSelect = (getId) => {
        setSelected(getId === seleted ? null : getId)
    }

    return (
        <Container id="bgm">
            <h1 id="heading">Java Scrpit ES6</h1>
            <div className="row">
                        {jsEs6.map((js6) =>
                            <div key={js6.id} onClick={() => handleSelect(js6.id)} id='question'className="col-4">
                                <h6>{js6.id} ) {js6.question} <span>+</span> </h6>
                                <div>
                                    {seleted === js6.id ?
                                        <div id='Answer'><strong>Answer : </strong>{js6.Answer}</div> : null}
                                </div>
                            </div>)}
                    </div>
        </Container>
    )
}

export default JsEs6;