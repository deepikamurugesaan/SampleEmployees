import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample';

  employeeObj:any = {
    "name":"",
    "age":""
      }

      relative:any[] =[]

      addrelative(){
        this.relative.unshift({ name: this.employeeObj.name , age: this.employeeObj.age });
    this.employeeObj.name = ""
    this.employeeObj.age=""; // Clear the input after adding
  }

  editRelative(index: number) {
    this.employeeObj.name = this.relative[index].name;
    this.employeeObj.age = this.relative[index].age;

    this.deleteRelative(index); // Remove the item while editing
  }

  deleteRelative(index: number) {
    this.relative.splice(index, 1);
  
      }
}
