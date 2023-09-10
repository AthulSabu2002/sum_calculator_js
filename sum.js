function sum(){
    const input1=document.getElementById("input1").value;
    const input2=document.getElementById("input2").value;

    const sum1 = +input1 + +input2;
    
    document.getElementById("sum1").value = sum1;
}
