let hideText_btn = document.getElementById("hideText_btn");
let hideText = document.getElementById("hideText");
let hideText_btn_menos = document.getElementById("hideText_btn_menos")

hideText_btn.addEventListener("click", act_style);

function act_style() {
  hideText.classList.add('show');
  hideText_btn.classList.add("hide") 
}
hideText_btn_menos.addEventListener("click", ocultarTexto);
function ocultarTexto(){
  hideText.classList.remove("show");
  if(hideText.classList.contains("show")) {
    hideText_btn.classList.add("show")
  } else {
    hideText_btn.classList.remove("hide")
  }
}