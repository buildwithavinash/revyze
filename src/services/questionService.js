const questionModules = import.meta.glob(
  "../data/questions/**/*.js"
);

const questionCache = new Map();

export const loadQuestionsForQuiz = async (quiz) => {
  const cacheKey = quiz.id;

  if(questionCache.has(cacheKey)){
    return questionCache.get(cacheKey);
  }
  
  const modulePath = `../data/questions/${quiz.questionSource}.js`;

  const loader = questionModules[modulePath];

  if (!loader) {
    throw new Error(
      `Question file not found for quiz: ${quiz.id}`
    );
  }

  const module = await loader();
  const questions = module.default;

  questionCache.set(cacheKey, questions)

  return questions;
};