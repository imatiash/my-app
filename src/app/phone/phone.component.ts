import { Component, OnInit } from "@angular/core";
import { NgModel} from "@angular/forms";

export class Phone{
    constructor(public title: string, 
                public price: number, 
                public company: string)
    { }
}

@Component({
  selector: "app-phone",
  templateUrl: "./phone.component.html",
  styleUrls: ["./phone.component.styl"]
})
export class PhoneComponent implements OnInit {

    
  constructor() { }

  ngOnInit() {
  }
    //Example1 
    //     phones: Phone[] = [];
    // companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
    //   addPhone(title: string, price: number, company: string){
    //     this.phones.push(new Phone(title, price, company));
    // }

     //Example2
          phones: Phone[] = [];
     phone: Phone = new Phone("", 0, "Samsung");
     companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
    addPhone(title:NgModel, price: NgModel, comp: NgModel) {
      this.phones.push(new Phone(title.value, price.value, comp.value));
        console.log(title);
        console.log(price);
        console.log(comp);
    }

}
