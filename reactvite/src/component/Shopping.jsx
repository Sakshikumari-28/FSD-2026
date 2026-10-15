import React, { useEffect, useState } from 'react';

export default function Shopping() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    'https://fakestoreapi.com/products'
                );

                const jscores = await response.json();

                console.log(jscores);
                setData(jscores);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Shopping</h1>

            {data.map((ele) => (
                <div key={ele.id}>
                    <h2>{ele.id}</h2>
                    <h2>{ele.title}</h2>

                    <img
                        src={ele.image}
                        alt={ele.title}
                        width="150"
                        height="150"
                        style={{ objectFit: 'contain' }}
                    />

                    <h2>${ele.price}</h2>
                    <p>{ele.description}</p>
                </div>
            ))}
        </div>
    );
}