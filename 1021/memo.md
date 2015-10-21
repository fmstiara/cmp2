#jQueryの使い方

#最高のさんぷるぺーじとりふぁれんす
[最高のサンプルページ](http://www.shiftbrain.co.jp/book/jquery/)  
[jQueryプラグインまとめ](http://matome.naver.jp/odai/2130274551378616401)  
[日本語リファレンス](http://semooh.jp/jquery/)
##基本形

```javaScript
$(function(){
  $('A').B();
});

//Bの中に関数を入れていい
$(function(){
  $('A').B(function(){
    $('C').D();
  });
});

```

A：セレクタ。idやclassを指定する  
B：メソッド。指定したセレクタに対する処理  

##メソッドのさんぷる

```javaScript
//example cssをいじる
$(function(){
  //クリックされたときの処理
  $('hoge').click(function(){
    //thisは同じセレクタを指すときに使う
    //背景を緑にする
    $('this').css("background-color","green");

  });
});

//example toggle
$(function(){
  //引数に入れた関数をクリックされたごとに行う
  $('hoge').toggle(function(){
    $('this').css("background-color","green");
  },function(){
    $('this').css("background-color","red");
  },function(){
    $('this').css("background-color","blue");
  });
});

$(function(){
  $('hoge').click(function(){
    //選択したセレクタが消える
    $('this').hide();

    //指定した時間でフェードアウト
    $('this').fadeOut(time);
  });

  $('hoge').mouseover(function(){
    $('this').css("color","white");
  });

  $(function(){
  	$(".hoge3A").hover(
  	//マウスオーバー時の処理
  	function(){
  		$(".red").css("background","red").text("taratara");
  	}, //２つの引数に関数を入れている
  	//マウスアウト時の処理
  	function(){
  		$(".red").css("background","#FC9").text("hogehoge");
	});

  $(function(){
  	$(".hoge3B").toggle(function(){
      //上にしまう
  		$(".hogehoge").slideUp("fast");
  	},function(){
      //下に出る
  		$(".hogehoge").slideDown("slow");//引数で速さを変えられる
	});
});

```

##こーるばっく
第二引数として関数を書くと、処理が終わったときにそれを実行してくれる

```javaScript
//example
$(function(){
  $('hoge').fadeOut(1000,function(){
    alert("hogehoge");
  });  
});
```
