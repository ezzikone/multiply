

module.exports = function multiply(first, second) {

    function mass(str) {
        return reverseString(str.split(''));                                                                            //делаем из строки массив и переворачиваем с помощью другой функции
    }

    function reverseString(str) {                                                                                       //функция переворота массива

        let newString = "";

        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }

        return newString;
    }

    const firstMass = mass(first);                                                                                      //получаем перевёрнутый массив из каждого знака первой строки
    const secondMass = mass(second);                                                                                    //получаем перевёрнутый массив из каждого знака второй строки
    let secondOp = [];
    let v = [];

        for (let i = 0; i < firstMass.length; i++) {                                                                    //функция перебора каждого элемента первого массива
            for (let j = 0; j < secondMass.length; j++) {                                                               //функция перебора каждого элемента второго массива

                let firstOp = firstMass[i] * secondMass[j];                                                             //умножается каждый элемент

                secondOp[i + j] = (secondOp[i + j]) ? secondOp[i + j] + firstOp : firstOp;                              //складируем все помноженные элементы в свои ячейки и, если надо сдвигает на нужную позицию
            }
        }

        for (let i = 0; i < secondOp.length; i++) {                                                                     //прибавляем и расставляем всё по местам (как в умножении столбика, сдвигая каждую иттерацию)

            let num = secondOp[i] % 10;                                                                                 //получаем остаток, чтобы убрать десятки
            let move = Math.floor(secondOp[i] / 10);                                                                 //деление без остатка в меньшую сторону для получения десятков
            secondOp[i] = num;                                                                                          //получаем остаток и записываем его в нынешнюю иттерацию

            if (secondOp[i + 1]) {                                                                                      //если есть след ячейка массива
                secondOp[i + 1] += move;                                                                                //добавляем к ней десятку
            }
            else if (move !== 0) {                                                                                      //если десятка не нулевая, но нет след ячейки массива
                secondOp[i + 1] = move;                                                                                 //добавляем десятку
            }
        }

        return secondOp.reverse().join('');                                                                             //переворачиваем значение и превращаем его в строку
}



