const ConfirmModal = ({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "danger",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  const confirmStyles =
    confirmVariant === "danger"
      ? "bg-danger text-white hover:opacity-90"
      : "bg-primary text-white hover:opacity-90";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-card bg-background border border-border p-5 shadow-lg">
        <h2 className="text-lg font-semibold text-text">
          {title}
        </h2>

        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {message}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-button border border-border text-text hover:bg-surface-hover transition-colors cursor-pointer"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-button font-medium transition-opacity cursor-pointer ${confirmStyles}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;