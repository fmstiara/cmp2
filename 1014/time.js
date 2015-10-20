window.onload = function(){
  setInterval( function(){
    var dateObj = new Date();
    var body_tug = document.getElementById("body");

    var r = (dateObj.getMilliseconds()%256).toString(16);
    var g = (256 - dateObj.getMilliseconds()%256).toString(16);
    body_tug.style.backgroundColor = "#"+r+r+r;
    body_tug.style.color = "#"+g+g+g;
  },10);
};
