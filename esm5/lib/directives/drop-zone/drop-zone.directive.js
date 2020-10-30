import { __values } from "tslib";
import { Directive, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.disabled = false;
        this.itemDragOver = new EventEmitter();
        this.itemDragLeave = new EventEmitter();
        this.itemDrop = new EventEmitter();
        // Prevent dragleave on children, could be better but it's cheap for better performance
        this.whiteListClasses = ['file-button', 'mat-button-wrapper', 'input-icon'];
    }
    /**
     * Drag Over event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDragOver = function (event) {
        this.preventAndStopEventPropagation(event);
        if (!this.isOver && !this.disabled) {
            this.isOver = true;
            this.itemDragOver.emit();
        }
    };
    /**
     * Drag Leave event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDragLeave = function (event) {
        this.preventAndStopEventPropagation(event);
        if (this.isOver && this.isTrueLeave(event) && !this.disabled) {
            this.isOver = false;
            this.itemDragLeave.emit();
        }
    };
    /**
     * Drop event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDrop = function (event) {
        if (!this.disabled) {
            this.preventAndStopEventPropagation(event);
            this.isOver = false;
            try {
                this.itemDrop.emit(event.dataTransfer.files);
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    /**
     * Prevents and stops event propagration.
     * @param event
     */
    DropZoneDirective.prototype.preventAndStopEventPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * Checks if the leave is not trigger by a children.
     * @param event
     */
    DropZoneDirective.prototype.isTrueLeave = function (event) {
        var e_1, _a;
        try {
            for (var _b = __values(this.whiteListClasses), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (event.fromElement != null && event.fromElement.className.indexOf(c) >= 0) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    DropZoneDirective.ɵfac = function DropZoneDirective_Factory(t) { return new (t || DropZoneDirective)(); };
    DropZoneDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropZoneDirective, selectors: [["", "inputFileDropZone", ""]], hostBindings: function DropZoneDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DropZoneDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DropZoneDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
        } }, inputs: { disabled: "disabled" }, outputs: { itemDragOver: "itemDragOver", itemDragLeave: "itemDragLeave", itemDrop: "itemDrop" } });
    return DropZoneDirective;
}());
export { DropZoneDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DropZoneDirective, [{
        type: Directive,
        args: [{
                selector: '[inputFileDropZone]'
            }]
    }], null, { disabled: [{
            type: Input
        }], itemDragOver: [{
            type: Output
        }], itemDragLeave: [{
            type: Output
        }], itemDrop: [{
            type: Output
        }], onDragOver: [{
            type: HostListener,
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbnB1dC1maWxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZHJvcC16b25lL2Ryb3Atem9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNMLE1BQU0sZUFBZSxDQUFDOztBQUUzQjtJQUFBO1FBSW9CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdwRCx1RkFBdUY7UUFDL0UscUJBQWdCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FrRWxGO0lBaEVHOzs7T0FHRztJQUVJLHNDQUFVLEdBRGpCLFVBQ2tCLEtBQVU7UUFDeEIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUVJLHVDQUFXLEdBRGxCLFVBQ21CLEtBQVU7UUFDekIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUVJLGtDQUFNLEdBRGIsVUFDYyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJO2dCQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssMERBQThCLEdBQXRDLFVBQXVDLEtBQVk7UUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssdUNBQVcsR0FBbkIsVUFBb0IsS0FBVTs7O1lBQzFCLEtBQWdCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEMsSUFBTSxDQUFDLFdBQUE7Z0JBQ1IsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMxRSxPQUFPLEtBQUssQ0FBQztpQkFDaEI7YUFDSjs7Ozs7Ozs7O1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztzRkF6RVEsaUJBQWlCOzBEQUFqQixpQkFBaUI7OEdBQWpCLHNCQUFrQiwyRkFBbEIsdUJBQW1CLGlGQUFuQixrQkFBYzs7NEJBWDNCO0NBcUZDLEFBN0VELElBNkVDO1NBMUVZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSDdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2FBQ2xDOztrQkFFSSxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFVTixZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBYW5DLFlBQVk7bUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFhcEMsWUFBWTttQkFBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpbnB1dEZpbGVEcm9wWm9uZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bab25lRGlyZWN0aXZlIHtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGl0ZW1EcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgaXRlbURyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgaXRlbURyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIHByaXZhdGUgaXNPdmVyOiBib29sZWFuO1xuICAgIC8vIFByZXZlbnQgZHJhZ2xlYXZlIG9uIGNoaWxkcmVuLCBjb3VsZCBiZSBiZXR0ZXIgYnV0IGl0J3MgY2hlYXAgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgIHByaXZhdGUgd2hpdGVMaXN0Q2xhc3NlcyA9IFsnZmlsZS1idXR0b24nLCAnbWF0LWJ1dHRvbi13cmFwcGVyJywgJ2lucHV0LWljb24nXTtcblxuICAgIC8qKlxuICAgICAqIERyYWcgT3ZlciBldmVudCBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25EcmFnT3ZlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3ZlciAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pdGVtRHJhZ092ZXIuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhZyBMZWF2ZSBldmVudCBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRHJhZ0xlYXZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5pc092ZXIgJiYgdGhpcy5pc1RydWVMZWF2ZShldmVudCkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLml0ZW1EcmFnTGVhdmUuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcCBldmVudCBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkRyb3AoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbURyb3AuZW1pdChldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmV2ZW50cyBhbmQgc3RvcHMgZXZlbnQgcHJvcGFncmF0aW9uLlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgcHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGxlYXZlIGlzIG5vdCB0cmlnZ2VyIGJ5IGEgY2hpbGRyZW4uXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1RydWVMZWF2ZShldmVudDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiB0aGlzLndoaXRlTGlzdENsYXNzZXMpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5mcm9tRWxlbWVudCAhPSBudWxsICYmIGV2ZW50LmZyb21FbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKGMpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19