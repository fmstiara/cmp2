<?php

$yen = $_GET["dollars"]===""?"":$_GET["dollars"]*122.86;
$dollars = $_GET["yen"]===""?"":$_GET["yen"]/122.86;
echo <<<_END
<!DOCTYPE html>
<html lang="jp">
  <head>
    <meta charset='UTF-8'>
    <title>  </title>
  </head>
  <body>
    円またはドルを入力してください<br>
    <strong>1$ = 122.86円</strong>です
    <form action="convert.php" method = "get">
      米ドル <input type = "text" name = "dollars" value = $dollars><br>
      日本円 <input type = "text" name = "yen" value = $yen ><br>
      <input type = "submit" value = "計算">
    </form>
  </body>
</html>

_END
?>
