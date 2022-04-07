import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import Button from "./Button";
import { getDatabase, push, ref } from "firebase/database";

const TextEditor = ({ idMovies, title, data }) => {
  const db = getDatabase();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState("");

  const onEditorStateChange = (e) => {
    setEditorState(e);
    setText(draftToHtml(convertToRaw(e.getCurrentContent())));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    push(ref(db, `comment/${idMovies}`), {
      image: data.image,
      fullName: data.fullName,
      title: title,
      textComment: text,
    })
      .then(() => {
        console.log("succes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="text-editor">
        <form onSubmit={onSubmit}>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassname="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
          <div className="button">
            <Button classButton={"secondary"} label="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default TextEditor;
