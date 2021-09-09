import React from "react";
import Chart from "r-chart";
const LogTrends = props => {
    const { trendData } = props;
    console.log(trendData)
    let k = 1880;
    let trendLength = trendData[trendData.length - 1]["key"] - 1880;
    const formatData = () => {

        console.log("trendlength", trendLength)
        for (let j = 0; j < trendLength; j++) {
            // console.log(trendData[j]["key"], "//", k, j)
            if (trendData[j]["key"] !== k) {
                let tempDict = { "key": k, "value": 0 }
                trendData.splice(j, 0, tempDict)
            }
            k++;
        }


    }

    formatData();
    if (trendData.length < 139) {

        for (let j = trendLength; j < 139; j++) {
            console.log(j)
            let tempDict = { "key": 1880 + j, "value": 0 }
            console.log(tempDict)

            trendData.splice(j, 0, tempDict)

        }

        trendData.splice(trendData.length - 1, 1)
        console.log("3", trendData)
    }



    const myKeys = () => {
        let tempArray = []
        for (let i = 1880; i < 2019; i++) {
            tempArray.push(i)
        }
        return (tempArray)
    }
    console.log("2", trendData)


    return (
        <>
            <div >
                <div className="m-3" style={{ justifyContent: 'center', display: 'flex' }}>
                    <Chart
                        data={[
                            {
                                type: 'line',
                                title: 'data1',
                                color: 'blue',
                                points: trendData,
                            },
                        ]}
                        keys={myKeys()}
                    />
                </div>
            </div>

        </>
    );
};

export default LogTrends;
