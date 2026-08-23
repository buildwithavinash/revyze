const questionModules = import.meta.glob(
  "../data/questions/**/*.js"
);

const questionModuleCache = new Map();
const shuffledQuestionCache = new Map();

const OPTION_IDS = ["A", "B", "C", "D"];

const hashSeed = (seed) => {
  const seedString = String(seed ?? "");
  let hash = 1779033703 ^ seedString.length;

  for (let index = 0; index < seedString.length; index += 1) {
    hash = Math.imul(hash ^ seedString.charCodeAt(index), 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }

  return () => {
    hash = Math.imul(hash ^ (hash >>> 16), 2246822507);
    hash = Math.imul(hash ^ (hash >>> 13), 3266489909);
    return (hash ^= hash >>> 16) >>> 0;
  };
};

const createSeededRandom = (seed) => {
  const nextHash = hashSeed(seed);
  return () => nextHash() / 4294967296;
};

const shuffleArray = (items, random) => {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
};

const shuffleQuestionOptions = (question, seed) => {
  if (!seed || seed === "__legacy__") {
    return {
      ...question,
      options: question.options.map((option) => ({ ...option })),
    };
  }

  const random = createSeededRandom(`${seed}:${question.id}`);
  const shuffledOptions = shuffleArray(question.options, random);

  const remappedOptions = shuffledOptions.map((option, index) => ({
    ...option,
    id: OPTION_IDS[index] ?? option.id,
  }));

  const correctOptionIndex = shuffledOptions.findIndex(
    (option) => option.id === question.correctOptionId,
  );

  return {
    ...question,
    options: remappedOptions,
    correctOptionId: OPTION_IDS[correctOptionIndex] ?? question.correctOptionId,
  };
};

export const loadQuestionsForQuiz = async (quiz, { seed } = {}) => {
  const modulePath = `../data/questions/${quiz.questionSource}.js`;
  const cacheKey = `${quiz.id}::${seed ?? "__legacy__"}`;

  if (shuffledQuestionCache.has(cacheKey)) {
    return shuffledQuestionCache.get(cacheKey);
  }

  const loader = questionModules[modulePath];

  if (!loader) {
    throw new Error(
      `Question file not found for quiz: ${quiz.id}`
    );
  }

  let questions = questionModuleCache.get(modulePath);

  if (!questions) {
    const module = await loader();
    questions = module.default;
    questionModuleCache.set(modulePath, questions);
  }

  const normalizedQuestions = questions.map((question) =>
    shuffleQuestionOptions(question, seed ?? "__legacy__"),
  );

  shuffledQuestionCache.set(cacheKey, normalizedQuestions);

  return normalizedQuestions;
};
