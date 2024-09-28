import React from 'react';

const FCommonTable = ({columns, rows}) => {
    return (
        <>
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        {
                            columns.map(column => <th key={column}>{column}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, ridx) => {
                            console.log(row)
                            return (

                                    <tr key={`${ridx}`}>
                                        {
                                            columns.map(column => {
                                                if (column === 'action') {
                                                    return <td key={`${ridx}${column}`}>
                                                                <button>Edit</button>
                                                                <button>Delete</button>
                                                            </td>
                                                }
                                                return <td key={`${ridx}${column}`}>{row[column]}</td>
                                            })
                                        }
                                    </tr>
                            )
                        })
                    }
                    {/* <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>F88</td>
                        <td>F88@test</td>
                        <td>VN</td>
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}

export default FCommonTable
