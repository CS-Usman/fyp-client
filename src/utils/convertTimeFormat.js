/* eslint-disable prettier/prettier */


export const convertTimeFormat = (inputString) => {

    if (!inputString) {
        console.error("Input string is undefined or empty.");
        return null; // or handle the error in your preferred way
    }
    // Parse the input string into a Date object
    const [datePart, timePart] = inputString.split(' ');

    const isoString = new Date(`${datePart}T${timePart}.000Z`).toISOString();
    return isoString;
};
