import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import drafttohtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
const { htmlToText } = require('html-to-text');

export class AboutRoleShowEditor extends Component {
  constructor(props) {
    super(props);
    console.log(props.value);
    this.state = {
      editorState: EditorState.createEmpty(),
      myhtml: '',
    };
  }

  componentDidMount = () => {
    console.log(this.props.value);
    this.setState({ myhtml: this.props.value });
    const blocksFromHtml = htmlToDraft(this.props.value);

    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    console.log(contentState);
    const EditorStatee = EditorState.createWithContent(contentState);
    console.log(EditorStatee);
    console.log('setting data');
    this.setState({ editorState: EditorState.createEmpty() });
    setTimeout(() => {
      this.setState({ editorState: EditorStatee });
    }, 1000);
  };

  render() {
    return (
      <>
        <Editor
          editorState={this.state.editorState}
          toolbarClassName='toolbarClassName'
          wrapperClassName='wrapperClassName'
          editorClassName='editorClassName'
        />
      </>
    );
  }
}

export default AboutRoleShowEditor;
