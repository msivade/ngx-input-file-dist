import { Directive, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
export class DropZoneDirective {
    constructor() {
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
    onDragOver(event) {
        this.preventAndStopEventPropagation(event);
        if (!this.isOver && !this.disabled) {
            this.isOver = true;
            this.itemDragOver.emit();
        }
    }
    /**
     * Drag Leave event handler.
     * @param event
     */
    onDragLeave(event) {
        this.preventAndStopEventPropagation(event);
        if (this.isOver && this.isTrueLeave(event) && !this.disabled) {
            this.isOver = false;
            this.itemDragLeave.emit();
        }
    }
    /**
     * Drop event handler.
     * @param event
     */
    onDrop(event) {
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
    }
    /**
     * Prevents and stops event propagration.
     * @param event
     */
    preventAndStopEventPropagation(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * Checks if the leave is not trigger by a children.
     * @param event
     */
    isTrueLeave(event) {
        for (const c of this.whiteListClasses) {
            if (event.fromElement != null && event.fromElement.className.indexOf(c) >= 0) {
                return false;
            }
        }
        return true;
    }
}
DropZoneDirective.ɵfac = function DropZoneDirective_Factory(t) { return new (t || DropZoneDirective)(); };
DropZoneDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropZoneDirective, selectors: [["", "inputFileDropZone", ""]], hostBindings: function DropZoneDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DropZoneDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DropZoneDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { disabled: "disabled" }, outputs: { itemDragOver: "itemDragOver", itemDragLeave: "itemDragLeave", itemDrop: "itemDrop" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropZoneDirective, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnB1dC1maWxlL3NyYy9saWIvZGlyZWN0aXZlcy9kcm9wLXpvbmUvZHJvcC16b25lLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDTCxNQUFNLGVBQWUsQ0FBQzs7QUFLM0IsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUlvQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHcEQsdUZBQXVGO1FBQy9FLHFCQUFnQixHQUFHLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxDQUFDO0tBa0VsRjtJQWhFRzs7O09BR0c7SUFFSSxVQUFVLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBRUksV0FBVyxDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUVJLE1BQU0sQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJO2dCQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssOEJBQThCLENBQUMsS0FBWTtRQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxXQUFXLENBQUMsS0FBVTtRQUMxQixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuQyxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFFLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztrRkF6RVEsaUJBQWlCO29FQUFqQixpQkFBaUI7MEdBQWpCLHNCQUFrQiwyRkFBbEIsdUJBQW1CLGlGQUFuQixrQkFBYzs7dUZBQWQsaUJBQWlCO2NBSDdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2FBQ2xDO2dCQUVtQixRQUFRO2tCQUF2QixLQUFLO1lBQ1csWUFBWTtrQkFBNUIsTUFBTTtZQUNVLGFBQWE7a0JBQTdCLE1BQU07WUFDVSxRQUFRO2tCQUF4QixNQUFNO1lBV0EsVUFBVTtrQkFEaEIsWUFBWTttQkFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFjN0IsV0FBVztrQkFEakIsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFjOUIsTUFBTTtrQkFEWixZQUFZO21CQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lucHV0RmlsZURyb3Bab25lXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcFpvbmVEaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgaXRlbURyYWdPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBpdGVtRHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBpdGVtRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgcHJpdmF0ZSBpc092ZXI6IGJvb2xlYW47XG4gICAgLy8gUHJldmVudCBkcmFnbGVhdmUgb24gY2hpbGRyZW4sIGNvdWxkIGJlIGJldHRlciBidXQgaXQncyBjaGVhcCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgcHJpdmF0ZSB3aGl0ZUxpc3RDbGFzc2VzID0gWydmaWxlLWJ1dHRvbicsICdtYXQtYnV0dG9uLXdyYXBwZXInLCAnaW5wdXQtaWNvbiddO1xuXG4gICAgLyoqXG4gICAgICogRHJhZyBPdmVyIGV2ZW50IGhhbmRsZXIuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpO1xuICAgICAgICBpZiAoIXRoaXMuaXNPdmVyICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLml0ZW1EcmFnT3Zlci5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFnIExlYXZlIGV2ZW50IGhhbmRsZXIuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25EcmFnTGVhdmUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnByZXZlbnRBbmRTdG9wRXZlbnRQcm9wYWdhdGlvbihldmVudCk7XG4gICAgICAgIGlmICh0aGlzLmlzT3ZlciAmJiB0aGlzLmlzVHJ1ZUxlYXZlKGV2ZW50KSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXRlbURyYWdMZWF2ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wIGV2ZW50IGhhbmRsZXIuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRHJvcChldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtRHJvcC5lbWl0KGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIGFuZCBzdG9wcyBldmVudCBwcm9wYWdyYXRpb24uXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBwcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbGVhdmUgaXMgbm90IHRyaWdnZXIgYnkgYSBjaGlsZHJlbi5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzVHJ1ZUxlYXZlKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIHRoaXMud2hpdGVMaXN0Q2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmZyb21FbGVtZW50ICE9IG51bGwgJiYgZXZlbnQuZnJvbUVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoYykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iXX0=