var num=1;

function manual(){
    num++
    if(num>3)
    num=1;
    var foto=document.getElementById("foto");
    foto.src="foto_"+num+".jpg";
   
}
setInterval(manual,3000);

document.getElementById('body_negrita').addEventListener('mouseover',function(){
    document.body.style.fontFamily=string.bold()
});

    
