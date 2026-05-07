import React, { useEffect, useState } from "react";


function GottaFetchEmAll() {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch("https://lanciweb.github.io/demo/api/actors/")
            .then((apiData) => apiData.json())
            .then((actorsData) => {
                setActors(actorsData);
            })
    }, []);

    return (
        <div>
            {actors.map((actor) => (
                <div key={actor.id}>
                    <h2>{actor.name}</h2>
                    <img src={actor.image} alt={actor.biography} />
                    <p>{actor.birth_year} {actor.nationality}</p>
                    <p>{actor.biography}</p>
                    <h4>Known For:</h4>
                    <p>{actor.known_for}</p>
                    <h4>Awards:</h4>
                    <p>{actor.awards}</p>
                </div>
            ))};

        </div>
    );
};

export default GottaFetchEmAll;