function options() {
  addhtml("<div style='position:fixed; top:0; left:0; text-align:center; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1.5; color:white; background-color:black; font-size:125%;' id='options'>Bạn muốn làm gì ngay bây giờ nào? <button class='button'onclick='change()'>Thay đổi dòng chữ cạnh logo Minecraft</button><button onclick='openwindowform()' class='button'>Open window form</button><button onclick='enablenarrations()' id='en' class='button'>Enable narrations</button><button onclick='closeoptions()' class='button'>Đóng (x)</button></div>");
}
function enablenarrations() {
alert("thing")
  } 
function change() {
  text = prompt("Bạn muốn đặt dòng chữ như nào?");
  document.getElementById("flashingtext").innerText = text;
  document.cookie = "text=" + text 
  if(text == "" || text == null) {
    change();
  }
  remove("options")
}
function openwindowform() {
    remove("options")
    window.open("/", "", "width=10000,height=10000");
}
function closeoptions() {
  remove("options")
}
function quit() {
  alert("Nhấn Alt + F4 đi bro :D")
}
function how() {
  addhtml("<div id='stophow' style='color: red; position:absolute; left:0; bottom:0; font-weight: bold; font-size: 60px;z-index: 2;cursor: pointer;' onclick='stophow();'>x</div><div style='position:fixed; top:0; left:0; text-align:center; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1; color:white; background-color:black; font-size:125%;' id='instructions'>Use WASD to move around, T to talk, 1 to 9 to change blocks, B to get new blocks, mouse to look around, R to respawn, ESC to pause and G to teleport a random player into your world. To go back to the starting screen when you are in-game press ESC and CLICK THE RED X IN THE CORNER OF THE SCREEN TO CLOSE IN THE REAL GAME THE RED X IS ON THE TOP RIGHT</div>")
}
