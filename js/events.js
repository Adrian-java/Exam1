window.addEventListener('DOMContentLoaded', function () {
    
    var birthdays = [];
    
    var count=0;
    
   
    var checkBirthdayBtn = document.querySelector('#checkBirthday');
    var birthdayList = document.querySelector('#birthdayList');
    var birthdayCheckList = document.querySelector('#birthdayCheckList');   
    var addTask = document.querySelector('#firstName');
    var checkboxs = document.querySelector('.checkbox');
    
    
    
    
    addTask.addEventListener('keypress', function(e) {
         var key = e.which || e.keyCode;
        if (key === 13) {
            var newBirthday = readBirthday();
            var template = getBirthdayTemplate(newBirthday,++count);
            var birthdayDomElement = document.createElement('li');
            birthdays.push(newBirthday);
            birthdayDomElement.innerHTML = template;
            birthdayList.appendChild(birthdayDomElement);
        }
        var removeBtn = document.querySelector('.birthday-remove');
        removeBtn.addEventListener('click', function() {
            var index = birthdays.indexOf(newBirthday);
            if (index >= 0) {
                birthdays.splice(index, 1);
            }
            
            birthdayList.removeChild(birthdayDomElement);
        });
    });
    

    $(".checkbox").click(function() {   
        if(this.checked) {
            this.parent().parent().css("text-decoration","line-through")
        }
    });
});




