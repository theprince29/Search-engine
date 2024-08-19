import React,{useState} from "react";
import { useResultContext } from '../contexts/ResultContext'; // Import the custom hook
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const [input, setInput] = useState('');
    const { searchTerm, setSearchTerm, getResult } = useResultContext();
    const navigate = useNavigate();

    const handleSearch = () => {

        setSearchTerm(input);
        getResult(input);
        navigate('/search');
    };
  return (
    <div className="flex w-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Enter search term"
        className="flex-grow p-3 border border-gray-300 rounded-l-lg dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="w-12 h-12 bg-blue-500 text-white rounded-r-lg flex items-center justify-center hover:bg-blue-600 transition duration-300"
      >
        🔎
      </button>
    </div>
  );
};

export default SearchBox;
