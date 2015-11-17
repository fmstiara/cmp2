<?php
$fn = fopen("count2.txt", 'w');
fwrite($fn, 1);
fclose($fn);
print "アクセス回数を0にリセットしました";
?>
