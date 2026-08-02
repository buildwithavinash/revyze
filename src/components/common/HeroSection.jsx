const HeroSection = () => {
  return (
    <div className="mx-auto max-w-3xl text-center flex flex-col items-center min-h-[80vh] justify-center">
        
        <span className="text-sm border border-primary-hover border-dashed bg-primary/90 text-background px-2 py-1 rounded-xl">Master Technical Concepts</span>
        <p className="text-5xl mt-3">Practice smarter with curated quizzes built for
      developers, students, and interview preparation.</p>
        <button className="bg-primary border border-border rounded-2xl px-4 py-2 hover:bg-primary-hover cursor-pointer transition-all duration-150 text-background mt-4 font-bold">Start Revising</button>
        
          <pre className="text-primary mt-2">250+ Questions • 15 Categories • Offline Ready</pre>
        
    </div>
  )
}

export default HeroSection