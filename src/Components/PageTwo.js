import React, {useState} from "react"

import logo from "../assets/logo.png"

import Questions from "./Questions";
import Footer from "./Footer";

const questions = [
    {
        id: "1",
        number: "Pergunta 1",
        question: "O que é JSX?",
        anwser:"Uma extensão de linguagem do JavaScript."
        
    },

    {
        id: "2",
        number: "Pergunta 2",
        question: "O React é?",
        anwser:"uma biblioteca JavaScript para construção de interfaces"
    },

    {
        id: "3",
        number: "Pergunta 3",
        question: "Componentes devem iniciar com?",
        anwser:"letra maiúscula"
    },

    {
        id: "4",
        number: "Pergunta 4",
        question: "Podemos colocar __ dentro do JSX",
        anwser:"expressões"
    }
]


function PageTwo(){
    const [completed, setCompleted] = useState(0)
    return(
        <div className="PageTwo">
            <div className="header">
                <img className="logo" src={logo} alt="logo"/>
                <h1>ZapRecall</h1>
            </div>

            <div className="deck">
                <div className="cards">
                    {questions.map((questions, index) => (
                        <Questions index={index + 1}number={questions.number} question={questions.question} anwser={questions.anwser} key={questions.id} completed={completed} callback={setCompleted}/>
                    ))}
                </div>
            </div>

            <Footer completed={completed} number={"4"} />

        </div>
    )
}

export default PageTwo;