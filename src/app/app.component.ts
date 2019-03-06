import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'ant-gantt';
  path:any;
  ngOnInit() {
    this.path = {
      infos: [{
        id: 1,
        name: '项目1',
        scheduledStartTime: '2018-08-15 9:00',
        scheduledEndTime: '2018-11-01 18:00',
        schedule: 0.5,
        expand: true,
        children: [{
          id: 11,
          name: '项目11',
          scheduledStartTime: '2018-12-01 9:00',
          scheduledEndTime: '2018-12-05 18:00',
          actualStartTime: '2018-12-03 9:00',
          actualEndTime: '2018-12-06 9:00',
          schedule: 0.5,
          judge: [1],
          expand: true,
          children: [{
            id: 111,
            name: '项目111',
            scheduledStartTime: '2018-12-01 9:00',
            scheduledEndTime: '2018-12-05 18:00',
            actualStartTime: '2018-12-03 9:00',
            actualEndTime: '2018-12-06 9:00',
            schedule: 0.5,
            judge: [2,3],
            expand: true,
          }]
        }, {
          id: 12,
          name: '项目12',
          scheduledStartTime: '2018-12-06 9:00',
          scheduledEndTime: '2018-12-10 18:00',
          actualStartTime: '2018-12-07 9:00',
          actualEndTime: '2018-12-12 18:00',
          schedule: 0.5,
          judge: [1],
          expand: true,
        }, {
          id: 13,
          name: '项目13',
          scheduledStartTime: '2018-12-06 9:00',
          scheduledEndTime: '2018-12-10 18:00',
          actualStartTime: '2018-12-07 9:00',
          actualEndTime: '2018-12-12 18:00',
          schedule: 0.5,
          judge: [1],
          expand: true,
        }]
      }, {
        id: 2,
        name: '项目2',
        scheduledStartTime: '2018-12-11 9:00',
        scheduledEndTime: '2018-12-18 18:00',
        actualStartTime: '2018-12-11 9:00',
        actualEndTime: '2018-12-18 18:00',
        schedule: 0.5
      }, {
        id: 3,
        name: '项目3',
        scheduledStartTime: '2018-12-20 9:00',
        scheduledEndTime: '2018-12-23 18:00',
        actualStartTime: '2018-12-21 9:00',
        actualEndTime: '2018-12-22 18:00',
        schedule: 0.5
      }, {
        id: 4,
        name: '项目4',
        scheduledStartTime: '2018-12-05 9:00',
        scheduledEndTime: '2018-12-10 18:00',
        actualStartTime: '2018-12-06 9:00',
        actualEndTime: '2019-01-10 18:00',
        schedule: 0.5
      }, {
        id: 5,
        name: '项目5',
        scheduledStartTime: '2018-12-08 9:00',
        scheduledEndTime: '2019-03-10 18:00',
        actualStartTime: '2018-12-08 9:00',
        actualEndTime: '2019-03-25 18:00',
        schedule: 0.5
      }],
      min: '2018-06-25 9:00',
      max: '2019-05-25 18:00'
    }
  }
  genttAdd(data) {
    console.log(`点击了${data}的添加`);
  }
  genttEdit(data) {
    console.log(`点击了${data}的编辑`);
  }
  genttDelete(data) {
    console.log(`点击了${data}的删除`);
  }
  collapse(data) {
    console.log(data.id)
  }
}
