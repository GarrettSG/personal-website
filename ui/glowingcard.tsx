'use client';

export default function GlowingCard() {
  return (
    <div className="relative p-[3px] rounded-2xl overflow-hidden group">
      {/* Glow border layer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />
      
      {/* Inner content */}
      <div className="relative rounded-2xl bg-black text-white p-6 z-10">
        <h1 className="gradient-text text-3xl font-bold">
            Garrett Gibson
        </h1>
        <p className="mt-2 text-gray-300">Computer science student and full-stack developer.</p>
      </div>
    </div>
  );
}
