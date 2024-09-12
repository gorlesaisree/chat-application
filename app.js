document.getElementById('sendBtn').addEventListener('click', sendMessage);

function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.innerHTML = `
            <span class="sender">You:</span>
            <span class="text">${messageText}</span>
            <span class="time">${new Date().toLocaleTimeString()}</span>
        `;
        document.getElementById('chat-box').appendChild(messageElement);
        messageInput.value = '';
        scrollToBottom();
        respondToMessage(messageText);
    }
}
function scrollToBottom() {
    const chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
}