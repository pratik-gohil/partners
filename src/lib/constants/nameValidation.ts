export const handleInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z]*$/;
    const inputVal = e.target.value;

    if (!regex.test(inputVal)) {
        e.target.value = inputVal.slice(0, -1); // Remove the last character if it's not a letter
    }
};




export const handleInputNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/;
    const inputVal = e.target.value;

    if (!regex.test(inputVal)) {
        e.target.value = inputVal.slice(0, -1); // Remove the last character if it's not a letter
    }
};








// export const handleMobileNumberValidation = (e: React.FocusEvent<HTMLInputElement>) => {
//     const mobileNumber = e.target.value;

//     if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
//         const errorElement = document.getElementById("mobile-error");
//         if (errorElement) {
//             errorElement.innerText = "Mobile number is invalid.";
//         }
//     } else {
//         const errorElement = document.getElementById("mobile-error");
//         if (errorElement) {
//             errorElement.innerText = "";
//         }
//     }
// };


import React from 'react';



export const handleMobileNumberValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    const mobileNumber = e.target.value;

    const errorElement = document.getElementById("mobile-error");

    if (!mobileNumber) {
        if (errorElement) {
            errorElement.innerText = "Mobile number cannot be blank.";
        }
    } else if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
        if (errorElement) {
            errorElement.innerText = "Mobile number is invalid.";
        }
    } else {
        if (errorElement) {
            errorElement.innerText = ""; // Clear the error message when the mobile number is valid
        }
    }
};

