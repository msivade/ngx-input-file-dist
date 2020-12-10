import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { defaultSettings } from '../../settings/default.settings';
import { FormBuilder } from '@angular/forms';
import { InputFileRejectedReason } from '../../enums/input-file-rejected-reason';
import { InputFileService } from '../../services/input-file.service';
import { urlValidator } from '../../validators/url.validator';
export class InputFileComponent {
    constructor(formBuilder, inputFileService) {
        this.formBuilder = formBuilder;
        this.inputFileService = inputFileService;
        this.acceptedFile = new EventEmitter();
        this.deletedFile = new EventEmitter();
        this.rejectedFile = new EventEmitter();
        this.files = new Array();
        this.id = `ngx-input-file-${InputFileComponent.nextId++}`;
        this.onChange = (files) => { };
        this.onTouched = () => { };
    }
    set classAnimation(classAnimation) {
        this._classAnimation = classAnimation;
    }
    get classAnimation() {
        return this._classAnimation || this.inputFileService.config.classAnimation || defaultSettings.classAnimation;
    }
    set fileAccept(fileAccept) {
        this._fileAccept = fileAccept;
    }
    get fileAccept() {
        return this._fileAccept || this.inputFileService.config.fileAccept || defaultSettings.fileAccept;
    }
    set fileLimit(fileLimit) {
        this._fileLimit = fileLimit;
    }
    get fileLimit() {
        return this._fileLimit || this.inputFileService.config.fileLimit || defaultSettings.fileLimit;
    }
    set iconAdd(iconAdd) {
        this._iconAdd = iconAdd;
    }
    get iconAdd() {
        return this._iconAdd || this.inputFileService.config.iconAdd || defaultSettings.iconAdd;
    }
    set iconDelete(iconDelete) {
        this._iconDelete = iconDelete;
    }
    get iconDelete() {
        return this._iconDelete || this.inputFileService.config.iconDelete || defaultSettings.iconDelete;
    }
    set iconFile(iconFile) {
        this._iconFile = iconFile;
    }
    get iconFile() {
        return this._iconFile || this.inputFileService.config.iconFile || defaultSettings.iconFile;
    }
    set iconLink(iconLink) {
        this._iconLink = iconLink;
    }
    get iconLink() {
        return this._iconLink || this.inputFileService.config.iconLink || defaultSettings.iconLink;
    }
    set linkEnabled(linkEnabled) {
        this._linkEnabled = linkEnabled;
    }
    get linkEnabled() {
        return this._linkEnabled || this.inputFileService.config.linkEnabled || defaultSettings.linkEnabled;
    }
    set placeholderLink(placeholderLink) {
        this._placeholderLink = placeholderLink;
    }
    get placeholderLink() {
        return this._placeholderLink || this.inputFileService.config.placeholderLink || defaultSettings.placeholderLink;
    }
    set sizeLimit(sizeLimit) {
        this._sizeLimit = sizeLimit;
    }
    get sizeLimit() {
        return this._sizeLimit || this.inputFileService.config.sizeLimit || defaultSettings.sizeLimit;
    }
    get canAddFile() {
        return this.files && this.files.length < this.fileLimit;
    }
    /**
     * Angular lifecyle OnInit implementation.
     */
    ngOnInit() {
        this.setForm();
    }
    /**
     * On delete a file event handler.
     * @param index
     */
    onDeleteFile(index) {
        if (!this.disabled) {
            const files = this.files.slice();
            this.deletedFile.emit(files[index]);
            files.splice(index, 1);
            this.writeValue(files);
        }
    }
    /**
     * On drag over event handler.
     * Adds a ripple effect on the button.
     */
    onDragOver(button) {
        button.ripple.launch({ centered: true, persistent: true });
    }
    /**
     * On drag leave event handler.
     * Fades the ripple effect of the button.
     */
    onDragLeave(button) {
        button.ripple.fadeOutAll();
    }
    /**
     * On adds a link.
     */
    onLink() {
        this.addLink = !this.addLink;
    }
    /**
     * On replace one file event handler.
     * Writes the value.
     * @param fileList
     * @param index
     * @param fileInput
     */
    onReplaceFile(fileList, index, button, fileInput) {
        if (!this.disabled) {
            // Copies the array without reference.
            const files = this.files.slice();
            // Assumes that a single file can be replaced by a single file.
            const inputFile = { file: fileList.item(0) };
            button.ripple.fadeOutAll();
            if (this.fileGuard(files, inputFile, true)) {
                files[index] = inputFile;
                this.acceptedFile.emit(inputFile);
            }
            this.writeValue(files);
            if (fileInput) {
                fileInput.value = '';
            }
        }
    }
    /**
     * On select one or more files event handler.
     * Writes the value.
     * @param fileList
     */
    onSelectFile(fileList, button) {
        if (!this.disabled) {
            button.ripple.fadeOutAll();
            // Copies the array without reference.
            const files = this.files.slice();
            Array.from(fileList).forEach(file => {
                const inputFile = { file };
                if (this.fileGuard(files, inputFile)) {
                    files.push(inputFile);
                    this.acceptedFile.emit(inputFile);
                }
            });
            this.writeValue(files);
            this.fileInput.nativeElement.value = '';
        }
    }
    /**
     * On submit the link form event handler.
     */
    onSubmitLink() {
        if (!this.disabled && this.form.valid) {
            const files = this.files.slice();
            const inputFile = { link: this.form.value.link, preview: this.form.value.link };
            files.push(inputFile);
            this.acceptedFile.emit(inputFile);
            this.onLink();
            this.form.reset();
            this.writeValue(files);
        }
    }
    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Implementation of ControlValueAccessor.
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Implementation of ControlValueAccessor.
     * @param files
     */
    writeValue(files) {
        if (!files) {
            files = new Array();
        }
        this.files = files;
        this.setFilePreview();
        this.onChange(this.files);
    }
    /**
     * Whether the file can be added to the model.
     * @param files
     * @param file,
     * @param bypassLimit
     */
    fileGuard(files, file, bypassLimit) {
        if (!bypassLimit && !this.inputFileService.limitGuard(files, this.fileLimit)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.limitReached, file });
            return false;
        }
        if (!this.inputFileService.sizeGuard(file.file, this.sizeLimit)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.sizeReached, file });
            return false;
        }
        if (!this.inputFileService.typeGuard(file.file, this.fileAccept)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.badFile, file });
            return false;
        }
        return true;
    }
    /**
     * Sets the file preview with FileReader.
     */
    setFilePreview() {
        for (const index in this.files) {
            if (this.files[index].file != null && this.inputFileService.typeGuard(this.files[index].file, 'image/*')) {
                const fr = new FileReader();
                fr.onload = () => {
                    this.files[index].preview = fr.result;
                };
                fr.readAsDataURL(this.files[index].file);
            }
        }
    }
    /**
     * Sets the reactive form to insert a link.
     */
    setForm() {
        this.form = this.formBuilder.group({
            link: ['', [Validators.required, urlValidator]]
        });
    }
}
InputFileComponent.nextId = 0;
InputFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-file',
                template: "<div class=\"input-file-container\">\n    <label class=\"mat-orphan-label\" [for]=\"id\" [class.active]=\"files?.length\" [innerHtml]=\"placeholder\" *ngIf=\"placeholder\"></label>\n    <div class=\"files-container\">\n\n        <ng-container *ngFor=\"let file of files; let i = index\">\n            <div class=\"file-container\" [ngClass]=\"classAnimation\">\n                <ng-container *ngTemplateOutlet=\"fileTemplate; context: { $implicit: file, index: i }\"></ng-container>\n            </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"canAddFile\">\n            <div class=\"file-container\">\n                <ng-container *ngIf=\"!addLink; else linkTemplate\">\n                    <ng-container *ngTemplateOutlet=\"addTemplate\"></ng-container>\n                </ng-container>\n            </div>\n        </ng-container>\n    </div>\n\n</div>\n\n<ng-template #addTemplate>\n    <button mat-button inputFileDropZone class=\"file-button\" type=\"button\" (click)=\"fileInput.click()\" (itemDrop)=\"onSelectFile($event, selectButton)\"\n        (itemDragOver)=\"onDragOver(selectButton)\" (itemDragLeave)=\"onDragLeave(selectButton)\" [disabled]=\"disabled\" #selectButton>\n        <mat-icon class=\"input-icon\">{{ iconAdd }}</mat-icon>\n    </button>\n    <button mat-button class=\"secondary-button\" type=\"button\" [disabled]=\"disabled\" (click)=\"onLink()\" *ngIf=\"linkEnabled\">\n        <mat-icon>{{ iconLink }}</mat-icon>\n    </button>\n    <input [id]=\"id\" [accept]=\"fileAccept\" hidden type=\"file\" [attr.multiple]=\"fileLimit > 1 ? true : null\" #fileInput (change)=\"onSelectFile($event.target.files, selectButton)\">\n</ng-template>\n\n<ng-template #fileTemplate let-file let-index=\"index\">\n    <img class=\"image-preview\" [src]=\"file.preview\" *ngIf=\"file.preview\">\n    <button mat-button inputFileDropZone class=\"replace-button\" type=\"button\" (click)=\"fileReplace.click()\" (itemDrop)=\"onReplaceFile($event, index, replaceButton)\"\n        [disabled]=\"disabled\" (itemDragOver)=\"onDragOver(replaceButton)\" (itemDragLeave)=\"onDragLeave(replaceButton)\" #replaceButton>\n        <ng-container *ngIf=\"!file.preview\">\n            <mat-icon class=\"input-icon\">{{ iconFile }}</mat-icon>\n            <div class=\"file-name text-truncate\" [innerHtml]=\"file.file.name\" *ngIf=\"file.file\"></div>\n        </ng-container>\n    </button>\n    <button mat-button class=\"secondary-button\" type=\"button\" (click)=\"onDeleteFile(index)\" [disabled]=\"disabled\">\n        <mat-icon>{{ iconDelete }}</mat-icon>\n    </button>\n    <input [accept]=\"fileAccept\" hidden type=\"file\" #fileReplace (change)=\"onReplaceFile($event.target.files, index, replaceButton, fileReplace)\">\n</ng-template>\n\n<ng-template #linkTemplate>\n    <form class=\"form-link slide-in-up\" [formGroup]=\"form\" (ngSubmit)=\"onSubmitLink()\" novalidate>\n        <mat-form-field class=\"input-link\">\n            <input matInput formControlName=\"link\" [placeholder]=\"placeholderLink\">\n        </mat-form-field>\n        <div class=\"form-link-button\">\n            <button mat-button type=\"button\" (click)=\"onLink()\" [disabled]=\"disabled\">\n                <mat-icon>arrow_back</mat-icon>\n            </button>\n            <button mat-button type=\"submit\" [disabled]=\"disabled\">\n                <mat-icon>check</mat-icon>\n            </button>\n        </div>\n    </form>\n</ng-template>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputFileComponent),
                        multi: true
                    }
                ],
                styles: [".input-file-container{position:relative}.input-file-container .files-container{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container .file-button,.input-file-container .file-container{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container .secondary-button{width:10rem}.input-file-container .file-button{flex:1}.input-file-container .file-container{flex-direction:column;margin-right:1rem;overflow:hidden}.input-file-container .replace-button{flex:1;width:10rem}.input-file-container .mat-button:focus{outline:0}.input-file-container .file-name{width:7.5rem}.input-file-container .image-preview{-o-object-fit:contain;height:10rem;object-fit:contain;position:absolute;width:10rem}.input-file-container .input-icon{font-size:2.5rem;height:2.5rem;width:2.5rem}.input-file-container .form-link{display:flex;flex-direction:column;width:10rem}.input-file-container .input-link{width:10rem}.input-file-container .form-link-button{display:flex;flex-direction:row}.input-file-container .form-link-button .mat-button{min-width:5rem;width:5rem}.input-file-container .mat-orphan-label{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container .mat-orphan-label.active{transform:scale(.75)}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounce-in{-webkit-animation-duration:.75s;-webkit-animation-name:bounceIn;animation-duration:.75s;animation-name:bounceIn}@-webkit-keyframes slideInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes slideInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.slide-in-up{-webkit-animation-duration:.25s;-webkit-animation-name:slideInUp;animation-duration:.25s;animation-name:slideInUp}"]
            },] }
];
InputFileComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: InputFileService }
];
InputFileComponent.propDecorators = {
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }],
    classAnimation: [{ type: Input }],
    fileAccept: [{ type: Input }],
    fileLimit: [{ type: Input }],
    iconAdd: [{ type: Input }],
    iconDelete: [{ type: Input }],
    iconFile: [{ type: Input }],
    iconLink: [{ type: Input }],
    linkEnabled: [{ type: Input }],
    placeholderLink: [{ type: Input }],
    sizeLimit: [{ type: Input }],
    acceptedFile: [{ type: Output }],
    deletedFile: [{ type: Output }],
    rejectedFile: [{ type: Output }],
    fileInput: [{ type: ViewChild, args: ['fileInput', { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXNpdmFkZS9EZXYvcHJvamVjdHMvbmd4LWlucHV0LWZpbGUvcHJvamVjdHMvbmd4LWlucHV0LWZpbGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9pbnB1dC1maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFDM0IsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBR3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWM5RCxNQUFNLE9BQU8sa0JBQWtCO0lBZ0gzQixZQUNZLFdBQXdCLEVBQ3hCLGdCQUFrQztRQURsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBbEJwQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDN0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFJeEQsVUFBSyxHQUFHLElBQUksS0FBSyxFQUFhLENBQUM7UUFFL0IsT0FBRSxHQUFHLGtCQUFrQixrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFD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Q0FBQyxDQUFDO0lBQ1AsQ0FBQzs7QUFqVE0seUJBQU0sR0FBRyxDQUFDLENBQUM7O1lBYnJCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMjRHQUEwQztnQkFFMUMsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQ2pELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKOzthQUNKOzs7WUFuQlEsV0FBVztZQUlYLGdCQUFnQjs7O3VCQTZCcEIsS0FBSzswQkFDTCxLQUFLOzZCQUVMLEtBQUs7eUJBUUwsS0FBSzt3QkFRTCxLQUFLO3NCQVFMLEtBQUs7eUJBUUwsS0FBSzt1QkFRTCxLQUFLO3VCQVFMLEtBQUs7MEJBUUwsS0FBSzs4QkFRTCxLQUFLO3dCQVFMLEtBQUs7MkJBUUwsTUFBTTswQkFDTixNQUFNOzJCQUNOLE1BQU07d0JBQ04sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgVmlld0NoaWxkXG4gICAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlZmF1bHRTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3NldHRpbmdzL2RlZmF1bHQuc2V0dGluZ3MnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5wdXQtZmlsZSc7XG5pbXBvcnQgeyBJbnB1dEZpbGVSZWplY3RlZCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5wdXQtZmlsZS1yZWplY3RlZCc7XG5pbXBvcnQgeyBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbiB9IGZyb20gJy4uLy4uL2VudW1zL2lucHV0LWZpbGUtcmVqZWN0ZWQtcmVhc29uJztcbmltcG9ydCB7IElucHV0RmlsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnB1dC1maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0QnV0dG9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IHVybFZhbGlkYXRvciB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMvdXJsLnZhbGlkYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaW5wdXQtZmlsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2lucHV0LWZpbGUuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0RmlsZUNvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgICBzdGF0aWMgbmV4dElkID0gMDtcbiAgICBwcml2YXRlIF9jbGFzc0FuaW1hdGlvbjogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ZpbGVBY2NlcHQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9maWxlTGltaXQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9pY29uQWRkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaWNvbkRlbGV0ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ljb25GaWxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaWNvbkxpbms6IHN0cmluZztcbiAgICBwcml2YXRlIF9saW5rRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlckxpbms6IHN0cmluZztcbiAgICBwcml2YXRlIF9zaXplTGltaXQ6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzZXQgY2xhc3NBbmltYXRpb24oY2xhc3NBbmltYXRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jbGFzc0FuaW1hdGlvbiA9IGNsYXNzQW5pbWF0aW9uO1xuICAgIH1cblxuICAgIGdldCBjbGFzc0FuaW1hdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzQW5pbWF0aW9uIHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuY2xhc3NBbmltYXRpb24gfHwgZGVmYXVsdFNldHRpbmdzLmNsYXNzQW5pbWF0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBmaWxlQWNjZXB0KGZpbGVBY2NlcHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9maWxlQWNjZXB0ID0gZmlsZUFjY2VwdDtcbiAgICB9XG5cbiAgICBnZXQgZmlsZUFjY2VwdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGVBY2NlcHQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5maWxlQWNjZXB0IHx8IGRlZmF1bHRTZXR0aW5ncy5maWxlQWNjZXB0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBmaWxlTGltaXQoZmlsZUxpbWl0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZmlsZUxpbWl0ID0gZmlsZUxpbWl0O1xuICAgIH1cblxuICAgIGdldCBmaWxlTGltaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlTGltaXQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5maWxlTGltaXQgfHwgZGVmYXVsdFNldHRpbmdzLmZpbGVMaW1pdDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgaWNvbkFkZChpY29uQWRkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWNvbkFkZCA9IGljb25BZGQ7XG4gICAgfVxuXG4gICAgZ2V0IGljb25BZGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uQWRkIHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuaWNvbkFkZCB8fCBkZWZhdWx0U2V0dGluZ3MuaWNvbkFkZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgaWNvbkRlbGV0ZShpY29uRGVsZXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWNvbkRlbGV0ZSA9IGljb25EZWxldGU7XG4gICAgfVxuXG4gICAgZ2V0IGljb25EZWxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uRGVsZXRlIHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuaWNvbkRlbGV0ZSB8fCBkZWZhdWx0U2V0dGluZ3MuaWNvbkRlbGV0ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgaWNvbkZpbGUoaWNvbkZpbGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pY29uRmlsZSA9IGljb25GaWxlO1xuICAgIH1cblxuICAgIGdldCBpY29uRmlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb25GaWxlIHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuaWNvbkZpbGUgfHwgZGVmYXVsdFNldHRpbmdzLmljb25GaWxlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBpY29uTGluayhpY29uTGluazogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ljb25MaW5rID0gaWNvbkxpbms7XG4gICAgfVxuXG4gICAgZ2V0IGljb25MaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbkxpbmsgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5pY29uTGluayB8fCBkZWZhdWx0U2V0dGluZ3MuaWNvbkxpbms7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGxpbmtFbmFibGVkKGxpbmtFbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2xpbmtFbmFibGVkID0gbGlua0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgZ2V0IGxpbmtFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlua0VuYWJsZWQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5saW5rRW5hYmxlZCB8fCBkZWZhdWx0U2V0dGluZ3MubGlua0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IHBsYWNlaG9sZGVyTGluayhwbGFjZWhvbGRlckxpbms6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlckxpbmsgPSBwbGFjZWhvbGRlckxpbms7XG4gICAgfVxuXG4gICAgZ2V0IHBsYWNlaG9sZGVyTGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyTGluayB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLnBsYWNlaG9sZGVyTGluayB8fCBkZWZhdWx0U2V0dGluZ3MucGxhY2Vob2xkZXJMaW5rO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBzaXplTGltaXQoc2l6ZUxpbWl0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2l6ZUxpbWl0ID0gc2l6ZUxpbWl0O1xuICAgIH1cblxuICAgIGdldCBzaXplTGltaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplTGltaXQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5zaXplTGltaXQgfHwgZGVmYXVsdFNldHRpbmdzLnNpemVMaW1pdDtcbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgYWNjZXB0ZWRGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxJbnB1dEZpbGU+KCk7XG4gICAgQE91dHB1dCgpIGRlbGV0ZWRGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxJbnB1dEZpbGU+KCk7XG4gICAgQE91dHB1dCgpIHJlamVjdGVkRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5wdXRGaWxlUmVqZWN0ZWQ+KCk7XG4gICAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbGVJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBhZGRMaW5rOiBib29sZWFuO1xuICAgIHB1YmxpYyBmaWxlcyA9IG5ldyBBcnJheTxJbnB1dEZpbGU+KCk7XG4gICAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgICBwdWJsaWMgaWQgPSBgbmd4LWlucHV0LWZpbGUtJHtJbnB1dEZpbGVDb21wb25lbnQubmV4dElkKyt9YDtcbiAgICBwdWJsaWMgb25DaGFuZ2UgPSAoZmlsZXM6IEFycmF5PElucHV0RmlsZT4pID0+IHsgfTtcbiAgICBwdWJsaWMgb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gICAgZ2V0IGNhbkFkZEZpbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoIDwgdGhpcy5maWxlTGltaXQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIGlucHV0RmlsZVNlcnZpY2U6IElucHV0RmlsZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgLyoqXG4gICAgICogQW5ndWxhciBsaWZlY3lsZSBPbkluaXQgaW1wbGVtZW50YXRpb24uXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEZvcm0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBkZWxldGUgYSBmaWxlIGV2ZW50IGhhbmRsZXIuXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHVibGljIG9uRGVsZXRlRmlsZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLnNsaWNlKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZWRGaWxlLmVtaXQoZmlsZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIGZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gZHJhZyBvdmVyIGV2ZW50IGhhbmRsZXIuXG4gICAgICogQWRkcyBhIHJpcHBsZSBlZmZlY3Qgb24gdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnT3ZlcihidXR0b246IE1hdEJ1dHRvbik6IHZvaWQge1xuICAgICAgICBidXR0b24ucmlwcGxlLmxhdW5jaCh7IGNlbnRlcmVkOiB0cnVlLCBwZXJzaXN0ZW50OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGRyYWcgbGVhdmUgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBGYWRlcyB0aGUgcmlwcGxlIGVmZmVjdCBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRyYWdMZWF2ZShidXR0b246IE1hdEJ1dHRvbik6IHZvaWQge1xuICAgICAgICBidXR0b24ucmlwcGxlLmZhZGVPdXRBbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBhZGRzIGEgbGluay5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25MaW5rKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZExpbmsgPSAhdGhpcy5hZGRMaW5rO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIHJlcGxhY2Ugb25lIGZpbGUgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBXcml0ZXMgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSBmaWxlTGlzdFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqIEBwYXJhbSBmaWxlSW5wdXRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZXBsYWNlRmlsZShmaWxlTGlzdDogRmlsZUxpc3QsIGluZGV4OiBudW1iZXIsIGJ1dHRvbjogTWF0QnV0dG9uLCBmaWxlSW5wdXQ/OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gQ29waWVzIHRoZSBhcnJheSB3aXRob3V0IHJlZmVyZW5jZS5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gQXNzdW1lcyB0aGF0IGEgc2luZ2xlIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGJ5IGEgc2luZ2xlIGZpbGUuXG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpbGU6IElucHV0RmlsZSA9IHsgZmlsZSA6IGZpbGVMaXN0Lml0ZW0oMCkgfTtcbiAgICAgICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUd1YXJkKGZpbGVzLCBpbnB1dEZpbGUsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgZmlsZXNbaW5kZXhdID0gaW5wdXRGaWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZXB0ZWRGaWxlLmVtaXQoaW5wdXRGaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMud3JpdGVWYWx1ZShmaWxlcyk7XG4gICAgICAgICAgICBpZiAoZmlsZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgZmlsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBzZWxlY3Qgb25lIG9yIG1vcmUgZmlsZXMgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBXcml0ZXMgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSBmaWxlTGlzdFxuICAgICAqL1xuICAgIHB1YmxpYyBvblNlbGVjdEZpbGUoZmlsZUxpc3Q6IEZpbGVMaXN0LCBidXR0b246IE1hdEJ1dHRvbik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xuICAgICAgICAgICAgLy8gQ29waWVzIHRoZSBhcnJheSB3aXRob3V0IHJlZmVyZW5jZS5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcy5zbGljZSgpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShmaWxlTGlzdCkuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEZpbGU6IElucHV0RmlsZSA9IHsgZmlsZSB9O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVHdWFyZChmaWxlcywgaW5wdXRGaWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGlucHV0RmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZXB0ZWRGaWxlLmVtaXQoaW5wdXRGaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVWYWx1ZShmaWxlcyk7XG4gICAgICAgICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBzdWJtaXQgdGhlIGxpbmsgZm9ybSBldmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBvblN1Ym1pdExpbmsoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcy5zbGljZSgpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRGaWxlOiBJbnB1dEZpbGUgPSB7IGxpbms6IHRoaXMuZm9ybS52YWx1ZS5saW5rLCBwcmV2aWV3OiB0aGlzLmZvcm0udmFsdWUubGluayB9O1xuICAgICAgICAgICAgZmlsZXMucHVzaChpbnB1dEZpbGUpO1xuICAgICAgICAgICAgdGhpcy5hY2NlcHRlZEZpbGUuZW1pdChpbnB1dEZpbGUpO1xuICAgICAgICAgICAgdGhpcy5vbkxpbmsoKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAqIEBwYXJhbSBmblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZmlsZXM6IEFycmF5PElucHV0RmlsZT4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAqIEBwYXJhbSBmblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAqIEBwYXJhbSBpc0Rpc2FibGVkXG4gICAgICovXG4gICAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICAgKiBAcGFyYW0gZmlsZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZShmaWxlczogQXJyYXk8SW5wdXRGaWxlPik6IHZvaWQge1xuICAgICAgICBpZiAoIWZpbGVzKSB7XG4gICAgICAgICAgICBmaWxlcyA9IG5ldyBBcnJheTxJbnB1dEZpbGU+KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuICAgICAgICB0aGlzLnNldEZpbGVQcmV2aWV3KCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5maWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgZmlsZSBjYW4gYmUgYWRkZWQgdG8gdGhlIG1vZGVsLlxuICAgICAqIEBwYXJhbSBmaWxlc1xuICAgICAqIEBwYXJhbSBmaWxlLFxuICAgICAqIEBwYXJhbSBieXBhc3NMaW1pdFxuICAgICAqL1xuICAgIHByaXZhdGUgZmlsZUd1YXJkKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+LCBmaWxlOiBJbnB1dEZpbGUsIGJ5cGFzc0xpbWl0PzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWJ5cGFzc0xpbWl0ICYmICF0aGlzLmlucHV0RmlsZVNlcnZpY2UubGltaXRHdWFyZChmaWxlcywgdGhpcy5maWxlTGltaXQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5saW1pdFJlYWNoZWQsIGZpbGUgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaW5wdXRGaWxlU2VydmljZS5zaXplR3VhcmQoZmlsZS5maWxlLCB0aGlzLnNpemVMaW1pdCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ZWRGaWxlLmVtaXQoeyByZWFzb246IElucHV0RmlsZVJlamVjdGVkUmVhc29uLnNpemVSZWFjaGVkLCBmaWxlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RmlsZVNlcnZpY2UudHlwZUd1YXJkKGZpbGUuZmlsZSwgdGhpcy5maWxlQWNjZXB0KSkge1xuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24uYmFkRmlsZSwgZmlsZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGZpbGUgcHJldmlldyB3aXRoIEZpbGVSZWFkZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRGaWxlUHJldmlldygpOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlc1tpbmRleF0uZmlsZSAhPSBudWxsICYmIHRoaXMuaW5wdXRGaWxlU2VydmljZS50eXBlR3VhcmQodGhpcy5maWxlc1tpbmRleF0uZmlsZSwgJ2ltYWdlLyonKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICBmci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaW5kZXhdLnByZXZpZXcgPSBmci5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbaW5kZXhdLmZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcmVhY3RpdmUgZm9ybSB0byBpbnNlcnQgYSBsaW5rLlxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0Rm9ybSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBsaW5rOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB1cmxWYWxpZGF0b3JdXVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=