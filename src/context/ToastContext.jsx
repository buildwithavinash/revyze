import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CheckCircle2, CircleAlert, CircleX, Info, X } from "lucide-react";

const ToastContext = createContext(null);

const EXIT_DURATION = 200;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((toastId) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== toastId),
    );
  }, []);

  const showToast = useCallback((message, type = "info", duration = 4000) => {
    const id = crypto.randomUUID();

    setToasts((currentToasts) => [
      ...currentToasts,
      { id, message, type, duration },
    ]);

    return id;
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}

      <div
        className="fixed bottom-4 right-4 z-100 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2.5"
        aria-live="polite"
        aria-atomic="false"
      >
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const TOAST_CONFIG = {
  success: { icon: CheckCircle2, badgeClass: "bg-success/10 text-success" },
  error: { icon: CircleX, badgeClass: "bg-danger/10 text-danger" },
  warning: { icon: CircleAlert, badgeClass: "bg-warning/10 text-warning" },
  info: { icon: Info, badgeClass: "bg-primary/10 text-primary" },
};

// Each toast removes itself from the list once its exit animation
// finishes — it just needs its own id and the shared removeToast function.
const Toast = ({ toast }) => {
  const { removeToast } = useToast();

  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const dismiss = () => {
    setIsLeaving(true);
    setTimeout(() => removeToast(toast.id), EXIT_DURATION);
  };

  useEffect(() => {
    // Animate in on the next frame instead of mounting straight into
    // the final state.
    const showFrame = requestAnimationFrame(() => setIsVisible(true));

    // Auto-dismiss after `duration`, if one was given.
    const dismissTimer =
      toast.duration > 0 ? setTimeout(dismiss, toast.duration) : null;

    return () => {
      cancelAnimationFrame(showFrame);
      clearTimeout(dismissTimer);
    };
    // Runs once when this toast mounts — its id/duration never change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { icon: Icon, badgeClass } = TOAST_CONFIG[toast.type] || TOAST_CONFIG.info;

  return (
    <div
      role={toast.type === "error" ? "alert" : "status"}
      className={`flex items-start gap-3 rounded-card border border-border bg-surface p-3.5 shadow-lg shadow-black/5 transition-all duration-200 ease-out
        ${isVisible && !isLeaving ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
    >
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${badgeClass}`}>
        <Icon className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
      </span>

      <p className="min-w-0 flex-1 pt-1 text-sm leading-5 text-text">
        {toast.message}
      </p>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss notification"
        className="shrink-0 rounded-button p-1 text-text-secondary hover:bg-surface-hover hover:text-text transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" strokeWidth={2} />
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