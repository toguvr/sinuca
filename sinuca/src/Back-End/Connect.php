<?php

$con=mysqli_connect("localhost", "u856106684_sinuca", "wsde123", "u856106684_sinuca");
mysqli_select_db($con,"fluxoDeCaixa");

$teste=$_GET['teste'];

echo $teste;

$sql2= "INSERT INTO `testando`( `nome`) VALUES ('$teste')";

$res=mysqli_query($con,$sql2);
$linhas=mysqli_affected_rows($con);
if($linhas == 1){
echo "registro gravado </br>";
}else{
  echo "deu ruim padrim! </br>";
}
mysqli_close($con)

?>