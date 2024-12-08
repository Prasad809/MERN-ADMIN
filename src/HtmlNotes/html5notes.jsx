import { useState } from "react"
import { html5 } from "./notes"
import {images} from '../../images.json'
import {logos} from '../../images.json'
import { Link } from "react-router-dom";


function NoteHtml5(){
    const [seleted, setSelected] = useState(null)
    const handleSelect = (getId) => {
        setSelected(getId === seleted ? null : getId)
    }
    return(
        <div>
            <h1>Html Notes</h1>
            {/* <h1>cjhdshjcdbscjhdsbcjhdsbshb</h1> */}
            <h1 id="heading">HTML means Hyper Text MarkUp Language.. </h1>
            <div>
            <aside>
                <div className="row" id="bgm">
                    <div className="col-4">
                    {/* <Link to={'/homeAct'}><img src={logos[3].url}/></Link> */}
                    <img src={images[0].url} style={{'width':'350px','height':'350px'}}/>
                    </div>
                    <div className="col-8">
                    {html5.map((html) =>
                        <div key={html.id} onClick={() => handleSelect(html.id)} id='question'>
                            <h6>{html.id} ) {html.question} <span>@</span> </h6>
                            <div>
                                {seleted === html.id ?
                                <div id='Answer'><strong>Answer : </strong>{html.Answer}</div> : null}
                            </div>
                        </div>)}
                    </div>
                    {/* <div className="col-4"></div> */}
                </div>
                <div>
                </div>
            </aside>
            </div>
        </div>
    )
}

export default NoteHtml5;