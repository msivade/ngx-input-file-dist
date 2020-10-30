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
var InputFileModule = /** @class */ (function () {
    function InputFileModule() {
    }
    InputFileModule.forRoot = function (config) {
        return {
            ngModule: InputFileModule,
            providers: [
                InputFileService,
                { provide: 'config', useValue: config }
            ]
        };
    };
    InputFileModule.ɵmod = i0.ɵɵdefineNgModule({ type: InputFileModule });
    InputFileModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InputFileModule_Factory(t) { return new (t || InputFileModule)(); }, providers: [
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
    return InputFileModule;
}());
export { InputFileModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InputFileModule, { declarations: [DropZoneDirective,
        InputFileComponent], imports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule], exports: [InputFileComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFileModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW5wdXQtZmlsZS8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC1maWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU5RDtJQUFBO0tBaUNDO0lBVGlCLHVCQUFPLEdBQXJCLFVBQXNCLE1BQXVCO1FBQ3pDLE9BQU87WUFDSCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUMxQztTQUNKLENBQUM7SUFDTixDQUFDO3VEQVRRLGVBQWU7aUhBQWYsZUFBZSxtQkFOYjtZQUNQLGdCQUFnQjtTQUNuQixZQWRRO2dCQUNMLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxlQUFlO2dCQUNmLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixjQUFjO2dCQUNkLG1CQUFtQjthQUN0QjswQkF6Qkw7Q0E2Q0MsQUFqQ0QsSUFpQ0M7U0FWWSxlQUFlO3dGQUFmLGVBQWUsbUJBckJwQixpQkFBaUI7UUFDakIsa0JBQWtCLGFBR2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYztRQUNkLG1CQUFtQixhQUduQixrQkFBa0I7a0RBUWIsZUFBZTtjQXZCM0IsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixjQUFjO29CQUNkLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFHO29CQUNOLGtCQUFrQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsZUFBZSxFQUFFLENBQUUsa0JBQWtCLENBQUU7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHJvcFpvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcC16b25lL2Ryb3Atem9uZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dEZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9pbnB1dC1maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEZpbGVDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMvaW5wdXQtZmlsZS1jb25maWcnO1xuaW1wb3J0IHsgSW5wdXRGaWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRHJvcFpvbmVEaXJlY3RpdmUsXG4gICAgICAgIElucHV0RmlsZUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHMgOiBbXG4gICAgICAgIElucHV0RmlsZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIElucHV0RmlsZVNlcnZpY2VcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogWyBJbnB1dEZpbGVDb21wb25lbnQgXVxufSlcblxuZXhwb3J0IGNsYXNzIElucHV0RmlsZU1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSW5wdXRGaWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogSW5wdXRGaWxlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgSW5wdXRGaWxlU2VydmljZSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=