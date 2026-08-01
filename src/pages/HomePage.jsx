import CategoryCard from "../components/common/CategoryCard"
import Header from "../components/common/Header"
import HeroSection from "../components/common/HeroSection"
import categories from "../constants/categories"

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        {categories.map((category) => {
          return <CategoryCard key={category.id} category={category}/>
        })}
    </div>
  )
}

export default HomePage