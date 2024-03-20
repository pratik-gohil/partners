import { emailRegex } from "./emailReg";
import { phoneRegex } from "./phoneReg";

export const validatePhone = {
    required: "Phone cannot be blank",
    pattern: {
        value: phoneRegex,
        message: "Not a valid phone number"
    }
}

export const validateEmail = {
    required: "Email cannot be blank",
    pattern: {
        value: emailRegex,
        message: "Not a valid email"
    }
}

export const validateName = {
    required: "Name cannot be blank",
    validate: (value: string) => {
        return (/^[a-zA-Z ]*$/).test(value) || "Add a vaild name";
    },
}

export const numericOnly = (e: React.KeyboardEvent) => {
    if (
        !/[0-9]/.test(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.key !== "Enter"
    ) {
        e.preventDefault();
    }
};