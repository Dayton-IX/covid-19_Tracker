import { useState, useEffect } from 'react';

function useStats() {
    const [stats, setStats] = useState();
    useEffect(() => {
        console.log('Fetching Data');
        fetch('https://covid19.mathdro.id/api')
    }, []);
}

export default function IndexPage() {
    return <p>Hey</p>;
}