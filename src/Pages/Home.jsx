import { Link } from "react-router-dom";
import { TestContext } from "../context/TestContext";
import { SelectQuestion } from "../components";
import { useContext } from "react";

const Home = () => {
  const { data, dispatch } = useContext(TestContext);
  const handleChange = (e) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_USER", payload: e.target.value });
  };
  return (
    <section className="flex flex-col gap-8 py-8">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <label htmlFor="username" className="font-bold text-xl text-sky-900">User Name</label>
        <input
          type="text"
          id="username"
          value={data.user}
          placeholder="User name"
          className="border-2 border-gray-500 rounded p-2"
          onChange={handleChange}
        />
      </div>
      <SelectQuestion />
      {data?.questions.length > 2 && data?.user ? (
        <Link to="/start">
          <button className="py-2 px-4 bg-sky-300 hover:bg-sky-400 shadow rounded">Complete</button>
        </Link>
      ) : (
        <div className="text-blue-600 font-semibold">
          Please fill your Name and Select at least 3 questions to start the
          test.
        </div>
      )}
    </section>
  );
};

export default Home;
