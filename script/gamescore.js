function play() {
  addhtml("<iframe src='https://classic.minecraft.net/' id='game'></iframe><div id='X' style='color: red; position:absolute; right:0; top:0; font-weight: bold; font-size: 70px;z-index: 2;cursor: pointer;' onclick='stop();'>x</div><div onclick='stop();' style='position:fixed; top:0; left:0; text-align:center; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1.5; color:white; background-color:black; font-size:165%;' id='loading'>Đang tải,vui lòng chờ trong giây lát!</div>");
}

function stophow() {
  remove("instructions");
  remove("stophow");
}
function stop() {
  remove("game");
  remove("X");
  remove("loading");
}
function stopmulti() {
  remove("game");
  remove("X");
  remove("blahblah");
  remove("loading");
}
function nomulti() {
  remove("nomulti");
  remove("blahblah");
}
function playmulti() {
  addhtml("<div id='blahblah' style='position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0;'><input style='width: 90%; outline: none;' type='text' placeholder='Nhập server link vào đây (http://)' id='multyurl' autocomplete='off' /><input type='button' onclick='startmultigame()' value='summit' /></div><div id='nomulti' style='color: red; position:absolute; left:0; bottom:0; font-weight: bold; font-size: 70px;z-index: 2;cursor: pointer;' onclick='nomulti();'>x</div>");
}
function startmultigame() {
  remove("nomulti")
  var multi = document.getElementById("multyurl").value;
  addhtml("<iframe src=" + multi + " id='game'></iframe><div id='X' style='color: red; position:absolute; right:0; top:0; font-weight: bold; font-size: 70px;z-index: 2;cursor: pointer;' onclick='stopmulti();'>x</div><div onclick='stop();' style='position:fixed; top:0; left:0; text-align:center; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1.5; color:white; background-color:black; font-size:165%;' id='loading'>Đang tải,vui lòng chờ trong giây lát!</div> ")
  remove("audio");
}
function remove(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
function addhtml(html) {
  document.body.innerHTML = document.body.innerHTML + html;
}
function say(stuff) {
  var speak = new SpeechSynthesisUtterance(stuff);
  speechSynthesis.speak(speak);
}
