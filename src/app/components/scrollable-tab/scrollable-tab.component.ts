import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements
 OnInit,
 OnChanges,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 OnDestroy {

  selectedIndex = -1;
  @Input() menus: TopMenu[] = []; // 接收父级输入属性
  @Input() backgroundColor = "";
  @Input() titleColor = '';
  @Input() titleAcitveColor = '';
  @Input() indicatorColor = '';
  @Output() tabSelected = new EventEmitter; // 向父级输出属性
  handleSelection(index: number) {
      this.selectedIndex = index;
      this.tabSelected.emit(this.menus[this.selectedIndex]); // 向父级传输事件
  }
  constructor() {// 构造函数永远首先被调用
    console.log('组件构造调用');
    
  }
  /**
   * 在组件的`@Input` 属性发生变化的时候调用
   * @param changes 索引对象，key 是属性的名字， value 是 SimpleChanges
  */
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('组件输入属性改变', changes);
  }
  /**
   * 组件初始化完成，在这个函数中，我们可以安全的使用组件的属性和方法
  */
  ngOnInit() { // 组件初始化时被调用
    console.log('组件初始化');
    
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('组件脏值检测');
  }
  /**
   * 组件内容初始化
  */
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('组件内容初始化');
  }
  /**
   * 组件内容脏值检测
  */
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('组件内容脏值检测');
  }
  /**
   * 组件的视图初始化
  */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('组件视图初始化');
  }
  /**
   * 组件视图脏值检测
  */
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('组件视图脏值检测');
  }
  /**
   * 需要做一些清理工作
  */  
 ngOnDestroy(): void {
   //Called once, before the instance is destroyed.
   //Add 'implements OnDestroy' to the class.
  console.log('组件销毁');
 }
}
