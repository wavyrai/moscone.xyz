export default function Home() {
  return (
    <main className="p-8 max-w-2xl">
      <h1 className="text-xl font-bold mb-6">MOSCONE.XYZ</h1>

      <hr className="border-gray-400 mb-6" />

      <nav className="space-y-2">
        <p>
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            About
          </a>
        </p>
        <p>
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            Contact
          </a>
        </p>
      </nav>

      <hr className="border-gray-400 my-6" />

      <footer className="text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} moscone.xyz</p>
      </footer>
    </main>
  );
}
