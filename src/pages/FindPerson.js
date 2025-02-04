import React, { useState, useEffect } from "react";

const FindPerson = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  // Static data for persons
  const persons = [
    { id: 1, name: "John Doe", age: 30, gender: "Male", lastSeen: "New York" },
    { id: 2, name: "Jane Smith", age: 25, gender: "Female", lastSeen: "Los Angeles" },
    { id: 3, name: "Emily Johnson", age: 40, gender: "Female", lastSeen: "Chicago" },
    { id: 4, name: "Michael Brown", age: 35, gender: "Male", lastSeen: "Houston" },
    { id: 5, name: "David Wilson", age: 45, gender: "Male", lastSeen: "San Francisco" }
  ];

  useEffect(() => {
    if (!searchTerm) {
      setMatches([]);
      return;
    }

    const timeout = setTimeout(() => {
      setLoading(true);
      const filteredMatches = persons.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMatches(filteredMatches);
      setLoading(false);
    }, 500); // Wait 500ms after the user stops typing before searching

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount or searchTerm change
  }, [searchTerm, persons]);  // Added persons as a dependency

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Find Missing Person</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={() => setSearchTerm(searchTerm)} // Trigger search manually if needed
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search
      </button>

      {loading && (
        <div className="mt-4 text-center text-gray-500">
          Searching...
        </div>
      )}

      {matches.length === 0 && searchTerm && !loading && (
        <div className="mt-4 text-center text-gray-500">
          No results found for "{searchTerm}".
        </div>
      )}

      {matches.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Matching Results:</h3>
          <ul className="mt-2">
            {matches.map(person => (
              <li key={person.id} className="p-2 border-b">
                <strong>{person.name}</strong> - {person.age} years, {person.gender}, Last seen: {person.lastSeen}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FindPerson;
