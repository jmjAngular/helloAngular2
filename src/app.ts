//our root app component
import {Component} from 'angular2/core'

@Component({
    selector: 'my-app',
    template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
  `
})
export class App {
    constructor() {
        this.name = 'Angular2'
    }
}