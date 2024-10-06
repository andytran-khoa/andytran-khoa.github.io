document.addEventListener("DOMContentLoaded", function() {
  let page1 = document.getElementById("page-1");
  let page2 = document.getElementById("page-2");
  let page3 = document.getElementById("page-3");
  
  let nextButton = document.getElementById("next-button");
  let noButton = document.getElementById("no-button");
  let yesButton = document.getElementById("yes-button");
  let noResponse = document.getElementById("no-response");

  let hoverCount = 0;

  // Transition to page 2
  nextButton.addEventListener("click", function() {
    page1.style.display = "none";
    page2.style.display = "block";
  });

  // "No" button logic
  noButton.addEventListener("click", function() {
    noResponse.style.display = "block";
    yesButton.disabled = false;
  });

  // "Yes" button hover movement
  yesButton.addEventListener("mouseover", function() {
    if (hoverCount < 6) {
      let randomX = Math.random() * 80 + 10; // Random X position (10% to 90%)
      let randomY = Math.random() * 80 + 10; // Random Y position (10% to 90%)
      yesButton.style.position = "absolute";
      yesButton.style.left = randomX + "%";
      yesButton.style.top = randomY + "%";
      hoverCount++;
    }
  });

  // Enable clicking "Yes" button after 4 hovers
  yesButton.addEventListener("click", function() {
    if (hoverCount >= 6) {
      page2.style.display = "none";
      page3.style.display = "block";
      launchFireworks();
    }
  });

  // Fireworks using particles.js
  function launchFireworks() {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#FFD700", "#FF69B4", "#FF4500", "#1E90FF", "#32CD32"]
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        size: {
          value: 4,
          random: true,
        },
        move: {
          enable: true,
          speed: 6,
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: false
          }
        }
      },
      retina_detect: true
    });
  }
});