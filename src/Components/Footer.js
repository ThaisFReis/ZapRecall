import yellow from "../assets/duvida.png"
import red from "../assets/naosabe.png"
import green from "../assets/respondido.png"


function Footer(props){
    const {icon, completed, number} = props

    function imgIcon (iconImg){
        if (icon === "red"){
            return(
                <img src={red} alt="não sei" />
            )
        }

        if (iconImg === "yellow"){
            return(
                <img src={yellow} alt="não lembrei" />
            )
        }

        if (iconImg === "green"){
            return(
                <img src={green} alt="zap" />
            )
        }
    }

    if ( completed === 0){
        return(
            <div className="footer">
                <p> {completed} / {number} </p>
                <p>nada</p>
            </div>
        )
    }

    if ( completed !== number && completed < 4){
        return(
            <div className="footer">
                <p> {completed} / {number} </p>
                <div className="icons">  {icon.map(iconImg => imgIcon(iconImg))}
                </div>
            </div>
        )
    }

    else{
        return(

                        <div className="footer">
                        <p>Completou</p>
                        <p> 4 / 4</p> 
                    </div>
        )
    }

}

export default Footer;