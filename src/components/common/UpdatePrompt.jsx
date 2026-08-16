import { useRegisterSW } from 'virtual:pwa-register/react'

const UpdatePrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  if (!needRefresh) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-surface border border-border rounded-card px-4 py-3 flex items-center gap-3 shadow-sm">
      <p className="text-sm text-text">A new version is available.</p>
      <button
        onClick={() => updateServiceWorker(true)}
        className="text-sm font-medium text-primary hover:underline cursor-pointer"
      >
        Refresh
      </button>
      <button
        onClick={() => setNeedRefresh(false)}
        className="text-sm text-text-secondary hover:text-text cursor-pointer"
      >
        Dismiss
      </button>
    </div>
  )
}

export default UpdatePrompt