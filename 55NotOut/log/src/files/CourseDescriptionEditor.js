import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import drafttohtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
const { htmlToText } = require('html-to-text');

export class CourseDescriptionEditor extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      // editorState: props.draft,
      myhtml: '',
    };
  }

  componentDidMount = () => {
    if (this.props !== undefined && this.props.value !== undefined) {
      console.log(this.props.value);
      this.setState({ myhtml: this.props.value });
      var decodedStringAtoB = atob(this.props.value);
      console.log(decodedStringAtoB);
      const blocksFromHtml = htmlToDraft(decodedStringAtoB);
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
      this.setState({ editorState: EditorStatee });
    }
  };

  setdata = () => {
    // console.log(this.state.editorState);
    let draft = drafttohtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
    console.log(draft + '   oooooooooooooooohello ');

    // this.props.mydraftdescription(draft);
  };

  onEditorStateChange = (editorState) => {
    let draft = drafttohtml(convertToRaw(editorState.getCurrentContent()));
    this.setState({ editorState });
    this.props.mydraftdescription(draft);
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
      </>
    );
  }
}

export default CourseDescriptionEditor;
