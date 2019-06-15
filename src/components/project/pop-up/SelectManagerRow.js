import React from "react";

export default ({manager, index, onSelect})=>(<tr>
    <th scope="row">{index}</th>
    <td>{manager.firstName}</td>
    <td>{manager.lastName}</td>
    <td>{manager.employeeId}</td>
    <td><input type="checkbox" name="manager" onChange = {()=>onSelect(manager)}/></td>
  </tr>)