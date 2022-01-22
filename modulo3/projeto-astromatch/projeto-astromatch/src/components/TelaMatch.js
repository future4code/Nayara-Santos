import axios from "axios";
import {useEffect, useState} from "react/cjs/react.development";
import styled from "styled-components";

function TelaMatch(props) {
    const [matches, setMatches] = useState({})

    const receberMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:nayara-santos-carver/choose-person")
        .then((res) => {
            setMatches(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    useEffect(() => {
        receberMatches()
    })
    return(
        <div>
            {
                matches.map((match) => {
                    return (
                        <>
                        <h1>{match.name}</h1>
                        <img src={match.photo}/>
                        </>
                    )
                })
            }
            <p> Nao tem nenhum match ainda</p>
            <h1>{props.perfil.name}</h1>
            <p>{props.perfil.age}</p>
        </div>
    )
}

export default TelaMatch;