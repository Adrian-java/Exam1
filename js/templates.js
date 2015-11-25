function getBirthdayTemplate(birthdayObj, count) {
    return  "<div class='birthday-data'>" +"<input id='checkbox"+count+"' type=\"checkbox\" class=\"checkbox\" name=\"vehicle\">"+
                "<div id='data"+count+"' class='birthday-row'>" + 
                    "Zadanie: " + birthdayObj.firstName + "</div>" +
            "</div>" + 
            "<button id='remove"+count+"' class='birthday-remove'>Usuń"+
        "<button id='edit"+count+"'>Edytuj</button>";
}