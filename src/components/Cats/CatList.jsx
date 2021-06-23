import React, { useEffect, useState } from 'react';

import { fetchData } from '../../api';

import SingleCat from './SingleCat';

const CatList = () => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const newCats = await fetchData(pageNumber);
                setCats(prev => [...prev, ...newCats]);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(true);
                setLoading(true);
            }
        };
        loadData();
    }, [pageNumber]);

    return (
        <div>
            <SingleCat
                image={cats}
                loading={loading}
                error={error}
                setPageNumber={setPageNumber}
            />
        </div>
    );
};

export default CatList;
