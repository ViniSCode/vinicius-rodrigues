export function Loading () {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-900 fixed inset-0 z-[100] flex items-center justify-center">
      <img src="/assets/loading.svg" alt="" className="animate-pulse-loading" />
    </div>
  )
}