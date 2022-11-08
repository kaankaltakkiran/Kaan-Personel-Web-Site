function alert(){
a=document.querySelector("#name").value;
b=document.querySelector("#cardnumber").value;
c=document.querySelector("#securitycode").value;
d=document.querySelector("#expirationdate").value;
    if(a==''||b==''||c==''||d=='')
    {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: '!!!Boş Alan Bıraktınız!!!',
            showConfirmButton: false,
            background:"#dc3741",
            color:"#fff",
            timer: 1500
            });
        }
        else{
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
    }

   
