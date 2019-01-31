$(document).ready(function(){
$('.fas').css({
color:'black',
})
$('#on').click(function(){
var val="";
var val2="";
var signe="";
var val3="";
var convertir;
var convertir2;
var opperation;
$('.div1').html('_');
$('.div1').css({
color:'green',
})
$('.div2').html('_');
$('.div2').css({
color:'green',
})
$('#divecran').css({
backgroundColor:'silver',
});
$('.fas').css({
color:'white',
});
$('#reset').click(function(){
opperation =0;
val="";
val2="";
val3="";
$('.div1').html('_');
$('.div2').html('_');
})
$('.btn1').click(function(){
val+=$(this).html();
$('.div2').html(val);
});
$('.signe').click(function(){
$('.div1').html('_');
$('.div2').html('_');
val2=val;
val="";
signe=$(this).html()
if(val2!=""){
$('.div1').html(val2+signe);
$('.div2').html('_');
}else{
signe="";
$('.div1').html('_');
$('.div2').html('_');
}
});
$('#egale').click(function(){
val3=val;
val="";
convertir=parseFloat(val2);
convertir2=parseFloat(val3);
if(signe=="+"){
opperation=convertir+convertir2;
}else if(signe=="-"){
opperation=convertir-convertir2;
}else if(signe=="x"){
opperation=convertir*convertir2
}else if(signe=="/"){
opperation=convertir/convertir2
}else if(signe=="%"){
opperation=convertir%convertir2 
}
if(val3!=""){
$('.div1').html(val2+signe+val3);
$('.div2').html(opperation);
}else{
val2="";
val="";
val3="";
$('.div1').html('_');
$('.div2').htmk('_');
}
});

});

$('#on').dblclick(function(){
val=""
$('.div1').css({
color:'black',
});
$('.div2').css({
color:'black',
})
$('#divecran').css({
'background-color':'black',
});
$('.fas').css({
color:'black',
});
});
});