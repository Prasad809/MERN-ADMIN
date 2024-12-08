import { useState } from "react";
import { Container } from "react-bootstrap";
import { jsEs5 } from "./notes";
function JsEs5() {
    const [seleted, setSelected] = useState(null)
    const handleSelect = (getId) => {
        setSelected(getId === seleted ? null : getId)
    }

    return (
        <Container id="bgm">
            <h1 id="heading">Java Scrpit </h1>
            <div className="row">
                        {jsEs5.map((js5) =>
                            <div key={js5.id} onClick={() => handleSelect(js5.id)} id='question'className="col-4">
                                <h6>{js5.id} ) {js5.question} <span>+</span> </h6>
                                <div>
                                    {seleted === js5.id ?
                                        <div id='Answer'><strong>Answer : </strong>{js5.Answer}</div> : null}
                                </div>
                            </div>)}
                    </div>
        </Container>
    )
}

export default JsEs5