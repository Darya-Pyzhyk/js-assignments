'use strict';

/**
 * Возвращает номер банковского счета, распаршеный из предоставленной строки.
 *
 * Вы работаете в банке, который недавно приобрел аппарат, помогающий в чтении писем и факсов, отправленных филиалами.
 * Аппарат сканирует бумажный документ и генерирует строку с банковсчким счетом, который выглядит следующим образом:
 *
 *    _  _     _  _  _  _  _
 *  | _| _||_||_ |_   ||_||_|
 *  ||_  _|  | _||_|  ||_| _|
 *
 * Каждая строка содержит номер счета, записанный с помощью '|' и '_'.
 * Каждый счет должен иметь 9 цифр в диапазоне от 0 до 9.
 *
 * Ваша задача -- написать функцию, которая будет принимать номер счета строкой, как описано выше, и парсить ее в обычные числа.
 *
 * @param {string} bankAccount
 * @return {number}
 *
 * Example of return :
 *
 *   '    _  _     _  _  _  _  _ \n'+
 *   '  | _| _||_||_ |_   ||_||_|\n'+     =>  123456789
 *   '  ||_  _|  | _||_|  ||_| _|\n'
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
 *   '|_||_  _||_| _||_|  ||_| _|\n',
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
 *   '|_||_  _||_| _||_| _||_| _|\n',
 *
 */
function parseBankAccount(bankAccount) {
    let number = 0;
    let number_length = bankAccount.length / 3 - 1;
    let parts = [
        [' _ ', '   ', ' _ ', ' _ ', '   ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '],
        ['| |', '  |', ' _|', ' _|', '|_|', '|_ ', '|_ ', '  |', '|_|', '|_|'],
        ['|_|', '  |', '|_ ', ' _|', '  |', ' _|', '|_|', '  |', '|_|', ' _|']
    ];
    for (let i = 0; i < number_length; i += 3) {
        const digit = [
            bankAccount.slice(i, i + 3),
            bankAccount.slice(i + 28, i + 31),
            bankAccount.slice(i + 56, i + 59)
        ];

        for (let j = 0; j < parts[0].length; j++) {
            if (parts[0][j] == digit[0] && parts[1][j] == digit[1] && parts[2][j] == digit[2]) {
                number = number * 10 + j;
                break;
            }
        }
    }

    return number;
}


/**
 * Возвращает строку, в которой будут вставлены переносы строки в правильных местах. Каждая часть до переноса строки должна быть не больше, чем переданное в функцию число.
 * Строка может быть перенесена только по границе слов.
 *
 * @param {string} text
 * @param {number} columns
 * @return {Iterable.<string>}
 *
 * @example :
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 26 =>  'The String global object',
 *                                                                                                'is a constructor for',
 *                                                                                                'strings, or a sequence of',
 *                                                                                                'characters.'
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 12 =>  'The String',
 *                                                                                                'global',
 *                                                                                                'object is a',
 *                                                                                                'constructor',
 *                                                                                                'for strings,',
 *                                                                                                'or a',
 *                                                                                                'sequence of',
 *                                                                                                'characters.'
 */
function* wrapText(text, columns) {
    var words = text.split(' ');
    var str = new String();
    while (words.length > 0) {
        str = words.shift();
        while ((words.length > 0) && (str.length + words[0].length < columns)) {
            str += ' ' + words.shift();
        }
        yield str;
    }
}


/**
 * Возвращает ранг заданной покерной комбинации.
 * Ранги смотрите тут: https://en.wikipedia.org/wiki/List_of_poker_hands
 * https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D0%B5%D1%80
 *
 * @param {array} hand
 * @return {PokerRank} rank
 *
 * @example
 *   [ '4♥','5♥','6♥','7♥','8♥' ] => PokerRank.StraightFlush
 *   [ 'A♠','4♠','3♠','5♠','2♠' ] => PokerRank.StraightFlush
 *   [ '4♣','4♦','4♥','4♠','10♥' ] => PokerRank.FourOfKind
 *   [ '4♣','4♦','5♦','5♠','5♥' ] => PokerRank.FullHouse
 *   [ '4♣','5♣','6♣','7♣','Q♣' ] => PokerRank.Flush
 *   [ '2♠','3♥','4♥','5♥','6♥' ] => PokerRank.Straight
 *   [ '2♥','4♦','5♥','A♦','3♠' ] => PokerRank.Straight
 *   [ '2♥','2♠','2♦','7♥','A♥' ] => PokerRank.ThreeOfKind
 *   [ '2♥','4♦','4♥','A♦','A♠' ] => PokerRank.TwoPairs
 *   [ '3♥','4♥','10♥','3♦','A♠' ] => PokerRank.OnePair
 *   [ 'A♥','K♥','Q♥','2♦','3♠' ] =>  PokerRank.HighCard
 */
