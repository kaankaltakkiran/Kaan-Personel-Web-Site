function contactAlert(){
a=document.querySelector("#name").value;
b=document.querySelector("#email").value;
c=document.querySelector("#message").value;
    if(a==''||b==''||c=='')
    {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            text: '!!!Boş Alan Bıraktınız!!!',
            title: '!!!Mesajınız Yollanamadı!!!',
            showConfirmButton: false,
            background:"#dc3741",
            color:"#fff",
            timer: 2500
            });
        }
        else{
            
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Gönderim Başarılı',
            text: 'Mesaj Başarıyla Gönderildi',
            showConfirmButton: false,
            background:"#5cb85c",
            color:"#fff",
            timer: 2500
            });
        }
    }

   
