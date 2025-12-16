interface ErrorScreenProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorScreen = ({
  message = "Something went wrong. Please try again later.",
  onRetry,
}: ErrorScreenProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-6 text-center bg-slate-50">
      <div className="rounded-full bg-red-100 p-4 shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div className="max-w-md space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Oops! Error occurred</h2>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
      {onRetry && (
        <button
          type="reset"
          onClick={onRetry}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Try again
        </button>
      )}
    </div>
  );
};
