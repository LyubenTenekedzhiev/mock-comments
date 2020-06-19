import React from "react";
import "./App.css";

import { Comment } from "./model/comments.model";
import { MOCK_COMMENTS } from "./model/mock-comments";
import CommentsList from "./components/CommentsList/CommentsList";
import InputComment from "./components/InputComment/InputComment";

interface AppState {
  comments: Comment[];
}

class App extends React.Component<{}, AppState> {
  state = {
    comments: MOCK_COMMENTS,
  };
  newCommentHandler = (comment: Comment) => {
    this.setState(({ comments }) => ({ comments: this.state.comments.concat(comment) }));
  };

  deleteCommentHandler = (id: number) => {
    this.setState(({ comments }) => ({ comments: this.state.comments.filter((comment) => comment.id !== id) }));
  };

  render() {
    return (
      <div className='App'>
        <InputComment newCommentHandler={this.newCommentHandler} />
        <CommentsList comments={this.state.comments} deleteCommentHandler={this.deleteCommentHandler} />
      </div>
    );
  }
}

export default App;
