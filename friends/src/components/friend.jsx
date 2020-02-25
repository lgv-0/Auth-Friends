import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

export default function Friend(props)
{
    let PersonInfo = props.person;

    let [editingEmail, sEditingEmail] = useState(false);
    let [email, sEmail] = useState(PersonInfo.email);
    
    let DelThisPeron = function()
    {
        axiosWithAuth().delete(`/api/friends/${PersonInfo.id}`).then((response)=>
        {
            props.setFriends(response.data);
        }).catch(error=>
        {
            console.log(error);
        });
    }

    let handleKeyDown = function(e)
    {
        if (e.key == "Enter")
        {
            sEditingEmail(false);
        
            axiosWithAuth().put(`/api/friends/${PersonInfo.id}`, {...PersonInfo, email:email}).then((response)=>
            {
                props.setFriends(response.data);
            }).catch((error)=>
            {
                console.log(error);
            });
        }
    }

    return (
        <>
            <h1>{PersonInfo.name}, age {PersonInfo.age}</h1>
            {
                editingEmail ? 
                    <>
                        <input type="text" onChange={(e)=>{sEmail(e.target.value)}} value={email} onKeyDown={handleKeyDown} />
                        <br />
                    </>
                    : 
                    <h4 onClick={()=>{sEditingEmail(true)}}>{email}</h4>
            }
            <button onClick={()=>{DelThisPeron()}}>Delete</button>
        </>
    )
}