import Link from "next/link";

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 sticky top-20 z-40 border-b-2 border-red-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">!</div>
            <div>
              <p className="font-bold text-lg">Need Emergency Service?</p>
              <p className="text-sm text-red-100">Same-day service available. Call now.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a 
              href="tel:2148179212"
              className="btn bg-white text-red-600 hover:bg-gray-200 font-bold text-sm"
            >
              Call (214) 817-9212
            </a>
            <Link
              href="/quote"
              className="btn bg-red-800 text-white hover:bg-red-900 font-bold text-sm border border-white"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
