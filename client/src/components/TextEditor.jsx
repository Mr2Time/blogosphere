import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);
    console.log(htmlContent);
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '300px' }}>
        <Editor
        
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
            inline: { inDropdown: false },
            list: { inDropdown: false },
            textAlign: { inDropdown: false },
            history: { inDropdown: false },

          }}
          placeholder="Start typing..."
          
        />
      </div>
      <button onClick={handleSave} style={{ marginTop: '10px' }}>Save Content</button>
    </div>
  );
}

export default TextEditor;
