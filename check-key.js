window.addEventListener("keydown", function(event) {
  if (event.preventDefaulted) {
    return; // Do nothing if event already handled
  }

  switch(event.code) {
    case "KeyS":
    document.getElementById("text").textContent = "S";
    break;
    case "KeyW":
    document.getElementById('text').textContent = "W";
    break;
    case "KeyA":
    document.getElementById('text').textContent = "A";
    break;
    case "KeyD":
    document.getElementById('text').textContent = "D";
    break;
    case "KeyQ":
    document.getElementById('text').textContent = "Q";
    break;
    case "KeyE":
    document.getElementById('text').textContent = "E";
    break;
    case "KeyR":
    document.getElementById('text').textContent = "R";
    break;
    case "KeyT":
    document.getElementById('text').textContent = "T";
    break;
    case "KeyY":
    document.getElementById('text').textContent = "Y";
    break;
    case "KeyU":
    document.getElementById('text').textContent = "U";
    break;
    case "KeyI":
    document.getElementById('text').textContent = "I";
    break;
    case "KeyO":
    document.getElementById('text').textContent = "O";
    break;
    case "KeyP":
    document.getElementById('text').textContent = "P";
    break;
    case "BracketLeft":
    document.getElementById('text').textContent = "[";
    break;
    case "BracketRight":
    document.getElementById('text').textContent = "]";
    break;
    case "Enter":
    document.getElementById('text').textContent = "Enter";
    break;
    case "ControlLeft":
    document.getElementById('text').textContent = "Left-Control";
    break;
    case "KeyF":
    document.getElementById('text').textContent = "F";
    break;
    case "KeyG":
    document.getElementById('text').textContent = "G";
    break;
    case "KeyH":
    document.getElementById('text').textContent = "H";
    break;
    case "KeyJ":
    document.getElementById('text').textContent = "J";
    break;
    case "KeyK":
    document.getElementById('text').textContent = "K";
    break;
    case "KeyL":
    document.getElementById('text').textContent = "L";
    break;
    case "Semicolon":
    document.getElementById('text').textContent = ";";
    break;
    case "Quote":
    document.getElementById('text').textContent = "'";
    break;
    case "Backquote":
    document.getElementById('text').textContent = "`";
    break;
    case "ShiftLeft":
    document.getElementById('text').textContent = "Left-Shift";
    break;
    case "Backslash":
    document.getElementById('text').textContent = "\\";
    break;
    case "KeyZ":
    document.getElementById('text').textContent = "Z";
    break;
    case "KeyX":
    document.getElementById('text').textContent = "X";
    break;
    case "KeyC":
    document.getElementById('text').textContent = "C";
    break;
    case "KeyV":
    document.getElementById('text').textContent = "V";
    break;
    case "KeyB":
    document.getElementById('text').textContent = "B";
    break;
    case "KeyN":
    document.getElementById('text').textContent = "N";
    break;
    case "KeyM":
    document.getElementById('text').textContent = "M";
    break;
    case "Comma":
    document.getElementById('text').textContent = ",";
    break;
    case "Period":
    document.getElementById('text').textContent = ".";
    break;
    case "Slash":
    document.getElementById('text').textContent = "/";
    break;
    case "ShiftRight":
    document.getElementById('text').textContent = "Right-Shift";
    break;
    case "NumpadMultiply":
    document.getElementById('text').textContent = "*";
    break;
    case "AltLeft":
    document.getElementById('text').textContent = "Left-Alt";
    break;
    case "Space":
    document.getElementById('text').textContent = "Space Bar";
    break;
    case "CapsLock":
    document.getElementById('text').textContent = "CapsLock";
    break;
    case "F1":
    document.getElementById('text').textContent = "F1";
    break;
    case "F1":
    document.getElementById('text').textContent = "F1";
    break;
    case "F2":
    document.getElementById('text').textContent = "F2";
    break;
    case "F3":
    document.getElementById('text').textContent = "F3";
    break;
    case "F4":
    document.getElementById('text').textContent = "F4";
    break;
    case "F5":
    document.getElementById('text').textContent = "F5";
    break;
    case "F6":
    document.getElementById('text').textContent = "F6";
    break;
    case "F7":
    document.getElementById('text').textContent = "F7";
    break;
    case "F8":
    document.getElementById('text').textContent = "F8";
    break;
    case "F9":
    document.getElementById('text').textContent = "F9";
    break;
    case "F10":
    document.getElementById('text').textContent = "F10";
    break;
    case "F11":
    document.getElementById('text').textContent = "F11";
    break;
    case "F12":
    document.getElementById('text').textContent = "F12";
    break;
    case "Pause":
    document.getElementById('text').textContent = "Pause";
    break;
    case "ScrollLock":
    document.getElementById('text').textContent = "ScrollLock";
    break;
    case "Numpad0":
    document.getElementById('text').textContent = "the \"0\" key on the Number Pad";
    break;
    case "Numpad1":
    document.getElementById('text').textContent = "the \"1\" key on the Number Pad";
    break;
    case "Numpad2":
    document.getElementById('text').textContent = "the \"2\" key on the Number Pad";
    break;
    case "Numpad3":
    document.getElementById('text').textContent = "the \"3\" key on the Number Pad";
    break;
    case "Numpad4":
    document.getElementById('text').textContent = "the \"4\" key on the Number Pad";
    break;
    case "Numpad5":
    document.getElementById('text').textContent = "the \"5\" key on the Number Pad";
    break;
    case "Numpad6":
    document.getElementById('text').textContent = "the \"6\" key on the Number Pad";
    break;
    case "Numpad7":
    document.getElementById('text').textContent = "the \"7\" key on the Number Pad";
    break;
    case "Numpad8":
    document.getElementById('text').textContent = "the \"8\" key on the Number Pad";
    break;
    case "Numpad9":
    document.getElementById('text').textContent = "the \"9\" key on the Number Pad";
    break;
    case "NumpadSubtract":
    document.getElementById('text').textContent = "the \"-\" key on the Number Pad";
    break;
    case "NumpadAdd":
    document.getElementById('text').textContent = "the \"+\" key on the Number Pad";
    break;
    case "NumpadDivide":
    document.getElementById('text').textContent = "the \"/\" key on the Number Pad";
    break;
    case "NumpadDecimal":
    document.getElementById('text').textContent = "the \".\" key on the Number Pad";
    break;
    case "PrintScreen":
    document.getElementById('text').textContent = "PrintScreen";
    break;
    case "NumpadEnter":
    document.getElementById('text').textContent = "the Enter key on the Number Pad";
    break;
    case "ControlRight":
    document.getElementById('text').textContent = "Right-Control";
    break;
    case "AudioVolumeMute":
    document.getElementById('text').textContent = "Mute Audio Volume";
    break;
    case "MediaPlayPause":
    document.getElementById('text').textContent = "Pause media";
    break;
    case "MediaStop":
    document.getElementById('text').textContent = "Stop media";
    break;
    case "AudioVolumeDown":
    document.getElementById('text').textContent = "Volume down";
    break;
    case "AudioVolumeUp":
    document.getElementById('text').textContent = "Volume up";
    break;
    case "BrowserHome":
    document.getElementById('text').textContent = "BrowserHome";
    break;
    case "AltRight":
    document.getElementById('text').textContent = "Right-Alt";
    break;
    case "Help":
    document.getElementById('text').textContent = "Help";
    break;
    case "NumLock":
    document.getElementById('text').textContent = "Numlock";
    break;
    case "ArrowUp":
    document.getElementById('text').textContent = "ArrowUp";
    break;
    case "PageUp":
    document.getElementById('text').textContent = "PageUp";
    break;
    case "ArrowLeft":
    document.getElementById('text').textContent = "ArrowLeft";
    break;
    case "ArrowRight":
    document.getElementById('text').textContent = "ArrowRight";
    break;
    case "End":
    document.getElementById('text').textContent = "End";
    break;
    case "ArrowDown":
    document.getElementById('text').textContent = "ArrowDown";
    break
    case "PageDown":
    document.getElementById('text').textContent = "PageDown";
    break;
    case "Home":
    document.getElementById('text').textContent = "Home";
    break;
    case "Insert":
    document.getElementById('text').textContent = "Insert";
    break;
    case "Delete":
    document.getElementById('text').textContent = "Delete";
    break;
    case "OSRight":
    document.getElementById('text').textContent = "Window Button (Right)";
    break;
    case "OSLeft":
    document.getElementById('text').textContent = "Window Button (Left)";
    break;
    case "ContextMenu":
    document.getElementById('text').textContent = "ContextMenu";
    break;
    case "BrowserSearch":
    document.getElementById('text').textContent = "BrowserSearch";
    break;
    case "BrowserFavorites":
    document.getElementById('text').textContent = "BrowserFavorites";
    break;
    case "BrowserRefresh":
    document.getElementById('text').textContent = "BrowserRefresh";
    break;
    case "BrowserStop":
    document.getElementById('text').textContent = "BrowserStop";
    break;
    case "BrowserForward":
    document.getElementById('text').textContent = "BrowserForward";
    break;
    case "BrowserBack":
    document.getElementById('text').textContent = "BrowserBack";
    break;
    case "Escape":
    document.getElementById('text').textContent = "Escape";
    break;
    case "Digit0":
    document.getElementById('text').textContent = "0";
    break;
    case "Digit1":
    document.getElementById('text').textContent = "1";
    break;
    case "Digit2":
    document.getElementById('text').textContent = "2";
    break;
    case "Digit3":
    document.getElementById('text').textContent = "3";
    break;
    case "Digit4":
    document.getElementById('text').textContent = "4";
    break;
    case "Digit5":
    document.getElementById('text').textContent = "5";
    break;
    case "Digit6":
    document.getElementById('text').textContent = "6";
    break;
    case "Digit7":
    document.getElementById('text').textContent = "7";
    break;
    case "Digit8":
    document.getElementById('text').textContent = "8";
    break;
    case "Digit9":
    document.getElementById('text').textContent = "9";
    break;
    case "Minus":
    document.getElementById('text').textContent = "-";
    break;
    case "Equal":
    document.getElementById('text').textContent = "=";
    break;
    case "Backspace":
    document.getElementById('text').textContent = "Backspace";
    break;
    case "Tab":
    document.getElementById('text').textContent = "Tab";
    break;
    case "MediaTrackPrevious":
    document.getElementById('text').textContent = "Media track previous";
    break;
    case "MediaTrackNext":
    document.getElementById('text').textContent = "Media track next";
    break;
    case "Minus":
    document.getElementById('text').textContent = "-";
    break;
    case "Minus":
    document.getElementById('text').textContent = "-";
    break;
    case "Minus":
    document.getElementById('text').textContent = "-";
    break;


  }


  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);

window.addEventListener("keyup", function(e) {
  switch (e.keyCode) {
    case 44:
    document.getElementById('text').textContent = "PrintScreen";
    break;
    case 91:
    document.getElementById('text').textContent = "Left Window";
    break;
    case 92:
    document.getElementById('text').textContent = "Right Window";
    break;
    case 116:
    document.getElementById('text').textContent = "Refresh page";
    break;
    case 255:
    document.getElementById('text').textContent = "Disabled touch pad";
    break;
  }
});
