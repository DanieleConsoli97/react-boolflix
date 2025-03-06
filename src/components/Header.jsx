import { useState } from "react";


const Header = () => {
    // NOTE - Utilizziamo useState per memorizzare l'elenco dei film ottenuti dalla richiesta API
    const [films, setFilms] = useState([]);

    // NOTE - Utilizziamo useState per memorizzare il valore dell'input di ricerca
    const [search, setSearch] = useState("");

    // Funzione per effettuare la richiesta API
    const apiRequest = (value) => {
        // Recupera la chiave API dal file .env
        let key = import.meta.env.VITE_SOME_KEY;

        //NOTE -  Effettua una richiesta fetch all'API di The Movie DB
        fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=it_IT&query=${value}`
        )
            .then((res) => res.json()) //NOTE -  Converte la risposta in JSON
            .then((res) => res.results) //NOTE - Estrae i risultati dalla risposta
            .then(setFilms) //NOTE - Imposta i film con i risultati ottenuti
            .catch((err) => console.error(err)); // Gestisce eventuali errori
    };

    //NOTE - Funzione per gestire l'input dell'utente
    const handleInput = (event) => {
        setSearch(event.target.value); //NOTE - Aggiorna lo stato `search` con il valore corrente dell'input
        console.log(search); //NOTE - Stampa il valore corrente di `search` nella console
    };

   
    return (
        <>
            {/* Input per la ricerca */}
            <input onChange={handleInput} type="text" />

            {/* Bottone per avviare la ricerca */}
            <button onClick={() => apiRequest(search)}>Cliccami</button>

            {/* map attraverso l'array `films` per ottenere i  dettagli di ogni film ricercato */}
            {films.map((film) => {
                const { id, name, original_name, origin_country, vote_average } = film;
                return (
                    <ul key={id}>
                        <li> {name}</li>
                        <li> {original_name}</li>
                        <li> {origin_country}</li>
                        <li> {vote_average}</li>
                    </ul>
                );
            })}
        </>
    );
};

// Esporta il componente Header come default
export default Header;