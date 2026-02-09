function showLog() {
    document.getElementById("log").style.display = "block"
    document.getElementById("overlay").style.display = 'block'
}
function hiddenLog() {
    document.getElementById('log').style.display = "none"
    document.getElementById("overlay").style.display = 'none'
}

let index = 0;

function next() {
  index++;
  document.getElementById("slides").style.transform =
    `translateX(-${index * 100}%)`;
}

function prev() {
  index--;
  document.getElementById("slides").style.transform =
    `translateX(-${index * 100}%)`;
}
