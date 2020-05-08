import { Component } from '@angular/core';
import { TopMenu } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scrollableTabBgColor = 'red'
  title = '拼多多';
  topMenus: TopMenu[] = [
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
  handleTabSelect(topMenu: TopMenu) {
    const colors = ['red', 'blue', 'black'];
    const idx = Math.floor(Math.random() * 3)
    this.scrollableTabBgColor = colors[idx];
  }
}
