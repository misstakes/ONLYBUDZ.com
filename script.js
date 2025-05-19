function checkCode() {
    const input = document.getElementById("accessCode").value.trim();
    const secret = "case"; // Customize your code
  
    if (input === secret) {
      window.location.href = "order.html";
    } else {
      document.getElementById("error").style.display = "block";
    }
  }
  