// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8"
      style={{ backgroundImage: "url('/school-bg.jpg')" }} // 👈 put your image inside /public
    >
      <div className="bg-white bg-opacity-80 rounded-2xl shadow-xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black-700 mb-4">
          Welcome to the School Dashboard
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Manage your school’s teachers, students, and parents all in one place.
        </p>

        {/* Navigation Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card href="/list/teachers" emoji="👩‍🏫" title="Teachers" color="blue" />
          <Card href="/list/students" emoji="🎓" title="Students" color="green" />
          <Card href="/list/parents" emoji="👨‍👩‍👧" title="Parents" color="purple" />
        </section>
      </div>
    </main>
  );
}

function Card({ href, emoji, title, color }: { href: string; emoji: string; title: string; color: string }) {
  return (
    <Link
      href={href}
      className={`bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform border-t-4 border-${color}-500`}
    >
      <span className="text-3xl">{emoji}</span>
      <h2 className="mt-3 text-lg font-semibold text-gray-800">{title}</h2>
    </Link>
  );
}
