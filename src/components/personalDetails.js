import React from "react"
function PersonaDetails(){
    const [count, setCount] = React.useState(0)
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
        </div>
    )
}
export default PersonaDetails