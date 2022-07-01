// Заменяем в код сивола " ' " на символ " ' "
export const formatQuestion = (question) => {
  return question.replace(/[&]{1}[a-z]{1,5}[;]{1}/g, "'");
};
