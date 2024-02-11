"use client";

import React, {useState} from 'react';
import ImageUploader from './ImageUploader';
import ImageDetails from './ImageDetails';
import Greetings from './Greetings';
import {collection, addDoc} from "firebase/firestore"
import {db, storage} from "../app/firebase"

import {ref, uploadString} from "firebase/storage";

const storageRef=ref(storage, 'some-child');

const Home=() => {
    const [formValues, setFormValues]=useState({
        imageName: '',
        amount: '',
        viewLimit: '',
        uploadDatetime: '',
        imageId: '',
        base64Image: '',
    });

    const handleInputChange=(e) => {
        const {name, value}=e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleFileChange=(e) => {
        const file=e.target.files[0];

        if(file) {
            const reader=new FileReader();
            reader.onloadend=() => {
                // Data URL string
                const message4=reader.result;
                uploadString(storageRef, message4, 'data_url').then((snapshot) => {
                    console.log('Uploaded a data_url string!');
                });

                setFormValues({
                    ...formValues,
                    uploadDatetime: file.lastModifiedDate,
                    base64Image: reader.result, // Set the base64 representation
                });
            };
            reader.readAsDataURL(file);
        } else {
            // Handle case where the file is undefined (e.g., user canceled file selection)
            setFormValues({
                ...formValues,
                selectedFile: null,
                base64Image: '', // Reset base64 representation
            });
        }
    };


    const handleSubmit=async (e) => {
        e.preventDefault();
        // Add your form validation logic here
        if(formValues.imageName.trim()===''||formValues.amount.trim()==='') {
            // Display an error message or handle the validation error as needed
            console.error('Image Name and Amount are required fields');
            return;
        }

        // Assuming the form is valid, you can submit the form data to your backend
        // Add your submission logic here (e.g., API call)

        try {
            const docAdded=await addDoc(collection(db, "store"), formValues)
            console.log(docAdded)
        } catch(error) {
            console.log(error)
        }
        console.log('Form submitted:', formValues);
    };
    return (
        <div className='w-full h-full pt-[80px]  p-5'>
            <div className='bg-white p-4 rounded-md shadow-md'>
                <Greetings />

                <div className='w-full flex justify-between items-center content-center self-center gap-10'>
                    <ImageUploader formValues={formValues} handleFileChange={handleFileChange} />
                    <ImageDetails formValues={formValues} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                </div>

            </div>

        </div>
    )
}

export default Home;