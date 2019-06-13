import React from "react";
import { userInfo } from "os";

export default ({ user, deleteUser, editUser }) => (
  <div className = "view-user">
    <div className="row form-group">
      <div className="col-sm-6">
        <input
          class="form-control"
          type="text"
          placeholder={user.firstName}
          readOnly
        />
      </div>
      <div className="col-sm-4">
        <span className="button-space">
          <button
            type="button"
            className="btn btn-outline-dark custom"
            onClick={() => editUser(user)}
          >
            Edit
          </button>
        </span>
      </div>
    </div>
    <div className="row form-group">
      <div className="col-sm-6">
        <input
          class="form-control"
          type="text"
          placeholder={user.lastName}
          readOnly
        />
      </div>
      <div className="col-sm-4">
        <span className="button-space">
          <button
            type="button"
            className="btn btn-outline-dark custom"
            onClick={()=>deleteUser(user)}
          >
            Delete
          </button>
        </span>
      </div>
    </div>
    <div className="row form-group">
      <div className="col-sm-6">
        <input
          class="form-control"
          type="text"
          placeholder={user.employeeId}
          readOnly
        />
      </div>
    </div>
  </div>
);
