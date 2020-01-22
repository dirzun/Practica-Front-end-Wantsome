import React, {Component} from 'react';
import UserCard from "./UserCard";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Ovidiu Grigoras',
          age: 29.9
        }
      ]
    }
  }

  handleOnChange = (event) => {
    event.preventDefault();

  };

  createUser = (event) => {
    event.preventDefault();
    const updateData = {
      name: this.name.value,
      age: this.age.value
    };
    this.setState({data: [...this.state.data, updateData]})
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.createUser}>
          <input type="text" placeholder='name' ref={input => this.name = input} onChange={this.handleOnChange}/>
          <input type="text" placeholder='age' ref={input => this.age = input}/>
          <button type='submit'> Save User</button>
        </form>

        {this.state.data.map((obj, idx) => {
          return  <UserCard age={obj.age} name={obj.name} key={idx}/>
        })}
      </div>
    );
  }
}

export default Users;
