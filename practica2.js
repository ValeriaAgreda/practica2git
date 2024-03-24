let inscripciones = [];



function registrar(){
    console.log("registrar");
    let name = $("#name").val();
    let firstLastName = $("#firstLastName").val();
    let secondLastName = $("#secondLastName").val();
    let gender = $("#gender").val();
    let grade = $("#grade").val();
    let type = $("#type").val();

    let InsObj = new Inscripcion(name,firstLastName,secondLastName,gender,grade, type);
    inscripciones.push(InsObj);

    console.log(inscripciones);

}



function mostrar() {
    let tableHtml = "<table id='InscritosTable'>";
    tableHtml += "<thead><tr><th>Nombre</th><th>Apellidos</th><th>Curso</th><th>Tipo</th><tbody>";

    for (let i = 0; i < inscripciones.length; i++) {
        tableHtml += "<tr>";
        tableHtml += "<td>" + inscripciones[i].name + "</td>";
        tableHtml += "<td>" + inscripciones[i].firstLastName + "     " + inscripciones[i].secondLastName + "</td>";
        tableHtml += "<td>" + inscripciones[i].grade + "</td>";
        tableHtml += "<td>" + inscripciones[i].type + "</td>";
        tableHtml += "</tr>";
    }

    tableHtml += "</tbody></table>";

    $("#mostrar").html(tableHtml);
}
