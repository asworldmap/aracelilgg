export default function Loading() {
  return (
    <div className="min-h-screen bg-sand-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 border border-navy-300 border-t-navy-500 rounded-full animate-spin" />
        <p className="text-xs font-light text-sand-500 tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}
