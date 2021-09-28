import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { get_total_count_by_name_and_year } from "../api/api"
import LogNameTotal from "./Log/LogNameTotal";
import Loading from "./Loading/loading";

const ShowTotalCountByNameAndYear = () => {
    const myurl = get_total_count_by_name_and_year;

    const [data, setData] = useState([]);
    const [SubmittedData, setSubmittedData] = useState(false);
    const [username, setUsername] = useState('')
    const [year, setYear] = useState(1880)
    const dialogue1 = `Type in a name and year to search for.`
    const dialogue2 = `The result returned will be the number of children born within a specific year with that name`

    const [searches, setSearches] = useState([]);
    const [doneLoading, setDoneLoading] = useState(false);
    const [foundZero, setFoundZero] = useState(false);

    const loadData = async () => {

        var bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('useryear', year);
        await fetch(myurl, {
            method: "POST",
            body: bodyFormData
        })
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    setFoundZero(true);
                    setSearches([...searches, [username, 0]]);
                }
                else {
                    setSearches([...searches, [username, data[0]["total"]]]);
                    setData(data);
                }
                setDoneLoading(true)
            }
            );
    };


    const Reset = () => {
        setSubmittedData(!SubmittedData);
        setDoneLoading(false);
        setFoundZero(false)
    }


    if (!SubmittedData) {
        return (
            <>
                <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                    <p>{dialogue1}</p>
                </div>
                <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                    <p>{dialogue2}</p>
                </div>

                <div style={{ justifyContent: 'center', display: 'flex' }}>

                    <div>
                        <label> Name:</label>
                        <input
                            className="m-2"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                </div >

                <div style={{ justifyContent: 'center', display: 'flex' }}>

                    <div>
                        <label>Year:</label>
                        <input

                            className="m-2"
                            type="int"
                            max={2018}
                            min={1880}
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        />
                    </div>
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

    if (!doneLoading) {
        return (
            <div>
                <Loading username={username} />
                <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                    <Button onClick={Reset}>Search A New Name</Button>
                </div>

            </div>
        )
    }
    if (foundZero) {
        return (
            <>
                <div className="m-3 " style={{ justifyContent: 'center', display: 'flex' }}>
                    Uh Oh...
                </div>

                <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                    We didn't find any &nbsp; <strong>{username}s</strong>
                </div>

                <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                    in our database
                </div>

                <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                    <Button onClick={Reset}>Search A New Name</Button>
                </div>
            </>
        );
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
                children born with the name "{username}" in the USA in 1880.
            </div>

            <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                <Button onClick={Reset}>Search A New Name</Button>
            </div>

            <LogNameTotal arrayOfSearches={searches} />
        </>
    )
}

export default ShowTotalCountByNameAndYear