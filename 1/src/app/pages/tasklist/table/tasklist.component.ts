import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  @ViewChild(TableComponent) childTable!: TableComponent;

  public taskCount = 0;
  public taskName = '';
  public sendName!: string;
  public isEdit = false;
  public newTaskName = '';
  public indexEdit!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getCount(count: number): void {
    this.taskCount = count;
  }

  addTask (): void {
    this.sendName = this.taskName;
    this.taskName = '';
  }

  getIndex(index: number): void {
    this.isEdit = true;
    this.newTaskName = this.childTable.taskArray[index].name;
    this.indexEdit = index;
  }

  updateTask(): void {
    this.childTable.taskArray[this.indexEdit].name = this.newTaskName;
    this.newTaskName = '';
    this.isEdit = false;
  }

}
