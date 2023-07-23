
var tab = getUrlVars();
var b = tab["point_"];
document.getElementById('point').value = parseInt(b);
var a = tab["point"];
document.getElementById('point').value = parseInt(a);
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
         vars[key] = value.replace(/[+]/g,' ');
     });
    return vars;
}
function pn1(){
    var rep=document.getElementById("V");
    var pnt=document.getElementById("point_");
    if(rep.checked){
        pnt.value = parseInt(pnt.value) + 1;
    }
    document.getElementById("F1").disabled = true;
    document.getElementById("F2").disabled = true;
    document.getElementById("F3").disabled = true;
    document.getElementById("V").disabled = true;
}


function pn(){
    var rep=document.getElementById("V");
    var pnt=document.getElementById("point");
    if(rep.checked){
        pnt.value = parseInt(pnt.value) + 1;
    }
    document.getElementById("F1").disabled = true;
    document.getElementById("F2").disabled = true;
    document.getElementById("F3").disabled = true;
    document.getElementById("V").disabled = true;
}


