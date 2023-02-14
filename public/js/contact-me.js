function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telp = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your name",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (email == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your email",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (telp == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your telp",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (subject == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your subject",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (message == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your message",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your email has been sent",
      showConfirmButton: false,
      timer: 1000,
    });
    const myEmail = "halimawaludienkhafifie@gmail.com";

    let mail = document.createElement("a");
    mail.href = `mailto:${myEmail}?subject=${subject}&body=Hallo perkenalkan nama saya ${name}, saya ingin ${subject} untuk ${message} tolong hubungi saya ${telp}.`;
    mail.click();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telp").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    
  }
}
