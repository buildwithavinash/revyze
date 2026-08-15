import { Link } from "react-router"
import CategoryCard from "../components/common/CategoryCard"
import Header from "../components/common/Header"
import HeroSection from "../components/common/HeroSection"
import Container from "../components/ui/Container"
import categories from "../data/categories"
import { getQuizzesByCategory } from "../services/quizService"

const TEASER_COUNT = 8;

const HomePage = () => {
  const teaserCategories = [...categories]
    .sort((a, b) => getQuizzesByCategory(b.id).length - getQuizzesByCategory(a.id).length)
    .slice(0, TEASER_COUNT);

  return (
    <div className="pb-16 md:pb-24">
      <Container>
        <Header />
        <HeroSection />

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text">Categories</h3>
            <Link
              to="/categories"
              className="px-4 py-2 rounded-button bg-primary text-background text-sm font-medium hover:bg-primary-hover transition-all duration-200"
            >
              Browse all →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teaserCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage