import { __values } from "tslib";
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var InputFileService = /** @class */ (function () {
    function InputFileService(_config) {
        this._config = _config;
    }
    Object.defineProperty(InputFileService.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Whether the limit is not reached.
     * @param files
     */
    InputFileService.prototype.limitGuard = function (files, fileLimit) {
        return files.length < fileLimit;
    };
    /**
     * Whether the file size is not bigger than the limit.
     * @param file
     * @param sizeLimit
     */
    InputFileService.prototype.sizeGuard = function (file, sizeLimit) {
        return !sizeLimit || file.size < sizeLimit * 1024 * 1024; // TODO : improve
    };
    /**
     * Whether the type of the file is enabled.
     * @param file
     * @param fileAccept
     */
    InputFileService.prototype.typeGuard = function (file, fileAccept) {
        var e_1, _a;
        var enabled = fileAccept == null;
        if (fileAccept) {
            var accept = fileAccept.replace('*', '');
            var types = accept.split(',');
            try {
                for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                    var type = types_1_1.value;
                    if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                        enabled = true;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return enabled;
    };
    InputFileService.ɵfac = function InputFileService_Factory(t) { return new (t || InputFileService)(i0.ɵɵinject('config')); };
    InputFileService.ɵprov = i0.ɵɵdefineInjectable({ token: InputFileService, factory: InputFileService.ɵfac, providedIn: 'root' });
    return InputFileService;
}());
export { InputFileService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['config']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWlucHV0LWZpbGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJbkQ7SUFLSSwwQkFDOEIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFDbEQsQ0FBQztJQUVMLHNCQUFJLG9DQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRDs7O09BR0c7SUFDSSxxQ0FBVSxHQUFqQixVQUFrQixLQUF1QixFQUFFLFNBQVM7UUFDaEQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG9DQUFTLEdBQWhCLFVBQWlCLElBQVUsRUFBRSxTQUFpQjtRQUMxQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxpQkFBaUI7SUFDL0UsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxvQ0FBUyxHQUFoQixVQUFpQixJQUFVLEVBQUUsVUFBa0I7O1FBQzNDLElBQUksT0FBTyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUM7UUFDakMsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFDaEMsS0FBbUIsSUFBQSxVQUFBLFNBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFyQixJQUFNLElBQUksa0JBQUE7b0JBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7d0JBQ3pHLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ2YsTUFBTTtxQkFDVDtpQkFDSjs7Ozs7Ozs7O1NBQ0o7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO29GQTlDUSxnQkFBZ0IsY0FHYixRQUFROzREQUhYLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTsyQkFMdEI7Q0FzREMsQUFsREQsSUFrREM7U0EvQ1ksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFJUSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5wdXQtZmlsZSc7XG5pbXBvcnQgeyBJbnB1dEZpbGVDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbGVTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIF9jb25maWc6IElucHV0RmlsZUNvbmZpZ1xuICAgICkgeyB9XG5cbiAgICBnZXQgY29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGxpbWl0IGlzIG5vdCByZWFjaGVkLlxuICAgICAqIEBwYXJhbSBmaWxlc1xuICAgICAqL1xuICAgIHB1YmxpYyBsaW1pdEd1YXJkKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+LCBmaWxlTGltaXQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZpbGVzLmxlbmd0aCA8IGZpbGVMaW1pdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBmaWxlIHNpemUgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBsaW1pdC5cbiAgICAgKiBAcGFyYW0gZmlsZVxuICAgICAqIEBwYXJhbSBzaXplTGltaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2l6ZUd1YXJkKGZpbGU6IEZpbGUsIHNpemVMaW1pdDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhc2l6ZUxpbWl0IHx8IGZpbGUuc2l6ZSA8IHNpemVMaW1pdCAqIDEwMjQgKiAxMDI0OyAvLyBUT0RPIDogaW1wcm92ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHR5cGUgb2YgdGhlIGZpbGUgaXMgZW5hYmxlZC5cbiAgICAgKiBAcGFyYW0gZmlsZVxuICAgICAqIEBwYXJhbSBmaWxlQWNjZXB0XG4gICAgICovXG4gICAgcHVibGljIHR5cGVHdWFyZChmaWxlOiBGaWxlLCBmaWxlQWNjZXB0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGVuYWJsZWQgPSBmaWxlQWNjZXB0ID09IG51bGw7XG4gICAgICAgIGlmIChmaWxlQWNjZXB0KSB7XG4gICAgICAgICAgICBjb25zdCBhY2NlcHQgPSBmaWxlQWNjZXB0LnJlcGxhY2UoJyonLCAnJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlcyA9IGFjY2VwdC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUudHlwZS5zdGFydHNXaXRoKHR5cGUpIHx8ICh0eXBlLmNoYXJBdCgwKSA9PT0gJy4nICYmIGZpbGUubmFtZSAhPSBudWxsICYmIGZpbGUubmFtZS5lbmRzV2l0aCh0eXBlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgIH1cbn1cbiJdfQ==