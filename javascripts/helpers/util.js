// Print To Dom Function //

const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('pets');
    printHere.innerHTML = stringToPrint;
}

// Export Functions //

export{printToDom};