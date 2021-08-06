var btn = document.getElementById('btnClick')
btn.addEventListener('click', god)
btn.addEventListener('click', devil)

function god() {
    alert("God is Listening");
    console.log(godListner);
}

function devil() {
    alert("Devil is Listening");
    console.log(devilListner);
}