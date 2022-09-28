import React from "react";
import { useEffect } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const detectKeyDown = (e) =>{
    this.setState()
    if (e.key === "escape"){
        this.setState.useEffect(() =>{
            document.addEventListener('keydown', detectKeyDown, false)
        }, [])}
    }


class Escape extends React.Component{
    state={abierto: true,}
    cerrarModal=()=>{
        this.setState({cerrado: !this.state.cerrado})
    }

render(){
    return(
        <>
        <div>
        <Escape detectKeyDown={this.cerrarModal}/>
        </div>
        </>
    )
}
}

export default Escape