const PokerRank = {
    StraightFlush: 8,
    FourOfKind: 7,
    FullHouse: 6,
    Flush: 5,
    Straight: 4,
    ThreeOfKind: 3,
    TwoPairs: 2,
    OnePair: 1,
    HighCard: 0
}

function sortArr(arr_numbers){
    let numbers = ["2", "3", "4", "5", "6", 
                       "7", "8", "9", "10", "J", "Q", "K", "A"];
    for(let i = 0; i < arr_numbers.length; i++){
        if(arr_numbers[i] == 2){
        numbers = ["A", "2", "3", "4", "5", "6", 
                       "7", "8", "9", "10", "J", "Q", "K"];      
        break;
        }  
    }    
    return arr_numbers.sort(function (val1, val2){
                return findIndexInArr(val1, numbers) - findIndexInArr(val2, numbers);
            });
}

function findIndexInArr(val, array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == val){
            return i;
        }
    }
}

function isBigger(val1, val2){
    let numbers = ["2", "3", "4", "5", "6", 
                    "7", "8", "9", "10", "J", "Q", "K", "A"];
    return findIndexInArr(val1, numbers) - findIndexInArr(val2, numbers);
}

function isBiggerByOne(val1, val2){
    let numbers = ["A", "2", "3", "4", "5", "6", 
                    "7", "8", "9", "10", "J", "Q", "K", "A"];
    if(numbers[findIndexInArr(val1, numbers) + 1] == val2){
        return true;
    }
    return false;
}


function isStraightFlush(arr_numbers, arr_shapes){
    for(let i = 0; i < arr_shapes.length-1; i++){
        if(arr_shapes[i] != arr_shapes[i+1]){
            return false;
        }
    }
    arr_numbers = sortArr(arr_numbers);
    for(let i = 0; i < arr_numbers.length-1; i++){
        if(!isBiggerByOne(arr_numbers[i], arr_numbers[i+1])){
            return false;
        }
    }
    return true;
}

function isFourOfKind(arr_numbers){
    let count_equal = 0;
    for(let i = 0; i < arr_numbers.length; i++){
        if ((i != 1) && (arr_numbers[i] == arr_numbers[1])){
            count_equal++;
        }
    }
    if(count_equal == 3) { return true; }
}

function isFullHouse(arr_numbers){
    arr_numbers = sortArr(arr_numbers);
    let count_equal1 = 0;
    let count_equal2 = 0;
    for(let i = 0; i < arr_numbers.length; i++){
        if((i != 1) && (arr_numbers[i] == arr_numbers[1])){
            count_equal1++;
        }
    }

    for(let i = 0; i < arr_numbers.length; i++){
        if((i != 3) && (arr_numbers[i] == arr_numbers[3])){
            count_equal2++;
        }
    }
    if (((count_equal2 == 2) && (count_equal1 == 1)) || ((count_equal1 == 2) && (count_equal2 == 1))){
        return true;
    }
    return false;
}

function isFlush(arr_shapes){
    for(let i = 1; i < arr_shapes.length; i++){
        if (arr_shapes[0] != arr_shapes[i]){
            return false;
        }
    }
    return true;
}



function isStraight(arr_numbers){
    arr_numbers = sortArr(arr_numbers);
    for(let i = 0; i < arr_numbers.length-1; i++){
        if (!isBiggerByOne(arr_numbers[i], arr_numbers[i+1])){
            return false;
        }
    }
    return true;
}

function isThreeOfKind(arr_numbers){
    arr_numbers = sortArr(arr_numbers);
    let count_equal = 0;
    for(let i = 0; i < arr_numbers.length; i++){
        if((i != 2) && (arr_numbers[2] == arr_numbers[i])){
            count_equal++;
        }
    }
    if(count_equal == 2){
        return true;
    }
    return false;
}

function isTwoPairs(arr_numbers){
    let count_equal = false;
    let low = 0;
    while((low < arr_numbers.length) && (!count_equal)){
        let i = low+1;
        while(i < arr_numbers.length){
            if(arr_numbers[low] == arr_numbers[i]){
                arr_numbers[low] = null;
                arr_numbers[i++] = null;
                count_equal = true;
                break;
            }
            i++;
        }
        low++;
    } 
    low = 0;
    while((count_equal)&&(low < arr_numbers.length)){
        let i = low+1;
        while(i < arr_numbers.length){
            if((arr_numbers[low] == arr_numbers[i]) 
                && (arr_numbers[low] != null) 
                && (arr_numbers[i] != null)){
                return true;
            }
            i++;
        }
        low++;
    } 
    return false;
}

