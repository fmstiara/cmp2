#ajaxと戯れる

jQueryを使って、XMLとJSONと戯れる

##XML・JSONの読み込み基本形

```javascript
$(function(){
  $.ajax({
    url: "xxx.xml",
    dataType: "xml",
    sucsess: function(data){
      //読み込みに成功したときの処理
    },
    error: function(xhr, status, err){
      //読み込みに失敗したときの処理
    }
  });
});
```

xmlの箇所をjsonに変えればjsonの読み込みも出来る。

##xmlの処理

```javascript
$(data).find("探す要素").text();

$(data).find("探す要素").each(function(){
    //findで取得した要素の集合ひとつひとつに対しての処理
  }
);
```

##jsonの処理

```javascript
$(function{
  $.ajax({
    url: "xxx.json",
    dataType: "json",
    success: function(data){

      /*
        object:[{"element1":"hoge", "element2":"hogehoge"}]    
        object:[{"element1":"hage", "element2":"hagehage"}]    
        object:[{"element1":"hige", "element2":"higehige"}]    
      */

      //.で繋げて要素を取得する
      console.log(data.object[0].element1); //hoge

    },
    error: function(xhr, status, err){
      //読み込みに失敗したときの処理
    }
  });
});
```
