import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coord, setCoord] = useState({ x: 0, y: 0 });
    const {x,y} = coord;


    useEffect(() => {

        const MouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoord(coords)                                                        //Primero tengo el EVENTO
            console.log(coords);
            // console.log(':D')
        }
        window.addEventListener('mousemove', MouseMove);


        return () => {
            window.removeEventListener('mousemove', MouseMove);                     //En el RETURN se utiliza generalmente para ELIMINAR eventos
        }                                                                           //y que no queden consumiendo memoria indefinidamente
    }, [])
                                                                                    //En el segundo argumento [] podemos poner que solo escuche a un elemento
                                                                                    //en particular cuando cambie.

    return (
        <>
            <h3>Eres genial</h3>
            <p>
                x:{x}
                y:{y}
            </p>
        </>
    )
}

export default Message
