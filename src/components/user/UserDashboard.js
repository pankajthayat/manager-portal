import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import UserForm from "./UserForm";
import * as userAction from "../../actions/userActions";
import SearchBar from "./SearchBar";
import ViewUser from "./ViewUser";
import selector from "../../common/selector";

class UserDashboard extends React.Component {
  state={
    sortName:undefined,
    filterName: "firstName",
    filterText: undefined,
  }
  componentDidMount() {
    this.props.getUsers();
  }
  onSortClick=(sortName)=>{
    this.setState({sortName})
  }
  onFilterTextChange=(filterText)=>{
    this.setState({filterText})
  }
  render() {
    const { users, deleteUser, updateUser, editUser,sortUsers } = this.props;
    const { sortName, filterName, filterText } = this.state;
    console.log("sele : ", selector(users, sortName, filterName, filterText))
    return (
      <div className="container">
        <UserForm />
        <SearchBar 
        onFilterTextChange={this.onFilterTextChange}
        onSortClick = {this.onSortClick}
        />
        <ViewUser
  
          users={selector(users, sortName, filterName, filterText)}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    users: state.user.users || []
  };
};
const mapDisptachToProps = dispatch => {
  return {
    getUsers: () => dispatch(userAction.getUsers()),
    deleteUser: user => dispatch(userAction.deleteUser(user)),
    updateUser: user => dispatch(userAction.updateUser(user)),
    editUser: user => dispatch(userAction.editUser(user)),
  };
};

export default connect(
  mapStatetoProps,
  mapDisptachToProps
)(UserDashboard);
