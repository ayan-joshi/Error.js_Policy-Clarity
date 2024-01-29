import React, { useRef, useState } from "react";
import axios from "axios";

const Features = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [pdfContent, setPdfContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);

      const apiUrl = "https://policy-clarity-server.onrender.com/uploadfile/";

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
        })
        .finally(() => {
          setIsLoading(false);
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
    setIsLoading(false);
    setSelectedFileName(null);
    setPdfContent(null);
  };

  return (
    <div
      id="policy"
      className="flex justify-center items-center flex-col py-24 gap-8 z-50 bg-gradient-to-r from-white-1200 via-white-600 to-white-400 ..."
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
    >
      <p className="text-7xl font-medium">Upload Policies</p>
      <p className="lg:w-3/5 w-full px-12 text-center lg:text-xl text-xs font-normal ">
        This process facilitates convenient access,<br></br> verification, and
        management of health insurance information
      </p>
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
              <span className="text-gray-600 text-lg text-center">
                Click to upload file or Drag <br /> and drop your files
              </span>
            )}
            {selectedFileName ? (
              <div className="flex flex-row justify-center items-center gap-6">
                <button
                  type="button"
                  className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
                  onClick={handleUpload}
                >
                  Upload
                </button>
                <button
                  type="button"
                  className="border hover:border-blue-900 text-black font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
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
      {isLoading && (
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12 mt-4"></div>
      )}
      {pdfContent && (
        <button
          onClick={handleDownload}
          className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
        >
          Download PDF
        </button>
      )}

      <h1 className="text-4xl font-medium">
        Enhancing Policy Summaries for Different Languages
      </h1>

      <p className="lg:w-3/5 w-full px-12 text-center lg:text-xl text-xs font-normal">
        Making policy summaries available in various languages will make it
        easier for users to understand and access accurate health insurance
        information.
      </p>
    </div>
  );
};

export default Features;
