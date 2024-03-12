import { useEffect } from "react";
import { useState } from "react";


const Vlogs = () => {

    const [vlogs, setVlogs]= useState([]);
    useEffect(()=>{
        fetch('vlog.json')
        .then(res=>res.json())
        .then(data=>setVlogs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Vlogs;