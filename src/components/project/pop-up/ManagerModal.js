import React from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { change } from "redux-form";
import SelectManagerTable from "./SelectManagerTable";
class ManagerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
      this.props.onRef(this);
  }
open =()=>{
    this.setState({modal: true});
}
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
onManagerSelect =(manager)=>{
  console.log("manager selec", manager)
  console.log("p : ", this.props)
  this.props.change('manager', "newValue");
}
  render() {
    const { users } =this.props;
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Select Manager</ModalHeader>
          <ModalBody>
           <SelectManagerTable  managers = {users} onSelect = {this.props.onManagerSelect}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
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
  return  bindActionCreators({change}, dispatch);

};

export default connect(mapStatetoProps, mapDisptachToProps)(ManagerModal);