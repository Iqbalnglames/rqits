import  React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import axios from 'axios'

const Writer = () => {

    const [ editorState, setEditorState ] = useState(
        () => EditorState.createEmpty(),
    )
    const addMateri = async(e) => {
        e.preventDefault()

        const contentState = editorState.getCurrentContent()

        const contentStateJSON = JSON.stringify(convertToRaw(contentState))

        try{
            await axios.post('api endpoint' , {content: contentStateJSON})
        }
        catch (error){
            console.log(error)
        }
    }
     
     function uploadImageCallBack(file) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "https://api.imgur.com/3/image");
          xhr.setRequestHeader("Authorization", "Client-ID fbeb05865023b8d");
          const data = new FormData();
          data.append("image", file);
          xhr.send(data);
          xhr.addEventListener("load", () => {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            resolve(response);
          });
          xhr.addEventListener("error", () => {
            const error = JSON.parse(xhr.responseText);
            console.log(error);
            reject(error);
          });
        });
      }
    return(        
        <form encType='form/data' onSubmit={addMateri}>            
        <div className="px-10 py-2">
            <button type='submit' className='btn btn-alert mb-4'>Posting</button>
    <Editor
    editorClassName='height-200'
    editorState={editorState}
    onEditorStateChange={setEditorState}
    placeholder={"Tulis Artikel"}
    toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: false },
        },
    }}
    />
  </div>
    </form>
)
}

export default Writer