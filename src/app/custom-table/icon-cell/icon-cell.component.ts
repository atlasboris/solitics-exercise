import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-cell',
  templateUrl: './icon-cell.component.html',
  styleUrls: ['./icon-cell.component.scss']
})
export class IconCellComponent implements OnInit {
  @Input() statusIcon: string;
  @Input() statusLabel: string;
  constructor() { }

  ngOnInit(): void {
  }

}
