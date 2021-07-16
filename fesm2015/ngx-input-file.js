import * as i0 from '@angular/core';
import { Injectable, Inject, EventEmitter, Directive, Input, Output, HostListener, forwardRef, Component, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i7 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i8 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';

const defaultSettings = {
    classAnimation: 'bounce-in',
    fileAccept: '*',
    fileLimit: 1,
    iconAdd: 'add',
    iconDelete: 'delete',
    iconFile: 'insert_drive_file',
    iconLink: 'link',
    linkEnabled: false,
    placeholderLink: 'Link',
    sizeLimit: null
};

var InputFileRejectedReason;
(function (InputFileRejectedReason) {
    InputFileRejectedReason[InputFileRejectedReason["badFile"] = 0] = "badFile";
    InputFileRejectedReason[InputFileRejectedReason["limitReached"] = 1] = "limitReached";
    InputFileRejectedReason[InputFileRejectedReason["sizeReached"] = 2] = "sizeReached";
})(InputFileRejectedReason || (InputFileRejectedReason = {}));

function urlValidator(control) {
    if (Validators.required(control) != null) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
}

class InputFileService {
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
InputFileService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InputFileService, factory: InputFileService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['config']
            }] }]; }, null); })();

class DropZoneDirective {
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

const _c0 = ["fileInput"];
function InputFileComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 8);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.files == null ? null : ctx_r0.files.length);
    i0.ɵɵproperty("for", ctx_r0.id)("innerHtml", ctx_r0.placeholder, i0.ɵɵsanitizeHtml);
} }
function InputFileComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function InputFileComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, InputFileComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const file_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.classAnimation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c1, file_r9, i_r10));
} }
function InputFileComponent_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function InputFileComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputFileComponent_ng_container_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function InputFileComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵtemplate(2, InputFileComponent_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r7 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.addLink)("ngIfElse", _r7);
} }
function InputFileComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_5_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onLink(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r15.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r15.iconLink);
} }
function InputFileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14, 15);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); const _r16 = i0.ɵɵreference(6); return _r16.click(); })("itemDrop", function InputFileComponent_ng_template_5_Template_button_itemDrop_0_listener($event) { i0.ɵɵrestoreView(_r20); const _r14 = i0.ɵɵreference(1); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onSelectFile($event, _r14); })("itemDragOver", function InputFileComponent_ng_template_5_Template_button_itemDragOver_0_listener() { i0.ɵɵrestoreView(_r20); const _r14 = i0.ɵɵreference(1); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onDragOver(_r14); })("itemDragLeave", function InputFileComponent_ng_template_5_Template_button_itemDragLeave_0_listener() { i0.ɵɵrestoreView(_r20); const _r14 = i0.ɵɵreference(1); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onDragLeave(_r14); });
    i0.ɵɵelementStart(2, "mat-icon", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, InputFileComponent_ng_template_5_button_4_Template, 3, 2, "button", 17);
    i0.ɵɵelementStart(5, "input", 18, 19);
    i0.ɵɵlistener("change", function InputFileComponent_ng_template_5_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r20); const _r14 = i0.ɵɵreference(1); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onSelectFile($event.target.files, _r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r4.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.iconAdd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.linkEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r4.id)("accept", ctx_r4.fileAccept);
    i0.ɵɵattribute("multiple", ctx_r4.fileLimit > 1 ? true : null);
} }
function InputFileComponent_ng_template_7_img_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
} if (rf & 2) {
    const file_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", file_r25.preview, i0.ɵɵsanitizeUrl);
} }
function InputFileComponent_ng_template_7_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 28);
} if (rf & 2) {
    const file_r25 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHtml", file_r25.file.name, i0.ɵɵsanitizeHtml);
} }
function InputFileComponent_ng_template_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, InputFileComponent_ng_template_7_ng_container_3_div_3_Template, 1, 1, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const file_r25 = i0.ɵɵnextContext().$implicit;
    const ctx_r29 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r29.iconFile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", file_r25.file);
} }
function InputFileComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, InputFileComponent_ng_template_7_img_0_Template, 1, 1, "img", 21);
    i0.ɵɵelementStart(1, "button", 22, 23);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const _r30 = i0.ɵɵreference(8); return _r30.click(); })("itemDrop", function InputFileComponent_ng_template_7_Template_button_itemDrop_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r36); const index_r26 = restoredCtx.index; const _r28 = i0.ɵɵreference(2); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.onReplaceFile($event, index_r26, _r28); })("itemDragOver", function InputFileComponent_ng_template_7_Template_button_itemDragOver_1_listener() { i0.ɵɵrestoreView(_r36); const _r28 = i0.ɵɵreference(2); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.onDragOver(_r28); })("itemDragLeave", function InputFileComponent_ng_template_7_Template_button_itemDragLeave_1_listener() { i0.ɵɵrestoreView(_r36); const _r28 = i0.ɵɵreference(2); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onDragLeave(_r28); });
    i0.ɵɵtemplate(3, InputFileComponent_ng_template_7_ng_container_3_Template, 4, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 20);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_7_Template_button_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r36); const index_r26 = restoredCtx.index; const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onDeleteFile(index_r26); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 24, 25);
    i0.ɵɵlistener("change", function InputFileComponent_ng_template_7_Template_input_change_7_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r36); const index_r26 = restoredCtx.index; const _r28 = i0.ɵɵreference(2); const _r30 = i0.ɵɵreference(8); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.onReplaceFile($event.target.files, index_r26, _r28, _r30); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r25 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", file_r25.preview);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r6.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !file_r25.preview);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r6.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.iconDelete);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("accept", ctx_r6.fileAccept);
} }
function InputFileComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 29);
    i0.ɵɵlistener("ngSubmit", function InputFileComponent_ng_template_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onSubmitLink(); });
    i0.ɵɵelementStart(1, "mat-form-field", 30);
    i0.ɵɵelement(2, "input", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 32);
    i0.ɵɵelementStart(4, "button", 33);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r43); const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onLink(); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "arrow_back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 34);
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r8.form);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", ctx_r8.placeholderLink);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r8.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r8.disabled);
} }
class InputFileComponent {
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
InputFileComponent.ɵfac = function InputFileComponent_Factory(t) { return new (t || InputFileComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(InputFileService)); };
InputFileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputFileComponent, selectors: [["input-file"]], viewQuery: function InputFileComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
    } }, inputs: { disabled: "disabled", placeholder: "placeholder", classAnimation: "classAnimation", fileAccept: "fileAccept", fileLimit: "fileLimit", iconAdd: "iconAdd", iconDelete: "iconDelete", iconFile: "iconFile", iconLink: "iconLink", linkEnabled: "linkEnabled", placeholderLink: "placeholderLink", sizeLimit: "sizeLimit" }, outputs: { acceptedFile: "acceptedFile", deletedFile: "deletedFile", rejectedFile: "rejectedFile" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputFileComponent),
                multi: true
            }
        ])], decls: 11, vars: 3, consts: [[1, "input-file-container"], ["class", "mat-orphan-label", 3, "for", "active", "innerHtml", 4, "ngIf"], [1, "files-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["addTemplate", ""], ["fileTemplate", ""], ["linkTemplate", ""], [1, "mat-orphan-label", 3, "for", "innerHtml"], [1, "file-container", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "file-container"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["mat-button", "", "inputFileDropZone", "", "type", "button", 1, "file-button", 3, "disabled", "click", "itemDrop", "itemDragOver", "itemDragLeave"], ["selectButton", ""], [1, "input-icon"], ["mat-button", "", "class", "secondary-button", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["hidden", "", "type", "file", 3, "id", "accept", "change"], ["fileInput", ""], ["mat-button", "", "type", "button", 1, "secondary-button", 3, "disabled", "click"], ["class", "image-preview", 3, "src", 4, "ngIf"], ["mat-button", "", "inputFileDropZone", "", "type", "button", 1, "replace-button", 3, "disabled", "click", "itemDrop", "itemDragOver", "itemDragLeave"], ["replaceButton", ""], ["hidden", "", "type", "file", 3, "accept", "change"], ["fileReplace", ""], [1, "image-preview", 3, "src"], ["class", "file-name text-truncate", 3, "innerHtml", 4, "ngIf"], [1, "file-name", "text-truncate", 3, "innerHtml"], ["novalidate", "", 1, "form-link", "slide-in-up", 3, "formGroup", "ngSubmit"], [1, "input-link"], ["matInput", "", "formControlName", "link", 3, "placeholder"], [1, "form-link-button"], ["mat-button", "", "type", "button", 3, "disabled", "click"], ["mat-button", "", "type", "submit", 3, "disabled"]], template: function InputFileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, InputFileComponent_label_1_Template, 1, 4, "label", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, InputFileComponent_ng_container_3_Template, 3, 6, "ng-container", 3);
        i0.ɵɵtemplate(4, InputFileComponent_ng_container_4_Template, 3, 2, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, InputFileComponent_ng_template_5_Template, 7, 6, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(7, InputFileComponent_ng_template_7_Template, 9, 6, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, InputFileComponent_ng_template_9_Template, 10, 4, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.placeholder);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.files);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canAddFile);
    } }, directives: [i3.NgIf, i3.NgForOf, i3.NgClass, i3.NgTemplateOutlet, i4.MatButton, DropZoneDirective, i6.MatIcon, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i7.MatFormField, i8.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [".input-file-container[_ngcontent-%COMP%]{position:relative}.input-file-container[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%], .input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%]{flex:1}.input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{flex-direction:column;margin-right:1rem;overflow:hidden}.input-file-container[_ngcontent-%COMP%]   .replace-button[_ngcontent-%COMP%]{flex:1;width:10rem}.input-file-container[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:focus{outline:0}.input-file-container[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:calc(10rem - 2.5rem)}.input-file-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{position:absolute;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container[_ngcontent-%COMP%]   .form-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-link[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]{display:flex;flex-direction:row}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:calc(10rem / 2);width:calc(10rem / 2)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label.active[_ngcontent-%COMP%]{transform:scale(.75)}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounce-in[_ngcontent-%COMP%]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes slideInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes slideInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.slide-in-up[_ngcontent-%COMP%]{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-name:slideInUp;animation-name:slideInUp}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFileComponent, [{
        type: Component,
        args: [{
                selector: 'input-file',
                templateUrl: './input-file.component.html',
                styleUrls: ['./input-file.scss'],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputFileComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: InputFileService }]; }, { disabled: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], classAnimation: [{
            type: Input
        }], fileAccept: [{
            type: Input
        }], fileLimit: [{
            type: Input
        }], iconAdd: [{
            type: Input
        }], iconDelete: [{
            type: Input
        }], iconFile: [{
            type: Input
        }], iconLink: [{
            type: Input
        }], linkEnabled: [{
            type: Input
        }], placeholderLink: [{
            type: Input
        }], sizeLimit: [{
            type: Input
        }], acceptedFile: [{
            type: Output
        }], deletedFile: [{
            type: Output
        }], rejectedFile: [{
            type: Output
        }], fileInput: [{
            type: ViewChild,
            args: ['fileInput', { static: false }]
        }] }); })();

class InputFileModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { InputFileComponent, InputFileModule, InputFileService };
//# sourceMappingURL=ngx-input-file.js.map
