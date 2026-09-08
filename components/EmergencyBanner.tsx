export default function EmergencyBanner() {
  return (
    <div className="flex justify-center py-6 px-4">
      <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-lg">
        <span className="text-lg">⏰</span>
        <p className="text-sm font-medium">Only a few appointments left this week in your area</p>
      </div>
    </div>
  );
}
