var formref = firebase.database().ref().child("hellow");

function signup(){

    var name = document.getElementById("Username").value;
    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var c_password = document.getElementById("c_password").value;

    submitform(name, Email, password, c_password);


    console.log("succecc");

    // var allcontact = formref.push();
    // allcontact.set({
    //     Name : name,
    //     email : Email,
    //     Password : password,
    //     C_password : c_password
    // });
    // console.log(name, email, password, c_password);
};



function submitform(name, Email, password, c_password){

    var newref = formref.push();    
    newref.set({
        Name : name,
        email : Email,
        Password : password,
        C_password : c_password
    });
}