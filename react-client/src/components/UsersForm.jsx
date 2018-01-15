import React from 'react';
import User from './User.jsx';
import {Modal, Button, ListGroup} from 'react-bootstrap';

class UsersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    this.props.findUsers();
    this.setState({
      showModal: !this.state.showModal
    })
  }
  render() {
    return (
      <div>
        <Button
          onClick={()=> {this.showModal()}}
        >
          Invite
        </Button>
        <Modal show={this.state.showModal}>
          <Modal.Body>
            <Button
              onClick={()=> {this.showModal()}}
            >
              Close
            </Button>
            <ListGroup>
              { this.props.otherUsers.map((user, i) => <User user={user} key={i}/>)}
            </ListGroup>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default UsersForm;