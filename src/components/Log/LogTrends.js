import React from "react";
import Chart from "r-chart";
const LogTrends = props => {
    const { trendData } = props;

    const formatData = () => {
        let k = 1880;
        let trendLength = 139;
        for (let j = 0; j < trendLength; j++) {
            if (trendData[j]["key"] !== k) {
                let tempDict = { "key": k, "value": 0 }
                trendData.splice(j, 0, tempDict)
            }
            k++;
        }
    }

    formatData();

    const myKeys = () => {
        let tempArray = []
        for (let i = 1880; i < 2019; i++) {
            tempArray.push(i)
        }
        return (tempArray)
    }

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
