import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { defaultSettings } from '../../settings/default.settings';
import { InputFileRejectedReason } from '../../enums/input-file-rejected-reason';
import { urlValidator } from '../../validators/url.validator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/input-file.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "../../directives/drop-zone/drop-zone.directive";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/input";
var _c0 = ["fileInput"];
function InputFileComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 8);
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.files == null ? null : ctx_r0.files.length);
    i0.ɵɵproperty("for", ctx_r0.id)("innerHtml", ctx_r0.placeholder, i0.ɵɵsanitizeHtml);
} }
function InputFileComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function InputFileComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, InputFileComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var file_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r1 = i0.ɵɵnextContext();
    var _r5 = i0.ɵɵreference(8);
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
    var _r3 = i0.ɵɵreference(6);
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
    var ctx_r2 = i0.ɵɵnextContext();
    var _r7 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.addLink)("ngIfElse", _r7);
} }
function InputFileComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_5_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onLink(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r15.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r15.iconLink);
} }
function InputFileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14, 15);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); var _r16 = i0.ɵɵreference(6); return _r16.click(); })("itemDrop", function InputFileComponent_ng_template_5_Template_button_itemDrop_0_listener($event) { i0.ɵɵrestoreView(_r20); var _r14 = i0.ɵɵreference(1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onSelectFile($event, _r14); })("itemDragOver", function InputFileComponent_ng_template_5_Template_button_itemDragOver_0_listener() { i0.ɵɵrestoreView(_r20); var _r14 = i0.ɵɵreference(1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onDragOver(_r14); })("itemDragLeave", function InputFileComponent_ng_template_5_Template_button_itemDragLeave_0_listener() { i0.ɵɵrestoreView(_r20); var _r14 = i0.ɵɵreference(1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onDragLeave(_r14); });
    i0.ɵɵelementStart(2, "mat-icon", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, InputFileComponent_ng_template_5_button_4_Template, 3, 2, "button", 17);
    i0.ɵɵelementStart(5, "input", 18, 19);
    i0.ɵɵlistener("change", function InputFileComponent_ng_template_5_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r20); var _r14 = i0.ɵɵreference(1); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onSelectFile($event.target.files, _r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
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
    var file_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", file_r25.preview, i0.ɵɵsanitizeUrl);
} }
function InputFileComponent_ng_template_7_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 28);
} if (rf & 2) {
    var file_r25 = i0.ɵɵnextContext(2).$implicit;
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
    var file_r25 = i0.ɵɵnextContext().$implicit;
    var ctx_r29 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r29.iconFile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", file_r25.file);
} }
function InputFileComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    var _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, InputFileComponent_ng_template_7_img_0_Template, 1, 1, "img", 21);
    i0.ɵɵelementStart(1, "button", 22, 23);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); var _r30 = i0.ɵɵreference(8); return _r30.click(); })("itemDrop", function InputFileComponent_ng_template_7_Template_button_itemDrop_1_listener($event) { i0.ɵɵrestoreView(_r36); var index_r26 = ctx.index; var _r28 = i0.ɵɵreference(2); var ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.onReplaceFile($event, index_r26, _r28); })("itemDragOver", function InputFileComponent_ng_template_7_Template_button_itemDragOver_1_listener() { i0.ɵɵrestoreView(_r36); var _r28 = i0.ɵɵreference(2); var ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.onDragOver(_r28); })("itemDragLeave", function InputFileComponent_ng_template_7_Template_button_itemDragLeave_1_listener() { i0.ɵɵrestoreView(_r36); var _r28 = i0.ɵɵreference(2); var ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onDragLeave(_r28); });
    i0.ɵɵtemplate(3, InputFileComponent_ng_template_7_ng_container_3_Template, 4, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 20);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_7_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r36); var index_r26 = ctx.index; var ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onDeleteFile(index_r26); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 24, 25);
    i0.ɵɵlistener("change", function InputFileComponent_ng_template_7_Template_input_change_7_listener($event) { i0.ɵɵrestoreView(_r36); var index_r26 = ctx.index; var _r28 = i0.ɵɵreference(2); var _r30 = i0.ɵɵreference(8); var ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.onReplaceFile($event.target.files, index_r26, _r28, _r30); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r25 = ctx.$implicit;
    var ctx_r6 = i0.ɵɵnextContext();
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
    var _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 29);
    i0.ɵɵlistener("ngSubmit", function InputFileComponent_ng_template_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r43); var ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onSubmitLink(); });
    i0.ɵɵelementStart(1, "mat-form-field", 30);
    i0.ɵɵelement(2, "input", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 32);
    i0.ɵɵelementStart(4, "button", 33);
    i0.ɵɵlistener("click", function InputFileComponent_ng_template_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r43); var ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onLink(); });
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
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r8.form);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", ctx_r8.placeholderLink);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r8.disabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r8.disabled);
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
    InputFileComponent.ɵfac = function InputFileComponent_Factory(t) { return new (t || InputFileComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.InputFileService)); };
    InputFileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InputFileComponent, selectors: [["input-file"]], viewQuery: function InputFileComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
        } }, inputs: { disabled: "disabled", placeholder: "placeholder", classAnimation: "classAnimation", fileAccept: "fileAccept", fileLimit: "fileLimit", iconAdd: "iconAdd", iconDelete: "iconDelete", iconFile: "iconFile", iconLink: "iconLink", linkEnabled: "linkEnabled", placeholderLink: "placeholderLink", sizeLimit: "sizeLimit" }, outputs: { acceptedFile: "acceptedFile", deletedFile: "deletedFile", rejectedFile: "rejectedFile" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return InputFileComponent; }),
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
        } }, directives: [i3.NgIf, i3.NgForOf, i3.NgClass, i3.NgTemplateOutlet, i4.MatButton, i5.DropZoneDirective, i6.MatIcon, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i7.MatFormField, i8.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [".input-file-container[_ngcontent-%COMP%]{position:relative}.input-file-container[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%], .input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%]{flex:1}.input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{flex-direction:column;margin-right:1rem;overflow:hidden}.input-file-container[_ngcontent-%COMP%]   .replace-button[_ngcontent-%COMP%]{flex:1;width:10rem}.input-file-container[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:focus{outline:0}.input-file-container[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:calc(10rem - 2.5rem)}.input-file-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{position:absolute;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container[_ngcontent-%COMP%]   .form-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-link[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]{display:flex;flex-direction:row}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:calc(10rem / 2);width:calc(10rem / 2)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label.active[_ngcontent-%COMP%]{transform:scale(.75)}@-webkit-keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}.bounce-in[_ngcontent-%COMP%]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes slideInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}@keyframes slideInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}.slide-in-up[_ngcontent-%COMP%]{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-name:slideInUp;animation-name:slideInUp}"] });
    return InputFileComponent;
}());
export { InputFileComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFileComponent, [{
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
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.InputFileService }]; }, { disabled: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW5wdXQtZmlsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWZpbGUvaW5wdXQtZmlsZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9pbnB1dC1maWxlL2lucHV0LWZpbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBQzNCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSWxFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7O0lDakIxRCwyQkFBZ0k7OztJQUFyRiwyRUFBOEI7SUFBekMsK0JBQVUsb0RBQUE7OztJQUs5Qix3QkFBc0c7Ozs7SUFGOUcsNkJBQ0k7SUFBQSw4QkFDSTtJQUFBLHFHQUF1RjtJQUMzRixpQkFBTTtJQUNWLDBCQUFlOzs7Ozs7SUFIaUIsZUFBMEI7SUFBMUIsK0NBQTBCO0lBQ3BDLGVBQXdFO0lBQXhFLHNDQUF3RSx1RUFBQTs7O0lBT2xGLHdCQUE2RDs7O0lBRGpFLDZCQUNJO0lBQUEsb0hBQThDO0lBQ2xELDBCQUFlOzs7O0lBREcsZUFBK0I7SUFBL0Isc0NBQStCOzs7SUFIekQsNkJBQ0k7SUFBQSwrQkFDSTtJQUFBLHFHQUNJO0lBRVIsaUJBQU07SUFDViwwQkFBZTs7OztJQUpPLGVBQW1DO0lBQW5DLHNDQUFtQyxpQkFBQTs7OztJQWM3RCxrQ0FDSTtJQUQ0RSxxTUFBa0I7SUFDOUYs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RUFBbEIsQ0FBa0IsQ0FBQztvQkFDakQsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7YUFDSjtZQzlCTCw4QkFDSTtZQUFBLHVFQUF3SDtZQUN4SCw4QkFFSTtZQUFBLHFGQUNJO1lBS0oscUZBQ0k7WUFNUixpQkFBTTtZQUVWLGlCQUFNO1lBRU4sb0hBQ0k7WUFVSixvSEFDSTtZQWNKLHFIQUNJOztZQS9Db0csZUFBbUI7WUFBbkIsc0NBQW1CO1lBR3JHLGVBQXlDO1lBQXpDLG1DQUF5QztZQU16QyxlQUFrQjtZQUFsQixxQ0FBa0I7OzZCRFZ4QztDQW1WQyxBQS9URCxJQStUQztTQW5UWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQVo5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNoQyxTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7d0JBQ2pELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7O2tCQWNJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGRcbiAgICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVmYXVsdFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vc2V0dGluZ3MvZGVmYXVsdC5zZXR0aW5ncyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRGaWxlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbnB1dC1maWxlJztcbmltcG9ydCB7IElucHV0RmlsZVJlamVjdGVkIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbnB1dC1maWxlLXJlamVjdGVkJztcbmltcG9ydCB7IElucHV0RmlsZVJlamVjdGVkUmVhc29uIH0gZnJvbSAnLi4vLi4vZW51bXMvaW5wdXQtZmlsZS1yZWplY3RlZC1yZWFzb24nO1xuaW1wb3J0IHsgSW5wdXRGaWxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2lucHV0LWZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRCdXR0b24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgdXJsVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycy91cmwudmFsaWRhdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpbnB1dC1maWxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtZmlsZS5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRGaWxlQ29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAgIHN0YXRpYyBuZXh0SWQgPSAwO1xuICAgIHByaXZhdGUgX2NsYXNzQW5pbWF0aW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmlsZUFjY2VwdDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ZpbGVMaW1pdDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2ljb25BZGQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9pY29uRGVsZXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaWNvbkZpbGU6IHN0cmluZztcbiAgICBwcml2YXRlIF9pY29uTGluazogc3RyaW5nO1xuICAgIHByaXZhdGUgX2xpbmtFbmFibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyTGluazogc3RyaW5nO1xuICAgIHByaXZhdGUgX3NpemVMaW1pdDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNldCBjbGFzc0FuaW1hdGlvbihjbGFzc0FuaW1hdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsYXNzQW5pbWF0aW9uID0gY2xhc3NBbmltYXRpb247XG4gICAgfVxuXG4gICAgZ2V0IGNsYXNzQW5pbWF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xhc3NBbmltYXRpb24gfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5jbGFzc0FuaW1hdGlvbiB8fCBkZWZhdWx0U2V0dGluZ3MuY2xhc3NBbmltYXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGZpbGVBY2NlcHQoZmlsZUFjY2VwdDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ZpbGVBY2NlcHQgPSBmaWxlQWNjZXB0O1xuICAgIH1cblxuICAgIGdldCBmaWxlQWNjZXB0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZUFjY2VwdCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmZpbGVBY2NlcHQgfHwgZGVmYXVsdFNldHRpbmdzLmZpbGVBY2NlcHQ7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGZpbGVMaW1pdChmaWxlTGltaXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9maWxlTGltaXQgPSBmaWxlTGltaXQ7XG4gICAgfVxuXG4gICAgZ2V0IGZpbGVMaW1pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGVMaW1pdCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmZpbGVMaW1pdCB8fCBkZWZhdWx0U2V0dGluZ3MuZmlsZUxpbWl0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBpY29uQWRkKGljb25BZGQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pY29uQWRkID0gaWNvbkFkZDtcbiAgICB9XG5cbiAgICBnZXQgaWNvbkFkZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb25BZGQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5pY29uQWRkIHx8IGRlZmF1bHRTZXR0aW5ncy5pY29uQWRkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBpY29uRGVsZXRlKGljb25EZWxldGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pY29uRGVsZXRlID0gaWNvbkRlbGV0ZTtcbiAgICB9XG5cbiAgICBnZXQgaWNvbkRlbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb25EZWxldGUgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5pY29uRGVsZXRlIHx8IGRlZmF1bHRTZXR0aW5ncy5pY29uRGVsZXRlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBpY29uRmlsZShpY29uRmlsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ljb25GaWxlID0gaWNvbkZpbGU7XG4gICAgfVxuXG4gICAgZ2V0IGljb25GaWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbkZpbGUgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5pY29uRmlsZSB8fCBkZWZhdWx0U2V0dGluZ3MuaWNvbkZpbGU7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGljb25MaW5rKGljb25MaW5rOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWNvbkxpbmsgPSBpY29uTGluaztcbiAgICB9XG5cbiAgICBnZXQgaWNvbkxpbmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uTGluayB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmljb25MaW5rIHx8IGRlZmF1bHRTZXR0aW5ncy5pY29uTGluaztcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgbGlua0VuYWJsZWQobGlua0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbGlua0VuYWJsZWQgPSBsaW5rRW5hYmxlZDtcbiAgICB9XG5cbiAgICBnZXQgbGlua0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5rRW5hYmxlZCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmxpbmtFbmFibGVkIHx8IGRlZmF1bHRTZXR0aW5ncy5saW5rRW5hYmxlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgcGxhY2Vob2xkZXJMaW5rKHBsYWNlaG9sZGVyTGluazogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyTGluayA9IHBsYWNlaG9sZGVyTGluaztcbiAgICB9XG5cbiAgICBnZXQgcGxhY2Vob2xkZXJMaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXJMaW5rIHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcucGxhY2Vob2xkZXJMaW5rIHx8IGRlZmF1bHRTZXR0aW5ncy5wbGFjZWhvbGRlckxpbms7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IHNpemVMaW1pdChzaXplTGltaXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zaXplTGltaXQgPSBzaXplTGltaXQ7XG4gICAgfVxuXG4gICAgZ2V0IHNpemVMaW1pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemVMaW1pdCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLnNpemVMaW1pdCB8fCBkZWZhdWx0U2V0dGluZ3Muc2l6ZUxpbWl0O1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSBhY2NlcHRlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZT4oKTtcbiAgICBAT3V0cHV0KCkgZGVsZXRlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZT4oKTtcbiAgICBAT3V0cHV0KCkgcmVqZWN0ZWRGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxJbnB1dEZpbGVSZWplY3RlZD4oKTtcbiAgICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGFkZExpbms6IGJvb2xlYW47XG4gICAgcHVibGljIGZpbGVzID0gbmV3IEFycmF5PElucHV0RmlsZT4oKTtcbiAgICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBpZCA9IGBuZ3gtaW5wdXQtZmlsZS0ke0lucHV0RmlsZUNvbXBvbmVudC5uZXh0SWQrK31gO1xuICAgIHB1YmxpYyBvbkNoYW5nZSA9IChmaWxlczogQXJyYXk8SW5wdXRGaWxlPikgPT4geyB9O1xuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgICBnZXQgY2FuQWRkRmlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPCB0aGlzLmZpbGVMaW1pdDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgaW5wdXRGaWxlU2VydmljZTogSW5wdXRGaWxlU2VydmljZVxuICAgICkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBBbmd1bGFyIGxpZmVjeWxlIE9uSW5pdCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0Rm9ybSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGRlbGV0ZSBhIGZpbGUgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgb25EZWxldGVGaWxlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlZEZpbGUuZW1pdChmaWxlc1tpbmRleF0pO1xuICAgICAgICAgICAgZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVWYWx1ZShmaWxlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBkcmFnIG92ZXIgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBBZGRzIGEgcmlwcGxlIGVmZmVjdCBvbiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XG4gICAgICAgIGJ1dHRvbi5yaXBwbGUubGF1bmNoKHsgY2VudGVyZWQ6IHRydWUsIHBlcnNpc3RlbnQ6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gZHJhZyBsZWF2ZSBldmVudCBoYW5kbGVyLlxuICAgICAqIEZhZGVzIHRoZSByaXBwbGUgZWZmZWN0IG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgcHVibGljIG9uRHJhZ0xlYXZlKGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XG4gICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGFkZHMgYSBsaW5rLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkxpbmsoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkTGluayA9ICF0aGlzLmFkZExpbms7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gcmVwbGFjZSBvbmUgZmlsZSBldmVudCBoYW5kbGVyLlxuICAgICAqIFdyaXRlcyB0aGUgdmFsdWUuXG4gICAgICogQHBhcmFtIGZpbGVMaXN0XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHBhcmFtIGZpbGVJbnB1dFxuICAgICAqL1xuICAgIHB1YmxpYyBvblJlcGxhY2VGaWxlKGZpbGVMaXN0OiBGaWxlTGlzdCwgaW5kZXg6IG51bWJlciwgYnV0dG9uOiBNYXRCdXR0b24sIGZpbGVJbnB1dD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBDb3BpZXMgdGhlIGFycmF5IHdpdGhvdXQgcmVmZXJlbmNlLlxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBBc3N1bWVzIHRoYXQgYSBzaW5nbGUgZmlsZSBjYW4gYmUgcmVwbGFjZWQgYnkgYSBzaW5nbGUgZmlsZS5cbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmlsZTogSW5wdXRGaWxlID0geyBmaWxlIDogZmlsZUxpc3QuaXRlbSgwKSB9O1xuICAgICAgICAgICAgYnV0dG9uLnJpcHBsZS5mYWRlT3V0QWxsKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlR3VhcmQoZmlsZXMsIGlucHV0RmlsZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBmaWxlc1tpbmRleF0gPSBpbnB1dEZpbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlcHRlZEZpbGUuZW1pdChpbnB1dEZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcbiAgICAgICAgICAgIGlmIChmaWxlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBmaWxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIHNlbGVjdCBvbmUgb3IgbW9yZSBmaWxlcyBldmVudCBoYW5kbGVyLlxuICAgICAqIFdyaXRlcyB0aGUgdmFsdWUuXG4gICAgICogQHBhcmFtIGZpbGVMaXN0XG4gICAgICovXG4gICAgcHVibGljIG9uU2VsZWN0RmlsZShmaWxlTGlzdDogRmlsZUxpc3QsIGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgYnV0dG9uLnJpcHBsZS5mYWRlT3V0QWxsKCk7XG4gICAgICAgICAgICAvLyBDb3BpZXMgdGhlIGFycmF5IHdpdGhvdXQgcmVmZXJlbmNlLlxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLnNsaWNlKCk7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGZpbGVMaXN0KS5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RmlsZTogSW5wdXRGaWxlID0geyBmaWxlIH07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUd1YXJkKGZpbGVzLCBpbnB1dEZpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goaW5wdXRGaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlcHRlZEZpbGUuZW1pdChpbnB1dEZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcbiAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIHN1Ym1pdCB0aGUgbGluayBmb3JtIGV2ZW50IGhhbmRsZXIuXG4gICAgICovXG4gICAgcHVibGljIG9uU3VibWl0TGluaygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLnNsaWNlKCk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpbGU6IElucHV0RmlsZSA9IHsgbGluazogdGhpcy5mb3JtLnZhbHVlLmxpbmssIHByZXZpZXc6IHRoaXMuZm9ybS52YWx1ZS5saW5rIH07XG4gICAgICAgICAgICBmaWxlcy5wdXNoKGlucHV0RmlsZSk7XG4gICAgICAgICAgICB0aGlzLmFjY2VwdGVkRmlsZS5lbWl0KGlucHV0RmlsZSk7XG4gICAgICAgICAgICB0aGlzLm9uTGluaygpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICogQHBhcmFtIGZuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChmaWxlczogQXJyYXk8SW5wdXRGaWxlPikgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICogQHBhcmFtIGZuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICogQHBhcmFtIGlzRGlzYWJsZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAqIEBwYXJhbSBmaWxlc1xuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+KTogdm9pZCB7XG4gICAgICAgIGlmICghZmlsZXMpIHtcbiAgICAgICAgICAgIGZpbGVzID0gbmV3IEFycmF5PElucHV0RmlsZT4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgICAgIHRoaXMuc2V0RmlsZVByZXZpZXcoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmZpbGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBmaWxlIGNhbiBiZSBhZGRlZCB0byB0aGUgbW9kZWwuXG4gICAgICogQHBhcmFtIGZpbGVzXG4gICAgICogQHBhcmFtIGZpbGUsXG4gICAgICogQHBhcmFtIGJ5cGFzc0xpbWl0XG4gICAgICovXG4gICAgcHJpdmF0ZSBmaWxlR3VhcmQoZmlsZXM6IEFycmF5PElucHV0RmlsZT4sIGZpbGU6IElucHV0RmlsZSwgYnlwYXNzTGltaXQ/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghYnlwYXNzTGltaXQgJiYgIXRoaXMuaW5wdXRGaWxlU2VydmljZS5saW1pdEd1YXJkKGZpbGVzLCB0aGlzLmZpbGVMaW1pdCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ZWRGaWxlLmVtaXQoeyByZWFzb246IElucHV0RmlsZVJlamVjdGVkUmVhc29uLmxpbWl0UmVhY2hlZCwgZmlsZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnNpemVHdWFyZChmaWxlLmZpbGUsIHRoaXMuc2l6ZUxpbWl0KSkge1xuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24uc2l6ZVJlYWNoZWQsIGZpbGUgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaW5wdXRGaWxlU2VydmljZS50eXBlR3VhcmQoZmlsZS5maWxlLCB0aGlzLmZpbGVBY2NlcHQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5iYWRGaWxlLCBmaWxlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZmlsZSBwcmV2aWV3IHdpdGggRmlsZVJlYWRlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEZpbGVQcmV2aWV3KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzW2luZGV4XS5maWxlICE9IG51bGwgJiYgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnR5cGVHdWFyZCh0aGlzLmZpbGVzW2luZGV4XS5maWxlLCAnaW1hZ2UvKicpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIGZyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0ucHJldmlldyA9IGZyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlc1tpbmRleF0uZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSByZWFjdGl2ZSBmb3JtIHRvIGluc2VydCBhIGxpbmsuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRGb3JtKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGxpbms6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHVybFZhbGlkYXRvcl1dXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnB1dC1maWxlLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbCBjbGFzcz1cIm1hdC1vcnBoYW4tbGFiZWxcIiBbZm9yXT1cImlkXCIgW2NsYXNzLmFjdGl2ZV09XCJmaWxlcz8ubGVuZ3RoXCIgW2lubmVySHRtbF09XCJwbGFjZWhvbGRlclwiICpuZ0lmPVwicGxhY2Vob2xkZXJcIj48L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJmaWxlcy1jb250YWluZXJcIj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWxlIG9mIGZpbGVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1jb250YWluZXJcIiBbbmdDbGFzc109XCJjbGFzc0FuaW1hdGlvblwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWxlVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBmaWxlLCBpbmRleDogaSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNhbkFkZEZpbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYWRkTGluazsgZWxzZSBsaW5rVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFkZFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2FkZFRlbXBsYXRlPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBpbnB1dEZpbGVEcm9wWm9uZSBjbGFzcz1cImZpbGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJmaWxlSW5wdXQuY2xpY2soKVwiIChpdGVtRHJvcCk9XCJvblNlbGVjdEZpbGUoJGV2ZW50LCBzZWxlY3RCdXR0b24pXCJcbiAgICAgICAgKGl0ZW1EcmFnT3Zlcik9XCJvbkRyYWdPdmVyKHNlbGVjdEJ1dHRvbilcIiAoaXRlbURyYWdMZWF2ZSk9XCJvbkRyYWdMZWF2ZShzZWxlY3RCdXR0b24pXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgI3NlbGVjdEJ1dHRvbj5cbiAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwiaW5wdXQtaWNvblwiPnt7IGljb25BZGQgfX08L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNlY29uZGFyeS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cIm9uTGluaygpXCIgKm5nSWY9XCJsaW5rRW5hYmxlZFwiPlxuICAgICAgICA8bWF0LWljb24+e3sgaWNvbkxpbmsgfX08L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxpbnB1dCBbaWRdPVwiaWRcIiBbYWNjZXB0XT1cImZpbGVBY2NlcHRcIiBoaWRkZW4gdHlwZT1cImZpbGVcIiBbYXR0ci5tdWx0aXBsZV09XCJmaWxlTGltaXQgPiAxID8gdHJ1ZSA6IG51bGxcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwib25TZWxlY3RGaWxlKCRldmVudC50YXJnZXQuZmlsZXMsIHNlbGVjdEJ1dHRvbilcIj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZmlsZVRlbXBsYXRlIGxldC1maWxlIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgPGltZyBjbGFzcz1cImltYWdlLXByZXZpZXdcIiBbc3JjXT1cImZpbGUucHJldmlld1wiICpuZ0lmPVwiZmlsZS5wcmV2aWV3XCI+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGlucHV0RmlsZURyb3Bab25lIGNsYXNzPVwicmVwbGFjZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImZpbGVSZXBsYWNlLmNsaWNrKClcIiAoaXRlbURyb3ApPVwib25SZXBsYWNlRmlsZSgkZXZlbnQsIGluZGV4LCByZXBsYWNlQnV0dG9uKVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChpdGVtRHJhZ092ZXIpPVwib25EcmFnT3ZlcihyZXBsYWNlQnV0dG9uKVwiIChpdGVtRHJhZ0xlYXZlKT1cIm9uRHJhZ0xlYXZlKHJlcGxhY2VCdXR0b24pXCIgI3JlcGxhY2VCdXR0b24+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlsZS5wcmV2aWV3XCI+XG4gICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJpbnB1dC1pY29uXCI+e3sgaWNvbkZpbGUgfX08L21hdC1pY29uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbmFtZSB0ZXh0LXRydW5jYXRlXCIgW2lubmVySHRtbF09XCJmaWxlLmZpbGUubmFtZVwiICpuZ0lmPVwiZmlsZS5maWxlXCI+PC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNlY29uZGFyeS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uRGVsZXRlRmlsZShpbmRleClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPG1hdC1pY29uPnt7IGljb25EZWxldGUgfX08L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxpbnB1dCBbYWNjZXB0XT1cImZpbGVBY2NlcHRcIiBoaWRkZW4gdHlwZT1cImZpbGVcIiAjZmlsZVJlcGxhY2UgKGNoYW5nZSk9XCJvblJlcGxhY2VGaWxlKCRldmVudC50YXJnZXQuZmlsZXMsIGluZGV4LCByZXBsYWNlQnV0dG9uLCBmaWxlUmVwbGFjZSlcIj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjbGlua1RlbXBsYXRlPlxuICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1saW5rIHNsaWRlLWluLXVwXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0TGluaygpXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiaW5wdXQtbGlua1wiPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImxpbmtcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJMaW5rXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxpbmstYnV0dG9uXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkxpbmsoKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvbmctdGVtcGxhdGU+Il19