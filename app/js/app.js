var app = angular.module('myayy',[]);

app.controller('shop',function(){
	this.qty = 2;
	this.cost = 3;
	this.inCurr = 'EUR';
	this.correncies = ['USD','EUR','CNY'];
	this.usdToForeignRates = {
		USD: 1,
		EUR: 0.74,
		CNY: 6.09
	}
	this.total = function total(outCurr){
		return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
	}
	this.convertCurrency = function convertCurrency(amount, inCurr, outCurr){
		return amount * this.usdToForeignRates[outCurr] * 1 / this.usdToForeignRates[inCurr];
	}
	this.pay = function pay(){
		window.alert('谢谢!');
	}
});