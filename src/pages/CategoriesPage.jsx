import CategoryCard from "../components/common/CategoryCard"
import Header from "../components/common/Header"
import Container from "../components/ui/Container"
import categories from "../data/categories"

const CategoriesPage = () => {
  return (
    <div className="pb-16 md:pb-24">
      <Container>
        <Header />

        <div className="mt-8 md:mt-10">
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