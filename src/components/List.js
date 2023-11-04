import React from "react";
import SingleTask from "./SingleTask";
function List({listOfTasks, handleDelete, handleDone}){
    return(
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap:"wrap", gap: "60px"}} >
                
            {listOfTasks.map((elt) => (
                <SingleTask elt={elt} 
                handleDelete={handleDelete}  
                handleDone={handleDone}
            />))}
        </div>
    )

}

export default List;