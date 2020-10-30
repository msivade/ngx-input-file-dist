import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, EventEmitter, ɵɵdefineDirective, ɵɵlistener, Directive, Input, Output, HostListener, ɵɵelement, ɵɵnextContext, ɵɵclassProp, ɵɵproperty, ɵɵsanitizeHtml, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵreference, ɵɵadvance, ɵɵpureFunction2, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtext, ɵɵtextInterpolate, ɵɵattribute, ɵɵsanitizeUrl, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, forwardRef, ɵɵtemplateRefExtractor, Component, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Validators, FormBuilder, NG_VALUE_ACCESSOR, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __values } from 'tslib';
import { NgIf, NgForOf, NgClass, NgTemplateOutlet, CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

var defaultSettings = {
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
    var v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
}

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
    InputFileService.ɵfac = function InputFileService_Factory(t) { return new (t || InputFileService)(ɵɵinject('config')); };
    InputFileService.ɵprov = ɵɵdefineInjectable({ token: InputFileService, factory: InputFileService.ɵfac, providedIn: 'root' });
    return InputFileService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputFileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['config']
            }] }]; }, null); })();

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
    DropZoneDirective.ɵdir = ɵɵdefineDirective({ type: DropZoneDirective, selectors: [["", "inputFileDropZone", ""]], hostBindings: function DropZoneDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DropZoneDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DropZoneDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
        } }, inputs: { disabled: "disabled" }, outputs: { itemDragOver: "itemDragOver", itemDragLeave: "itemDragLeave", itemDrop: "itemDrop" } });
    return DropZoneDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DropZoneDirective, [{
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

var _c0 = ["fileInput"];
function InputFileComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "label", 8);
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r0.files == null ? null : ctx_r0.files.length);
    ɵɵproperty("for", ctx_r0.id)("innerHtml", ctx_r0.placeholder, ɵɵsanitizeHtml);
} }
function InputFileComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function InputFileComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 9);
    ɵɵtemplate(2, InputFileComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var file_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r1 = ɵɵnextContext();
    var _r5 = ɵɵreference(8);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r1.classAnimation);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c1, file_r9, i_r10));
} }
function InputFileComponent_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function InputFileComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputFileComponent_ng_container_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    var _r3 = ɵɵreference(6);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3);
} }
function InputFileComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11);
    ɵɵtemplate(2, InputFileComponent_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵɵnextContext();
    var _r7 = ɵɵreference(10);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.addLink)("ngIfElse", _r7);
} }
function InputFileComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function InputFileComponent_ng_template_5_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r18); var ctx_r17 = ɵɵnextContext(2); return ctx_r17.onLink(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r15.disabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r15.iconLink);
} }
function InputFileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14, 15);
    ɵɵlistener("click", function InputFileComponent_ng_template_5_Template_button_click_0_listener() { ɵɵrestoreView(_r20); var _r16 = ɵɵreference(6); return _r16.click(); })("itemDrop", function InputFileComponent_ng_template_5_Template_button_itemDrop_0_listener($event) { ɵɵrestoreView(_r20); var _r14 = ɵɵreference(1); var ctx_r21 = ɵɵnextContext(); return ctx_r21.onSelectFile($event, _r14); })("itemDragOver", function InputFileComponent_ng_template_5_Template_button_itemDragOver_0_listener() { ɵɵrestoreView(_r20); var _r14 = ɵɵreference(1); var ctx_r22 = ɵɵnextContext(); return ctx_r22.onDragOver(_r14); })("itemDragLeave", function InputFileComponent_ng_template_5_Template_button_itemDragLeave_0_listener() { ɵɵrestoreView(_r20); var _r14 = ɵɵreference(1); var ctx_r23 = ɵɵnextContext(); return ctx_r23.onDragLeave(_r14); });
    ɵɵelementStart(2, "mat-icon", 16);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(4, InputFileComponent_ng_template_5_button_4_Template, 3, 2, "button", 17);
    ɵɵelementStart(5, "input", 18, 19);
    ɵɵlistener("change", function InputFileComponent_ng_template_5_Template_input_change_5_listener($event) { ɵɵrestoreView(_r20); var _r14 = ɵɵreference(1); var ctx_r24 = ɵɵnextContext(); return ctx_r24.onSelectFile($event.target.files, _r14); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r4.disabled);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r4.iconAdd);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.linkEnabled);
    ɵɵadvance(1);
    ɵɵproperty("id", ctx_r4.id)("accept", ctx_r4.fileAccept);
    ɵɵattribute("multiple", ctx_r4.fileLimit > 1 ? true : null);
} }
function InputFileComponent_ng_template_7_img_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 26);
} if (rf & 2) {
    var file_r25 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", file_r25.preview, ɵɵsanitizeUrl);
} }
function InputFileComponent_ng_template_7_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 28);
} if (rf & 2) {
    var file_r25 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHtml", file_r25.file.name, ɵɵsanitizeHtml);
} }
function InputFileComponent_ng_template_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-icon", 16);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, InputFileComponent_ng_template_7_ng_container_3_div_3_Template, 1, 1, "div", 27);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var file_r25 = ɵɵnextContext().$implicit;
    var ctx_r29 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r29.iconFile);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", file_r25.file);
} }
function InputFileComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    var _r36 = ɵɵgetCurrentView();
    ɵɵtemplate(0, InputFileComponent_ng_template_7_img_0_Template, 1, 1, "img", 21);
    ɵɵelementStart(1, "button", 22, 23);
    ɵɵlistener("click", function InputFileComponent_ng_template_7_Template_button_click_1_listener() { ɵɵrestoreView(_r36); var _r30 = ɵɵreference(8); return _r30.click(); })("itemDrop", function InputFileComponent_ng_template_7_Template_button_itemDrop_1_listener($event) { ɵɵrestoreView(_r36); var index_r26 = ctx.index; var _r28 = ɵɵreference(2); var ctx_r37 = ɵɵnextContext(); return ctx_r37.onReplaceFile($event, index_r26, _r28); })("itemDragOver", function InputFileComponent_ng_template_7_Template_button_itemDragOver_1_listener() { ɵɵrestoreView(_r36); var _r28 = ɵɵreference(2); var ctx_r38 = ɵɵnextContext(); return ctx_r38.onDragOver(_r28); })("itemDragLeave", function InputFileComponent_ng_template_7_Template_button_itemDragLeave_1_listener() { ɵɵrestoreView(_r36); var _r28 = ɵɵreference(2); var ctx_r39 = ɵɵnextContext(); return ctx_r39.onDragLeave(_r28); });
    ɵɵtemplate(3, InputFileComponent_ng_template_7_ng_container_3_Template, 4, 2, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 20);
    ɵɵlistener("click", function InputFileComponent_ng_template_7_Template_button_click_4_listener() { ɵɵrestoreView(_r36); var index_r26 = ctx.index; var ctx_r40 = ɵɵnextContext(); return ctx_r40.onDeleteFile(index_r26); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "input", 24, 25);
    ɵɵlistener("change", function InputFileComponent_ng_template_7_Template_input_change_7_listener($event) { ɵɵrestoreView(_r36); var index_r26 = ctx.index; var _r28 = ɵɵreference(2); var _r30 = ɵɵreference(8); var ctx_r41 = ɵɵnextContext(); return ctx_r41.onReplaceFile($event.target.files, index_r26, _r28, _r30); });
    ɵɵelementEnd();
} if (rf & 2) {
    var file_r25 = ctx.$implicit;
    var ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngIf", file_r25.preview);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r6.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !file_r25.preview);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r6.disabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r6.iconDelete);
    ɵɵadvance(1);
    ɵɵproperty("accept", ctx_r6.fileAccept);
} }
function InputFileComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    var _r43 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 29);
    ɵɵlistener("ngSubmit", function InputFileComponent_ng_template_9_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r43); var ctx_r42 = ɵɵnextContext(); return ctx_r42.onSubmitLink(); });
    ɵɵelementStart(1, "mat-form-field", 30);
    ɵɵelement(2, "input", 31);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 32);
    ɵɵelementStart(4, "button", 33);
    ɵɵlistener("click", function InputFileComponent_ng_template_9_Template_button_click_4_listener() { ɵɵrestoreView(_r43); var ctx_r44 = ɵɵnextContext(); return ctx_r44.onLink(); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "arrow_back");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 34);
    ɵɵelementStart(8, "mat-icon");
    ɵɵtext(9, "check");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r8.form);
    ɵɵadvance(2);
    ɵɵproperty("placeholder", ctx_r8.placeholderLink);
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r8.disabled);
    ɵɵadvance(3);
    ɵɵproperty("disabled", ctx_r8.disabled);
} }
var InputFileComponent = /** @class */ (function () {
    function InputFileComponent(formBuilder, inputFileService) {
        this.formBuilder = formBuilder;
        this.inputFileService = inputFileService;
        this.acceptedFile = new EventEmitter();
        this.deletedFile = new EventEmitter();
        this.rejectedFile = new EventEmitter();
        this.files = new Array();
        this.id = "ngx-input-file-" + InputFileComponent.nextId++;
        this.onChange = function (files) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(InputFileComponent.prototype, "classAnimation", {
        get: function () {
            return this._classAnimation || this.inputFileService.config.classAnimation || defaultSettings.classAnimation;
        },
        set: function (classAnimation) {
            this._classAnimation = classAnimation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "fileAccept", {
        get: function () {
            return this._fileAccept || this.inputFileService.config.fileAccept || defaultSettings.fileAccept;
        },
        set: function (fileAccept) {
            this._fileAccept = fileAccept;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "fileLimit", {
        get: function () {
            return this._fileLimit || this.inputFileService.config.fileLimit || defaultSettings.fileLimit;
        },
        set: function (fileLimit) {
            this._fileLimit = fileLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "iconAdd", {
        get: function () {
            return this._iconAdd || this.inputFileService.config.iconAdd || defaultSettings.iconAdd;
        },
        set: function (iconAdd) {
            this._iconAdd = iconAdd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "iconDelete", {
        get: function () {
            return this._iconDelete || this.inputFileService.config.iconDelete || defaultSettings.iconDelete;
        },
        set: function (iconDelete) {
            this._iconDelete = iconDelete;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "iconFile", {
        get: function () {
            return this._iconFile || this.inputFileService.config.iconFile || defaultSettings.iconFile;
        },
        set: function (iconFile) {
            this._iconFile = iconFile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "iconLink", {
        get: function () {
            return this._iconLink || this.inputFileService.config.iconLink || defaultSettings.iconLink;
        },
        set: function (iconLink) {
            this._iconLink = iconLink;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "linkEnabled", {
        get: function () {
            return this._linkEnabled || this.inputFileService.config.linkEnabled || defaultSettings.linkEnabled;
        },
        set: function (linkEnabled) {
            this._linkEnabled = linkEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "placeholderLink", {
        get: function () {
            return this._placeholderLink || this.inputFileService.config.placeholderLink || defaultSettings.placeholderLink;
        },
        set: function (placeholderLink) {
            this._placeholderLink = placeholderLink;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "sizeLimit", {
        get: function () {
            return this._sizeLimit || this.inputFileService.config.sizeLimit || defaultSettings.sizeLimit;
        },
        set: function (sizeLimit) {
            this._sizeLimit = sizeLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "canAddFile", {
        get: function () {
            return this.files && this.files.length < this.fileLimit;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Angular lifecyle OnInit implementation.
     */
    InputFileComponent.prototype.ngOnInit = function () {
        this.setForm();
    };
    /**
     * On delete a file event handler.
     * @param index
     */
    InputFileComponent.prototype.onDeleteFile = function (index) {
        if (!this.disabled) {
            var files = this.files.slice();
            this.deletedFile.emit(files[index]);
            files.splice(index, 1);
            this.writeValue(files);
        }
    };
    /**
     * On drag over event handler.
     * Adds a ripple effect on the button.
     */
    InputFileComponent.prototype.onDragOver = function (button) {
        button.ripple.launch({ centered: true, persistent: true });
    };
    /**
     * On drag leave event handler.
     * Fades the ripple effect of the button.
     */
    InputFileComponent.prototype.onDragLeave = function (button) {
        button.ripple.fadeOutAll();
    };
    /**
     * On adds a link.
     */
    InputFileComponent.prototype.onLink = function () {
        this.addLink = !this.addLink;
    };
    /**
     * On replace one file event handler.
     * Writes the value.
     * @param fileList
     * @param index
     * @param fileInput
     */
    InputFileComponent.prototype.onReplaceFile = function (fileList, index, button, fileInput) {
        if (!this.disabled) {
            // Copies the array without reference.
            var files = this.files.slice();
            // Assumes that a single file can be replaced by a single file.
            var inputFile = { file: fileList.item(0) };
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
    };
    /**
     * On select one or more files event handler.
     * Writes the value.
     * @param fileList
     */
    InputFileComponent.prototype.onSelectFile = function (fileList, button) {
        var _this = this;
        if (!this.disabled) {
            button.ripple.fadeOutAll();
            // Copies the array without reference.
            var files_1 = this.files.slice();
            Array.from(fileList).forEach(function (file) {
                var inputFile = { file: file };
                if (_this.fileGuard(files_1, inputFile)) {
                    files_1.push(inputFile);
                    _this.acceptedFile.emit(inputFile);
                }
            });
            this.writeValue(files_1);
            this.fileInput.nativeElement.value = '';
        }
    };
    /**
     * On submit the link form event handler.
     */
    InputFileComponent.prototype.onSubmitLink = function () {
        if (!this.disabled && this.form.valid) {
            var files = this.files.slice();
            var inputFile = { link: this.form.value.link, preview: this.form.value.link };
            files.push(inputFile);
            this.acceptedFile.emit(inputFile);
            this.onLink();
            this.form.reset();
            this.writeValue(files);
        }
    };
    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    InputFileComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    InputFileComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Implementation of ControlValueAccessor.
     * @param isDisabled
     */
    InputFileComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * Implementation of ControlValueAccessor.
     * @param files
     */
    InputFileComponent.prototype.writeValue = function (files) {
        if (!files) {
            files = new Array();
        }
        this.files = files;
        this.setFilePreview();
        this.onChange(this.files);
    };
    /**
     * Whether the file can be added to the model.
     * @param files
     * @param file,
     * @param bypassLimit
     */
    InputFileComponent.prototype.fileGuard = function (files, file, bypassLimit) {
        if (!bypassLimit && !this.inputFileService.limitGuard(files, this.fileLimit)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.limitReached, file: file });
            return false;
        }
        if (!this.inputFileService.sizeGuard(file.file, this.sizeLimit)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.sizeReached, file: file });
            return false;
        }
        if (!this.inputFileService.typeGuard(file.file, this.fileAccept)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.badFile, file: file });
            return false;
        }
        return true;
    };
    /**
     * Sets the file preview with FileReader.
     */
    InputFileComponent.prototype.setFilePreview = function () {
        var _this = this;
        var _loop_1 = function (index) {
            if (this_1.files[index].file != null && this_1.inputFileService.typeGuard(this_1.files[index].file, 'image/*')) {
                var fr_1 = new FileReader();
                fr_1.onload = function () {
                    _this.files[index].preview = fr_1.result;
                };
                fr_1.readAsDataURL(this_1.files[index].file);
            }
        };
        var this_1 = this;
        for (var index in this.files) {
            _loop_1(index);
        }
    };
    /**
     * Sets the reactive form to insert a link.
     */
    InputFileComponent.prototype.setForm = function () {
        this.form = this.formBuilder.group({
            link: ['', [Validators.required, urlValidator]]
        });
    };
    InputFileComponent.nextId = 0;
    InputFileComponent.ɵfac = function InputFileComponent_Factory(t) { return new (t || InputFileComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(InputFileService)); };
    InputFileComponent.ɵcmp = ɵɵdefineComponent({ type: InputFileComponent, selectors: [["input-file"]], viewQuery: function InputFileComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileInput = _t.first);
        } }, inputs: { disabled: "disabled", placeholder: "placeholder", classAnimation: "classAnimation", fileAccept: "fileAccept", fileLimit: "fileLimit", iconAdd: "iconAdd", iconDelete: "iconDelete", iconFile: "iconFile", iconLink: "iconLink", linkEnabled: "linkEnabled", placeholderLink: "placeholderLink", sizeLimit: "sizeLimit" }, outputs: { acceptedFile: "acceptedFile", deletedFile: "deletedFile", rejectedFile: "rejectedFile" }, features: [ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return InputFileComponent; }),
                    multi: true
                }
            ])], decls: 11, vars: 3, consts: [[1, "input-file-container"], ["class", "mat-orphan-label", 3, "for", "active", "innerHtml", 4, "ngIf"], [1, "files-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["addTemplate", ""], ["fileTemplate", ""], ["linkTemplate", ""], [1, "mat-orphan-label", 3, "for", "innerHtml"], [1, "file-container", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "file-container"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["mat-button", "", "inputFileDropZone", "", "type", "button", 1, "file-button", 3, "disabled", "click", "itemDrop", "itemDragOver", "itemDragLeave"], ["selectButton", ""], [1, "input-icon"], ["mat-button", "", "class", "secondary-button", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["hidden", "", "type", "file", 3, "id", "accept", "change"], ["fileInput", ""], ["mat-button", "", "type", "button", 1, "secondary-button", 3, "disabled", "click"], ["class", "image-preview", 3, "src", 4, "ngIf"], ["mat-button", "", "inputFileDropZone", "", "type", "button", 1, "replace-button", 3, "disabled", "click", "itemDrop", "itemDragOver", "itemDragLeave"], ["replaceButton", ""], ["hidden", "", "type", "file", 3, "accept", "change"], ["fileReplace", ""], [1, "image-preview", 3, "src"], ["class", "file-name text-truncate", 3, "innerHtml", 4, "ngIf"], [1, "file-name", "text-truncate", 3, "innerHtml"], ["novalidate", "", 1, "form-link", "slide-in-up", 3, "formGroup", "ngSubmit"], [1, "input-link"], ["matInput", "", "formControlName", "link", 3, "placeholder"], [1, "form-link-button"], ["mat-button", "", "type", "button", 3, "disabled", "click"], ["mat-button", "", "type", "submit", 3, "disabled"]], template: function InputFileComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, InputFileComponent_label_1_Template, 1, 4, "label", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtemplate(3, InputFileComponent_ng_container_3_Template, 3, 6, "ng-container", 3);
            ɵɵtemplate(4, InputFileComponent_ng_container_4_Template, 3, 2, "ng-container", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(5, InputFileComponent_ng_template_5_Template, 7, 6, "ng-template", null, 5, ɵɵtemplateRefExtractor);
            ɵɵtemplate(7, InputFileComponent_ng_template_7_Template, 9, 6, "ng-template", null, 6, ɵɵtemplateRefExtractor);
            ɵɵtemplate(9, InputFileComponent_ng_template_9_Template, 10, 4, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.placeholder);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ctx.files);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.canAddFile);
        } }, directives: [NgIf, NgForOf, NgClass, NgTemplateOutlet, MatButton, DropZoneDirective, MatIcon, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName], styles: [".input-file-container[_ngcontent-%COMP%]{position:relative}.input-file-container[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%], .input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%]{flex:1}.input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{flex-direction:column;margin-right:1rem;overflow:hidden}.input-file-container[_ngcontent-%COMP%]   .replace-button[_ngcontent-%COMP%]{flex:1;width:10rem}.input-file-container[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:focus{outline:0}.input-file-container[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:calc(10rem - 2.5rem)}.input-file-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{position:absolute;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container[_ngcontent-%COMP%]   .form-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-link[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]{display:flex;flex-direction:row}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:calc(10rem / 2);width:calc(10rem / 2)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label.active[_ngcontent-%COMP%]{transform:scale(.75)}@-webkit-keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}.bounce-in[_ngcontent-%COMP%]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes slideInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}@keyframes slideInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}.slide-in-up[_ngcontent-%COMP%]{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-name:slideInUp;animation-name:slideInUp}"] });
    return InputFileComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputFileComponent, [{
        type: Component,
        args: [{
                selector: 'input-file',
                templateUrl: './input-file.component.html',
                styleUrls: ['./input-file.scss'],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return InputFileComponent; }),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: FormBuilder }, { type: InputFileService }]; }, { disabled: [{
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
    InputFileModule.ɵmod = ɵɵdefineNgModule({ type: InputFileModule });
    InputFileModule.ɵinj = ɵɵdefineInjector({ factory: function InputFileModule_Factory(t) { return new (t || InputFileModule)(); }, providers: [
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(InputFileModule, { declarations: [DropZoneDirective,
        InputFileComponent], imports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule], exports: [InputFileComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputFileModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { InputFileComponent, InputFileModule, InputFileService };
//# sourceMappingURL=ngx-input-file.js.map
