zoadicSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius','Pisces'];
zoadicSignsImage = ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aries.svg/1081px-Aries.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taurus.svg/1200px-Taurus.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gemini.svg/1200px-Gemini.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cancer.svg/1200px-Cancer.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Leo.svg/1200px-Leo.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Virgo.svg/1200px-Virgo.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Libra.svg/1200px-Libra.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Scorpio.svg/1200px-Scorpio.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sagittarius.svg/1200px-Sagittarius.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Capricorn.svg/1200px-Capricorn.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Aquarius.svg/1200px-Aquarius.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pisces.svg/1200px-Pisces.svg.png'];
document.getElementById("main-loader").innerHTML = "Loading...";
for(var i=0;i<zoadicSigns.length;i++){
  document.getElementById("zoadic-signs").innerHTML += renderZoadicSigns(zoadicSigns[i],zoadicSignsImage[i]);
}
document.getElementById("main-loader").innerHTML = "";
function renderZoadicSigns(sign,imageSrc)
{
  var htmlPart = "<div class='zoadic-sign' id='"+sign+"' onclick='get_data(this.id);'><div class='img-sec'><img class='zoadic-sign-image' src='"+imageSrc+"' alt='"+sign+"'></div><div class='sign-name'><span>"+sign+"</span></div></div><br>";
  return htmlPart;
}
function get_data(sign){
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById("sign").innerHTML = sign;
  var doc = document.getElementById("result-card");
  doc.style.display = "Block";
  document.getElementById("loader").innerHTML = "Loading...";
	 $.ajax({
		type:'POST',
		url:'https://aztro.sameerkumar.website?sign='+sign.toLowerCase()+'&day=today',
		success:function(data){
			console.log(data);
      document.getElementById("loader").innerHTML = "";
      //alert("Color "+data.color+"  Compatibility "+data.compatibility+"  Description "+data.description);
			document.getElementById("color").innerHTML = "Color : "+data.color;
			document.getElementById("compatibility").innerHTML = "Compatibility : "+data.compatibility;
			document.getElementById("description").innerHTML = "Description : "+data.description;
		}
	});
}
function closeBtn(){
  document.getElementById("color").innerHTML = "";
  document.getElementById("compatibility").innerHTML = "";
  document.getElementById("description").innerHTML = "";
  var doc = document.getElementById("result-card");
  doc.style.display = "None";
}