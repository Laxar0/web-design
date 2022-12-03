var mode;
//var verba_donation = document.getElementById("verba_counter").value;
//var bastion_donation = document.getElementById("bastion_counter").value;
//var vilha_donation = document.getElementById("vilha_counter").value;
//var readedFile = fetch("./js/table.json").json();
//var parsedData = JSON.parse(readedFile);

function validateForm(){
    var x = document.forms["myForm"]["formInfo"].value;
    if (!sessionStorage.getItem("ve")){
        var verba_donation = 0;
    }else{
        var verba_donation = parseInt(sessionStorage.getItem("ve"));
    }
    if (!sessionStorage.getItem("vi")){
        var vilha_donation = 0;
    }else{
        var vilha_donation = parseInt(sessionStorage.getItem("vi"));
    }
    if (!sessionStorage.getItem("ba")){
        var bastion_donation = 0;
    }else{
        var bastion_donation = parseInt(sessionStorage.getItem("ba"));
    }
    if (mode == "verba"){
        verba_donation += parseInt(x);
        sessionStorage.setItem("ve", verba_donation);
    }else if (mode == "bastion"){
        bastion_donation += parseInt(x);
        sessionStorage.setItem("ba", bastion_donation);
    }else if (mode == "vilha"){
        vilha_donation += parseInt(x);
        sessionStorage.setItem("vi", vilha_donation);
    }
    
}

function verba(){
    mode = "verba";
}

function bastion(){
    mode = "bastion";
}

function vilha(){
    mode = "vilha";
}

function show(){
    if (!sessionStorage.getItem("ve")){
        var verba_donation = 0;
    }else{
        var verba_donation = parseInt(sessionStorage.getItem("ve"));
    }
    if (!sessionStorage.getItem("vi")){
        var vilha_donation = 0;
    }else{
        var vilha_donation = parseInt(sessionStorage.getItem("vi"));
    }
    if (!sessionStorage.getItem("ba")){
        var bastion_donation = 0;
    }else{
        var bastion_donation = parseInt(sessionStorage.getItem("ba"));
    }
    alert("Донат на вербу " + verba_donation + "\nДонат на бастіон " + bastion_donation + "\nДонат на вільху " + vilha_donation)
}