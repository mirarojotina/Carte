
// Get the modal
var modalF = document.getElementById("ModalF");
    modalP = document.getElementById("ModalP");
    modalE = document.getElementById("ModalE");

// When the user clicks on the button, open the modal
function clic(ide){
    if(ide == "BtnF"){
        modalF.style.display = "block";  
    }
    else if (ide =="BtnP") {
        modalP.style.display = "block";  
        
    } else {
        modalE.style.display = "block";  
    }
}

// When the user clicks on <span> (x), close the modal
function cl(){
    modalF.style.display = "none";
    modalP.style.display = "none";
    modalE.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalF.style.display = "none";
    modalP.style.display = "none";
    modalE.style.display = "none";

  }
}
