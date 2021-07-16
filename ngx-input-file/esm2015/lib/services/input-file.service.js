import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class InputFileService {
    constructor(_config) {
        this._config = _config;
    }
    get config() {
        return this._config;
    }
    /**
     * Whether the limit is not reached.
     * @param files
     */
    limitGuard(files, fileLimit) {
        return files.length < fileLimit;
    }
    /**
     * Whether the file size is not bigger than the limit.
     * @param file
     * @param sizeLimit
     */
    sizeGuard(file, sizeLimit) {
        return !sizeLimit || file.size < sizeLimit * 1024 * 1024; // TODO : improve
    }
    /**
     * Whether the type of the file is enabled.
     * @param file
     * @param fileAccept
     */
    typeGuard(file, fileAccept) {
        let enabled = fileAccept == null;
        if (fileAccept) {
            const accept = fileAccept.replace('*', '');
            const types = accept.split(',');
            for (const type of types) {
                if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }
        return enabled;
    }
}
InputFileService.ɵfac = function InputFileService_Factory(t) { return new (t || InputFileService)(i0.ɵɵinject('config')); };
InputFileService.ɵprov = i0.ɵɵdefineInjectable({ token: InputFileService, factory: InputFileService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['config']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWlucHV0LWZpbGUvc3JjL2xpYi9zZXJ2aWNlcy9pbnB1dC1maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT25ELE1BQU0sT0FBTyxnQkFBZ0I7SUFFekIsWUFDOEIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFDbEQsQ0FBQztJQUVMLElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksVUFBVSxDQUFDLEtBQXVCLEVBQUUsU0FBUztRQUNoRCxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksU0FBUyxDQUFDLElBQVUsRUFBRSxTQUFpQjtRQUMxQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxpQkFBaUI7SUFDL0UsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxTQUFTLENBQUMsSUFBVSxFQUFFLFVBQWtCO1FBQzNDLElBQUksT0FBTyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUM7UUFDakMsSUFBSSxVQUFVLEVBQUU7WUFDWixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDekcsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixNQUFNO2lCQUNUO2FBQ0o7U0FDSjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7O2dGQTlDUSxnQkFBZ0IsY0FHYixRQUFRO3dEQUhYLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTt1RkFFVCxnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFJUSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5wdXQtZmlsZSc7XG5pbXBvcnQgeyBJbnB1dEZpbGVDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbGVTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIF9jb25maWc6IElucHV0RmlsZUNvbmZpZ1xuICAgICkgeyB9XG5cbiAgICBnZXQgY29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGxpbWl0IGlzIG5vdCByZWFjaGVkLlxuICAgICAqIEBwYXJhbSBmaWxlc1xuICAgICAqL1xuICAgIHB1YmxpYyBsaW1pdEd1YXJkKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+LCBmaWxlTGltaXQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZpbGVzLmxlbmd0aCA8IGZpbGVMaW1pdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBmaWxlIHNpemUgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBsaW1pdC5cbiAgICAgKiBAcGFyYW0gZmlsZVxuICAgICAqIEBwYXJhbSBzaXplTGltaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2l6ZUd1YXJkKGZpbGU6IEZpbGUsIHNpemVMaW1pdDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhc2l6ZUxpbWl0IHx8IGZpbGUuc2l6ZSA8IHNpemVMaW1pdCAqIDEwMjQgKiAxMDI0OyAvLyBUT0RPIDogaW1wcm92ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHR5cGUgb2YgdGhlIGZpbGUgaXMgZW5hYmxlZC5cbiAgICAgKiBAcGFyYW0gZmlsZVxuICAgICAqIEBwYXJhbSBmaWxlQWNjZXB0XG4gICAgICovXG4gICAgcHVibGljIHR5cGVHdWFyZChmaWxlOiBGaWxlLCBmaWxlQWNjZXB0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGVuYWJsZWQgPSBmaWxlQWNjZXB0ID09IG51bGw7XG4gICAgICAgIGlmIChmaWxlQWNjZXB0KSB7XG4gICAgICAgICAgICBjb25zdCBhY2NlcHQgPSBmaWxlQWNjZXB0LnJlcGxhY2UoJyonLCAnJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlcyA9IGFjY2VwdC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUudHlwZS5zdGFydHNXaXRoKHR5cGUpIHx8ICh0eXBlLmNoYXJBdCgwKSA9PT0gJy4nICYmIGZpbGUubmFtZSAhPSBudWxsICYmIGZpbGUubmFtZS5lbmRzV2l0aCh0eXBlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgIH1cbn1cbiJdfQ==