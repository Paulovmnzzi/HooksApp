import { useEffect, useRef, useState } from "react"

const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({
            loading:true,
            error: null,
            data: null
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
               
                setTimeout(() => {
                    if(isMounted.current){
                        setState({
                            loading:false,
                            error: null,
                            data
                        })
                    } 
                }, 225);
               
            }).catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'no se ha podío cargar la data'
                })
            })
    }, [url])

    return state;

}

export default useFetch
