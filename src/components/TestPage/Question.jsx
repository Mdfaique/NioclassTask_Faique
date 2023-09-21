import { useContext, useEffect } from "react";
import { TestContext } from "../../context/TestContext";
import { MathJax } from "better-react-mathjax";

const Question = ({ currentQuestion }) => {
  const { data, dispatch } = useContext(TestContext);
  const questionPart = data?.questionData[currentQuestion]?.Question.split("$");
  console.log(questionPart[1])

  useEffect(() => {
    let startTime = Date.now()
    return () => {
      let endTime = Date.now()
      dispatch({ type: "UPDATE_TIMESTAMP", index: currentQuestion, timeStamp: (endTime - startTime)/1000 })
    }
  }, [currentQuestion])

  return (
    <div className="w-full p-8 rounded bg-gray-100 shadow">
      <div className="md:text-lg text-sm flex flex-wrap gap-2 items-center font-normal text-gray-700">
        {questionPart[0]}
        <span>
          <MathJax renderMode="post" dynamic={true}>{`\\(${questionPart[1]}\\)`}</MathJax>
        </span>
        {questionPart[2]}
      </div>
    </div>
  );
};

export default Question;
