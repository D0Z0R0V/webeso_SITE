//валидация наших полей, то есть проверка на заполнение данных
document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === ""){
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("password").value === "") {
        alert("Заполните поле автомобиль!");
    } else {
        alert("Мы свяжемся с вами в билжайшее время");
    }
}

/*$('form').submit(function(event) {
    // предотвращает отправку формы по умолчанию
    event.preventDefault();
    // получает данные из полей формы
    var name = $('input[name="Email"]').val();
    var email = $('input[name="Password"]').val();
    // отправляет данные на сервер
    $.ajax({
      url: 'submit.php',
      method: 'POST',
      data: { name: name, email: email }
    })
    .done(function(response) {
      console.log(response);
    })
    .fail(function(error) {
      console.error(error);
    });
});*/


