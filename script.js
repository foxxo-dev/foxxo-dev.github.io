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

function updateTime() {
  const christmasDate = new Date('December 24, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const timeRemaining = christmasDate - now;

  if (timeRemaining == 0) {
    document.getElementById('christmas_time').innerHTML = 'Merry Christmas!';
    clearInterval(intervalId); // Clear the interval when the time is up
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById(
    'christmas_time'
  ).innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

intervalId = setInterval(updateTime, 1000); // Store the interval ID

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
