import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import { Link } from "react-router-dom";

const Result = () => {
  const { data } = useContext(TestContext);
  let totalTimeTaken = 0
  const resultData = data?.timeStamp.map((time) => {
    totalTimeTaken += time
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes > 0 ? minutes + " min and" : ""} ${seconds} sec`;
  })
  if (data?.questions.length === 0) {
    return (
      <div className="flex flex-col gap-4 py-8 justify-center items-center">
        <div className="text-red-500 font-semibold text-xl">
          No Result to show.
        </div>
        <Link to="/" className="text-sky-900 font-semibold underline">
          Go back to home
        </Link>
      </div>
    );
  }
  const totalMinutes = Math.floor(totalTimeTaken / 60);
  const totalSeconds = totalTimeTaken % 60;
  return (
    <section className="flex flex-col gap-6 py-8 justify-centerd items-center">
      <div className="text-xl text-sky-900 font-semibold">
        Hey {data.user ? data.user : "User"}, your result is here.
      </div>

      <div className="md:w-1/2 w-full bg-gray-100 rounded shadow p-4 flex flex-col gap-4">
        <div className="text-gray-800 font-bold text-center border-b-2 pb-1 w-fit mx-auto border-sky-400">
          Time taken on each question
        </div>
        <div className="flex flex-col gap-2">
          {resultData.map((time, index) => {
            return (
              <div
                key={index}
                className="flex flex-row gap-4 justify-between"
              >
                <div className="text-sky-900 font-semibold">{data?.questions[index]}</div>
                <div className="font-bold">{time}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-sky-900 font-semibold text-xl text-center">{`Total time taken by you is ${
        totalMinutes > 0 ? totalMinutes + "minutes and" : ""
      } ${totalSeconds} seconds.`}</div>
      <Link to="/">
        <button className="py-2 px-4 bg-sky-300 hover:bg-sky-400 rounded shadow">
          Start new test
        </button>
      </Link>
    </section>
  );
};

export default Result;
