// https://github.com/VincentGarreau/particles.js

//doesn't work with a function, have to reload for a different colour.
// function random_hex(){
//     return '#' + Math.floor(Math.random()*16777215).toString(16);
// }

// var color = random_hex();



var config = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#0294a5", "#d75b66", "78d6ac",]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#111820"
        }
      },
      "opacity": {
        "value": 0.7,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 12,
        "random": false
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#fff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "in",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "push": {
          "particles_nb": 3
        }
      }
    },
    "retina_detect": true
  };
  
  
  particlesJS('particles', config);