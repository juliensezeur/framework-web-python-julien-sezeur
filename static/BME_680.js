function Valider()
{
var compteur=0;
var r1 = document.getElementById('q1').value;
var r2 = document.querySelector('input[name=q2]:checked').value;
var r3 = document.querySelector('input[name=q3]:checked').value;
if (r1 =="BME 680" )
compteur++;
if (r2 =="e" )
compteur++;
if (r3 =="c" )
compteur++;
document.getElementsByTagName('section')[0].innerHTML="Vous avez "+compteur+" bonne réponce.";
}