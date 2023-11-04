import React, { useState } from "react";
import { CardText, Form, FormCheck } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function SingleTask({elt, handleDelete, handleDone}){
    
    const [isChecked, setChecked]=useState(false);

    const date = new Date();
    const day = date.toLocaleDateString('en-us', { day:"numeric"});
    const month = date.toLocaleDateString('en-us', { month:"long"});
    const year = date.toLocaleDateString('en-us', { year:"numeric"});
    
    const deleteToDo = () => {handleDelete(elt.id);};
    
    const checkToDo = () => {
        handleDone(elt.id);
        if(isChecked ==false)
        {
            setChecked(true);
        }
        else{
            setChecked(false);
        }
        
    };

    const Condstyles = {
            fontSize:"20px", 
            fontWeight:"bold",
            marginBottom:"15px",
            textDecoration: elt.done ? "line-through": "none",
        }

    return (
        <Card style={{ width: "18rem", marginTop: "60px" }}>
        <Card.Body
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                background:"white",
                padding: "30px",
                borderRadius: "25px",
                marginTop:"50px"
            }}
        >
            <div>
                <Card.Title onClick={checkToDo} style={Condstyles}> {elt.text}</Card.Title>
                <Form.Check type="checkbox" label="Done" checked={isChecked} onChange={checkToDo}/>
                <Card.Text>{day}</Card.Text>
                <Card.Text>{month}</Card.Text>
                <Card.Text>{year}</Card.Text>
            </div>
            
            
            <Button style={{fontSize:"20px", fontWeight:"bold", color:"white", padding:"10px 25px", border:"none", background:"red", borderRadius:"5px"}} variant="danger" onClick={deleteToDo}>Delete</Button>
        </Card.Body>
        </Card>
    )
}

export default SingleTask;