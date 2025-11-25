import './App.css'

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {/* Main Card */}
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-card-foreground">
          Your 10% Off Discount Code
        </h1>

        <p className="mb-6 text-sm text-muted-foreground">
          Use this code at checkout to save on your next order.
        </p>

        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
            Limited-time offer
          </span>
        </div>

        <div className="mb-2 flex gap-2">
          <input
            type="text"
            defaultValue="WELCOME10"
            className="flex-1 rounded-md border border-gray-200 px-4 py-2 font-mono text-lg font-semibold text-card-foreground focus:outline-none focus:ring-1 focus:ring-blue-500"
            readOnly
          />
          <button className="flex items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-2 font-medium text-white shadow-sm transition-colors hover:bg-blue-500/90 cursor-pointer">
            <span>🎟️</span>
            Copy Code
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Paste this code at checkout to apply your discount.
        </p>
      </div>

      <div className="fixed top-8 left-1/2 -translate-x-1/2 transform">
        <div className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg">
          ✓ Discount code copied!
        </div>
      </div>
    </div>
  );
}