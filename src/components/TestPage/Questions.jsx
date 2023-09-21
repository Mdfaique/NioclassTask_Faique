import { useContext } from "react";
import { TestContext } from "../../context/TestContext";

const Questions = ({ currentQuestion, setCurrentQuestion }) => {
  const { data } = useContext(TestContext);
  const handleQuestionChange = (index) => {
    setCurrentQuestion(index);
  };

  return (
    <div className="grid sm:grid-cols-8 grid-cols-4 md:grid-cols-4 gap-2 p-2 bg-gray-100 shadow rounded md:w-1/4 h-fit w-full">
      {data?.questionData?.map((question, index) => (
        <div
          key={question?.QuestionID}
          className={`${
            currentQuestion == index ? "bg-sky-500" : "bg-sky-300"
          } p-3 md:w-auto w-full text-center rounded cursor-pointer hover:bg-sky-400`}
          onClick={() => handleQuestionChange(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Questions;
