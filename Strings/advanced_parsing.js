function removeFirstName(fullNmae) {
    let 
}

function parseAndDisplayName(fullName) {
    let end = fullName.indexOf(" ");
    let firstName = fullName.substring(0, end);
    console.log(`First Name:`, firstName);

    let lastName = fullName.substring(end + 1);
    console.log(`Last Name:`, lastName);
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");