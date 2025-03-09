
import { useApiContext } from "../contexts/ApiContexts"

const Header = () => {
    const { handleInput, apiRequestFilm, search } = useApiContext()
    return (
        <>
            <header>
                <nav>
                    <picture>
                        <img className="logo" src="src\image\Netflix_icon.svg.webp" alt="" />
                    </picture>
                    <div className="searchBar">
                        <p>Effettua la tua ricerca</p>
                        {/* Input per la ricerca */}
                        <input onChange={handleInput} type="text" />
                        {/* Bottone per avviare la ricerca */}
                        <button onClick={() => apiRequestFilm(search)}>Cerca</button>
                    </div>
                </nav>
            </header>
        </>
    );
};

// Esporta il componente Header come default
export default Header;