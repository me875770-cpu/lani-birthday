// Messages for balloons
const balloonMessages = [
    "Today is your day, special because you exist today",
    "I can't explain it, but you mean a lot to me truly",
    "Even distance between us, you still feel close now",
    "I hope life gives you peace, love and happiness",
    "No matter where life goes I'll always remember you"
];

// Navigation function
function goToPage(pageNumber) {
    if (pageNumber === 1) {
        window.location.href = 'index.html';
    } else if (pageNumber === 2) {
        window.location.href = 'page2.html';
    } else if (pageNumber === 3) {
        window.location.href = 'page3.html';
    } else if (pageNumber === 4) {
        window.location.href = 'page4.html';
    } else if (pageNumber === 5) {
        window.location.href = 'page5.html';
    } else if (pageNumber === 6) {
        window.location.href = 'page6.html';
    }
}

// Show balloon message
function showMessage(balloonNumber) {
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    const overlay = document.querySelector('.overlay');
    
    messageText.textContent = balloonMessages[balloonNumber - 1];
    messageBox.classList.add('show');
    
    if (overlay) {
        overlay.classList.add('show');
    }
}

// Close message
function closeMessage() {
    const messageBox = document.getElementById('messageBox');
    const overlay = document.querySelector('.overlay');
    
    messageBox.classList.remove('show');
    if (overlay) {
        overlay.classList.remove('show');
    }
}

// Select gift
function selectGift(giftNumber) {
    const giftMessage = document.getElementById('giftMessage');
    const giftText = document.getElementById('giftText');
    const overlay = document.querySelector('.overlay');
    
    let message = '';
    
    if (giftNumber === 1) {
        message = '10 minutes of my time? You got it! 💕 What do you want to do?';
    } else if (giftNumber === 2) {
        message = 'Let\'s play PUBG together! 🎮 Get ready for the best game ever!';
    } else if (giftNumber === 3) {
        message = 'Anything you ask (within reason)? 💝 I\'m listening!';
    }
    
    giftText.textContent = message;
    giftMessage.classList.add('show');
    
    if (overlay) {
        overlay.classList.add('show');
    }
}

// Close gift message
function closeGiftMessage() {
    const giftMessage = document.getElementById('giftMessage');
    const overlay = document.querySelector('.overlay');
    
    giftMessage.classList.remove('show');
    if (overlay) {
        overlay.classList.remove('show');
    }
}

// Create overlay if it doesn't exist
window.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.onclick = function() {
            closeMessage();
            closeGiftMessage();
        };
        document.body.appendChild(overlay);
    }
});
