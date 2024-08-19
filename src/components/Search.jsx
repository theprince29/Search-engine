import React from 'react';

import SearchBox from './SearchBox';


const Search = () => {
    
    return (
        <div className="flex flex-col h-[70vh] items-center justify-center w-full max-w-max mx-auto p-4 bg-transparent">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 dark:text-gray-200">Welcome to theprince29 Search Engine</h1>
            
            
            
            
            <SearchBox   />
            
            
           
        </div>
    );
};

export default Search;
