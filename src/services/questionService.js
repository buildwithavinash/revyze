const questionModules = import.meta.glob(
  "../data/questions/**/*.js"
);

export const loadQuestionsForQuiz = async (quiz) => {
  const modulePath = `../data/questions/${quiz.questionSource}.js`;

  const loader = questionModules[modulePath];

  if (!loader) {
    throw new Error(
      `Question file not found for quiz: ${quiz.id}`
    );
  }

  const module = await loader();

  return module.default;
};