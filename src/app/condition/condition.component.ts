import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  MatButtonToggleChange,
  MatChipInputEvent,
  MatSort, MatTableDataSource
} from "@angular/material";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

export interface Team {
  name: string
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const attendences: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 110, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 22, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 210, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 31, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 32, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 33, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 34, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 35, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 36, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 37, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 38, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 39, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 310, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 999, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  teams: Team[] = [
    {name: 'HR'},
    {name: 'Test'}
  ];



  displayColumns = [
    'position', 'name', 'weight', 'symbol'
  ];

  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(attendences);


  constructor() {

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  modeChanges(event: MatButtonToggleChange) {
    console.log(event.value);
  }

  add(event: MatChipInputEvent) {
    const value = event.input.value || '';
    if (value.trim()) {
      this.teams.push({name: value.trim()})
    }
    event.input.value = '';
  }

  remove(team: Team) {
    const index = this.teams.indexOf(team);
    if (index >= 0) {
      this.teams.splice(index, 1);
    }
  }

  selectData(data: PeriodicElement) {
    console.log(JSON.stringify(data))
  }

}
