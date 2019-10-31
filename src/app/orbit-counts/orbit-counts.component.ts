import { Component, OnInit, Input } from "@angular/core";
import { Satellite } from "../satellite";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"]
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  @Input() displayList: Satellite[];
  total: number = 0;
  debris: number = 5;
  comm: number = 0;
  probe: number = 0;
  position: number = 0;
  station: number = 0;
  scope: number = 0;

  constructor() {}

  ngOnInit() {}

  count(orbiter: any): number {
    return this.satellites.filter(satellites => satellites.type === orbiter).length;
  }

  // totals(kind: string) {
  //   let list: string[] = [];
  //   for (let i = 0; i < this.displayList.length; i++) {
  //     let type = this.displayList[i].type.toLowerCase();
  //     if (type.includes(kind)){

  //     console.log(list)
  // }
}
