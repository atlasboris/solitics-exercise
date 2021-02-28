import { Component, Input, OnInit } from '@angular/core';
import { iCourse } from 'src/app/shared/data.model';

@Component({
  selector: 'app-name-date-cell',
  templateUrl: './name-date-cell.component.html',
  styleUrls: ['./name-date-cell.component.scss']
})
export class NameDateCellComponent implements OnInit {
  @Input() nameDate: iCourse;
  constructor() { }

  ngOnInit(): void {
  }

  public editName() {
    this.nameDate.editable = !this.nameDate.editable
  }
}
