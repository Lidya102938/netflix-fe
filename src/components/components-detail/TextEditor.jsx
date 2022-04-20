import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import Button from "./Button";
import api from "../../config/api";

const TextEditor = ({ idMovies, title, data, setDataComment, userId }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState("");

  const onEditorStateChange = (e) => {
    setEditorState(e);
    setText(draftToHtml(convertToRaw(e.getCurrentContent())));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await api.createComment(data, idMovies, title, text);
    if (result) {
      setDataComment(
        result.data.filter((el) => el.filmId === parseInt(idMovies))
      );
    }
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
