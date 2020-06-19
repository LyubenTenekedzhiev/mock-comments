import React, { Component } from "react";
import { Comment } from "../../model/comments.model";

interface Props {
  newCommentHandler: (comment: Comment) => void;
}
interface State {
  author: string;
  text: string;
}

export default class InputComment extends Component<Props, State> {
  state = {
    author: "",
    text: "",
  };

  createCommentHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.newCommentHandler(new Comment(this.state.author, this.state.text));
    this.setState({ author: "", text: "" });
  };

  newAuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ author: event.target.value });
  };

  newTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.createCommentHandler} style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "3rem"}}>
        <label htmlFor='author'>Author:</label>
        <input type='text' name='author' onChange={this.newAuthorHandler} value={this.state.author} required />
        <label htmlFor='text'>Comment:</label>
        <input type='text' name='text' onChange={this.newTextHandler} value={this.state.text} required />
        <button type='submit'>POST</button>
      </form>
    );
  }
}
