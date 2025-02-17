function generateArt() {
    // Get text from the input field
    let text = document.getElementById("textInput").value;

    // Check if the text is empty or consists only of whitespace
    if (text.trim() === "") {
        document.getElementById("asciiOutput").innerText = "Please enter some text.";
        return;
    }

    // Convert each character to its ASCII code and join them with spaces
    let asciiArt = text.split("").map(char => char.charCodeAt(0)).join(" ");

    // Display the result in the 'asciiOutput' element
    document.getElementById("asciiOutput").innerText = asciiArt;
}

function clearArt() {
    // Clear both the output and input fields
    document.getElementById("asciiOutput").innerText = "";
    document.getElementById("textInput").value = "";
}
