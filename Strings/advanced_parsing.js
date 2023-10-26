function hasMiddleName(fullName) {
    let index = fullName.indexOf(" ");
    let lastIndex = fullName.lastIndexOf(" ");
    
    return index > 0 && (lastIndex > index);
}


function getFirstName(fullname) {
    fullName = fullName.trim()
    let index = fullName.indexOf(" ");

    if(index < 0) return fullName;

    return fullName.substring(0, index)
}

function parseAndDisplay(fullName) {
    if(hasMiddleNmae(fullName)) {
        console.log("Middle Name:", hasMiddleName(fullName));
    } else {
        console.log("First Name:", getFirstName(fullName));
    }
}


parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");