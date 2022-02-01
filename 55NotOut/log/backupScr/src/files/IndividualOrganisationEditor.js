import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import drafttohtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
const { htmlToText } = require('html-to-text');

export class IndividualOrganisationEditor extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      // editorState: props.draft,
    };
  }

  componentDidMount = () => {};

  setdata = () => {
    // console.log(this.state.editorState);
    let draft = drafttohtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
    console.log(draft + '   oooooooooooooooohello ');

    this.props.mydraftdescription(draft);
  };

  onEditorStateChange = (editorState) => {
    let draft = drafttohtml(convertToRaw(editorState.getCurrentContent()));
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;
    return (
      <>
        <Editor
          editorState={editorState}
          toolbarClassName='toolbarClassName'
          wrapperClassName='wrapperClassName'
          editorClassName='editorClassName'
          onEditorStateChange={this.onEditorStateChange}
        />
        <div className='btn' onClick={this.setdata}>
          click me
        </div>
      </>
    );
  }
}

export default IndividualOrganisationEditor;
