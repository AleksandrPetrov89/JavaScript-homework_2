const catalog = {};
for (let i = 0; i < 6; i++) {
    let array = Array.from({length: getRandomInt(2, 9)}, () => getRandomInt(36, 45));
    let sizesArray = Array.from(new Set(array)).sort();
    catalog[i] = {
        id: i,
        name: `Наименование ${i}`,
        description: `Описание ${i}`,
        sizes: sizesArray,
        price: getRandomInt(499, 5999),
        available: i % 2 == 0,
    };
};

const basket = [];
for (let i = 0; i < 3; i++) {
    basket[i] = {
        good: i,
        amount: getRandomInt(1, 10),
    };        
};

console.log(catalog);
console.log("Изначальный состав корзины");
console.log(basket);

console.log("Состав корзины после добавления товара id= 1 в количестве 3 шт.");
addingProduct(1, 3);
console.log("Состав корзины после добавления товара id= 4 в количестве 6 шт.");
addingProduct(4, 6);

productRemoval(5);
console.log("Состав корзины после удаления товара id= 4");
productRemoval(4);

console.log("Общее количество и стоимость товаров в корзине");
console.log(result());

console.log("Очистка корзины");
emptyTrash();


function getRandomInt(min, max) {
    /* Функция возвращает случайное число в указанных пределах, не включая max */
    return Math.floor(Math.random() * (max - min)) + min;
};

function addingProduct(id, quantity) {
    /* Добавляет товар в корзину. При вызове функции необходимо указать id и количество
       добавляемого товара.
       Если товар с таким id уже есть в корзине, то к существующему количеству прибавляется 
       нужное количество товара.
       Если товара с таким id нет в корзине, то создается новая позиция в корзине. */
    for (position of basket) {
        if (position.good === id) {
            position.amount += quantity;
            return console.log(basket); 
        };
    };
    basket.push({good: id, amount: quantity});
    return console.log(basket);
};

function productRemoval(id) {
    /* Удаляет товар из корзины. При вызове функции необходимо указать id удаляемого товара.
        Если в корзине отсутствует товар с указанным id, то выводится соответствующее сообщение */
    for (position in basket) {
        if (basket[position].good === id) {
            basket.splice(position,1);
            return console.log(basket); 
        };
    };
    console.log(`Товар с id= ${id} отсутвует в корзине!`);
    console.log(basket);
};

function emptyTrash() {
    /* Функия осуществляет полную очистку корзины. */
    basket.length = 0;
    console.log(basket);
}

function result() {
    /* Функия вычисляет общее количество и стоимость товаров в корзине. */
    const res = {
        totalAmount: 0,
        totalSumm: 0,
    };
    for (position of basket) {
        res.totalAmount += position.amount;
        res.totalSumm += catalog[position.good].price * position.amount;
    };
    return res;
};
