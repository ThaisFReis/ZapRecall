import React, {useState} from "react";

import seta from "../assets/seta.png"
import  virar from "../assets/setinha.png"

function Questions(props){
    const [card, setCard] = useState("none")
    const [icon, setIcon] = useState("")

    if (card === "none"){
        return(
               <div className="start">
                    <p>{props.number}</p>
                    <img src={seta} alt="seta" onClick={()=> setCard("show")}/>
                </div>
        )
    }

    if (card === "show"){
        return(
                <div className="question">
                    <p>{props.question}</p>
                    <img src={virar} alt="seta" onClick={()=> setCard("answer")}/>
                </div>
        )
    }

    if (card === "answer"){
        return(
            <>
                <div className="answer">
                    <p>{props.anwser}</p>
                    <div className="btn-answers">
                        <button className="red" onClick={()=> {
                        props.callback(props.completed + 1)
                        setCard("answered")
                        setIcon("red")}}>
                            <p>Não lembrei</p>
                        </button>
                        <button className="yellow" onClick={()=>{
                            props.callback(props.completed + 1)
                            setCard("answered")
                            setIcon("yellow")}}>
                            <p>Quase não lembrei</p>
                        </button>
                        <button className="green" onClick={()=>{
                            props.callback(props.completed + 1)
                            setCard("answered")
                            setIcon("green")}}>
                            <p>Zap!</p>
                        </button>
                    </div>
                </div>
            </>
        )
        
    }

    if (card === "answered" && icon === "red"){
        return(
            <div className="start red">
                <p>{props.number}</p>
            </div>
        )

    }

    if (card === "answered" && icon === "yellow"){
        return(
            <div className="start yellow">
                <p>{props.number}</p>
            </div>
        )

    }

    if (card === "answered" && icon === "green"){
        return(
            <div className="start green">
                <p>{props.number}</p>
            </div>
        )

    }

}

export default Questions;