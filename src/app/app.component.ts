import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <span>This SHOULD have a reference {{ 'HOME.TITLE' | translate }}</span>
      <span>This SHOULD be autocompleted {{ 'HOME.' | translate }}</span>

      <span>This SHOULD NOT have a reference {{ 'HOME.TITLE' | json }}</span>
      <span>This COULD be autocompleted {{ 'HOME.' | json }}</span>
      <span>This SHOULD NOT have a reference {{ 'HOME.TITLE' | anypipe }}</span>
      <span>This COULD be autocompleted {{ 'HOME.' | anypipe }}</span>
  </div>
  `,
})
export class AppComponent {}
