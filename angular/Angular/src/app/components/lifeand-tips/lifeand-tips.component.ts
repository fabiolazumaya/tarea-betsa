import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lifeand-tips',
  templateUrl: './lifeand-tips.component.html',
  styleUrls: ['./lifeand-tips.component.css'],
})
export class LifeandTipsComponent implements OnInit {
  public parameter: string;

  constructor(private_route: ActivatedRoute, private_router: Router) {}

  //HOOKS
  ngOnInit(): void {
    //
  }
}
