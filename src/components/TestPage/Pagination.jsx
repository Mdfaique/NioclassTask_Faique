import { useContext, useState } from "react";
import { TestContext } from "../../context/TestContext";
import { EndModal } from "../index";

const Pagination = ({
  currentQuestion,
  handlePageChange,
}) => {
  const { data } = useContext(TestContext);
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="flex flex-row justify-between items-center">
      {currentQuestion > 0 && (
        <button
          className="bg-white border-2 border-sky-300 hover:bg-sky-300 hover:text-white duration-300 py-2 px-4 rounded shadow"
          onClick={() => handlePageChange("prev")}
        >
          Previous
        </button>
      )}
      {currentQuestion < data?.questionData.length - 1 ? (
        <button
          className="bg-white border-2 border-sky-300 hover:bg-sky-300 hover:text-white duration-300 py-2 px-4 rounded shadow ml-auto"
          onClick={() => handlePageChange("next")}
        >
          Next
        </button>
      ) : (
        <button
          className="bg-sky-900 hover:bg-sky-950 text-white duration-300 py-2 px-4 rounded shadow ml-auto border-0"
          onClick={() => setOpenModal(true)}
        >
          Submit
        </button>
      )}

      <EndModal openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
};

export default Pagination;
