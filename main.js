
var n1 = document.getElementById('ibtn-num1')
var n2 = document.getElementById('ibtn-num2')
var n3 = document.getElementById('ibtn-num3')
var n4 = document.getElementById('ibtn-num4')
var n5 = document.getElementById('ibtn-num5')
var sub = document.getElementById('ibnt-submit')
var first = document.getElementById('ifirst')
var second = document.getElementById('isecond')
var x = document.getElementById('rating')


n1.addEventListener("click",selectBtn1)
n2.addEventListener("click",selectBtn2)
n3.addEventListener("click",selectBtn3)
n4.addEventListener("click",selectBtn4)
n5.addEventListener("click",selectBtn5)

function changePage(){
    if(x.innerHTML == "0"){
        window.alert("[ERRO] Please, select an option")
    }
    else{
        first.style.display = 'none'
        second.style.display='flex'
    }
}

function selectBtn1() {
    n1.style.backgroundColor = '#C95212';
    n1.style.color = '#ffffff';
    n1.style.transition = '0.3s'
    n2.style.backgroundColor = '#606B7B';
    n2.style.color = 'rgb(218, 213, 213)';
    n3.style.backgroundColor = '#606B7B';
    n3.style.color = 'rgb(218, 213, 213)';
    n4.style.backgroundColor = '#606B7B';
    n4.style.color = 'rgb(218, 213, 213)';
    n5.style.backgroundColor = '#606B7B';
    n5.style.color = 'rgb(218, 213, 213)';
    x.innerHTML = "1";
}

function selectBtn2() {
    n2.style.backgroundColor = '#C95212';
    n2.style.color = '#ffffff';
    n2.style.transition = '0.3s'
    n1.style.backgroundColor = '#606B7B';
    n1.style.color = 'rgb(218, 213, 213)';
    n3.style.backgroundColor = '#606B7B';
    n3.style.color = 'rgb(218, 213, 213)';
    n4.style.backgroundColor = '#606B7B';
    n4.style.color = 'rgb(218, 213, 213)';
    n5.style.backgroundColor = '#606B7B';
    n5.style.color = 'rgb(218, 213, 213)';
    x.innerHTML = "2";
}
function selectBtn3() {
    n3.style.backgroundColor = '#C95212';
    n3.style.color = '#ffffff';
    n3.style.transition = '0.3s'
    n2.style.backgroundColor = '#606B7B';
    n2.style.color = 'rgb(218, 213, 213)';
    n1.style.backgroundColor = '#606B7B';
    n1.style.color = 'rgb(218, 213, 213)';
    n4.style.backgroundColor = '#606B7B';
    n4.style.color = 'rgb(218, 213, 213)';
    n5.style.backgroundColor = '#606B7B';
    n5.style.color = 'rgb(218, 213, 213)';
    x.innerHTML = "3";
}
function selectBtn4() {
    n4.style.backgroundColor = '#C95212';
    n4.style.color = '#ffffff';
    n4.style.transition = '0.3s'
    n2.style.backgroundColor = '#606B7B';
    n2.style.color = 'rgb(218, 213, 213)';
    n3.style.backgroundColor = '#606B7B';
    n3.style.color = 'rgb(218, 213, 213)';
    n1.style.backgroundColor = '#606B7B';
    n1.style.color = 'rgb(218, 213, 213)';
    n5.style.backgroundColor = '#606B7B';
    n5.style.color = 'rgb(218, 213, 213)';
    x.innerHTML = "4";
}
function selectBtn5() {
    n5.style.backgroundColor = '#C95212';
    n5.style.color = '#ffffff';
    n5.style.transition = '0.3s'
    n2.style.backgroundColor = '#606B7B';
    n2.style.color = 'rgb(218, 213, 213)';
    n3.style.backgroundColor = '#606B7B';
    n3.style.color = 'rgb(218, 213, 213)';
    n4.style.backgroundColor = '#606B7B';
    n4.style.color = 'rgb(218, 213, 213)';
    n1.style.backgroundColor = '#606B7B';
    n1.style.color = 'rgb(218, 213, 213)';
    x.innerHTML = "5";
}
