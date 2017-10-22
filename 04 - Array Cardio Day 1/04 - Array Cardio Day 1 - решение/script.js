var books = [
    { firstName: "Джоан", lastName: "Роулинг", title: "Гарри Потер", rating: 4.707, genre: "child, fantastic" },
    { firstName: "Александр", lastName: "Дюма", title: "Граф Монте-Кристо", rating: 4.599, genre: "child" },
    { firstName: "Марио", lastName: "Пьюзо", title: "Крестный отец", rating: 4.577, genre: "detective" },
    { firstName: "Джон", lastName: "Толкиен", title: "Властелин колец", rating: 4.572, genre: "child, fantastic" },
    { firstName: "Дениэл", lastName: "Киз", title: "Цветы для Элджернона", rating: 4.566, genre: "child, fantastic" },
    { firstName: "Агата", lastName: "Кристи", title: "Десять негритят", rating: 4.550, genre: "detective" },
    { firstName: "Виктор", lastName: "Драгунский", title: "Денискины рассказы", rating: 4.543, genre: "child" },
    { firstName: "Артур Конан", lastName: "Дойль", title: "Рассказы о Шерлоке Холмсе", rating: 4.522, genre: "child, detective" },
    { firstName: "Джеймс", lastName: "Хэрриот", title: "О всех созданиях - больших и малых", rating: 4.500, genre: "child" },
    { firstName: "Вениамин", lastName: "Каверин", title: "Два капитана", rating: 4.493, genre: "child" },
    { firstName: "Александр", lastName: "Волков", title: "Волшебник Изумрудного города", rating: 4.491, genre: "child" },
    { firstName: "Джек", lastName: "Лондон", title: "Белый Клык", rating: 4.480, genre: "child" },
    { firstName: "Жюль", lastName: "Верн", title: "Таинственный остров", rating: 4.479, genre: "child, fantastic" },
    { firstName: "Туве", lastName: "Янсон", title: "Муми-тролль", rating: 4.456, genre: "child" },
    { firstName: "Астрид", lastName: "Линдгрен", title: "Малыш и Карлсон, который живёт на крыше", rating: 4.437, genre: "child" },
    { firstName: "Алан Александер", lastName: "Милн", title: "Винни Пух и все-все-все", rating: 4.391, genre: "child" },
    { firstName: "Александр", lastName: "Дюма", title: "Три мушкетёра", rating: 4.394, genre: "child" },
    { firstName: "Астрид", lastName: "Линдгрен", title: "Пеппи Длинныйчулок", rating: 4.394, genre: "child" },
    { firstName: "Марк", lastName: "Твен", title: "Приключения Тома Сойера", rating: 4.354, genre: "child" },
    { firstName: "Клайв", lastName: "Льюис", title: "Хроники Нарнии", rating: 4.363, genre: "child, fantastic" },
];

var lists = document.querySelectorAll(".list");
var buttons = document.querySelectorAll("button");

function addContent(content, container) {
    if(!container.classList.contains("press")) {
        for(var i = 0; i < content.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = `${i + 1}. ${content[i].firstName} ${content[i].lastName} - ${content[i].title}<br>`
            container.appendChild(p);
        }   
        container.classList.add("press");
    }
}

function removeContent(content, container) {
    if(container.classList.contains("press")) {
        container.innerHTML = "";
        container.classList.remove("press");
    }
}

buttons[0].addEventListener("click", function() {
    var content = books.sort((a, b) => a.title > b.title? 1 : -1);
    var container = lists[0];
        
    removeContent(content, container);
    addContent(content, container);
});



buttons[1].addEventListener("click", function() {
    var content = books.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
    var container = lists[0];
    
    removeContent(content, container);
    if(!container.classList.contains("press")) {
        for(var i = 0; i < content.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = `${i + 1}. ${content[i].lastName} ${content[i].firstName} - ${content[i].title}<br>`
            container.appendChild(p);
        }   
        container.classList.add("press");
    }
});

buttons[2].addEventListener("click", function() {
    var content = books.sort((a, b) => a.rating < b.rating ? 1 : -1);
    var container = lists[0];
    
    removeContent(content, container);
    if(!container.classList.contains("press")) {
        for(var i = 0; i < content.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = `${i + 1}. ${content[i].firstName} ${content[i].lastName} - ${content[i].title} - <b>${content[i].rating}</b><br>`
            container.appendChild(p);
        }   
        container.classList.add("press");
    }
});

buttons[3].addEventListener("click", function() {
    var content = books.filter(book => (book.genre.indexOf("child") !== -1 ));
    var container = lists[1];

    removeContent(content, container);
    addContent(content, container);
});

buttons[4].addEventListener("click", function() {
    var content = books.filter(book => (book.genre.indexOf("fantastic") !== -1 ));
    var container = lists[1];

    removeContent(content, container);
    addContent(content, container);
});

buttons[5].addEventListener("click", function() {
    var content = books.filter(book => (book.genre.indexOf("detective") !== -1 ));
    var container = lists[1];

    removeContent(content, container);
    addContent(content, container);
});