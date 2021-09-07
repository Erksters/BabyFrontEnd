
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { base_url, get_total_count_by_name } from "../api/api"
import Log from "./Log/log";
import Loading from "./Loading/loading";

const ShowTotalCountByName = () => {

    const [data, setData] = useState([]);
    const [SubmittedData, setSubmittedData] = useState(false);
    const [username, setUsername] = useState('')
    const dialogue1 = `Type in a name to search for.`
    const dialogue2 = `The result returned will be the number of children born from 1880 to 2018 with that name`

    const [searches, setSearches] = useState([]);
    const [doneLoading, setDoneLoading] = useState(false);

    const loadData = async () => {
        console.log("pinging:", base_url + get_total_count_by_name(username))
        await fetch(base_url + get_total_count_by_name(username), {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data)
                setData(data);
                setSearches([...searches, [username, data[0]["total"]]])
                setDoneLoading(true)
            }
            );
    };

    if (!SubmittedData) {
        return (
            <>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <p>{dialogue1}</p>
                </div>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <p>{dialogue2}</p>
                </div>

                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <input
                        className="m-2"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div >

                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <Button
                        className="m-2"
                        onClick={() => {
                            setSubmittedData(true);
                            loadData();
                        }}>
                        Start counting!
                    </Button>
                </div>
            </>
        );
    }

    const Reset = () => {
        setSubmittedData(!SubmittedData);
        setDoneLoading(false);
    }

    if (!data.length || !doneLoading) {
        return (
            <div>
                <Loading username={username} />
            </div>
        )
    }

    return (
        <>
            <div className="m-3 " style={{ justifyContent: 'center', display: 'flex' }}>
                There were a total of
            </div>

            <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                <strong> {data[0]["total"].toLocaleString("en-US")} </strong>
            </div>

            <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                children born with the name "{username}" in the USA since 1880.
            </div>

            <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                <Button onClick={Reset}>Search A New Name</Button>
            </div>

            <Log arrayOfSearches={searches} />
        </>
    )
}

export default ShowTotalCountByName