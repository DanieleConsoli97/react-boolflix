import { useState , useEffect } from "react"
const Header = ()=>{

const [films,setFilms] = useState({})

const apiRequest =  ()=>{
      fetch("https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=ritorno")
        .then(res => res.json())
        .then(res=> res)
        .then(setFilms)
        .catch(err => console.error(err));
}    
useEffect(apiRequest , [])
    const filmsList = films.result   
    console.log(filmsList)
    return(
        <>
        <h1></h1>
        </>
    )
}
export default Header