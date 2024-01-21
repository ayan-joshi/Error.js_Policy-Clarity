import React, { useRef, useState } from "react";
import axios from "axios";

const Features = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [pdfContent, setPdfContent] = useState(null);

  const handleFileChange = (selectedFiles) => {
    if (selectedFiles.length > 0) {
      const fileName = selectedFiles[0].name;
      setSelectedFileName(fileName);
    }
  };

  const handleLabelClick = () => {
    if (!selectedFileName && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFiles = e.dataTransfer.files;
    handleFileChange(droppedFiles);
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = e.target.files;
    handleFileChange(selectedFiles);
  };

  const handleUpload = () => {
    if (selectedFileName) {
      const apiUrl = "http://127.0.0.1:8000/uploadfile/";

      const formData = new FormData();
      formData.append("file", fileInputRef.current.files[0]);

      axios
        .post(apiUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        })
        .then((response) => {
          setPdfContent(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("Please select a file");
    }
  };

  const handleDownload = () => {
    if (pdfContent) {
      const blob = new Blob([pdfContent], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "output.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.log("No PDF content available for download");
    }
  };

  const handleDeleteFile = () => {
    setSelectedFileName(null);
    setPdfContent(null);
  };

  return (
    <div
      className="flex justify-center items-center flex-col py-24 gap-8 z-50"
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
    >
      <p className="text-7xl font-medium">Features</p>
      <div
        className="flex justify-center items-center rounded-md border-dashed border max-w-4xl w-full border-gray-500 px-6 py-20 cursor-pointer"
        onClick={handleLabelClick}
      >
        <input
          type="file"
          className="hidden"
          onChange={handleFileInputChange}
          ref={fileInputRef}
        />
        <div className='flex flex-col justify-center items-center gap-2'>
          {selectedFileName ? "" : <span className=''><img width="40" height="25" src="https://img.icons8.com/ios/5000/plus--v1.png" alt="plus--v1"/></span>}
          <div className='flex flex-col justify-center items-center gap-5'>
            <span className='ml-2 text-lg'>{selectedFileName && `File Name: ${selectedFileName}`}</span>
            {selectedFileName ? "" : <span className=' text-gray-600 text-lg text-center'>Click to upload file or Drag <br/>  and drop your files</span>}
            {selectedFileName ? 
              <div className='flex flex-row justify-center items-center gap-6'>
                <button className='bg-black px-6 py-2 text-white rounded-md' onClick={handleUpload}>Upload</button>
                <button className='px-6 py-2 border border-black rounded-md' onClick={handleDeleteFile}>Cancel</button>
              </div> : ""
            }
          </div>
        <div className="flex flex-col justify-center items-center gap-2">
          {selectedFileName ? (
            ""
          ) : (
            <span className="">
              <img
                width="40"
                height="25"
                src="https://img.icons8.com/ios/5000/plus--v1.png"
                alt="plus--v1"
              />
            </span>
          )}
          <div className="flex flex-col justify-center items-center gap-5">
            <span className="ml-2 text-lg">
              {selectedFileName && `File Name: ${selectedFileName}`}
            </span>
            {selectedFileName ? (
              ""
            ) : (
              <span className=" text-gray-600 text-lg text-center">
                Click to upload file or Drag <br /> and drop your files
              </span>
            )}
            {selectedFileName ? (
              <div className="flex flex-row justify-center items-center gap-6">
                <button
                  type="button"
                  className="bg-black px-6 py-2 text-white rounded-md"
                  onClick={handleUpload}
                >
                  Upload
                </button>
                <button
                  type="button"
                  className="px-6 py-2 border border-black rounded-md"
                  onClick={handleDeleteFile}
                >
                  Cancel
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {pdfContent && <button onClick={handleDownload}>Download PDF</button>}
    </div>
  );
};

export default Features;
