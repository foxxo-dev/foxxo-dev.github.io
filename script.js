// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
// ) {
//   window.location.href = './pages/mobile.html';
// }

const mutationObserver = new MutationObserver(updateTheme);
mutationObserver.observe(document.body, { attributes: true });

function updateTheme() {
  console.log('Updating Theme');

  // Disconnect the observer temporarily to avoid triggering unnecessary updates
  mutationObserver.disconnect();

  if (localStorage.getItem('theme') === 'contrast') {
    document.body.setAttribute('data-theme', 'contrast');
    // Uncomment the line below if you have an element with id 'theme-toggle'
    // document.getElementById('theme-toggle').checked = true;
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute('content', '#F74E3A');
    }
  } else if (localStorage.getItem('theme') === 'normal') {
    document.body.setAttribute('data-theme', 'normal');
    // Uncomment the line below if you have an element with id 'theme-toggle'
    // document.getElementById('theme-toggle').checked = false;
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute('content', '#F3F3EE');
    }
  }

  // Reconnect the observer after updating the theme
  mutationObserver.observe(document.body, { attributes: true });
}

// Remove the unused copyText function
// function copyText(text) {
//   navigator.clipboard.writeText(text)
//     .then(() => {
//       alert('Copied to clipboard!');
//     })
//     .catch((error) => {
//       console.error('Failed to copy text:', error);
//     });
// }

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'normal');
}

// Replace your existing countdown logic with a Christmas countdown
// Calculate the time until Christmas (assuming Christmas is on December 25)
let intervalId; // Declare a variable to store the interval ID

// intervalId = setInterval(updateTime, 1000); // Store the interval ID

if (localStorage.getItem('theme') === 'contrast') {
  document.body.setAttribute('data-theme', 'contrast');
  document.getElementById('theme-toggle').checked = true;
} else if (localStorage.getItem('theme') === 'normal') {
  document.body.setAttribute('data-theme', 'normal');
  document.getElementById('theme-toggle').checked = false;
}

document.getElementById('theme-toggle').addEventListener('change', (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
    document.body.setAttribute('data-theme', 'contrast');
    localStorage.setItem('theme', 'contrast');
  } else {
    document.body.setAttribute('data-theme', 'normal');
    localStorage.setItem('theme', 'normal');
  }
});

const overlay = document.getElementById('overlay-container');
const password = document.getElementById('password-num');
const passwordBtn = document.getElementById('password-btn');
const main = document.querySelector('main');

window.addEventListener('load', () => {
  main.style.display = 'none !important';
});

passwordBtn.addEventListener('click', () => {
  console.log('Click!');
  console.log(convert(btoa(password.value)));
  console.log(
    convert(btoa(password.value)).replace(/^\s+|\s+$/gm, '') ==
      '1001101 1101010 1101011 1110111 1001101 1000001 111101 111101 '.replace(
        /^\s+|\s+$/gm,
        ''
      )
  );
  if (
    convert(btoa(password.value)).replace(/^\s+|\s+$/gm, '') ==
    '1001101 1101010 1101011 1110111 1001101 1000001 111101 111101 '.replace(
      /^\s+|\s+$/gm,
      ''
    )
  ) {
    overlay.style.display = 'none';
    main.style.display = 'block';
  } else {
    alert('Wrong Password!');
  }
});
function convert(input) {
  var output;
  output = '';
  for (var i = 0; i < input.length; i++) {
    output += input[i].charCodeAt(0).toString(2) + ' ';
  }
  return output;
}
