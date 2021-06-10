import React, { Component } from 'react';

class AddPlayerForm extends Component {
  //no needs that state statement

  playerInput = React.createRef();    //quick and easy way to get the value of the input field

  handleSubmit = (e) => {
    e.preventDefault();   //if not, it will result browser to post a request back to the server, which cause app reload and lose all the application state in the process
    this.props.addPlayer(this.playerInput.current.value); //pass it here
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          ref={this.playerInput}    //refer back to the React.createRef()
          placeholder="Enter a player's name"
        />
        
        <input 
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;