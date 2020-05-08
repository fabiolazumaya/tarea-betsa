import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-en123',
  templateUrl: './en123.component.html',
  styleUrls: ['./en123.component.css'],
})
export class En123Component implements OnInit {
  public parameter: string;
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    //watcher / Observable
    this._route.params.subscribe((params: Params) => {
      this.parameter = params.category_name;
    });
  }
}
