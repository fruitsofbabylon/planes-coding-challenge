import React from 'react';
import {data} from './Data.js';

function Output(props) {

    let rows = props.results.map((result, id) => 
        <tr>
            <td>{data.doubles.find((double) => double.id == id).name}</td>
            <td> {result ? "yes" : "no"} </td>
        </tr>
    ) 
    return (
        <table id="center">
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Output;