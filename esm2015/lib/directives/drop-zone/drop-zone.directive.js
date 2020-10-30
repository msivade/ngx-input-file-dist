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
DropZoneDirective.ɵdir = i0.ɵɵdefineDirective({ type: DropZoneDirective, selectors: [["", "inputFileDropZone", ""]], hostBindings: function DropZoneDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DropZoneDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DropZoneDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { disabled: "disabled" }, outputs: { itemDragOver: "itemDragOver", itemDragLeave: "itemDragLeave", itemDrop: "itemDrop" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbnB1dC1maWxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZHJvcC16b25lL2Ryb3Atem9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ0wsTUFBTSxlQUFlLENBQUM7O0FBSzNCLE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFJb0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3BELHVGQUF1RjtRQUMvRSxxQkFBZ0IsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLENBQUMsQ0FBQztLQWtFbEY7SUFoRUc7OztPQUdHO0lBRUksVUFBVSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUVJLFdBQVcsQ0FBQyxLQUFVO1FBQ3pCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFFSSxNQUFNLENBQUMsS0FBVTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSTtnQkFDQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hEO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDhCQUE4QixDQUFDLEtBQVk7UUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssV0FBVyxDQUFDLEtBQVU7UUFDMUIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbkMsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxRSxPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7a0ZBekVRLGlCQUFpQjtzREFBakIsaUJBQWlCOzBHQUFqQixzQkFBa0IsMkZBQWxCLHVCQUFtQixpRkFBbkIsa0JBQWM7O2tEQUFkLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjthQUNsQzs7a0JBRUksS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBVU4sWUFBWTttQkFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQWFuQyxZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBYXBDLFlBQVk7bUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaW5wdXRGaWxlRHJvcFpvbmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wWm9uZURpcmVjdGl2ZSB7XG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBpdGVtRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGl0ZW1EcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGl0ZW1Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBwcml2YXRlIGlzT3ZlcjogYm9vbGVhbjtcbiAgICAvLyBQcmV2ZW50IGRyYWdsZWF2ZSBvbiBjaGlsZHJlbiwgY291bGQgYmUgYmV0dGVyIGJ1dCBpdCdzIGNoZWFwIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICBwcml2YXRlIHdoaXRlTGlzdENsYXNzZXMgPSBbJ2ZpbGUtYnV0dG9uJywgJ21hdC1idXR0b24td3JhcHBlcicsICdpbnB1dC1pY29uJ107XG5cbiAgICAvKipcbiAgICAgKiBEcmFnIE92ZXIgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnByZXZlbnRBbmRTdG9wRXZlbnRQcm9wYWdhdGlvbihldmVudCk7XG4gICAgICAgIGlmICghdGhpcy5pc092ZXIgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXRlbURyYWdPdmVyLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYWcgTGVhdmUgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuaXNPdmVyICYmIHRoaXMuaXNUcnVlTGVhdmUoZXZlbnQpICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pdGVtRHJhZ0xlYXZlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3AgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Ecm9wKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnRBbmRTdG9wRXZlbnRQcm9wYWdhdGlvbihldmVudCk7XG4gICAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1Ecm9wLmVtaXQoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJldmVudHMgYW5kIHN0b3BzIGV2ZW50IHByb3BhZ3JhdGlvbi5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHByZXZlbnRBbmRTdG9wRXZlbnRQcm9wYWdhdGlvbihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBsZWF2ZSBpcyBub3QgdHJpZ2dlciBieSBhIGNoaWxkcmVuLlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgaXNUcnVlTGVhdmUoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy53aGl0ZUxpc3RDbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZnJvbUVsZW1lbnQgIT0gbnVsbCAmJiBldmVudC5mcm9tRWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihjKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiJdfQ==