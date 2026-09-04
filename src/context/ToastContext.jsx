import { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext(null);

export const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback((toastId) => {
        setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== toastId))
    }, []);

    const showToast = useCallback(
        (message, type = "info", duration = 4000) => {
            const id = crypto.randomUUID();

            setToasts((currentToasts) => [
                ...currentToasts,
                {
                    id,
                    message,
                    type,
                },
            ]);

            if(duration > 0){
                window.setTimeout(()=> {
                    removeToast(id);
                }, duration);
            }

            return id;
        }, [removeToast],
    )

    return (
        <ToastContext.Provider value={{showToast, removeToast}}>
            {children}

            <div
        className="fixed bottom-4 right-4 z-100 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3"
        aria-live="polite"
        aria-atomic="false"
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
        </ToastContext.Provider>
    )
}

const Toast = ({ toast, onClose }) => {
  const styles = {
    success:
      "border-green-200 bg-green-50 text-green-800 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-300",
    error:
      "border-red-200 bg-red-50 text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300",
    warning:
      "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-900/50 dark:bg-yellow-950/30 dark:text-yellow-300",
    info:
      "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-300",
  };

  const icons = {
    success: "✓",
    error: "×",
    warning: "!",
    info: "i",
  };

  return (
    <div
      role={toast.type === "error" ? "alert" : "status"}
      className={`flex items-start gap-3 rounded-card border px-4 py-3 shadow-lg ${styles[toast.type] || styles.info}`}
    >
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
        aria-hidden="true"
      >
        {icons[toast.type] || icons.info}
      </span>

      <p className="min-w-0 flex-1 text-sm leading-5">
        {toast.message}
      </p>

      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="shrink-0 text-current opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
      >
        ×
      </button>
    </div>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
};