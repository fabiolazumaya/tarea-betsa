import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lifeand-tips',
  templateUrl: './lifeand-tips.component.html',
  styleUrls: ['./lifeand-tips.component.css'],
})
export class LifeandTipsComponent implements OnInit {
  public parameter: string;
  public articles: Array<Object>;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.articles = [
      {
        title: 'Ensenada',
        image:
          'https://i.pinimg.com/originals/7f/58/ff/7f58fff00689b8ffcd1f11009798e518.jpg',
        year: 2020,
        tags: [
          {
            name: 'Ensenada',
            url: 'http://www.google.com',
          },
          {
            name: 'Ensenasty',
            url: 'http://www.google.com',
          },
          {
            name: 'La cenicienta',
            url: 'http://www.google.com',
          },
        ],
      },
      {
        title: 'Veracruz',
        image:
          'https://viamexico.mx/wp-content/uploads/2017/02/veracruz-bien-1920x1080.png',
        year: 2020,
        tags: [
          {
            name: 'Ver',
            url: 'http://www.google.com',
          },
          {
            name: 'Vera',
            url: 'http://www.google.com',
          },
          {
            name: 'La verdadera cruz',
            url: 'http://www.google.com',
          },
        ],
      },
      {
        title: 'Xalapa',
        image: 'https://i.redd.it/3fo2s1rf43031.jpg',
        year: 2020,
        tags: [
          {
            name: 'Xal',
            url: 'http://www.google.com',
          },
          {
            name: 'Jalapa',
            url: 'http://www.google.com',
          },
          {
            name: 'Xalapacito',
            url: 'http://www.google.com',
          },
        ],
      },
      {
        title: 'Ciudad de México',
        image:
          'https://static1lonelyplanetes.cdnstatics.com/sites/default/files/styles/max_1300x1300/public/fotos/mexico_ciudaddemexico_paseoreforma_angelindependencia_shutterstockrf_1066463744_aberu.go_shutterstock.jpg?itok=MjJFsqoK',
        year: 2020,
        tags: [
          {
            name: 'Xal',
            url: 'http://www.google.com',
          },
          {
            name: 'Jalapa',
            url: 'http://www.google.com',
          },
          {
            name: 'Xalapacito',
            url: 'http://www.google.com',
          },
        ],
      },
    ];
  }

  //HOOKS
  ngOnInit(): void {
    //watcher / Observable
    this._route.params.subscribe((params: Params) => {
      const category = params.category_name;
      if (this.validateStrig(category)) {
        this.parameter = category;
      }
    });
  }

  validateStrig(string): Boolean {
    let isNumber = string.match(/^\d+/g);
    return isNumber ? false : true;
    // return type == 'string' ? true : false;
  }
}
