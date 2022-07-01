// Заменяем в код сивола " ' " на символ " ' "
export const formatQuestion = (question) => {
  return question.replace(/[&]{1}[\w#]{1,5};{1}/g, "'");
};
