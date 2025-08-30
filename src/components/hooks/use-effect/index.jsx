import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        let intervalId = setInterval(() =>{
            
            setCounter((pre) =>{
                if(pre >= 6){
                    clearInterval(intervalId)
                    return pre
                }
                return pre + 1
            })
        },1000)
        return() =>clearInterval(intervalId)
    }, [])

    return (
        <>
            <h1> Counter : {counter} </h1>
        </>
    )
}

export default UseEffect;