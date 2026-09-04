import { LoaderCircle } from "lucide-react";

const LoadingState = ({
  message = "Loading...",
  fullScreen = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        fullScreen ? "min-h-[60vh]" : "py-12"
      }`}
    >
      <LoaderCircle
        className="w-7 h-7 text-primary animate-spin"
        strokeWidth={2}
        aria-hidden="true"
      />

      <p className="mt-3 text-sm text-text-secondary">
        {message}
      </p>
    </div>
  );
};

export default LoadingState;