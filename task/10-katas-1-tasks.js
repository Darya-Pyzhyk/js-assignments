'use strict';

/**
 * Возвращает массив из 32 делений катушки компаса с названиями.
 * Смотрите детали здесь:
 * https://en.wikipedia.org/wiki/Points_of_the_compass#32_cardinal_points
 *
 * @return {array}
 *
 * Пример возвращаемого значения :
 *  [
 *     { abbreviation : 'N',     azimuth : 0.00 ,
 *     { abbreviation : 'NbE',   azimuth : 11.25 },
 *     { abbreviation : 'NNE',   azimuth : 22.50 },
 *       ...
 *     { abbreviation : 'NbW',   azimuth : 348.75 }
 *  ]
 */
function createCompassPoints() {
   //throw new Error('Not implemented');
    var sides = ['N','E','S','W'];  // use array of cardinal directions only!
    var arr = [], abbreviation = "", azimuth = 0;
    var prior1, prior2;
    for (var i = 0; i < 4; i++) {
        prior1 = (sides[i] == 'S' || sides[(i+1)%4] == 'S')? 'S' : 'N';
        prior2 = (sides[i] == 'E' || sides[(i+1)%4] == 'E')? 'E' : 'W';
        arr.push({ abbreviation: sides[i], azimuth : 11.25*i*8});
        arr.push({ abbreviation: sides[i] + 'b' + sides[(i+1)%4], azimuth : 11.25*(i*8+1) });
        arr.push({ abbreviation: sides[i] + prior1 + prior2, azimuth : 11.25*(i*8+2)});
        arr.push({ abbreviation: prior1 + prior2 + 'b' + sides[i], azimuth : 11.25*(i*8+3)});
        arr.push({ abbreviation:prior1 + prior2, azimuth : 11.25*(i*8+4)});
        arr.push({ abbreviation: prior1 + prior2 + 'b' + sides[(i+1)%4], azimuth : 11.25*(i*8+5)});
        arr.push({ abbreviation:sides[(i+1)%4] + prior1 + prior2, azimuth : 11.25*(i*8+6)});
        arr.push({ abbreviation:sides[(i+1)%4] + 'b' + sides[i], azimuth : 11.25*(i*8+7)});
    }
    return arr;
}


/**
 * Раскройте фигурные скобки указанной строки.
 * Смотрите https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion
 *
 * Во входной строке пары фигурных скобок, содержащие разделенные запятыми подстроки,
 * представляют наборы подстрок, которые могут появиться в этой позиции на выходе.
 *
 * @param {string} str
 * @return {Iterable.<string>}
 *
 * К СВЕДЕНИЮ: Порядок выходных строк не имеет значения.
 *
 * Пример:
 *   '~/{Downloads,Pictures}/*.{jpg,gif,png}'  => '~/Downloads/*.jpg',
 *                                                '~/Downloads/*.gif'
 *                                                '~/Downloads/*.png',
 *                                                '~/Pictures/*.jpg',
 *                                                '~/Pictures/*.gif',
 *                                                '~/Pictures/*.png'
 *
 *   'It{{em,alic}iz,erat}e{d,}, please.'  => 'Itemized, please.',
 *                                            'Itemize, please.',
 *                                            'Italicized, please.',
 *                                            'Italicize, please.',
 *                                            'Iterated, please.',
 *                                            'Iterate, please.'
 *
 *   'thumbnail.{png,jp{e,}g}'  => 'thumbnail.png'
 *                                 'thumbnail.jpeg'
 *                                 'thumbnail.jpg'
 *
 *   'nothing to do' => 'nothing to do'
 */
function* expandBraces(str) {
    let expanded = [str];
    let bracketsRegex = new RegExp('\{[^\{\}]*?\}', 'g');

    let hasFinished = false;
    while (!hasFinished) {
        hasFinished = true;
        let newExpanded = [];

        for (let string of expanded) {
            let matches = string.match(bracketsRegex);
            if (matches) {
                hasFinished = false;
                let options = matches[0].slice(1, -1).split(',');
                for (let option of options) {
                    newExpanded.push(string.replace(matches[0], option));
                }
            } else {
                newExpanded.push(string);
            }
        }
        expanded = newExpanded;
    }
    expanded = [...new Set(expanded)];

    for (let string of expanded) {
        yield string;
    }
}


