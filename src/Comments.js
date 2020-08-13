// this part is for user comments
import React, { Component } from "react";
import firebase from "./firebase";
import Selection from "./Selection";
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      userInput: "",
      showForm: false,
    };
  }

  displayResult = (e, userChoice) => {
    e.preventDefault();
    const restaurantName = userChoice[0].restaurant;
    this.setState({ showForm: true });
    
  };

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const userComments = [];

      for (let userName in data) {
        const allItems = {
          id: userName,
          comment: data[userName],
        };
        userComments.push(allItems);
      }

      this.setState({ comments: userComments });
    });
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);
    this.setState({ userInput: "" });
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
          <label htmlFor="comments" className="sr-only">
            comments
          </label>
          <textarea
            id="comments"
            rows="5"
            cols="40"
            value={this.state.userInput}
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
          {this.state.comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <div>
                  <button
                    onClick={() => {
                      this.deleteComment(comment.id);
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
