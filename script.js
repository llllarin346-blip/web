// مثال بسيط: رسالة عند إرسال النموذج
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  if(form){
    form.addEventListener("submit", function(event){
      alert("تم إرسال الحجز بنجاح!");
    });
  }
});