/**
 * Возвращает ZigZag матрицу
 *
 * Основная идея в алгоритме сжатия JPEG -- отсортировать коэффициенты заданного изображения зигзагом и закодировать их.
 * В этом задании вам нужно реализовать простой метод для создания квадратной ZigZag матрицы.
 * Детали смотрите здесь: https://en.wikipedia.org/wiki/JPEG#Entropy_coding
 * https://ru.wikipedia.org/wiki/JPEG
 * Отсортированные зигзагом элементы расположаться так: https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/JPEG_ZigZag.svg/220px-JPEG_ZigZag.svg.png
 *
 * @param {number} n - размер матрицы
 * @return {array}  массив размером n x n с зигзагообразным путем
 *
 * @example
 *   1  => [[0]]
 *
 *   2  => [[ 0, 1 ],
 *          [ 2, 3 ]]
 *
 *         [[ 0, 1, 5 ],
 *   3  =>  [ 2, 4, 6 ],
 *          [ 3, 7, 8 ]]
 *
 *         [[ 0, 1, 5, 6 ],
 *   4 =>   [ 2, 4, 7,12 ],
 *          [ 3, 8,11,13 ],
 *          [ 9,10,14,15 ]]
 *
 */
function getZigZagMatrix(n) {
    var  arr = [];
    for (var i = 0; i < n; i++)
        arr[i] = [];
    var i=1, j=1;
    for (var k = 0; k < n*n; k++) {
        arr[i-1][j-1] = k;
        if ((i + j) % 2 == 0) {
            (j < n) ? j ++ : i +=2;
            if (i > 1) 
                i--;
        } else {
            (i < n) ? i++ : j +=2;
            if (j > 1) 
                j--;
        }
    }
    return arr;
}


/**
 * Возвращает true если заданный набор костяшек домино может быть расположен в ряд по правилам игры.
 * Детали игры домино смотрите тут: https://en.wikipedia.org/wiki/Dominoes
 * https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE
 * Каждая костяшка представлена как массив [x,y] из значений на ней.
 * Например, набор [1, 1], [2, 2], [1, 2] может быть расположен в ряд ([1, 1] -> [1, 2] -> [2, 2]),
 * тогда как набор [1, 1], [0, 3], [1, 4] не может.
 * К СВЕДЕНИЮ: в домино любая пара [i, j] может быть перевернута и представлена как [j, i].
 *
 * @params {array} dominoes
 * @return {bool}
 *
 * @example
 *
 * [[0,1],  [1,1]] => true
 * [[1,1], [2,2], [1,5], [5,6], [6,3]] => false
 * [[1,3], [2,3], [1,4], [2,4], [1,5], [2,5]]  => true
 * [[0,0], [0,1], [1,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [3,3]] => false
 *
 */
function canDominoesMakeRow(dominoes) {
    const result = Array(1);
    result[0] = dominoes.shift();

    let lastLength = 0;
    while (lastLength != dominoes.length && dominoes.length > 0) {
        lastLength = dominoes.length;
        for (let i = 0; i < dominoes.length; i++) {
            if (result[result.length - 1][1] == dominoes[i][0] && result[result.length - 1][0] != dominoes[i][1]) {
                result[result.length] = dominoes[i];
                dominoes.splice(i, 1);
            } else if (result[result.length - 1][1] == dominoes[i][1] && result[result.length - 1][0] != dominoes[i][1]) {
                result[result.length] = dominoes[i].reverse();
                dominoes.splice(i, 1);
            }
        }
    };

    return dominoes.length == 0;
}



/**
 * Возвращает строковое представление заданного упорядоченного списка целых чисел.
 *
 * Строковое представление списка целых чисел будет состоять из элементов, разделенных запятыми. Элементами могут быть:
 *   - отдельное целое число
 *   - или диапазон целых чисел, заданный начальным числом, отделенным от конечного числа черточкой('-').
 *     (Диапазон включает все целые числа в интервале, включая начальное и конечное число)
 *     Синтаксис диапазона должен быть использован для любого диапазона, где больше двух чисел.
 *
 * @params {array} nums
 * @return {bool}
 *
 * @example
 *
 * [ 0, 1, 2, 3, 4, 5 ]   => '0-5'
 * [ 1, 4, 5 ]            => '1,4,5'
 * [ 0, 1, 2, 5, 7, 8, 9] => '0-2,5,7-9'
 * [ 1, 2, 4, 5]          => '1,2,4,5'
 */
function extractRanges(nums) {
    var str = "";
    for (let j = 0; j < nums.length; j++) {
        let  i = 0;
        if ((nums[j + 1] == nums[j] + 1) && (nums[j + 2] == nums[j] + 2)) {
            while (nums[j + 1] - nums[j] == 1) {
                i++;
                j++;
            }
            str += `${nums[j - i]}-${nums[j]},`;

        } else
            str += nums[j] + ",";
    }
    return str.slice(0, str.length - 1);
}

module.exports = {
    createCompassPoints : createCompassPoints,
    expandBraces : expandBraces,
    getZigZagMatrix : getZigZagMatrix,
    canDominoesMakeRow : canDominoesMakeRow,
    extractRanges : extractRanges
};
