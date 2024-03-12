import { useEffect } from "react";
import { useState } from "react";
import Vlog from "../vlog/Vlog";
import PropTypes from 'prop-types';

const Vlogs = ({handleAddToBookmarks}) => {

    const [vlogs, setVlogs]= useState([]);
    useEffect(()=>{
        fetch('vlog.json')
        .then(res=>res.json())
        .then(data=>setVlogs(data))
    },[])
    return (
        <div className="w-2/3">
          <h1 className="text-4xl">Blogs:{vlogs.length} </h1> 
          {
            vlogs.map(vlog=><Vlog key={vlog.id}
            handleAddToBookmarks={handleAddToBookmarks}
            vlog={vlog}></Vlog>)
          } 
        </div>
    );
};

Vlogs.propTypes ={
    handleAddToBookmarks:PropTypes.func
}

export default Vlogs;