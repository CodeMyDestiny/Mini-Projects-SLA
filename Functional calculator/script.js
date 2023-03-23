var buffer = "";
function update(keyName){
    document.getElementById("screen").value += keyName;
}
function calc(operation){
    if (operation === '%') {
        document.getElementById("screen").value /= 100;
    } else if (operation === '.') {
        // Check if the screen value already has a dot
        if (!document.getElementById("screen").value.includes('.')) {
            // If not, add a dot
            document.getElementById("screen").value += '.';
        }
    } else {
        buffer += document.getElementById("screen").value + operation;
        document.getElementById("screen").value = "";
    }
}


function result(){
    buffer += document.getElementById("screen").value;    
    document.getElementById("screen").value = eval(buffer);
}

function reset(){
    buffer = "";
    document.getElementById("screen").value = "";
}

function toggleSign(){
    var screen = document.getElementById("screen");
    var currentValue = parseFloat(screen.value);
    screen.value = currentValue * -1;
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 27) {
        reset();
    }
}

// Add event listeners for keyboard input
document.addEventListener("keydown", function(event) {
    // Get the key code of the pressed key
    var key = event.keyCode;
  
    // Check which key was pressed and call the appropriate function
    switch (key) {
      case 48: // 0
        update(0);
        break;
      case 49: // 1
        update(1);
        break;
      case 50: // 2
        update(2);
        break;
      case 51: // 3
        update(3);
        break;
      case 52: // 4
        update(4);
        break;
      case 53: // 5
        update(5);
        break;
      case 54: // 6
        update(6);
        break;
      case 55: // 7
        update(7);
        break;
      case 56: // 8
        update(8);
        break;
      case 57: // 9
        update(9);
        break;
      case 96: // numpad 0
        update(0);
        break;
      case 97: // numpad 1
        update(1);
        break;
      case 98: // numpad 2
        update(2);
        break;
      case 99: // numpad 3
        update(3);
        break;
      case 100: // numpad 4
        update(4);
        break;
      case 101: // numpad 5
        update(5);
        break;
      case 102: // numpad 6
        update(6);
        break;
      case 103: // numpad 7
        update(7);
        break;
      case 104: // numpad 8
        update(8);
        break;
      case 105: // numpad 9
        update(9);
        break;
      case 106: // *
        calc("*");
        break;
      case 107: // +
        calc("+");
        break;
      case 109: // -
        calc("-");
        break;
      case 110: // .
      case 190: // .
        update(".");
        break;
      case 111: // /
        calc("/");
        break;
      case 13: // Enter
        result();
        break;
      case 27: // Escape
        reset();
        break;
      case 8: // Backspace
        var screen = document.getElementById("screen");
        screen.value = screen.value.slice(0, -1);
        break;
      case 46: // Delete
        reset();
        break;
      case 187: // =/+ (for some keyboard layouts)
        result();
        break;
      case 189: // -/_ (for some keyboard layouts)
        calc("-");
        break;
      case 191: // / (for some keyboard layouts)
        calc("/");
        break;
      case 192: // ` (for some keyboard layouts)
        reset();
        break;
    }
  });
  