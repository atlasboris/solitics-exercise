import { Component, OnInit } from '@angular/core';
import { Row, iMockData, iCourse } from '../shared/data.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  columns: string[] = [];
  rows: Row[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.columns = Object.keys(new Row());

    this.dataService.getMockData().subscribe((data: iMockData[]) => {
      this.setTableData(this.setTableHeader(data));
    });
  }

  private setTableHeader(data: iMockData[]): iMockData[] {
    let firstItem: iMockData = data.find((item: iMockData) => item.course.name == "כל הנרשמים")
    data = data.filter((item: iMockData) => item.course.name !== "כל הנרשמים");
    data.unshift(firstItem);
    return data;
  }

  private setTableData(data: iMockData[]) {
    data.forEach((data: iMockData) => {
      let row: Row = <Row>{};
      if (data) {
        row.name_and_date = {
          name: data.course.name,
          date: data.course.date,
          editable: false
        }

        let icon: string ;

        if (data.isAllList) {
          icon = "all-reg-list.svg";
        } else if (data.isDynamic) {
          icon = "dynamic-list.svg";
        } else if (data.state.total === 0) {
          icon = "empty-reg-list.svg";
        } 

        row.status_icon = icon;

        row.new_today = data.state.new_today
        row.removed = data.state.removed;
        row.blocked = data.state.blocked;
        row.stopped = data.state.stopped;
        row.active = data.state.active;
        row.total = data.state.total;

      }

      this.rows.push(row);
    });
  }

}
