import React, { createContext, useState } from 'react';
const apiKey = import.meta.env.VITE_API_KEY; 

export const ResultContext = createContext();   

export const ResultContextProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const getResult = async (searchTerm) => {
        setIsLoading(true);
        const url = `https://google-search74.p.rapidapi.com/?query=${searchTerm}&limit=10&related_keywords=true`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'google-search74.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json(); 
            const  result  = await  data.results;  
            console.log(data);
            if (response.ok) {
                setResult(result || []);  
                console.log(result);
            } else {
                console.error("API Error: ", data.error.message);
            }
        } catch (error) {
            console.error("Error fetching the data: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ResultContext.Provider value={{ result, isLoading, searchTerm, setSearchTerm, getResult }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => React.useContext(ResultContext);
