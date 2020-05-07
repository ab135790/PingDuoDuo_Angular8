import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link: string;
}

interface Dict {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '拼多多';
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
  dict: Dict = {
    a: '1',
    b: '2'
  }
  constructor() {
    console.log(this.dict['a']);
    
  }
}
