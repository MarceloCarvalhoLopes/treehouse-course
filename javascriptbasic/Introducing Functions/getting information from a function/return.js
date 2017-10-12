Function isMailEmpty(){
  
  var field = document.getElementById('email');
  
  if(field === ''){
    return true; 
  }
  else{
    return false;
  }
}

var fieldTest = isMailEmpty();

if (fieldTest===true){
  alert('Please provide your e-mail address.');  
}