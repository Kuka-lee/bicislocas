function validateForm () {
  // your code here
  //1. me trigo los valores del formuario
  const name = $("#name").val();

  //2. valido el largo del nombre
  if (name.length >3) 
    alert("no es valido")
  

}