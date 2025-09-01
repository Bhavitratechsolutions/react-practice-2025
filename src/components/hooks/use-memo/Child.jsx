import { memo } from "react";
const Child = ({fullName}) =>{
    console.log("Render")
    return(
        <>
        <h1> My name is : {fullName} </h1>
        </>
    )
}
export default memo(Child);