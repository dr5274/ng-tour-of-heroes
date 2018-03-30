import { Component, Input } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html"
})
export class NavBarComponent {
  @Input() title: any;
}
