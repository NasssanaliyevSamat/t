import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:typedef
  onSave(num: string) {
    const element = document.getElementById('text_area') as HTMLInputElement;
    element.value += num;
  }

  // tslint:disable-next-line:typedef
  onClear(){
    // const element = <HTMLInputElement>document.getElementById("text_area");
    const element = document.getElementById('text_area') as HTMLInputElement;
    element.value = '';
  }

  // tslint:disable-next-line:typedef
  onBack(){
    const element = document.getElementById('text_area') as HTMLInputElement;
    element.value = element.value.substring(0, element.value.length - 1);
  }

  // tslint:disable-next-line:typedef
  onEqual(){

    const element = document.getElementById('text_area') as HTMLInputElement;
    const buffer: string = element.value;
    // tslint:disable-next-line:variable-name
    const label_1 = document.getElementById('last_1') as HTMLInputElement;
    // tslint:disable-next-line:variable-name
    const label_2 = document.getElementById('last_2') as HTMLInputElement;
    // tslint:disable-next-line:variable-name
    const label_3 = document.getElementById('last_3') as HTMLInputElement;
    if (element){
      // tslint:disable-next-line:no-eval
      element.value = eval(element.value);
    }
    // tslint:disable-next-line:variable-name
    const lb_buff: string = buffer + '=' + element.value;

    if (flag_1){
      label_3.value = label_2.value;
      label_2.value = label_1.value;
      flag_1 = false;

    }
    // tslint:disable-next-line:triple-equals
    if (next == 1){
      label_1.value = lb_buff;
    }
    // tslint:disable-next-line:triple-equals
    if (next == 2){
      if (flag_2){
        label_3.value = label_2.value;
        flag_2 = false;
      }
      label_2.value = label_1.value;
      label_1.value = lb_buff;
    }
    // tslint:disable-next-line:triple-equals
    if (next == 3){
      label_3.value = label_2.value;
      label_2.value = label_1.value;
      label_1.value = lb_buff;

    }

    next ++;
    // tslint:disable-next-line:triple-equals
    if (next == 4){
      next = 1;
      flag_1 = true;
      flag_2 = true;
    }
  }
}


let next = 1;

// tslint:disable-next-line:variable-name
let flag_1 = false;
// tslint:disable-next-line:variable-name
let flag_2 = false;



