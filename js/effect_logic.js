// Function to create blinking caret and type "Hello World!" character by character
function showHelloWorld() {
    if (!document.querySelector('.hello-world-container')) {
        var helloWorldContainer = document.createElement('div');
        helloWorldContainer.className = 'hello-world-container';
        helloWorldContainer.style.position = 'absolute';
        helloWorldContainer.style.top = 'calc(50% + 350px)';
        helloWorldContainer.style.left = '50%';
        helloWorldContainer.style.transform = 'translate(-50%, -50%)';
        helloWorldContainer.style.color = 'white';
        helloWorldContainer.style.fontSize = '70px';
        helloWorldContainer.style.fontFamily = 'var(--heading2-font-family)';
        document.body.appendChild(helloWorldContainer);

        var text = "Hello World!";
        var newText = "Welcome to iota labs.";

        function typeCharacter(index) {
            if (index < text.length) {
                var charSpan = document.createElement('span');
                charSpan.textContent = text[index];
                helloWorldContainer.appendChild(charSpan);
                setTimeout(function() {
                    typeCharacter(index + 1);
                }, 300); 
            } else {
                setTimeout(function() {
                    eraseCharacter(text.length - 1);
                }, 1000); // Delay before starting erasing
            }
        }

        function eraseCharacter(index) {
            if (index >= 0) {
                helloWorldContainer.removeChild(helloWorldContainer.lastChild);
                setTimeout(function() {
                    eraseCharacter(index - 1);
                }, 150);
            } else {
                setTimeout(function() {
                    typeNewText(0);
                }, 300);
            }
        }

        function typeNewText(index) {
            if (index < newText.length) {
                var charSpan = document.createElement('span');
                charSpan.textContent = newText[index];
                charSpan.style.fontSize = '40px';
                helloWorldContainer.appendChild(charSpan);
                setTimeout(function() {
                    typeNewText(index + 1);
                }, 100);
            }
        }

        typeCharacter(0);
    }
}

var scrollTimeout;

window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function() {
        var video = document.querySelector('.custom-video');
        var earthVideo = document.getElementById('earth-video');

        var videoBottom = video.getBoundingClientRect().bottom;

        if (videoBottom < window.innerHeight) {
            earthVideo.style.opacity = '1';
            showHelloWorld();
        } else {
            earthVideo.style.opacity = '0';
            var helloWorldContainer = document.querySelector('.hello-world-container');
            if (helloWorldContainer) {
                helloWorldContainer.parentNode.removeChild(helloWorldContainer);
            }
        }
    }, 10);
});
