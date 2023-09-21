import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import { Link } from "react-router-dom";
import { fetchData } from "../services/api";
import { useQuery } from "react-query";

const Start = () => {
  const { data, dispatch } = useContext(TestContext);

  const {
    data: questionData,
    isLoading,
    error,
  } = useQuery(
    "questionsData",
    async () => {
      const dataPromises = data?.questions.map((id) => {
        return fetchData(id);
      });
      const fetchedData = await Promise.all(dataPromises);
      dispatch({ type: "SET_QUESTION_DATA", payload: fetchedData });
      dispatch({ type: "INITIAL_TIMESTAMP" });
    },
    { enabled: data.questions.length > 0 }
  );
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 py-8">
        <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
        <div className="h-8 w-full bg-gray-300 animate-pulse rounded"></div>
      </div>
    );
  }
  if (error || questionData?.length === 0 || data?.questions.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="bg-gray-200 rounded p-4 shadow text-red-500 font-semibold flex flex-col gap-3 items-center">
          <p>Please Select atleast 3 questions to start the test.</p>
          <Link to="/" className="text-sky-900 underline">Go back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-4 justify-center items-center py-8">
      <div className="text-sky-900 font-semibold text-xl">
        Hello {data.user !== "" ? data.user : "User"}, You test is ready.
      </div>
      <div className="my-2">You have total <span className="font-semibold text-red-500">{data.totalTime} minutes</span> to complete the test.</div>
      <Link to="/test">
        <button className="py-2 px-4 bg-sky-300 hover:bg-sky-400 rounded shadow">Take Test</button>
      </Link>
    </section>
  );
};

export default Start;
