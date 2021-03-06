[![YouTube Tutorial](https://www.youtube.com/watch?v=oQnojIyTXb8&list=WL&index=20&t=0s)](https://www.youtube.com/watch?v=oQnojIyTXb8&list=WL&index=20&t=0s)

## Person List

```js
import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

# Person Input

```js
import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    /** this.setState({ id: event.target.value }) */
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
      //id: 0, This is for the delete request
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    // Delete Request
    //axios
    //.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, { user } )
    //.then(res => {
    //  console.log(res);
    //  console.log(res.data);
    //});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name -
          {/** Delete Request - <input type="number" name="id" onChange={this.handleChange} /> */}
          <input type="text" name="name" onChange={this.handleChange} />
        </label>

        <button type="submit">Add User</button>
      </form>
    );
  }
}
```
