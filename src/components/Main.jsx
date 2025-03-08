import { useApiContext } from "../contexts/ApiContexts"
const Main = () => {
    const {films, flagSet, Star, tvSeries} = useApiContext()
    return (
        <div className="container">
            <div className="Film">
                {/* map attraverso l'array `films` per ottenere i  dettagli di ogni film ricercato */}
                <p>Film</p>
                {
                    films.length === 0 ? (
                        <p>Nessun film Trovato</p>
                    ):(
                    films.map((film) => {
                        const { id, title, original_title, original_language, vote_average, poster_path } = film;
                        return (
                            <ul key={id}>
                                <li><img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" /></li>
                                <li>Titolo:{title}</li>
                                <li>Titolo Originale:{original_title}</li>

                                <li>Lingua {flagSet(original_language)}</li>

                                <li >Voto {vote_average}</li>
                                <li className="yellow">Voto {Star(vote_average)}</li>
                            </ul>
                            );
                        }
                    )
                )
                }
            </div>
            
            <div className="SerieTv">
                <p>Serie TV</p>
                {
                tvSeries.length === 0 ? (
                <p>Nessuna serie trovata</p>
            ):(
                tvSeries.map((tvSerie) => {
                        const { id, name, original_name, origin_country, vote_average, poster_path } = tvSerie;
                    return (
                        <ul key={id}>
                            <li><img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" /></li>
                            <li>Titolo:{name}</li>
                            <li>Titolo Originale:{original_name}</li>

                            <li> {flagSet(origin_country)}</li>

                            <li> {vote_average}</li>
                            <li className="yellow">{Star(vote_average)}</li>
                        </ul>
                        )
                    }
                 )
                )
                }
            </div>

        </div>
    )
}
export default Main