"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test1';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// принимаем строку
function insert(num) {
    var element = document.getElementById("text_area");
    element.value += num;
}
function Clear() {
    var element = document.getElementById("text_area");
    element.value = "";
}
function Back() {
    var element = document.getElementById("text_area");
    element.value = element.value.substring(0, element.value.length - 1);
}
var next = 1;
var flag_1 = false;
var flag_2 = false;
function Equal() {
    var element = document.getElementById("text_area");
    var buffer = element.value;
    var label_1 = document.getElementById("last_1");
    var label_2 = document.getElementById("last_2");
    var label_3 = document.getElementById("last_3");
    if (element) {
        element.value = eval(element.value);
    }
    var lb_buff = buffer + "=" + element.value;
    if (flag_1) {
        label_3.value = label_2.value;
        label_2.value = label_1.value;
        flag_1 = false;
    }
    if (next == 1) {
        label_1.value = lb_buff;
    }
    if (next == 2) {
        if (flag_2) {
            label_3.value = label_2.value;
            flag_2 = false;
        }
        label_2.value = label_1.value;
        label_1.value = lb_buff;
    }
    if (next == 3) {
        label_3.value = label_2.value;
        label_2.value = label_1.value;
        label_1.value = lb_buff;
    }
    next++;
    if (next == 4) {
        next = 1;
        flag_1 = true;
        flag_2 = true;
    }
}
// задание а
// function loadJquery(success, error){
//     let jQuery = <HTMLImageElement>document.getElementById('image');
//     jQuery.src = 'http://cdn.motorpage.ru/Photos/800/88FC.jpg';
//     document.body.appendChild(jQuery);
//
//     jQuery.onload = success;
//
//     jQuery.onerror = error;
//
// }
//
// loadJquery(() => {
//     console.log('jQuery loaded successfully');
//     loadJquery( () => {
//         console.log('jQuery loaded successfully');
//     },() =>{
//         console.log('jQuery loading failed');
//     });
//     },() =>{
//     console.log('jQuery loading failed');
//     loadJquery(()=>{
//         console.log('jQuery loaded successfully 2');
//     }, () => {
//         console.log('jQuery loading failed 2');
//     })
// });
