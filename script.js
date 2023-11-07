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
