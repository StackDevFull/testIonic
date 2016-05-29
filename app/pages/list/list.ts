import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  mNav: any;
  mSelectedItem: any;
  mIcons: any;
  mItems: any;
  
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.mNav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.mSelectedItem = navParams.get('item');

    this.mIcons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.mItems = [];
    for(let i = 1; i < 11; i++) {
      this.mItems.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.mIcons[Math.floor(Math.random() * this.mIcons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.mNav.push(ListPage, {
      item: item
    })
  }
}
