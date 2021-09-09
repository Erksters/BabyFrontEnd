import React from "react";

const Sources = () => {
    return (
        <>
            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                I personally do not own nor have I created any data tables for this website.
            </div>

            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                All data belongs to, and can be found, on Dolthub's data repositories
            </div>

            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                To find more information about the data go to
            </div>

            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                <a href="https://www.dolthub.com/repositories/dolthub/us-baby-names">dolthub.com</a>
            </div>

            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                or
            </div>

            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                <a href="https://www.ssa.gov/oact/babynames/">Social Security Administration USA</a>
            </div>

            <div className='m-3' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                The data is as accurate as Dolthub and it's developers have provided. If you find any inaccuracies, then submit your concerns there.
            </div>

            <div className='m-3' style={{ justifyContent: 'center', display: 'flex' }}>
                <strong>Erick Saenz</strong>
            </div>
        </>
    )
}

export default Sources