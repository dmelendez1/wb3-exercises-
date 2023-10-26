function hasMiddleName(fullName) {
    let index = fullName.indexOf(" ");
    let lastIndex = fullName.lastIndexOf(" ");
    
    return index > 0 && (lastIndex > index);
}

function getFirstName(fullName) {
    fullName = fullName.trim();
    let index = fullName.indexOf(" ");
    
    if (index < 0) return fullName;
    
    return fullName.substring(0, index);
}

function getMiddleName(fullName) {
    let firstSpace = fullName.indexOf(" ");
    let lastSpace = fullName.lastIndexOf(" ");
    
    if(firstSpace === lastSpace) return (""); // No middle name
    
    return fullName.substring(firstSpace + 1, lastSpace).trim();
}

function getLastName(fullName) {
    let lastSpace = fullName.lastIndexOf(" ");
    if (lastSpace < 0) 
    return ("");
    return fullName.substring(lastSpace + 1).trim();
}

function parseAndDisplay(fullName) {
    let firstName = getFirstName(fullName);
    let middleName = getMiddleName(fullName);
    let lastName = getLastName(fullName);
    
    console.log("First Name:", firstName);
    if (middleName) {
        console.log("Middle Name:", middleName);
    }
    console.log("Last Name:", lastName);
}

parseAndDisplay("Cher");
parseAndDisplay("Brenda Kaye");
parseAndDisplay("Dana Lynn Wyatt");
