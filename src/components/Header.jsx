
import {useApiContext} from "../contexts/ApiContexts"

const Header = () => {
    const {handleInput,apiRequestFilm,search} = useApiContext()
    return (
        <>
            {/* Input per la ricerca */}
            <input onChange={handleInput} type="text" />

            {/* Bottone per avviare la ricerca */}
            <button onClick={() => apiRequestFilm(search)}>Cliccami</button>
        </>
    );
};

// Esporta il componente Header come default
export default Header;