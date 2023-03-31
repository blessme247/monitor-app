import React from 'react'
import "./table.scss"

const Table = ({headers, data}) => {
  return (
    <table className="">
        <thead className="">
          <tr>
            {headers.map(header => {
              return (
                <th key={header}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
            {data.map((datum, index) => {
              return (
                <tr key={index}>
                  {datum.map((d, index) => {
                    return ( 
                      <td key={index} >
                          <span>{d}</span>                      
                      </td> )

                  })}
                </tr>
              );
            })}
          </tbody>
      </table>
  )
}

export default Table