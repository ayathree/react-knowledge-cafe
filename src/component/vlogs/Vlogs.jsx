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
        <div className="w-2/3">
          <h1 className="text-4xl">Blogs:{vlogs.length} </h1>  
        </div>
    );
};

export default Vlogs;