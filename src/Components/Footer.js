import party from "../assets/party.png"

function Footer(props){

        function refreshPage() {
            window.location.reload(false);
          }


    if ( props.completed === 0){
        return(
            <div className="footer">
                <p> {props.completed} / {props.number} CONCLUÍDOS</p>
            </div>
        )
    }

    if ( props.completed !== props.number && props.completed < 4){
        return(
            <div className="footer">
                <p> {props.completed} / {props.number} </p>
                {/* <div className="icons">  {imgIcon.map((icon) => props.icon)} </div>*/}

            </div>
        )
    }

    if(props.completed === 4){
        return(
            <div className="footer">
                <div className="parabens">
                    <img src={party} alt="parabéns" />
                    <p>Parabéns!</p>
                </div>
                <p>Você não esqueceu de nenhum flashcard!</p>
                <p>{props.completed} / {props.number}</p>
                <button onClick={refreshPage}>Reiniciar</button>
            </div>
        )
    }

}

export default Footer;