window.onload = function(){
  setInterval( function(){
    var dateObj = new Date();
    var body_tug = document.getElementById("body");
    var r = (Math.floor(Math.abs(255*Math.sin(dateObj.getMilliseconds()*Math.PI/1000))));
    var g = 255 - r;
    r = r.toString(16);
    g = g.toString(16);
    body_tug.style.backgroundColor = "#"+r+r+r;
    body_tug.style.color = "#"+g+g+g;
  },50);
};
