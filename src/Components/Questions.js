import React, {useState} from "react";

import seta from "../assets/seta.png"
import  virar from "../assets/setinha.png"

function Questions(props){
    const [card, setCard] = useState("none")
    const [icon, setIcon] = useState("")

    function Red(){
        setIcon("red")
        icon("red")
        props.callback(props.completed + 1)
    }

    function Red(){
        setIcon("yellow")
        icon("yellow")
    }

    function Green(){
        setIcon("green")
    }


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
                        <button className="red" onClick={Red}>
                            <p>Não lembrei</p>
                        </button>
                        <button className="yellow" onClick={()=>{
                            props.callback(props.completed + 1)
                            setIcon("yellow")}}>
                            <p>Quase não lembrei</p>
                        </button>
                        <button className="green" onClick={()=>{
                            props.callback(props.completed + 1)
                            setIcon("green")}}>
                            <p>Zap!</p>
                        </button>
                    </div>
                </div>
            </>
        )
    }

}

export default Questions;