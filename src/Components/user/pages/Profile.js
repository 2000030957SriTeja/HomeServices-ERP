import { Component } from "react";
const Profile=()=>{
    return(
        <>
        <div  style={{color:"black"}}className="container emp-profile">
        <form method="">
            <div className="row">
                <div className="col-md-4">
                    <img src="teju.png"></img>

                    </div>
                    <div className="col-md-6">
                    <div className="profile-head">
                    <h5 style={{color:"black"}}>Teju</h5>
                    <p></p>

</div>
                    </div>

            </div>
        </form>
        </div>
        </>
    )
}
export default Profile

/* import { useState } from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from './tools';

export default function Profile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return <div>
        <Group>
            <h2>Name:</h2> {stored.name}
        </Group>
        <Group>
            <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <h2>Favourite Color:</h2> <ColorBox color={stored.color}/>
        </Group>
        <Group>
            <button
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
} */