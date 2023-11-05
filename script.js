if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  window.location.href = 'mobile.html';
}
