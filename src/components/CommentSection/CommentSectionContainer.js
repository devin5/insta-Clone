import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState();

  return (
    <div>
      {props.comments.map(comment => (
        <Comment comment={comment} />
      ))}
      <CommentInput comments={props.comments} setComments={setComments}/>
    </div>
  );
};

export default CommentSection;
