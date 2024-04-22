import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";
import { useForm } from "react-hook-form";
import { TweetContext } from "../context/context";
import { useContext, useState } from "react";
import axios from "axios";
export default function TweetEditorForm() {
  const API_URL = "https://662614e1052332d553218bb3.mockapi.io/api/post/tweets";
  const { post, setPost } = useContext(TweetContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    let arr = {
      id: Math.random(),
      "tweet-avatar": "/public/assets/Profile-Photo.png",
      "tweet-content": {
        "tweet-body": {
          "tweet-title": {
            "tweet-title-author": "Bradley",
            "tweet-author": "Bradley",
            "tweet-time": "now",
          },
          "tweet-text": data.tweet,
        },
        "tweet-actions": {
          reply: "0",
          retweet: "0",
          react: "0",
        },
      },
    };
    reset();

    axios.post(API_URL, arr).then((response) => {
      console.log("New post added:", response.data);
    });
  }

  return (
    <form
      className="tweet-editor-form flex-auto"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <TweetEditorInput register={register} />
      <TweetEditorButtons />
    </form>
  );
}
