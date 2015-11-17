<html lang="jp">
  <head>
    <meta charset='UTF-8'>
    <style>
      table, td{
        border: solid 1px #113366;
        border-collapse: collapse;
      }
      div{
        padding: 10px;
        margin 20px;
      }
    </style>
    <title> 履歴書 </title>
  </head>
  <body>
    <div>
      <table>
        <tr><td width="100">氏名</td><td width="400"><?php print $_GET["name"] ?></td></tr>
        <tr><td> 性別 </td> <td> <?php print $_GET["sex"] ?></tr>
        <tr><td> 所属 </td> <td> <?php print $_GET["belong"] ?></tr>
        <tr><td> 特技 </td> <td> <?php print $_GET["hobby"] ?></td> </tr>
        <tr><td> 嫌いなもの </td> <td> <?php print $_GET["notlike"] ?></tr>

      </table>
    </div>
  </body>
</html>
