const HeroSection = () => {
  return (
    <div className="mx-auto max-w-2xl text-center flex flex-col items-center py-12 sm:py-16 md:py-24 px-4">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-snug text-text">
        Revise what you learned, <br /> before you forget it.
      </h1>

      <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-lg">
        Quick quizzes on React, JavaScript, SQL, and more — made for students who want concepts to actually stick, not just get skimmed once and forgotten.
      </p>

      <button className="bg-primary text-background rounded-button px-5 py-2.5 font-medium hover:bg-primary-hover transition-all duration-150 cursor-pointer mt-6 w-full sm:w-auto">
        Start practicing — it's free
      </button>

      <p className="text-xs sm:text-sm text-text-secondary mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>250+ questions</span>
        <span className="hidden sm:inline">·</span>
        <span>15 categories</span>
        <span className="hidden sm:inline">·</span>
        <span>No sign-up required</span>
      </p>

    </div>
  )
}

export default HeroSection