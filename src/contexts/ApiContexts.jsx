import {createContext,useContext, useState } from "react";
const ApiContext = createContext ()

const ApiProvider =({children}) =>{
     // NOTE - Utilizziamo useState per memorizzare l'elenco dei film ottenuti dalla richiesta API
        const [films, setFilms] = useState([]);
     // NOTE - Utilizziamo useState per memorizzare l'elenco dei film ottenuti dalla richiesta API
     const [tvSeries, setTvSeries] = useState([]);
        // NOTE - Utilizziamo useState per memorizzare il valore dell'input di ricerca
        const [search, setSearch] = useState("");
    

        //NOTE - Funzione per effettuare la richiesta API
        const apiRequestFilm = (value) => {
            // Recupera la chiave API dal file .env
            let key = import.meta.env.VITE_SOME_KEY;
            //NOTE -  Effettua una richiesta fetch all'API di The Movie DB
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=it_IT&query=${value}`
            )
                .then((res) => res.json()) //NOTE -  Converte la risposta in JSON
                .then((res) => res.results) //NOTE - Estrae i risultati dalla risposta
                .then(setFilms) //NOTE - Imposta i film con i risultati ottenuti
                .catch((err) => console.error(err)); // Gestisce eventuali errori
                
                apiRequestTvSeries (value)
        };
    
    
        const apiRequestTvSeries = (value) => {
            // Recupera la chiave API dal file .env
            let key = import.meta.env.VITE_SOME_KEY;
            //NOTE -  Effettua una richiesta fetch all'API di The Movie DB
            fetch(
                `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=it_IT&query=${value}`
                
            )
                .then((res) => res.json()) //NOTE -  Converte la risposta in JSON
                .then((res) => res.results) //NOTE - Estrae i risultati dalla risposta
                .then(setTvSeries) //NOTE - Imposta le serietv  con i risultati ottenuti
                .catch((err) => console.error(err)); // Gestisce eventuali errori
        };
    
    
    
    
        //NOTE - Funzione per gestire l'input dell'utente
        const handleInput = (event) => {
            setSearch(event.target.value); //NOTE - Aggiorna lo stato `search` con il valore corrente dell'input
            // console.log(search); //NOTE - Stampa il valore corrente di `search` nella console
        };
    
    
        //NOTE - Funzione per gestire la visualizzazione delle bandiere passando come parametro origin country preso dalla chiamata API
        function flagSet(origin) {
            
            
            //NOTE - Converto l'input 'origin' in una stringa per assicurarti che il confronto nel switch sia corretto
    
            switch (String(origin).toLowerCase()) {
                case "us": 
                return (
                    <img className="flag" src="src\assets\Flags/us.png"></img>
                )
                case "en": 
                return (
                    <img className="flag" src="src\assets\Flags/us.png"></img>
                )
                case "it": return (
                    <img className="flag" src="src\assets\Flags/it.png"></img>
                )
                case "fr":return ( 
                    <img className="flag" src="src\assets\Flags/fr.png"></img>
                )
                case "uk": return (
                    <img className="flag" src="src\assets\Flags\uk.png"></img>
                )
                case "jp": return (
                    <img className="flag" src="src\assets\Flags\jp.png"></img>
                )
                case "ja": return (
                    <img className="flag" src="src\assets\Flags\jp.png"></img>
                )
                case "de": return (
                    <img className="flag" src="src\assets\Flags\de.png"></img>
                )
                //NOTE - Se 'origin' non corrisponde a nessuno dei casi precedenti,si applica il caso default
                default:
                    return (<p>{origin}</p>)
            }
        }
        //NOTE - Funzione per gestire le stelline
        //NOTE - Passiamo come dato vote averange ottenuto dalla chiamanta
        function Star(vote) {
             //NOTE - Prendiamo il valore lo dividiamo per 2 e lo arrotondiamo per difetto
            const voteStars = Math.floor(vote / 2)
            const ArrStar = []
            console.log(ArrStar)
             //NOTE - pushiamo in un array le stelline
            for (let i = 1; i <= 5; i++) {
                ArrStar.push(
                    i <= voteStars ?(<span key={i}>&#9733;</span> ):(<span key={i}>&#9734;</span>)
                )
            }
            return ArrStar
        }
    let value = {
        apiRequestFilm,
        films,
        tvSeries,
        handleInput,
        flagSet,
        Star,
        search
    }
    return( 
       <ApiContext.Provider value = {value} >
            {children}
       </ApiContext.Provider> 
    )
}
const useApiContext = () => useContext(ApiContext)
export  {ApiProvider, useApiContext}