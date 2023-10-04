
function Dashborad() {
  return (
    <div className="bg-gray-100 h-screen">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 py-4 px-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <ul className="mt-6">
          <li className="mb-3">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <span className="mr-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l9-9 9 9-9 9-9-9zm9 2V4"></path>
                </svg>
              </span>
              Dashboard
            </a>
          </li>
          {/* Add more sidebar items */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
}

export default Dashborad
