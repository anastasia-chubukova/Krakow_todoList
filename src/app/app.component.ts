import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Krakow_todoList';

  newItem = {
    id: "",
    value: "",
    checked: false
  };

  items = [
    { id: "id1", value: "First item", checked: false },
    { id: "id2", value: "Second item", checked: false },
    { id: "id3", value: "Third item", checked: false },
    { id: "id4", value: "Fourth item", checked: false },
  ];
}
