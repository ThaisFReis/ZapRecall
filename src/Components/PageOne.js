import {Link} from "react-router-dom"

import logo from "../assets/logo.png"

function PageOne(){
    return(
        <div className="PageOne">
            <img className="logo" src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <Link to="./PageTwo">
                <button> <p>Entre</p> </button>
            </Link>
        </div>
    )
}

export default PageOne;