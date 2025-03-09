import { useState } from "react"
import { useApiContext } from "../contexts/ApiContexts"
const Main = () => {
    const { films, flagSet, Star, tvSeries } = useApiContext()
    const [hoveredCard, setHoveredCard] = useState(null)
    return (
        <main>
            <div className="container">
                <p>Film</p>
                <div className="Film cards">
                    {/* map attraverso l'array `films` per ottenere i  dettagli di ogni film ricercato */}
                    {
                        films.length === 0 ? (
                            <p>Nessun film Trovato</p>
                        ) : (
                            films.map((film) => {
                                const { id, title, original_title, original_language, vote_average, poster_path, overview } = film;
                                return (
                                    <div className="Card">
                                        <div className="relative">
                                            <img className="Poster" src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
                                            <div className="absolute">
                                                <ul key={id}>
                                                    <li>Titolo</li>
                                                    <li>{title}</li>
                                                    <li>Titolo Originale</li>
                                                    <li>{original_title}</li>
                                                    <li><picture className="flag_container">{flagSet(original_language)}</picture> </li>
                                                    <li>Voto</li>
                                                    <li >{vote_average}</li>
                                                    <li>Stelle</li>
                                                    <li className="yellow">Voto {Star(vote_average)}</li>
                                                    <li>{overview}</li>
                                                </ul>
                                            </div>
                                        </div>




                                    </div>
                                );
                            }
                            )
                        )
                    }
                </div>
                <p>Serie TV</p>
                <div className="SerieTv cards">
                    {
                        tvSeries.length === 0 ? (
                            <p>Nessuna serie trovata</p>
                        ) : (
                            tvSeries.map((tvSerie) => {
                                const { id, name, original_name, origin_country, vote_average, poster_path, overview } = tvSerie;
                                return (
                                    <div key={id} className="Card">
                                        <div className="relative">
                                            <img className="Poster" src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
                                            <div className="absolute">
                                                <ul>
                                                    <li>Titolo</li>
                                                    <li>{name}</li>
                                                    <li>Titolo Originale</li>
                                                    <li>{original_name}</li>
                                                    <li> <picture className="flag_container">{flagSet(origin_country)}</picture></li>
                                                    <li>Voto</li>
                                                    <li> {vote_average}</li>
                                                    <li>Stelle</li>
                                                    <li>Trama</li>
                                                    <li className="yellow">{Star(vote_average)}</li>
                                                    <li>{overview}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        )
                    }
                </div>

            </div>
        </main>
    )
}
export default Main