function isOnePair(arr_numbers){
    let low = 0;
    while(low < arr_numbers.length){
        let i = low+1;
        while(i < arr_numbers.length){
            if(arr_numbers[low] == arr_numbers[i++]){
                return true;
            }
        }
        low++;
    }  
    return false;
}


function getPokerHandRank(hand) {

    let pokerRankStr = [];
    let arr_numbers = [];
    let arr_shapes = [];
    for(let i = 0; i < hand.length; i++){
        let temp = hand[i].split('');
        arr_numbers[i] = temp[0];
        if(temp[1] == '0') {
            arr_numbers[i] += temp[1];
            arr_shapes[i] = temp[2];
        } else{
            arr_shapes[i] = temp[1];
        }
    }

    if (isStraightFlush(arr_numbers, arr_shapes)) { return  PokerRank.StraightFlush; }
    if (isFourOfKind(arr_numbers)) { return  PokerRank.FourOfKind; }
    if (isFullHouse(arr_numbers)) { return  PokerRank.FullHouse; }
    if (isFlush(arr_shapes)) { return  PokerRank.Flush; }
    if (isStraight(arr_numbers)) { return  PokerRank.Straight; }
    if (isThreeOfKind(arr_numbers)) { return  PokerRank.ThreeOfKind; }
    if (isTwoPairs(arr_numbers)) { return  PokerRank.TwoPairs; }
    if (isOnePair(arr_numbers)) { return  PokerRank.OnePair; }
    return PokerRank.HighCard;
}


/**
 * Возвращает набор прямоугольников из заданной фигуры.
 * Фигура -- это многострочный набор ASCII символов из '-', '+', '|' и пробелов.
 * Ваша задача -- разбить фигуру на прямоугольники, из которых она составлена.
 *
 * К СВЕДЕНИЮ: Порядок прямоугольников не имеет значения.
 *
 * @param {string} figure
 * @return {Iterable.<string>} decomposition to basic parts
 * 
 * @example
 *
 *    '+------------+\n'+
 *    '|            |\n'+
 *    '|            |\n'+              '+------------+\n'+
 *    '|            |\n'+              '|            |\n'+         '+------+\n'+          '+-----+\n'+
 *    '+------+-----+\n'+       =>     '|            |\n'+     ,   '|      |\n'+     ,    '|     |\n'+
 *    '|      |     |\n'+              '|            |\n'+         '|      |\n'+          '|     |\n'+
 *    '|      |     |\n'               '+------------+\n'          '+------+\n'           '+-----+\n'
 *    '+------+-----+\n'
 *
 *
 *
 *    '   +-----+     \n'+
 *    '   |     |     \n'+                                    '+-------------+\n'+
 *    '+--+-----+----+\n'+              '+-----+\n'+          '|             |\n'+
 *    '|             |\n'+      =>      '|     |\n'+     ,    '|             |\n'+
 *    '|             |\n'+              '+-----+\n'           '+-------------+\n'
 *    '+-------------+\n'
 */
function* getFigureRectangles(figure) {
    let figureArr = figure.split('\n');
    let rectangle = new Array();
    for (let i = 0; i < figureArr.length; i++)
        for (let j = 0; j < figureArr[i].length; j++)
            if (figureArr[i][j] == '+') {
                rectangle = GetRectangle(figureArr, i, j);
                if (rectangle != null)
                    yield DrawRectangle(rectangle[1], rectangle[0]);
            }
}

function GetRectangle(figure, row, column) {
    for (let i = row + 1; i < figure.length; i++) {
        if (figure[i][column] == '+') {
            for (let j = column + 1; j < figure[row].length; j++) {
                if (figure[i][j] == "+") {
                    if (figure[row][j] == "+") {
                        let flag = true;
                        for (let k = row + 1; k < i; k++)
                            if (figure[k][j] != '|') {
                                flag = false;
                                break;
                            }
                        if (flag) return [i - row + 1, j - column + 1];
                    }
                } else if (figure[i][j] != '-') break;
            }
        } else if (figure[i][column] != '|') break;
    }
    return null;
}
    
function DrawRectangle(width, height) {
    return '+' + '-'.repeat(width - 2) + '+\n' + ('|' + ' '.repeat(width - 2) + 
            '|\n').repeat(height - 2) + '+' + '-'.repeat(width - 2) + '+\n';
}


module.exports = {
    parseBankAccount : parseBankAccount,
    wrapText: wrapText,
    PokerRank: PokerRank,
    getPokerHandRank: getPokerHandRank,
    getFigureRectangles: getFigureRectangles
};
