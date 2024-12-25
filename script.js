

// required variables
const textArea = document.getElementById("textArea");
const floatStyle = document.getElementById("floatStyle");
const floatAI = document.getElementById("floatAI");
let floatBox = document.getElementById("floatBox");
let selectedText;

// move floating box to cursor
document.addEventListener('mouseup', (ev) => {
    selectedText = window.getSelection();

    if (selectedText) {
        const range = selectedText.getRangeAt(0);
        const rect = range.getBoundingClientRect();
    
        if (rect.width > 0 && rect.height > 0) {
            floatBox.style.left = rect.right + window.scrollX - 40 + "px";
            floatBox.style.top = rect.top + window.scrollY + 35 + "px";
            floatBox.style.opacity = "1";
        }
    } else {
        floatBox.style.opacity = "0";
    }
});