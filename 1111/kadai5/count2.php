<?php

$fn = fopen("count2.txt", 'r');
$a = fgets($fn);
fclose($fn);

if(!isset($a)) $a = 1;
print "<html> <head> <meta charset='UTF-8'></head> ";
print "<body> ";
print "現在のアクセス数 " . $a  . "回<br>";
print "（次は " . ++$a . "回）";
print "<form action = \"reset.php\" method = \"GET\"><button>リセット</button></form>";
print "</body></html>";

$fn = fopen("count2.txt", 'w');
fwrite($fn, $a);
fclose($fn);

?>
