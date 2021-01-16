import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

// import React from "react";

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
export default function Internal1() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");
  const form = useRef(null);

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(file);

    try {

      const formData = new FormData(form.current);
      // formData.append('file', file);
      console.log(formData)
      formData.append('courseCode', 'CS301')
      formData.append('year', '2020')
      formData.append('batch', '2022')
      formData.append('internalExamNo', '1')

      const res = await axios.post('http://localhost:5000/api/marks/internalexam', formData);
  
      console.log(res);
    } catch(err) {
      console.log(err);
    }


  }

  // <p>Filename: {file.name}</p>
      // <p>File type: {file.type}</p>
      // <p>File size: {file.size} bytes</p>


  return (
    <div id="upload-box">
      <form ref={form} onSubmit={handleSubmit}> 
        <input type="file" name="file" onChange={handleUpload} />
        <button type="submit" onClick={handleSubmit}>Submit</button>  
      {/* {file && <ImageThumb image={file} />} */}
      </form>
    </div>
  );
}

/**
 * Component to display thumbnail of image.
 */
// const ImageThumb = ({ image }) => {
//   return <img src={URL.createObjectURL(image)} alt={image.name} />;
// };

// It's not clear to me how to trigger updates to the UI
// const useForceUpdate = () => useState()[1];

// function AddMark() {
//   const fileInput = useRef(null);
//   const forceUpdate = useForceUpdate();

//   useEffect((e) => {
//     window.addEventListener("keyup", clickFileInput);
//     return () => window.removeEventListener("keyup", clickFileInput);
//   });

//   function clickFileInput(e) {
//     if (fileInput.current.nextSibling.contains(document.activeElement)) {
//       // Bind space to trigger clicking of the button when focused
//       if (e.keyCode === 32) {
//         fileInput.current.click();
//       }
//     }
//   }

//   function onSubmit(e) {
//     e.preventDefault();
//     console.log("Submit Button clicked.");
//   }
//   const faculty = {
//     id: "TVE18",
//     name: "Sreelal",
//     course: ["Physics", "Chemistry"],
//   };
//   const [filterCourse, setFilterCourse] = useState(faculty.course[0]);
//   const handleChangeFilterCourse = (event) => {
//     setFilterCourse(event.target.value);
//   };
//   return (
//     <div className="container-fluid">
//       <div>
//         <h3>Add Marks</h3>
//       </div>
//       <div>
//         <h5>Choose course:</h5>
//         <label>
//           <select value={filterCourse} onChange={handleChangeFilterCourse}>
//             {faculty.course.map((data, index) => (
//               <option key={index} value={data}>
//                 {data}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <form onSubmit={onSubmit}>
//         <input
//           id="file"
//           type="file"
//           ref={fileInput}
//           // The onChange should trigger updates whenever
//           // the value changes?
//           // Try to select a file, then try selecting another one.
//           onChange={forceUpdate}
//           multiple
//         />
//         <br />
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<AddMark />, rootElement);
