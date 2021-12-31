import React, { useState } from "react";

function RentTable(house) {
    const testBuyPrice = house.house.buyPrice;
    const [rent, setRent] = useState();
    const handleRentChange = (e) => {
        setRent(e.target.value)
    };
    let rentSplit = [];
    rentSplit.push(rent);
    rentSplit.push(parseInt(rent) + 10);
    rentSplit.push(parseInt(rent) + 20);
    rentSplit.push(parseInt(rent) - 20);
    rentSplit.push(parseInt(rent) - 10);
    rentSplit = rentSplit.sort();
    let buyArray = [];
    buyArray.push(testBuyPrice * 1.015);
    buyArray.push(testBuyPrice * 1.03);
    buyArray.push(testBuyPrice * 0.985);
    buyArray.push(testBuyPrice * 0.97);
    buyArray.push(testBuyPrice);

    function rentCalc(rent, sale) {
        return (rent * 52) - (sale / 30);
    }
    return (<div>
        <h2>Rent Estimations</h2>
        <label htmlFor="rentEst">Estimated Rent: </label>
        <input id="rentEst" type="number" value={rent} onChange={handleRentChange}></input>
        <br />
        <br />
        <table className="tablecentre">
            <tr>
                <th>Buy Price</th>
                {rentSplit.map(r => {
                    return <th>{r}</th>
                })}
            </tr>
            {buyArray.sort().map(b => {
                for (let i = 0; i <= 4; i++) {
                    return <>
                        <tr><td>{Math.floor(b)}</td>
                            <td>{Math.floor(rentCalc(rentSplit[i], b))}</td>
                        </tr>
                    </>
                }
            })
            }
        </table>
        <h1>{house.house.buyPrice}</h1>
    </div >
    )
}

export default RentTable;
