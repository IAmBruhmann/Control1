//Задача 1
Array.prototype.getNegativeIndex = function(index) {
    if (index >= 0) {
        return this[index];
    } else {
        return this[this.length + index];
    }
};

const arr = [10, 20, 30, 40, 50];

console.log(arr.getNegativeIndex(-1));
console.log(arr.getNegativeIndex(-2));
//Задача 2
function getOlderUser(user1, user2) {
    return user1.age > user2.age ? user1.name : user2.name;
}
const user1 = { name: 'Ivan1', age: 52 };
const user2 = { name: 'ivan2', age: 8 };
console.log(getOlderUser(user1, user2));
//Задача 3
function getOlderUserArray(users) {
    return users.reduce((oldest, user) => user.age > oldest.age ? user : oldest).name;
}
const users = [
    { name: 'Ivan1', age: 52 },
    { name: 'Ivan2', age: 8 },
    { name: 'Ivan3', age: 18 }
];
console.log(getOlderUserArray(users));
//Задача 4
//4.1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
//4.2
    fix() {
            this.state  = this._state * 1.5;
            
    }
//4.3
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}
//4.4
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}
//4.5
class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}
const magazine = new Magazine('Cars', '2005', 60);
const book = new Book('2003', '2002', 328, 'BIBA BOBA');

console.log(magazine);
console.log(book);

book.fix();
console.log(book.state);

book.state = 1000