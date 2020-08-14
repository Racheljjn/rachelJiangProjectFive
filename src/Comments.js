// this part is for user comments
import React, { Component } from "react";
import firebase from "./firebase";
import Selection from "./Selection";
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      user: {
        name: "",
        input: "",
      },
      showForm: false,
      restaurant: "",
    };
  }

  displayResult = (e, userChoice) => {
    e.preventDefault();
    const restaurant = userChoice[0].restaurant;
    this.setState({ showForm: true });
    this.setState({ restaurant: restaurant });
  };

  componentDidMount() {
    // pull data from firebase
    const dbRef = firebase.database().ref();
    console.log(dbRef);
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const userComments = [];

      for (let userName in data) {
        const allItems = {
          id: userName,
          user: {
            name: data[userName].name,
            input: data[userName].input,
          },
        };
        userComments.push(allItems);
        console.log(allItems);
      }

      this.setState({ comments: userComments });
    });
  }

  userChoice = (e) => {
    this.setState({ user: { ...this.state.user, name: e.target.value } });
  };
  handleChange = (e) => {
    this.setState({ user: { ...this.state.user, input: e.target.value } });
  };

  handleClick = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();

    dbRef.push(this.state.user);

    this.setState({ user: { name: "", input: "" } });
  };

  deleteComment = (id) => {
    const dbRef = firebase.database().ref();
    dbRef.child(id).remove();
  };

  render() {
    return (
      // get user's comments
      <section className="userInput">
        <Selection displayResult={this.displayResult} />
        <form
          action="submit"
          style={{ display: this.state.showForm ? "block" : "none" }}
        >
          {/* <div><label htmlFor="name" className="sr-only">
            name
          </label> */}
          <div>
          <input
            id="name"
            placeholder="restaurant..."
            value={this.state.user.name}
            onChange={this.userChoice}
          />
          </div>
          {/* <label htmlFor="comments" className="sr-only">
            comments
          </label> */}

          <textarea
            id="comments"
            rows="5"
            cols="40"
            value={this.state.user.input}
            placeholder="say something!"
            onChange={this.handleChange}
            required
          />

          <div>
            <button onClick={this.handleClick}>post review</button>
          </div>
        </form>
        <ul className="listItem">
          {/* map through each comment inside of comments array */}
          {this.state.comments.map((piece) => {
            return (
              <li key={piece.id}>
                <p>{piece.user.name}</p>
                <p>{piece.user.input}</p>

                <div className="btn">
                  <button
                    onClick={() => {
                      this.deleteComment(piece.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Comments;
