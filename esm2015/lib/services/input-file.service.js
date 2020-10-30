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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['config']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWlucHV0LWZpbGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9uRCxNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQzhCLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQ2xELENBQUM7SUFFTCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFVBQVUsQ0FBQyxLQUF1QixFQUFFLFNBQVM7UUFDaEQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBQyxJQUFVLEVBQUUsU0FBaUI7UUFDMUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsaUJBQWlCO0lBQy9FLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksU0FBUyxDQUFDLElBQVUsRUFBRSxVQUFrQjtRQUMzQyxJQUFJLE9BQU8sR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDO1FBQ2pDLElBQUksVUFBVSxFQUFFO1lBQ1osTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ3pHLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsTUFBTTtpQkFDVDthQUNKO1NBQ0o7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOztnRkE5Q1EsZ0JBQWdCLGNBR2IsUUFBUTt3REFIWCxnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZiLE1BQU07a0RBRVQsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBSVEsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEZpbGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUnO1xuaW1wb3J0IHsgSW5wdXRGaWxlQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnB1dC1maWxlLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBfY29uZmlnOiBJbnB1dEZpbGVDb25maWdcbiAgICApIHsgfVxuXG4gICAgZ2V0IGNvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBsaW1pdCBpcyBub3QgcmVhY2hlZC5cbiAgICAgKiBAcGFyYW0gZmlsZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgbGltaXRHdWFyZChmaWxlczogQXJyYXk8SW5wdXRGaWxlPiwgZmlsZUxpbWl0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmaWxlcy5sZW5ndGggPCBmaWxlTGltaXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgZmlsZSBzaXplIGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgbGltaXQuXG4gICAgICogQHBhcmFtIGZpbGVcbiAgICAgKiBAcGFyYW0gc2l6ZUxpbWl0XG4gICAgICovXG4gICAgcHVibGljIHNpemVHdWFyZChmaWxlOiBGaWxlLCBzaXplTGltaXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXNpemVMaW1pdCB8fCBmaWxlLnNpemUgPCBzaXplTGltaXQgKiAxMDI0ICogMTAyNDsgLy8gVE9ETyA6IGltcHJvdmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSB0eXBlIG9mIHRoZSBmaWxlIGlzIGVuYWJsZWQuXG4gICAgICogQHBhcmFtIGZpbGVcbiAgICAgKiBAcGFyYW0gZmlsZUFjY2VwdFxuICAgICAqL1xuICAgIHB1YmxpYyB0eXBlR3VhcmQoZmlsZTogRmlsZSwgZmlsZUFjY2VwdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBlbmFibGVkID0gZmlsZUFjY2VwdCA9PSBudWxsO1xuICAgICAgICBpZiAoZmlsZUFjY2VwdCkge1xuICAgICAgICAgICAgY29uc3QgYWNjZXB0ID0gZmlsZUFjY2VwdC5yZXBsYWNlKCcqJywgJycpO1xuICAgICAgICAgICAgY29uc3QgdHlwZXMgPSBhY2NlcHQuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLnR5cGUuc3RhcnRzV2l0aCh0eXBlKSB8fCAodHlwZS5jaGFyQXQoMCkgPT09ICcuJyAmJiBmaWxlLm5hbWUgIT0gbnVsbCAmJiBmaWxlLm5hbWUuZW5kc1dpdGgodHlwZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICB9XG59XG4iXX0=