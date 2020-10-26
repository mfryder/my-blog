import { Component, OnInit } from '@angular/core';
import { NavigationItem } from "src/app/classes/navigation-item";

@Component({
  selector: 'app-blog-left-side-nav',
  templateUrl: './blog-left-side-nav.component.html',
  styleUrls: ['./blog-left-side-nav.component.scss']
})
export class BlogLeftSideNavComponent implements OnInit {

  navigationItemList: NavigationItem[] = [{
    "label": "Home Page",
    "uri": "",
    "icon": "home"
  },{
    "label": "Political Nonsense",
    "uri": "politics",
    "icon": "gavel"
  },{
    "label": "Video Games",
    "uri": "gaming",
    "icon": "videogame_asset"
  },{
    "label": "Stock Market",
    "uri": "stocks",
    "icon": "show_chart"
  },{
    "label": "Recipies R Us",
    "uri": "recipies",
    "icon": "fastfood"
  }] as NavigationItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
