function alert(){
    document.querySelector("#name").value = "";
document.querySelector("#cardnumber").value = "";
document.querySelector("#securitycode").value = "";
document.querySelector("#expirationdate").value = "";

Swal.fire({
position: 'top-end',
icon: 'success',
title: 'Gönderim Başarılı',
showConfirmButton: false,
background:"#5cb85c",
color:"#fff",
timer: 1500
});
}