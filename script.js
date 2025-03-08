function summarizeText() {
    let text = document.getElementById("inputText").value;
    
    if (text.trim() === "") {
        document.getElementById("summaryText").innerText = "Please enter some text.";
        return;
    }

    let sentences = text.match(/[^.!?]+[.!?]/g) || [text]; // Split into sentences
    let summary = sentences.slice(0, Math.ceil(sentences.length / 2)).join(" "); // Keep half of them

    document.getElementById("summaryText").innerText = summary;
}