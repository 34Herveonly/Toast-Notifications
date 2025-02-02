let toastBox=document.getElementById("toastBox");

let successMsg='<i class="fa-solid fa-circle-check"></i> You have succesfully submitted';
let errorMsg='<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid input,check again!';


function showToast(msg){
  let toast=document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML=msg;
  toastBox.appendChild(toast);

  if(msg.includes('error')){
    toast.classList.add('error');
  }
  else if(msg.includes('Invalid')){
    toast.classList.add('Invalid');
  }

  setTimeout(()=>{
toast.remove();
  },5000)
}