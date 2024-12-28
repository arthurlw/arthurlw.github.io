const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
});

function copyEmail() {
    const email = "youremail@example.com"; // Replace with your email
    navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard!");
    }).catch(err => {
        console.error("Could not copy email: ", err);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message; // Set the message dynamically
    toast.classList.add("show"); // Add the show class to make it visible
    setTimeout(() => {
        toast.classList.remove("show"); // Remove the class after 3 seconds
    }, 3000);
}

function launchConfetti() {
    const end = Date.now() + 2 * 1000; // Confetti duration: 2 seconds
    const colors = ['#FFCB4C', '#DAF7A6', '#33FF57', '#C70039', '#FF33A8', '#F3FF33', '#33FFF3', '#C70039', '#900C3F', '#DAF7A6'];

    (function frame() {
        confetti({
            particleCount: 5, // Adjust particle count
            angle: 60,
            spread: 100,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5, // Adjust particle count
            angle: 120,
            spread: 100,
            origin: { x: 1 },
            colors: colors
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Add click event listener with delay
document.querySelector('.confetti').addEventListener('click', function () {launchConfetti()});

// Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for switching between displays
document.getElementById('switch-button').addEventListener('click', () => {
    const display1 = document.getElementById('skills-display-1');
    const display2 = document.getElementById('skills-display-2');
  
    if (display1.style.display !== 'none') {
      // Hide Display 1 and Show Display 2
      display1.style.animation = 'hide 0.8s forwards';
      setTimeout(() => {
        display1.style.display = 'none';
        display2.style.display = 'block';
        display2.style.animation = 'show 0.8s forwards';
      }, 800);
    } else {
      // Hide Display 2 and Show Display 1
      display2.style.animation = 'hide 0.8s forwards';
      setTimeout(() => {
        display2.style.display = 'none';
        display1.style.display = 'block';
        display1.style.animation = 'show 0.8s forwards';
      }, 800);
    }
  });
  
