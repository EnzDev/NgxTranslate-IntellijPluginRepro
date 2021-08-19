import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

const instant = new Function()

@Component({
  selector: 'app-root',
  template: `
    <div>
      <span>This has  a reference {{ 'A.CA.BCA.ABCA' | translate | json}}</span>
      <span>This is autocompleted {{ "A.CA.BCA.ABCA" | translate }}</span>
      <span>This is autocompleted but not referenced {{ 'A.CA.BCA.' | translate }}</span>
      <span>This is autocompleted but not referenced {{ 'D.' | translate }}</span>

      <span>This SHOULD NOT be completed or referenced with NgTranslateToolset {{ 'HOME.SELECT' | json }}</span>
  </div>
  `,
})
export class AppComponent {
  constructor(translate: TranslateService) {
    // Should have a reference error
    translate.instant('A.CA.BCA.INVALID_VALID_VEY')
    // Should be referenced
    translate.instant('A.CA.BCA.ABCA')
    let assign_to_var = translate.instant('A.CA.BCA.ABCA')

    // Should not be autocompleted
    translate.instant('A'.toString())
    // Should not auto-complete non translate function
    instant('A.CA')
  }
}























































































