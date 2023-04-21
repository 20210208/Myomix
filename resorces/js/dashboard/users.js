var selectedRow = mull;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{

    }

}

//Tomar los datos
function readFormData(){
    var formData = {};
    formData["Nombre"] = document.getElementById("Nombre").value;
    formData["Foto"] = document.getElementById("Foto").value;
    formData["inputPassword"] = document.getElementById("inputPassword").value;
    formData["es_us"] = document.getElementById("es_us").value;
    formData["tip_us"] = document.getElementById("tip_us").value;
    return formData;
}

//Insertar datos
function insertNewRecord(data){
    var table = document.getElementById("main-tabla").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Nombre;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Foto;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.inputPassword;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.es_us;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.tip_us;
}