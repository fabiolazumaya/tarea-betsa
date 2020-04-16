import {Component} from '@angular/core';

@Component({
    selector:'testing',
    template: `<h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <span>{{ age }}<span>`
})

export class testComponent {
    public title: string;
    public text: string;
    public age: number;


    constructor() {
        this.title = "Hola mundo desde la propiedad de la clase";
        this.text = "El texto igual desde la propiedad";
        this.age = 20;        
    }
}

