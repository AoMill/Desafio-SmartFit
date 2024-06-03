import axios from "axios";
import { useEffect, useState } from "react";

export function useLock() {
    const [dadosFilt, setDadosFilt] = useState([])
    const [dadosAll, setDadosAll] = useState([])
   
    useEffect(() => {
        axios.get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json").then(res => {
            const pegaArray = res.data.locations
            const v = pegaArray.filter((e) => {
             return e.opened === true
            })         
                    
            setDadosFilt(v)
            setDadosAll(pegaArray)
        })
    }, [])
    
    return {
        dadosFilt,
        dadosAll
    }
}