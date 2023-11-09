// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
// ) {
//   window.location.href = './pages/mobile.html';
// }

function copyText(text) {
  const storage = document.createElement('textarea');
  storage.value = text;
  document.body.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(storage);
  alert('Copied to clipboard!');
}

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'normal');
}

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
