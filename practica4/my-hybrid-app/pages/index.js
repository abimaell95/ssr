// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>Hybrid Rendering with Next.js</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

/*export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const initialData = await res.json();

    return {
        props: { initialData },
    };
}*/