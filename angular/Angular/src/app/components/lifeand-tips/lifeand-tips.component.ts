import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lifeand-tips',
  templateUrl: './lifeand-tips.component.html',
  styleUrls: ['./lifeand-tips.component.css'],
})
export class LifeandTipsComponent implements OnInit {
  public parameter: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.articles = [];
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

  validateStrig(strig): Boolean {
    let isNumber = string.match(/^\d+/g);
    return isNumber ? false : true;
    // return type == 'string' ? true : false;
  }
}
