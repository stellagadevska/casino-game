import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setComments } from "../redux/actions";
import "./Comments.css";

const Comments = () => {
  const dispatch = useDispatch();
  const title = "Comments";
  const comments = useSelector((state) => state.comments);
  // const selectedNumbers = useSelector((state) => state.selectedNumbers);
  const time = useSelector((state) => state.time);

  useEffect(() => {
    if (time === 0) {
      loadComments();
    }
  }, [time]);

  const loadComments = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
      );
      const data = await response.json();

      const sortedComments = data.sort((a, b) => b.id - a.id);
      const firstTenComments = sortedComments.slice(0, 10);

      dispatch(setComments(firstTenComments));
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
