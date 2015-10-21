var curry = ["チキンカレー", "カツカレー", "タコカレー", "ピピカレー", "トリコカレー", "ECOランチ"];
var topping = ["ボイルチキン", "カツ", "ゆでたまご", "チーズ", "ミンチ"];

function dicideCurry(){
  var result_tug = document.getElementById("curry");

  var rand = Math.floor( Math.random() * 6);
  result_tug.innerHTML = curry[rand];

}

function dicideTopping(){
  var topping_tug = document.getElementById("topping");

  var rand = Math.floor( Math.random() * 5);
  topping_tug.innerHTML = topping[rand];

}
