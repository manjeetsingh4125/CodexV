function copyCode(button) {
    const codeElement = button.parentElement;
    const codeText = codeElement.innerText.trim();
    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
}