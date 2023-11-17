import React, { useRef, useState } from "react";
import { StyleSheet, View, Button, Image, Text, ScrollView } from "react-native";
import {
  actions,
  RichEditor,
  defaultActions,
  RichToolbar,
} from "react-native-pell-rich-editor";


const PostRichText = () => {
  const editorRef = useRef(null);

  const handleInsertImage = () => {
    const imageSource = require('../assets/profile.png');
    const imageURL = Image.resolveAssetSource(imageSource).uri;
    editorRef.current?.insertImage(imageURL);
  };

  const handleSubmission = () => {
    editorRef.current?.getContentHtml().then((html) => {
      console.log(html);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <RichToolbar
        editor={editorRef}
        style={{ backgroundColor: 'white' }}
        iconSize={24}
        onPressAddImage={handleInsertImage}
      />
      <Button title="Insert Image" onPress={handleInsertImage} style={{ margin: 10 }}/>
      <Button title="Submit" onPress={handleSubmission} style={{ margin: 10 }}/>
      <RichEditor
        ref={editorRef}
        placeholder="Start typing..."
        style={{ flex: 1, backgroundColor: 'white', padding: 15 }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  /********************************/
  /* styles for html tags */
  a: {
    fontWeight: "bold",
    color: "purple",
  },
  div: {
    fontFamily: "monospace",
  },
  p: {
    fontSize: 30,
  },
  /*******************************/
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#F5FCFF",
  },
  editor: {
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
  },
  rich: {
    minHeight: 300,
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tib: {
    textAlign: "center",
    color: "#515156",
  },
});


export default PostRichText;