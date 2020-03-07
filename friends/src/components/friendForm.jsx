import React from "react";
import { axiosWithAuth } from "./axiosWithAuth";

export default class FriendForm extends React.Component
{
    addFriend(data)
    {
        let Build =
            {
                name:data.target.name.value,
                age:parseInt(data.target.age.value),
                email:data.target.email.value
            }
        
        axiosWithAuth().post("api/friends", Build).then((response)=>
        {
            this.props.setFriends(response.data);
        }).catch((error)=>
        {
            console.log(error);
        })
    }

    render()
    {
        return (
            <form onSubmit={(e)=>{e.preventDefault(); this.addFriend(e)}}>
                <input type="text" name="name" placeholder="Name" />
                <br />
                <input type="number" name="age" placeholder="Age" />
                <br />
                <input type="text" name="email" placeholder="email" />
                <br />
                <button type="submit">Add Friend</button>
            </form>
        );
    }
}