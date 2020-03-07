import React from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import Friend from "./friend.jsx";
import FriendForm from "./friendForm";

export default class FriendList extends React.Component
{
    constructor(i)
    {
        super(i);

        this.state =
        {
            friends:[],
            loading:false
        }

        this.setFriends = this.setFriends.bind(this);
    }

    setFriends(friends)
    {
        this.setState({friends:friends, loading:false});
    }

    componentDidMount()
    {
        this.setState({loading:true});
        axiosWithAuth().get("/api/friends").then((response)=>
            {
                this.setFriends(response.data);
            }
        ).catch((error)=>
            {
                console.log(error);
                this.setState({loading:false});
            });
    }

    render()
    {
        return(
            <>
                My Friends!
                <br />
                {this.state.loading ? <img src="https://gifimage.net/wp-content/uploads/2018/04/loading-bar-gif-transparent-5.gif" alt="Loading" /> : null}
                {
                    this.state.friends.map((i, index)=>
                    {
                        return <Friend person={i} key={index} setFriends={this.setFriends} />;
                    })
                }
                <br />
                <FriendForm setFriends={this.setFriends} />
            </>
        )
    }
}