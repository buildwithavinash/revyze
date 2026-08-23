import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Container from "../components/ui/Container";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-6xl sm:text-7xl font-semibold text-text">404</p>

          <h1 className="text-xl sm:text-2xl font-semibold text-text mt-4">
            Page not found
          </h1>

          <p className="text-sm text-text-secondary max-w-md mt-2">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 mt-6 bg-primary text-background px-4 py-2 rounded-button text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
            Back home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
