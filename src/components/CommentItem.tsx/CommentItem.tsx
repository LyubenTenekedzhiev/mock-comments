import React, { ReactElement } from "react";

import classes from "./CommentItem.module.css";

interface Props {
  text: string;
  author: string;
  id: number;
  deleteCommentHandler: (id: number) => void;
}

function CommentItem({ text, author, id, deleteCommentHandler }: Props): ReactElement {
  
  const getCommentIdHandler = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    deleteCommentHandler(id);
  };

  return (
    <div className={classes.CommentItem}>
      <h2>
        {text} : {author}
      </h2>
      <span onClick={getCommentIdHandler}>X</span>
    </div>
  );
}

export default CommentItem;
