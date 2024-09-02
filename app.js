$(document).ready(function() {// функция выполняется, когда документ полностью загружен и готов к работе.
    $('#search-button').click(function() {// обработчик события клика для кнопки поиска.
        let searchTerm = $('#search-input').val();// Получаем значение из поля ввода.
        if (searchTerm) {// Проверяем, что поле ввода не пустое.
            $.ajax({// Выполняем AJAX-запрос к API Flickr.
                url: `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${searchTerm}&jsoncallback=?`,
            
                dataType: 'jsonp',// Указываем, что ожидаем ответ в формате JSONP.
                success: function(data) {
                    $('#image-container').empty();// Очищаем контейнер для изображений перед добавлением новых.
                    if(data.length===0){
                        $('<p>').text('Ничего не найдено по этому запросу :(').appendTo('#image-container');
                    }else{
                        for (let i = 0; i < 10; i++) {
                            $('<img>').attr('src', data.items[i].media.m).appendTo('#image-container');
                        }
                    }
                }

            }).fail(function() {
                $('<p>').text('Произошла ошибка при выполнении запроса').appendTo('#image-container');
            });
        }else{
            $('<p>').text('Введите что-нибудь в строку поиска').appendTo('#image-container');
        }
    });
});
