import { useState } from "react";

import Quiz from "./Quiz";
import { useFetchQuizQuery } from "../store";

const alreadyDisplay = [];
function QuizPage() {
    const { data, isFetching, error, refetch } = useFetchQuizQuery();

    const [answers, setAnswers] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(1);

    const handleResetGame = () => {
        setAnswers(0);
        setQuestionNumber(1);
        alreadyDisplay.splice(0, 999);
        refetch();
    };

    const handleClick = async (reponse) => {
        if (reponse) {
            setAnswers((answers) => answers + 1);
        }

        setQuestionNumber(questionNumber + 1);
    };

    let content;

    if (!isFetching) {
        console.log(data);
        const results = data;

        let randomItem;
        if (alreadyDisplay.length < 10) {
            while (true) {
                randomItem =
                    results[Math.floor(Math.random() * results.length)];

                if (!alreadyDisplay.includes(randomItem)) {
                    alreadyDisplay.push(randomItem);
                    break;
                }
            }

            content = (
                <Quiz
                    onClick={handleClick}
                    questionNumber={questionNumber}
                    quiz={randomItem}
                />
            );
        } else {
            content = (
                <>
                    <div className="result">
                        <div>
                            You have answered <b> {answers}</b> questions{" "}
                        </div>

                        <button className="btn" onClick={handleResetGame}>
                            play again
                        </button>
                    </div>
                </>
            );
        }
    } else {
        return <div className="loader"></div>;
    }

    return (
        <div className="App">
            <div className="inner">{content}</div>
        </div>
    );
}

export default QuizPage;
