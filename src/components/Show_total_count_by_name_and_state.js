import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { get_total_count_by_name_and_state } from "../api/api"

import Loading from "./Loading/loading";
import LogNameStateTotal from "./Log/LogNameStateTotal";

const ShowTotalCountByNameAndState = () => {
    const myurl = get_total_count_by_name_and_state;

    const [data, setData] = useState([]);
    const [SubmittedData, setSubmittedData] = useState(false);
    const [username, setUsername] = useState('')
    const [state, setState] = useState("AL")
    const dialogue1 = `Type in a name and state to search for.`
    const dialogue2 = `The result returned will be the number of children born within that state with that name from 1880 to 2018`

    const [searches, setSearches] = useState([]);
    const [doneLoading, setDoneLoading] = useState(false);
    const [foundZero, setFoundZero] = useState(false);

    const loadData = async () => {

        var bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('userstate', state);
        await fetch(myurl, {
            method: "POST",
            body: bodyFormData
        })
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    setFoundZero(true);
                    setSearches([...searches, [username, state, 0]]);
                }
                else {
                    setSearches([...searches, [username, state, data[0]["total"]]]);
                    setData(data);
                }
                setDoneLoading(true)
            }
            );
    };

    const Reset = () => {
        setSubmittedData(!SubmittedData);
        setDoneLoading(false);
        setFoundZero(false);
        setState("")
    }

    if (!SubmittedData) {
        return (
            <>
                <div className='m-3' style={{ justifyContent: 'center', display: 'flex' }}>
                    <p>{dialogue1}</p>
                </div>
                <div className='m-3' style={{ justifyContent: 'center', display: 'flex' }}>
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
                        <label>State:</label>
                        <select onChange={e => setState(e.target.value)}>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
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
                    We didn't find any &nbsp; <strong>{username}'s</strong>
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
                children born with the name "{username}" in the state "{state}" since 1880.
            </div>

            <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                <Button onClick={Reset}>Search A New Name</Button>
            </div>

            <LogNameStateTotal addState arrayOfSearches={searches} />
        </>
    )
}

export default ShowTotalCountByNameAndState