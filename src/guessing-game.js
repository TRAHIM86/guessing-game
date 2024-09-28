class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNumber = min;    //значение минНамбер = мин
        this.maxNumber = max;    //значение махНамбер = мах
    }

    guess() {
        this.average = Math.round((this.minNumber + this.maxNumber)/2);      //среднее = округл(мин+мах)/2
        return this.average;                                                 //this method returns solution candidate (метод возвращает число-предположение для решения)
    }

    lower() {
        this.maxNumber = this.average;      //если this.average > искомого числа, то махНамбер = this.average 
    }

    greater() {
        this.minNumber = this.average;      //если this.average < искомого числа, то минНамбер = this.average 
    }
}

module.exports = GuessingGame;
