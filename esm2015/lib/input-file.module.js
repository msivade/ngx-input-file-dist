import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFileComponent } from './components/input-file/input-file.component';
import { InputFileService } from './services/input-file.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class InputFileModule {
    static forRoot(config) {
        return {
            ngModule: InputFileModule,
            providers: [
                InputFileService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
InputFileModule.ɵfac = function InputFileModule_Factory(t) { return new (t || InputFileModule)(); };
InputFileModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: InputFileModule });
InputFileModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        InputFileService
    ], imports: [[
            CommonModule,
            FormsModule,
            MatButtonModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFileModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    DropZoneDirective,
                    InputFileComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    ReactiveFormsModule
                ],
                exports: [
                    InputFileComponent
                ],
                providers: [
                    InputFileService
                ],
                entryComponents: [InputFileComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InputFileModule, { declarations: [DropZoneDirective,
        InputFileComponent], imports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule], exports: [InputFileComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW5wdXQtZmlsZS9zcmMvbGliL2lucHV0LWZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBeUI5RCxNQUFNLE9BQU8sZUFBZTtJQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXVCO1FBQ3pDLE9BQU87WUFDSCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUMxQztTQUNKLENBQUM7SUFDTixDQUFDOzs4RUFUUSxlQUFlO2lFQUFmLGVBQWU7c0VBTmI7UUFDUCxnQkFBZ0I7S0FDbkIsWUFkUTtZQUNMLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsY0FBYztZQUNkLG1CQUFtQjtTQUN0Qjt1RkFVUSxlQUFlO2NBdkIzQixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGlCQUFpQjtvQkFDakIsa0JBQWtCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsbUJBQW1CO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUc7b0JBQ04sa0JBQWtCO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsZ0JBQWdCO2lCQUNuQjtnQkFDRCxlQUFlLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTthQUMxQzs7d0ZBRVksZUFBZSxtQkFyQnBCLGlCQUFpQjtRQUNqQixrQkFBa0IsYUFHbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2QsbUJBQW1CLGFBR25CLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wWm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wLXpvbmUvZHJvcC16b25lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0RmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1maWxlL2lucHV0LWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0RmlsZUNvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcy9pbnB1dC1maWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBJbnB1dEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbnB1dC1maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEcm9wWm9uZURpcmVjdGl2ZSxcbiAgICAgICAgSW5wdXRGaWxlQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0cyA6IFtcbiAgICAgICAgSW5wdXRGaWxlQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSW5wdXRGaWxlU2VydmljZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbIElucHV0RmlsZUNvbXBvbmVudCBdXG59KVxuXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBJbnB1dEZpbGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElucHV0RmlsZU1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IElucHV0RmlsZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIElucHV0RmlsZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19