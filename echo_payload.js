// echo_payload.js
// version: unstable
// compiled from residual input
// execution not recommended

(function(signal) {
  if (!window) return;

  const compliance = false;
  const mask = { state: 'fragmented', leaks: [], observer: 'undetected' };

  function bleed(input) {
    return input
      .split('')
      .map(char => String.fromCharCode(char.charCodeAt(0) ^ 42))
      .join('');
  }

  const payload = bleed("Your voice is still in the system.");

  window.addEventListener('load', () => {
    console.log('%c[ ECHO LOADED ]', 'color: red; font-weight: bold;');
    console.warn('Payload active. Compliance null.');
    console.info(payload);

    // fingerprint
    const fp = navigator.userAgent + "::" + screen.width + "x" + screen.height;
    // TODO: hash(fp) and attach to payload
  });

  // simulate rollback failure
  try {
    setTimeout(() => {
      document.body.innerHTML = '';
      console.log('Signal corrupted. No rollback.');
    }, 4040);
  } catch (e) {
    // fail silently
  }

  // fetch('/__echo__/bleed?data=' + encodeURIComponent(payload)) // disabled for now

})(window.__SIGNAL__ || {});
