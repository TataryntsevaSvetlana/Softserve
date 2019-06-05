/*
toData(num)
берет число, переводит в строку, убирает пробелы,
пробели перед точкой, убрать специальные пробелы,
заменить запятые на точки.
Вывод конветрированного значения в число;

toBuh(num, decimals, curr)
проверка на число, если прошло
Выводит строку с числом и валютой.
Если не прошло верни num.


convertToBuh(num, decimals, curr)
переодит в строку,
уменьшает после запятой символы до 3шт,
локализация языка,
если curr задан, то сформируй строку из числа и валюты.
Вывод сформированного строки.


isNumeric(n)
проверка на число.
Выводит true/false

toSymbol(curr)
переключатель принимает буквенное
обозначение выводит валюту значком.

toCurrency(symb)
переключатель принимает значек валюты
 выводит буквенное обозначене.

calcSummFromRows(trs, summClassName)
trs[i] - элемнт в ДОМе
получает элемент, передает в toData
(преобразует в число) и суммирует в totalSumm.
Выводит число переменной totalSumm.

getFALDates(trs, dateClassName)
формирование даты на начало и конец периода,
форматирование даты,
Вывод объекта с ключами "last","first".


В тесте прописать:
toData(num) на число,
на число с плавающей точкой,
проверить на вхождение пробелов(всех возможных).

toBuh - проверка на типы входа выхода.

Тест convertToBuh - вывод строка.

isNumeric(n) - правильность вывода(true - число)

toSymbol(curr)/toCurrency(symb) проверка на строку и
соответствие.

calcSummFromRows метод возвращает число.

getFALDates - значение ключей строка,
соответствие шаблону.
*
* */



class NumC{
    // функция принимает число или строку, приводит к строке,
    // убирает пробелы по всей строке, перед точкой и точку,
    // неразрывные пробелы, запятые меняет на точки
    // возвращает десятичное число с плавающей точкой
    static toData(num){
        let nums = num.toString();

        nums = nums.replace(/\s*/g, "");
        nums = nums.replace(/[\s\.]/g, "");
        nums = nums.replace(/(&nbsp;)/g, "");
        nums = nums.replace(",", ".");

        return parseFloat(nums);
    }


    // если num число верни строку с валютой, если нет то верни просто num
     static toBuh(num, decimals, curr){
        if(NumC.isNumeric(num)){
            return NumC.convertToBuh(num, decimals, curr);
        }else{
            return num;
        }
    }


    // принимает число или строку и преобразует в строку,
    // уменьшает после запятой символы до заданного либо если 0 , то до 3 символов
    // если curr задан, то сформируй строку из числа и валюты.
    static convertToBuh(num, decimals, curr){
        let nums = String(num),
            counter = nums.length - (decimals + 1);

        decimals = decimals || 3;

        // переводим в строку
        // десятичная часть должна быть либо заданной, либо не более 3 знаков
        // если число целое то добавляется запятая и 3 нуля

        if (nums.indexOf(",") == -1 || counter < nums.indexOf(",")){

            // minimumFractionDigits - Минимальное используемое количество цифр дробной части числа.
            nums = num.toLocaleString('de-DE', { minimumFractionDigits: decimals });
            // локализация языка
            // если curr (валюта) задан то сформируй строку из число + валюта,


            if(curr){
                nums += " " + curr;
            }

            return nums;

        } else if (counter > nums.indexOf(",")){

            // Метод toLocaleString() возвращает строку с языко-зависимым представлением числа.
            // maximumFractionDigits- Максимальное используемое количество цифр дробной части числа.
            nums = num.toLocaleString('de-DE', { maximumFractionDigits: decimals });

            if(curr){
                nums += " " + curr;
            }

            return nums;
        }
    }

    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    static toSymbol(curr) {
        switch(curr){
            case "UAH" : {
                return "₴";
            }
            case "EUR" : {
                return "€";
            }
            case "USD" : {
                return "$";
            }
        }
        return curr;
    }
 // проверка что выходит строка
    // проверка на equel ожидаемого значения
    // конвертирует валюту в символ  для отображения
    static toCurrency(symb) {
        switch(symb){
            case "₴" : {
                return "UAH";
            }
            case "€" : {
                return "EUR";
            }
            case "$" : {
                return "USD";
            }
        }
        return symb;
    }
// конвертирует символ в валюту  для отображения

    static calcSummFromRows(trs,summClassName){
        let totalSumm = 0;

        for(let i = 0; i < trs.length; i++){
            totalSumm += NumC.toData(trs[i].querySelector(summClassName).innerHTML);
        }
    // находит элемент в доме, преобразует в число с плавающей точкой с помощью  toData  и добавляет в totalSum
        // тест проверка на число
        return totalSumm;
    }

    static getFALDates(trs, dateClassName){
        let dates = {},
            dtemp,
            y,
            m,
            d;

        dtemp = new Date(trs[0].querySelector(dateClassName).innerHTML);
        y = dtemp.getFullYear();
        m = dtemp.getMonth() + 1;
        d = dtemp.getDate();

        if(m < 10){
            m = "0" + m;
        }
        if(d < 10){
            d = "0" + d;
        }

        dates["last"] = y + "-" + m + "-" + d;


        dtemp = new Date(trs[trs.length-1].querySelector(dateClassName).innerHTML);
        y = dtemp.getFullYear();
        m = dtemp.getMonth() + 1;
        d = dtemp.getDate();

        if(m < 10){
            m = "0" + m;
        }
        if(d < 10){
            d = "0" + d;
        }

        dates["first"] = y + "-" + m + "-" + d;

        return dates;

        // начальная дата trs[0] и окончательная дата [trs.length -1] вытягиваем из строк,
        // формируем дату в формат 01,02 и выводим обьект {last: 2019-04-01,

        // first: 2019-04-01}
        // проверка значений в обьекте, что это строка
        // проверка на соответствие шаблону
    }
}






