<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Practice 4</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style type="text/css">
    table {
      border-collapse: collapse;
    }
    table, tr, td {
      border: 2px solid;
    }
    td {
      width: 2rem;
      height: 2rem;
      text-align: center;
    } 
  </style>
</head>
<body>
  <h1>Practice 4</h1>
  
  <?php
  $size = $_POST['size'];
  $size = (int) $size;
  
  print "<table>";

  for ($row = 0; $row <= $size; $row++) {
    echo "<tr>";
      for ($col= 0; $col <= $size; $col++) {
        if ($row == 0) {
          print "<td>" . $col . "</td>";
        } else if ($col == 0) {
          print "<td>" . $row . "</td>";
        } else {
          print "<td>" . ($row * $col) . "</td>";
        }
      }
    echo "</tr>";
  }
  print "</table>";
  ?>
</body>
</html>
