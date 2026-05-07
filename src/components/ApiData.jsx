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
        <div className="row">
            {actors.map((actor) => (
                <div key={actor.id} className="col actor-card">
                    <h2>{actor.name}</h2>
                    <img src={actor.image} alt={actor.biography} />
                    <p>{actor.birth_year} {actor.nationality}</p>
                    <p>{actor.biography}</p>
                    <h4 className="text-danger">Known For:</h4>
                    <p className="text-danger">{actor.known_for}</p>
                    <h4 className="text-warning">Awards:</h4>
                    <p className="text-warning">{actor.awards}</p>
                </div>
            ))}
        </div>
    );
};

export default GottaFetchEmAll;