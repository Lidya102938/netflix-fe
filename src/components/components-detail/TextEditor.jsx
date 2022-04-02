import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import Button from "./Button";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (e) => {
    setEditorState(e);
    console.log(draftToHtml(convertToRaw(e.getCurrentContent())));
  };
  return (
    <>
      <div className="text-editor">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassname="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div className="button">
        <Button classButton={"secondary"} label="Submit" />
      </div>
    </>
  );
};

export default TextEditor;
