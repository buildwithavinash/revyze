import { AlertCircle, RefreshCw } from "lucide-react";

const ErrorState = ({
  title = "Something went wrong",
  message = "We couldn't load this content. Please try again.",
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 dark:bg-red-950/30 dark:text-red-400">
        <AlertCircle
          className="w-6 h-6"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      <h2 className="mt-4 text-lg font-semibold text-text">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-text-secondary">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-button bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
        >
          <RefreshCw
            className="w-4 h-4"
            strokeWidth={2}
          />

          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorState;