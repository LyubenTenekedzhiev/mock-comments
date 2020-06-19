import React, { ReactElement } from "react";

import { Comment } from "../../model/comments.model";
import CommentItem from "./../CommentItem.tsx/CommentItem";

interface Props {
  comments: Comment[];
  deleteCommentHandler: (id: number) => void;
}

function CommentsList({ comments, deleteCommentHandler }: Props): ReactElement {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <CommentItem
            key={comment.id}
            text={comment.text}
            author={comment.author}
            id={comment.id}
            deleteCommentHandler={deleteCommentHandler}
          />
        );
      })}
    </div>
  );
}

export default CommentsList;
