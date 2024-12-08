import { useState } from "react";
import { Container } from "react-bootstrap";
import { react } from "./notes";
function React() {
    const [seleted, setSelected] = useState(null)
    const handleSelect = (getId) => {
        setSelected(getId === seleted ? null : getId)
    }

    return (
        <Container id="bgm">
            <h1 id="heading">React Js </h1>
            <div className="row">
                        {react.map((react) =>
                            <div key={react.id} onClick={() => handleSelect(react.id)} id='question'className="col-4">
                                <h6>{react.id} ) {react.question} <span>+</span> </h6>
                                <div>
                                    {seleted === react.id ?
                                        <div id='Answer'><strong>Answer : </strong>{react.Answer}</div> : null}
                                </div>
                            </div>)}
                    </div>
        </Container>
    )
}

export default React