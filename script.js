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

function getTimeUntilChristmas() {
  // Get the current date and Christmas date
  const now = new Date();
  const christmasDate = new Date(now.getFullYear(), 11, 25); // Christmas is on December 25th

  // If Christmas has already passed this year, set it for next year
  if (now > christmasDate) {
    christmasDate.setFullYear(now.getFullYear() + 1);
  }

  // Calculate the time difference in milliseconds
  const timeDiff = christmasDate - now;

  // Calculate days and hours
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return { days, hours };
}

const countdownElement = document.getElementById('christmas_time');

// Function to update the countdown display
function updateCountdown() {
  const { days, hours } = getTimeUntilChristmas();

  // Display the time remaining
  countdownElement.innerHTML = `${days} days and ${hours} hours`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

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
