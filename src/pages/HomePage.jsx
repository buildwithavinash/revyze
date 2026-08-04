import CategoryCard from "../components/common/CategoryCard"
import Header from "../components/common/Header"
import HeroSection from "../components/common/HeroSection"
import Container from "../components/ui/Container"
import categories from "../data/categories"

const HomePage = () => {
  return (
    <div className="md:pb-24 pt-2 pb-12">
          <Container>
        <Header/>
        <HeroSection/>

        {/* categories */}
        <div className="mt-12">

        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">Categories</h3>
          <button className="border border-primary border-dashed px-3 py-1.5 font-semibold rounded-md cursor-pointer bg-primary text-background hover:bg-primary-hover transition-all duration-200">Browse All →</button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-2">
        {categories.map((category) => {
          return <CategoryCard key={category.id} category={category}/>
        })}
        </div>
        </div>
        </Container>
    </div>
  )
}

export default HomePage