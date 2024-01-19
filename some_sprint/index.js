 // Создание элемента заголовка (h1) и добавление текста к этому элементу 
 const titleElement = document.createElement('h1'); 
 titleElement.append('Hello from it-incubator'); 
 

 // Добавление элемента заголовка в тело документа 
 document.body.append(titleElement); 

 // Создание выпадающего списка (select) 
 const techSelectElement = document.createElement('select'); 

 // Создание первого варианта (option) для выпадающего списка 
 const techSelectOption0Element = document.createElement('option'); 
 techSelectOption0Element.value = 1; 
 techSelectOption0Element.append('JS'); // Добавление текста 'JS' к первому варианту 
 techSelectElement.append(techSelectOption0Element); // Добавление первого варианта в выпадающий список 

 // Создание второго варианта (option) для выпадающего списка 
 const techSelectOption1Element = document.createElement('option'); 
 techSelectOption1Element.value = 2; 
 techSelectOption1Element.append('HTML'); // Добавление текста 'HTML' ко второму варианту 
 techSelectElement.append(techSelectOption1Element); // Добавление второго варианта в выпадающий список 

 // Добавление второго варианта в тело документа (вместо этого, вероятно, предполагалось добавить сам выпадающий список) 
 document.body.append(techSelectElement);
 // data

 const info = {
    title : 'it-incubator',
    graduatesCount : 2000,
    areYouChampion : true,
    technologes : [
        {id: 1 , title: 'Front' },
        {id: 2 , title:'Back'},
        {id: 3 , title:'DevOps'}
    ]

    
 }
// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);
let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);
let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

const techSelectElements2 = document.createElement('select');


let option_1 = document.createElement('option');
option_1.innerText = info.technologes[0].title;
techSelectElements2.append(option_1);

let option_2 = document.createElement('option');
option_2.innerText = info.technologes[1].title;
techSelectElements2.append(option_2);

let option_3 = document.createElement('option');
option_3.innerText = info.technologes[2].title;
techSelectElements2.append(option_3);

document.body.append(techSelectElements2);



