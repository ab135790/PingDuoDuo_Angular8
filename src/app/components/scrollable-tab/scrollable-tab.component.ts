import { Component, OnInit } from '@angular/core';

interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  selectedIndex = -1;
  menus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '女装',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    }
  ];

  handleSelection(index: number) {
      this.selectedIndex = index;
  }
  constructor() { }

  ngOnInit() {
  }

}
