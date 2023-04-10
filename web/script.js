eel.expose(get_inputs)
function get_inputs() {
  input1 = document.getElementById('input1').value;
  input2 = document.getElementById('input2').value;

  inputs = {
    "input1": input1,
    "input2": input2
  }

  console.log('Sent: ' + inputs)
  return inputs
}

eel.expose(log)
function log(text) {
  document.getElementById('log').value += '\n' + text;
}

function send_data() {
  log('Sending data...')
  eel.data_pass(get_inputs())();
}

function close_window() {
  eel.closeWindow();
}


function read_file() {
  var file = document.getElementById("formFile").value;
  fileName = file.split("\\")[2];
  console.log(fileName);
  eel.scanFaces(fileName);
}

