import { useState } from "react";
import QuizPage from "./components/QuizPage";

import { useFetchQuizQuery } from "./store";
import RangePage from "./components/RangePage";

function App() {
    let renderItem;

    renderItem = <QuizPage />;

    return <>{renderItem}</>;
}

export default App;
