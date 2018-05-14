'use strict';

/********************************************************************************************
 *                                                                                          *
 * Документация к прочтению перед выполнением задания:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date    *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Преобразует строку типа rfc2822 в дату
 * О строках типа rfc2822 можно прочесть в спецификации : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
    var date = new Date(value);
    return date;
}

/**
 * Преобразует строку типа ISO 8601 в дату
 * О строках типа ISO 8601 можно прочесть в спецификации : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
    var date = new Date(value);
    return date;
}


/**
 * Возвращает true, если указанная дата находится в высокосном году и false в противном случае.
 * Об алгоритме определения высокосного года : https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
    var year = date.getFullYear();
    if (((year % 4 == 0)&(year % 100 != 0))||(year % 400 == 0)) {return true;}
    else {return false;}    
}


/**
 * Возвращает строковое представление промежутка времени между двумя датами.
 * Формат строки на выходе : "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
    let msecPerMinute = 1000 * 60;  
    let msecPerHour = msecPerMinute * 60;  
    let msecPerDay = msecPerHour * 24;  

    let interval = endDate.getTime() - startDate.getTime()

    let days = Math.floor(interval / msecPerDay );  
    interval = interval - (days * msecPerDay ); 

    let hours = Math.floor(interval / msecPerHour );  
    interval = interval - (hours * msecPerHour );  

    let minutes = Math.floor(interval / msecPerMinute );  
    interval = interval - (minutes * msecPerMinute );  

    let seconds = Math.floor(interval / 1000 ); 

    return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2) + "." + ("00" + interval).slice(-3);

}


/**
 * Возвращает угол (в радианах) между часовыми стрелками двух аналоговых часов для указанного времени по Гринвичу.
 * При возникновениии проблем, посмотрите : https://en.wikipedia.org/wiki/Clock_angle_problem
 * 
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(date) {
    let minute = date.getUTCMinutes() % 60;
    let hour = date.getUTCHours() % 12;

    // first workout the minute angle
    var minAngle = 360*(minute/60);
  // then work out hour angle
  // first the hour then the hour + mins
    var hourAngle = (360*(hour/12))+((360/12)*(minute/60));
   
    let angle = Math.abs(hourAngle - minAngle);

    if (angle > 180){
        angle = 360 - angle;
    }

    angle = angle * Math.PI / 180;
    return angle;


    
}


module.exports = {
    parseDataFromRfc2822: parseDataFromRfc2822,
    parseDataFromIso8601: parseDataFromIso8601,
    isLeapYear: isLeapYear,
    timeSpanToString: timeSpanToString,
    angleBetweenClockHands: angleBetweenClockHands
};
