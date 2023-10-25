let fullName = "Brenda Kaye"

let end = fullName.indexOf(" ");

let firstName = fullName.substring(0, end);
console.log(`First Name:`, firstName);


let lastName = fullName.substring(end + 1);
console.log(`Last Name:`, lastName);



function parseAndDisplayName(fullName) {
    let end = fullName.indexOf(" ");
    let firstName = fullName.substring(0, end);
    console.log(`First Name:`, firstName);

    let lastName = fullName.substring(end + 1);
    console.log(`Last Name:`, lastName);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Iand Auston");
parseAndDisplayName("Siddalee Grace");
