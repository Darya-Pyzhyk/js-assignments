'use strict';

/*********************************************************************************************
 *                                                                                           *
 * Пожалуйста, прочтите информацию по ссылке перед выполнением заданий:                      *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : ПОЖАЛУЙСТА, НЕ ИПОЛЬЗУЙТЕ ЦИКЛЫ!                                                   *
 * Во всех задачах данного раздела должны быть использованы встроенные в объект Array методы *
 *********************************************************************************************/


/**
 * Возвращает индекс переданного элемента в массиве, а если он остутствует то возвращает -1
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
   return arr.indexOf(value);
}

/**
 * Возвращает массив, состоящий из нечетных чисел, заданной длины
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
    len *= 2;
    return Array.from(new Array(len), (item, index) => index + 1).filter(function(num){ if( num % 2  ) return num;}); 
}

/**
 * Возвращает массив состоящий из двух копий переданного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
function doubleArray(arr) {
   return arr.concat(arr);
}


/**
 * Возвращает массив, состоящий только из положительных чисел вводного массива, сохраняя порядок элементов
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, -3, 4, 5 ] => [1, 2, 4, 5 ]
 *    [-1, 2, -5, -4, 0, 19] => [ 2, 19 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
   return arr.filter(function(x) {return x > 0});
}

/**
 *  Возвращает массив, состоящий только из элементов - строк вводного массива (сохранять порядок элементов)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */
function getArrayOfStrings(arr) {
   return arr.filter(function(x) {if (typeof x == "string") {return x}});
}

/**
 * Удаляет ложные значения (== false) элементов массива из переданного массива
 * Ложные значения: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
    return arr.filter(function(element){if (element) {return element}});
}

/**
 * Возвращает массив, который состоит из элементов вводного массива в верхнем регистре
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
   return arr.map(function(x) {return x.toUpperCase();});
}


/**
 * Возвращает массив с длинами строк элементов входного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
   return arr.map(function(x) {return x.length;});
}

/**
 * Вставляет в переданный массив переданный элемент по заданному индексу
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
   return arr.splice(index, 0, item);
}

/**
 * Возвращает первые n элементов переданного массива
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
   return arr.filter(function(item,i) {if (i<n) {return item;}});
}


/**
 * Возвращает последние n элементов переданного массива
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
    return arr.filter(function(item,i) {if (i+1>arr.length-n) {return item;}});
}


/**
 * Вернуть CSV представление of two-dimentional numeric array.
 * https://ru.wikipedia.org/wiki/CSV
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
   return arr.join("\n");
}

/**
 * Транформировать входной массив так, чтобы каждое его исходное значение было возведено в квадрат:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
   return arr.map(function(x) {return x*x;});
}


/**
 * Транформировать входной массив так, чтобы каждое новое n-ое значение его было равно:
 *       f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  или  f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Пример :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
  var arr2d2 = [];
   arr2d2[0] = arr[0]
   return arr.map( function(item,i,arr) {
    if (i>0){
      arr2d2[i]=(arr2d2[i-1]+arr[i]);
      return arr2d2[i]
    } 
    return arr[0];
    });
}

/**
 * Возвращает массив, состоящий из каждого второго элемента переданного массива:
 *
 * @param {array} arr
 * @return {array}
 *
 * Пример :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
    return arr.filter(function(value, index) {
        return (index + 1) % 2 == 0;
    });
}


/**
 * Возвращает новый массив, в котором каждый качальный элемент исходного массива будет
 * повторен в конечном массиве n-ое количество раз
 * N - [1...a.length] - номер места по порядку на котором располагается соответствующий элемент в начальном массиве
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
  var arr2d2 = [];
  arr.map(function(item,i,arr){
    if (i > 0) { 
      arr2d2 = arr2d2.concat(Array(i+1).fill(item))
    }
    arr2d2[0] = arr[0];
  });
  return arr2d2;
}


/**
 * Возвращает массив состоящий из трех масимальных элементов исходного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
    return arr.sort(function(a, b){
        return b - a;
    }).slice(0,3);
}


/**
 * Возвращает количество положительных элементов переданного массива
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
   arr = arr.filter(x => ((Number.isInteger(x)&&(x > 0))));
   return arr.length;
}

/**
 * Отсортировывает массив строковых представлений цифр
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
   let digits = ["zero","one", "two","three","four","five","six","seven","eight","nine"];

   return arr.sort(function(a,b){
       return digits.indexOf(a) > digits.indexOf(b);
   });
}

/**
 * Возвращает сумму всех элементов входного массива
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
   return arr.reduce(function(a, b) { return a + b; }, 0);
}

/**
 * Возвращает количество всех элементов массива равных false (== false)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
   arr = arr.filter(x => !(x));
   return arr.length;
}

/**
 * Возвращает количество вхождений переданного числа в переданный массив
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurences(arr, item) {

    return arr.reduce(function(count, elem, index){    
        if(elem === item){
           count +=1;
        }
        return count;
   }, 0);

}

/**
 * Сливает все элементы массива в одну строку с разделителем ','
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
   return arr.join(',');
}


/**
 * Сортирует по возрастанию переданный массив по имени страны, а при равенстве страны сравнивает по имени города
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */
function sortCitiesArray(arr) {
   return arr.sort(function (a, b) {
  if (a.country > b.country) {
    return 1;
  }
  if (a.country < b.country) {
    return -1;
  }
  return a.city > b.city;});
}

