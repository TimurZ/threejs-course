export default function handleFullScreen(el) {
  const fullscreenEl = document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenEl) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else {
      el.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  }
}
