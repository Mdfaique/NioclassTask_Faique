export const fetchData = async (id) => {
  let res = await fetch(
    `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${id}`
  );
  res = await res.json();
  return res[0];
};
