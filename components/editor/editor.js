import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

// import { message } from "antd";

const Edit = () => {
  const editorRef = useRef(null);

  const [state, setState] = useState(
    "<p><strong>Job Description</strong></p><p>&nbsp;</p>"
  );
  console.log(state);

  //   const [messageApi, contextHolder] = message.useMessage();

  //   to change the size of bullet points accordingly
  const handleExecCommand = (evt, editor) => {
    let cmd = evt.command;
    if (cmd === "FontSize" || cmd === "FontName") {
      let val = evt.value;
      let node = editor.selection.getNode();
      let nodeParent = node.parentNode;
      if (node.nodeName === "SPAN" && nodeParent.nodeName === "LI") {
        if (cmd === "FontSize") {
          editor.dom.setStyle(nodeParent, "font-size", val);
        }
        if (cmd === "FontName") {
          editor.dom.setStyle(nodeParent, "font-family", val);
        }
      } else if (node.nodeName === "UL" || node.nodeName === "OL") {
        let li = editor.dom.select("li", node);
        if (cmd === "FontSize") {
          editor.dom.setStyle(li, "font-size", val);
        }
        if (cmd === "FontName") {
          editor.dom.setStyle(li, "font-family", val);
        }
      }
    }
  };

  return (
    <div className="body">
      {/* {contextHolder} */}

      <div className="text-editor ">
        {/* <form
        > */}
        <Editor
          apiKey="cxf2qo25od9zprfi6zjjx6nxqa6xdm3c4b9h3uyq1981iunr"
          onInit={(evt, editor) => (editorRef.current = editor)}
          //   initialValue="Start writing..."
          value={state}
          onEditorChange={(content) => setState(content)}
          onExecCommand={handleExecCommand}
          init={{
            height: 300,
            placeholder: "Start writing here...",
            menubar: false,
            statusbar: false,
            plugins: [
              //   "advlist",
              //   "autolink",
              "lists",
              "link",
              //   "image",
              //   "charmap",
              //   "preview",
              //   "anchor",
              //   "searchreplace",
              //   "visualblocks",
              //   "code",
              //   "fullscreen",
              //   "insertdatetime",
              //   "media",
              //   "table",
              //   "code",
              //   "wordcount",
            ],
            toolbar:
              "undo redo  " +
              "bold italic  " +
              " bullist numlist link |" +
              "removeformat ",
            // font_size_formats:
            //   "8pt 10pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 28pt 36pt 48pt 72pt",

            // image_list: [
            //   {
            //     title: "Sample Img",
            //     value:
            //       "https://res.cloudinary.com/domyp6djh/image/upload/v1685970572/468x200_af2w60.png",
            //   },
            // ],
            content_style:
              "body { font-family:Times new roman,Arial,sans-serif;font-size:18px  }",
          }}
        />

        {/* <div className="form-fixed-btn">
          <button
            type="submit"
            //   disabled={disabled}
            class="m-3 btn btn-primary"
          >
            Save
          </button>
        </div> */}
        {/* </form> */}
      </div>
    </div>
  );
};

export default Edit;
