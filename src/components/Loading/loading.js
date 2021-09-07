import React from "react";
import { WaveLoading } from "react-loadingg";
import { Button } from "react-bootstrap";

const Loading = (props) => {
    const { username } = props

    return (
        <>
            <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                Counting up all the {username}'s
            </div>
            <div className="centerDiv">
                <WaveLoading color="#147ffa" size="large" speed=".9" />
            </div>
        </>
    );
};

export default Loading;
