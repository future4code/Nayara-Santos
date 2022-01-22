import axios from 'axios'
import { useState, useEffect } from 'react';
import {TOKEN} from '../constants/token';

export function useRequestData(url, path) {
    const [dados, setDados] = useState()
    const token = TOKEN

    const receberDados =() => {
        axios.get(`${url}${path}`, {
            headers: {
                auth: token
            }
        })
        .then((resposta) => {
            if (resposta.data !== dados) {
                setDados(resposta.data);
            }
        })
        .catch((erro) => {
            console.log(erro)
        });
    }
    useEffect(() => {
        receberDados()
    }, [])

    return [dados, receberDados];

}

