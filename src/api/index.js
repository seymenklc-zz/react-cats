import axios from 'axios';

export const fetchData = async (pageNumber) => {
    const { data } = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=20&page=${pageNumber}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return data;
};