/**
 * Возвращает единичную матрицу заданного порядка
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
    return Array(n).fill().map(function(item, index1,arr){
        return Array(n).fill().map(function(item, index2,arr){
            if (index1 == index2){
                return 1;
            }  
            else {
                return 0;
            }  
        });
        });
}

/**
 * Возвращает массив, состоящий из элементов от стартового до конечного аргументов включая
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
   var arr = Array(end - start + 1).fill();
   return arr.map(function(item,i){return start + i;})
}

/**
 * Возвращаемый массив содержит только уникальные значения переданного массива.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
   return arr.filter(function(item, index, arr) { if (!arr.slice(0,index).includes(item)) {return item;}})
}

/**
 * Группирует элементы переданного массива по переанной keySelector функции
 * и по в массивы по выбранным сгруппированным key добавляет соответствующие
 * value исходя из переданной функции valueSelector
 * Описание данной структуры: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
    let keys = array.map(keySelector);
    let values = array.map(valueSelector);
    let finalMap = new Map();

    keys.map(function(value1, index, array){
        if (!finalMap.has(value1)){
            let newValues = [];
            keys.map(function(value2, index, array){    
                if(value2 === value1){
                   newValues.push(values[index]);
                }
           });
           finalMap.set(value1, newValues);
        }
    })

    return finalMap;    
}

/**
 * Функция должна переводить каждый элемент переданного массива arr в последовательность элементов согласно childrenSelector
 * Также данная структура должна стать плоской: [[a],[b],[c],[d,e]] => [a,b,c,d,e]
 *
 * @param {array} arr
 * @param {Function} childrenSelector, функция которая будет применена для каждого элемента начального массива
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
    arr = arr.map(childrenSelector);
    return arr.reduce(function(prev, next){
        return prev.concat(next);
    })
}

/**
 * Возврщает значение элемента матрицы по переданных индексам.
 * Матрица в данном случае представлена массивом с любой вложенностью
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
    var k = arr;
    var index = indexes.map(function(item,index){k = k[item]});
    return k;
}


/**
 * Возвращает массив с измененным порядком элементов исходного массива:
 * Меняет местами элементы до среднего элемента и элементы после
 * Первая половина (head) массива становися в конец, а вторая (tail) в начало.
 * Средний элемент не меняет свою позицию.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  var head = arr.slice(0,Math.floor(arr.length / 2));
  var tail = arr.slice(Math.ceil(arr.length / 2),arr.length);
  if (arr.length % 2 == 1) {
    tail = tail.concat(arr[Math.floor(arr.length / 2)]);
  }
  return tail.concat(head);
}


module.exports = {
    findElement: findElement,
    generateOdds: generateOdds,
    doubleArray: doubleArray,
    getArrayOfPositives: getArrayOfPositives,
    getArrayOfStrings: getArrayOfStrings,
    removeFalsyValues: removeFalsyValues,
    getUpperCaseStrings: getUpperCaseStrings,
    getStringsLength: getStringsLength,
    insertItem: insertItem,
    getHead: getHead,
    getTail: getTail,
    toCsvText: toCsvText,
    toStringList: toStringList,
    toArrayOfSquares: toArrayOfSquares,
    getMovingSum: getMovingSum,
    getSecondItems: getSecondItems,
    propagateItemsByPositionIndex: propagateItemsByPositionIndex,
    get3TopItems: get3TopItems,
    getPositivesCount: getPositivesCount,
    sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
    getItemsSum: getItemsSum,
    getFalsyValuesCount: getFalsyValuesCount,
    findAllOccurences: findAllOccurences,
    sortCitiesArray: sortCitiesArray,
    getIdentityMatrix: getIdentityMatrix,
    getIntervalArray: getIntervalArray,
    distinct: distinct,
    group: group,
    selectMany: selectMany,
    getElementByIndexes: getElementByIndexes,
    swapHeadAndTail: swapHeadAndTail
};
