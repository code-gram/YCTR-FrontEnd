import React, { useState } from "react";
import { useEffect } from 'react';
import "../fileupload/fileupload.css"
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { FaFileExcel } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { uploadFileData } from '../../features/redux/fileupload/fileUploadAction.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function FileUpload() {
    const disptach = useDispatch();
    const navigate = useNavigate();
    const fileUploadStatus = useSelector(state => state.fileupload);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No Selected File");
    const [selectedFile, setSelectedFile] = useState(null);



    const uploadToDb = async() => {

        if (selectedFile != null) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            disptach(uploadFileData(formData));
            setTimeout(()=>{
                navigate("/ctrdata");
            },2000);
            

        }

    }
    

    return (
        <main>
            <form action="" onClick={() => { document.querySelector(".input-field").click() }}>
                <input type="file" accept=".xlsx, .xls" className="input-field" hidden
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name)
                        if (files) {
                            setSelectedFile(files[0]);
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}
                />
                {
                    image ?
                        <>
                            <FaFileExcel color="#1475cf" size={50} />
                            <p>{fileName}</p>
                        </>

                        :
                        <>
                            <MdCloudUpload color="#1475cf" size={60} />
                            <p>Browse Files To Upload</p>
                        </>
                }

            </form>
            <section className="uploaded-row">
                <AiFillFileImage color="#1475cf" />
                <span className="upload-content">
                    {fileName}-
                    <MdDelete color="red" size={20} onClick={() => {
                        setFileName("No Selected File");
                        setSelectedFile(null);
                        setImage(null);
                    }} />
                    <FiUpload color="#1475cf" style={{ marginLeft: "21px" }} onClick={uploadToDb} size={20} />
                </span>

            </section>

        </main>
    );
}
