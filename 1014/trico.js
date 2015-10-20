var curry = ["チキンカレー", "カツカレー", "タコカレー", "ピピカレー", "トリコカレー", "ECOランチ"];
var topping = ["ボイルチキン", "カツ", "ゆでたまご", "チーズ", "ミンチ"];
var counter = 0;
window.onload = function(){
  var result_tug = document.getElementById("curry");
  var topping_tug = document.getElementById("topping");

  topping_tug.onclick = function(){
    var rand = Math.floor( Math.random() * 5);
    topping_tug.innerHTML = topping[rand];
  };

  result_tug.onclick = function(){
    var rand = Math.floor( Math.random() * 6);
    result_tug.innerHTML = curry[rand];
  };

  setInterval( function(){
    var dateObj = new Date();
    var body_tug = document.getElementById("body");

    var r = (dateObj.getMilliseconds()%256).toString(16);
    var g = (256 - dateObj.getMilliseconds()%256).toString(16);
    body_tug.style.backgroundColor = "#"+r+r+r;
    body_tug.style.color = "#"+g+g+g;
  },10);
};
