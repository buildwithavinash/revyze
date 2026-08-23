import { Link } from "react-router"
import CategoryCard from "../components/common/CategoryCard"
import Header from "../components/common/Header"
import Container from "../components/ui/Container"
import categories from "../data/categories"
import { ArrowLeft } from "lucide-react"

const CategoriesPage = () => {
  return (
    <div className="pb-16 md:pb-24">
        <Header />
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-secondary mt-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
          Back
        </Link>
      <Container>

        <div className="mt-4 md:mt-10">
          <h1 className="text-lg sm:text-xl font-semibold text-text mb-1">All categories</h1>
          <p className="text-sm text-text-secondary mb-6">
            {categories.length} categories to practice from.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoriesPage