import { useRef } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Quiz = ({ quiz, onClick, questionNumber }) => {
    const correctAnswerRef = useRef();

    const handleClick = async (e) => {
        const reponse = e.target.textContent === quiz.correctAnswer;
        if (reponse) {
            e.target.style.backgroundColor = "#77C66E";
        } else {
            correctAnswerRef.current.style.backgroundColor = "#77C66E";
            e.target.style.backgroundColor = "#F4444E";
        }
        document.body.style.pointerEvents = "none";
        await new Promise((res) => {
            setTimeout(res, 1500);
        });
        document.body.style.pointerEvents = "auto";

        onClick(reponse);
    };

    const renderedAnswers = quiz.incorrectAnswers.map((answer) => {
        return (
            <div key={answer} onClick={handleClick} className="answer">
                {answer}
            </div>
        );
    });

    renderedAnswers.push(
        <div
            ref={correctAnswerRef}
            key={quiz.correctAnswer}
            onClick={handleClick}
            className={`answer `}
        >
            {quiz.correctAnswer}
        </div>
    );

    function shuffleX(array) {
        let currentIndex = array.length,
            randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    }
    shuffleX(renderedAnswers);

    // stars level
    const level = (
        <>
            {quiz.difficulty === "easy" && (
                <>
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </>
            )}
            {quiz.difficulty === "medium" && (
                <>
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </>
            )}
            {quiz.difficulty === "hard" && (
                <>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </>
            )}
        </>
    );

    return (
        <>
            <div className="question-part">
                <div>
                    {questionNumber}/10 {level}
                </div>
                <div className="question">{quiz.question.text}</div>
            </div>

            <div className={`answers`}>{renderedAnswers}</div>
        </>
    );
};

export default Quiz;
