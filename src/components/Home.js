import React from "react";
import ShowTotalCountByName from "./Show_total_count_by_name";

const Home = () => {
    return (
        <>
            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                This site is limited to First Name searches only.
            </div>

            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                To search by name and year, state, or to see yearly trends click the search menu above!
            </div>

            <div className='m-3' style={{}}>
                <ShowTotalCountByName />
            </div>
        </>
    )
}

export default Home