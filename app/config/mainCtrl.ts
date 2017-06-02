interface IMainCtrlModel {
    title: string;
    products: any[];
    test(): any;
}

export default class mainCtrl implements IMainCtrlModel {
    title: string;
    products: any[];
   
    constructor(){
        this.title="qweqwewqe";
        this.products = [];
    }

    test(): any {
        console.log('hooey')
    }



}
var angular = require('angular');
angular
    .module("myApp")
    .controller("mainCtrl", mainCtrl);