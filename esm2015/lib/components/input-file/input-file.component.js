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
InputFileComponent.ɵfac = function InputFileComponent_Factory(t) { return new (t || InputFileComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.InputFileService)); };
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
    } }, directives: [i3.NgIf, i3.NgForOf, i3.NgClass, i3.NgTemplateOutlet, i4.MatButton, i5.DropZoneDirective, i6.MatIcon, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i7.MatFormField, i8.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [".input-file-container[_ngcontent-%COMP%]{position:relative}.input-file-container[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%], .input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%]{flex:1}.input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{flex-direction:column;margin-right:1rem;overflow:hidden}.input-file-container[_ngcontent-%COMP%]   .replace-button[_ngcontent-%COMP%]{flex:1;width:10rem}.input-file-container[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:focus{outline:0}.input-file-container[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:calc(10rem - 2.5rem)}.input-file-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{position:absolute;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container[_ngcontent-%COMP%]   .form-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-link[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]{display:flex;flex-direction:row}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:calc(10rem / 2);width:calc(10rem / 2)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label.active[_ngcontent-%COMP%]{transform:scale(.75)}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounce-in[_ngcontent-%COMP%]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes slideInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes slideInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.slide-in-up[_ngcontent-%COMP%]{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-name:slideInUp;animation-name:slideInUp}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW5wdXQtZmlsZS9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9pbnB1dC1maWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnB1dC1maWxlL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC1maWxlL2lucHV0LWZpbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBQzNCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSWxFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7O0lDakIxRCwyQkFBZ0k7OztJQUFyRiwyRUFBOEI7SUFBekMsK0JBQVUsb0RBQUE7OztJQUs5Qix3QkFBc0c7Ozs7SUFGOUcsNkJBQXdEO0lBQ3BELDhCQUF1RDtJQUNuRCxxR0FBc0c7SUFDMUcsaUJBQU07SUFDViwwQkFBZTs7Ozs7O0lBSGlCLGVBQTBCO0lBQTFCLCtDQUEwQjtJQUNuQyxlQUFnQztJQUFoQyxzQ0FBZ0MsdUVBQUE7OztJQU8zQyx3QkFBNkQ7OztJQURqRSw2QkFBa0Q7SUFDOUMsb0hBQTZEO0lBQ2pFLDBCQUFlOzs7O0lBREksZUFBNkI7SUFBN0Isc0NBQTZCOzs7SUFIeEQsNkJBQWlDO0lBQzdCLCtCQUE0QjtJQUN4QixxR0FFZTtJQUNuQixpQkFBTTtJQUNWLDBCQUFlOzs7O0lBSlEsZUFBZ0I7SUFBaEIsc0NBQWdCLGlCQUFBOzs7O0lBYzNDLGtDQUF1SDtJQUF2Qyx1TUFBa0I7SUFDOUYsZ0NBQVU7SUFBQSxZQUFjO0lBQUEsaUJBQVc7SUFDdkMsaUJBQVM7OztJQUZpRCwyQ0FBcUI7SUFDakUsZUFBYztJQUFkLHNDQUFjOzs7O0lBTDVCLHNDQUM4SDtJQUR2RCxxS0FBUyxZQUFpQixJQUFDLDhPQUFBLHNPQUFBLHlPQUFBO0lBRTlGLG9DQUE2QjtJQUFBLFlBQWE7SUFBQSxpQkFBVztJQUN6RCxpQkFBUztJQUNULHdGQUVTO0lBQ1QscUNBQThLO0lBQTNELG1RQUEwRDtJQUE3SyxpQkFBOEs7OztJQU5wRiwwQ0FBcUI7SUFDOUUsZUFBYTtJQUFiLG9DQUFhO0lBRXNELGVBQWlCO0lBQWpCLHlDQUFpQjtJQUc5RyxlQUFTO0lBQVQsOEJBQVMsNkJBQUE7SUFBMEMsOERBQTZDOzs7SUFJdkcsMEJBQXFFOzs7SUFBMUMsd0RBQW9COzs7SUFLdkMsMEJBQTBGOzs7SUFBckQsaUVBQTRCOzs7SUFGckUsNkJBQW9DO0lBQ2hDLG9DQUE2QjtJQUFBLFlBQWM7SUFBQSxpQkFBVztJQUN0RCxpR0FBMEY7SUFDOUYsMEJBQWU7Ozs7SUFGa0IsZUFBYztJQUFkLHNDQUFjO0lBQ3dCLGVBQWU7SUFBZixvQ0FBZTs7OztJQUwxRixrRkFBcUU7SUFDckUsc0NBQ2lJO0lBRHZELHFLQUFTLFlBQW1CLElBQUMsbVRBQUEsc09BQUEseU9BQUE7SUFFbkcsbUdBR2U7SUFDbkIsaUJBQVM7SUFDVCxrQ0FBOEc7SUFBcEQscVFBQTZCO0lBQ25GLGdDQUFVO0lBQUEsWUFBZ0I7SUFBQSxpQkFBVztJQUN6QyxpQkFBUztJQUNULHFDQUE4STtJQUFqRiw4V0FBZ0Y7SUFBN0ksaUJBQThJOzs7O0lBWDdGLHVDQUFrQjtJQUUvRCxlQUFxQjtJQUFyQiwwQ0FBcUI7SUFDTixlQUFtQjtJQUFuQix3Q0FBbUI7SUFLa0QsZUFBcUI7SUFBckIsMENBQXFCO0lBQy9GLGVBQWdCO0lBQWhCLHVDQUFnQjtJQUV2QixlQUFxQjtJQUFyQiwwQ0FBcUI7Ozs7SUFJNUIsZ0NBQThGO0lBQXZDLHVNQUEyQjtJQUM5RSwwQ0FBbUM7SUFDL0IsNEJBQXVFO0lBQzNFLGlCQUFpQjtJQUNqQiwrQkFBOEI7SUFDMUIsa0NBQTBFO0lBQXpDLDZMQUFrQjtJQUMvQyxnQ0FBVTtJQUFBLDBCQUFVO0lBQUEsaUJBQVc7SUFDbkMsaUJBQVM7SUFDVCxrQ0FBdUQ7SUFDbkQsZ0NBQVU7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzlCLGlCQUFTO0lBQ2IsaUJBQU07SUFDVixpQkFBTzs7O0lBWjZCLHVDQUFrQjtJQUVQLGVBQStCO0lBQS9CLG9EQUErQjtJQUdsQixlQUFxQjtJQUFyQiwwQ0FBcUI7SUFHeEMsZUFBcUI7SUFBckIsMENBQXFCOztBRHhCbEUsTUFBTSxPQUFPLGtCQUFrQjtJQWdIM0IsWUFDWSxXQUF3QixFQUN4QixnQkFBa0M7UUFEbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWxCcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBQzdDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUM1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBSXhELFVBQUssR0FBRyxJQUFJLEtBQUssRUFBYSxDQUFDO1FBRS9CLE9BQUUsR0FBRyxrQkFBa0Isa0JBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUNyRCxhQUFRLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQVN6QixDQUFDO0lBbkdMLElBQWEsY0FBYyxDQUFDLGNBQXNCO1FBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksZUFBZSxDQUFDLGNBQWMsQ0FBQztJQUNqSCxDQUFDO0lBRUQsSUFBYSxVQUFVLENBQUMsVUFBa0I7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ3JHLENBQUM7SUFFRCxJQUFhLFNBQVMsQ0FBQyxTQUFpQjtRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUM7SUFDbEcsQ0FBQztJQUVELElBQWEsT0FBTyxDQUFDLE9BQWU7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQzVGLENBQUM7SUFFRCxJQUFhLFVBQVUsQ0FBQyxVQUFrQjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDckcsQ0FBQztJQUVELElBQWEsUUFBUSxDQUFDLFFBQWdCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUMvRixDQUFDO0lBRUQsSUFBYSxRQUFRLENBQUMsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDO0lBQy9GLENBQUM7SUFFRCxJQUFhLFdBQVcsQ0FBQyxXQUFvQjtRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUM7SUFDeEcsQ0FBQztJQUVELElBQWEsZUFBZSxDQUFDLGVBQXVCO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUM7SUFDcEgsQ0FBQztJQUVELElBQWEsU0FBUyxDQUFDLFNBQWlCO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUNsRyxDQUFDO0lBY0QsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUQsQ0FBQztJQU9EOztPQUVHO0lBQ0ksUUFBUTtRQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFVBQVUsQ0FBQyxNQUFpQjtRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFdBQVcsQ0FBQyxNQUFpQjtRQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU07UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksYUFBYSxDQUFDLFFBQWtCLEVBQUUsS0FBYSxFQUFFLE1BQWlCLEVBQUUsU0FBNEI7UUFDbkcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsc0NBQXNDO1lBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakMsK0RBQStEO1lBQy9ELE1BQU0sU0FBUyxHQUFjLEVBQUUsSUFBSSxFQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN6RCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxTQUFTLEVBQUU7Z0JBQ1gsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDeEI7U0FDSjtJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksWUFBWSxDQUFDLFFBQWtCLEVBQUUsTUFBaUI7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUMzQixzQ0FBc0M7WUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsTUFBTSxTQUFTLEdBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRTtvQkFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3JDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxNQUFNLFNBQVMsR0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNGLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGdCQUFnQixDQUFDLEVBQXFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQkFBaUIsQ0FBQyxFQUFjO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksVUFBVSxDQUFDLEtBQXVCO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQWEsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxTQUFTLENBQUMsS0FBdUIsRUFBRSxJQUFlLEVBQUUsV0FBcUI7UUFDN0UsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMvRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUUsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxjQUFjO1FBQ2xCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUN0RyxNQUFNLEVBQUUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixFQUFFLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUMxQyxDQUFDLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxPQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2xELENBQUMsQ0FBQztJQUNQLENBQUM7O0FBalRNLHlCQUFNLEdBQUcsQ0FBQyxDQUFDO29GQURULGtCQUFrQjtxRUFBbEIsa0JBQWtCOzs7OzttZEFSaEI7WUFDUDtnQkFDSSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNqRCxLQUFLLEVBQUUsSUFBSTthQUNkO1NBQ0o7UUM5QkwsOEJBQWtDO1FBQzlCLHVFQUFnSTtRQUNoSSw4QkFBNkI7UUFFekIscUZBSWU7UUFFZixxRkFNZTtRQUNuQixpQkFBTTtRQUVWLGlCQUFNO1FBRU4sb0hBU2M7UUFFZCxvSEFhYztRQUVkLHFIQWNjOztRQTVEMkYsZUFBaUI7UUFBakIsc0NBQWlCO1FBR25GLGVBQVU7UUFBVixtQ0FBVTtRQU0xQixlQUFnQjtRQUFoQixxQ0FBZ0I7O3VGRHNCMUIsa0JBQWtCO2NBWjlCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLFNBQVMsRUFBRTtvQkFDUDt3QkFDSSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQzt3QkFDakQsS0FBSyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0o7YUFDSjs2RkFjWSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUVPLGNBQWM7a0JBQTFCLEtBQUs7WUFRTyxVQUFVO2tCQUF0QixLQUFLO1lBUU8sU0FBUztrQkFBckIsS0FBSztZQVFPLE9BQU87a0JBQW5CLEtBQUs7WUFRTyxVQUFVO2tCQUF0QixLQUFLO1lBUU8sUUFBUTtrQkFBcEIsS0FBSztZQVFPLFFBQVE7a0JBQXBCLEtBQUs7WUFRTyxXQUFXO2tCQUF2QixLQUFLO1lBUU8sZUFBZTtrQkFBM0IsS0FBSztZQVFPLFNBQVM7a0JBQXJCLEtBQUs7WUFRSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDb0MsU0FBUztrQkFBbkQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZFxuICAgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MgfSBmcm9tICcuLi8uLi9zZXR0aW5ncy9kZWZhdWx0LnNldHRpbmdzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dEZpbGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUnO1xuaW1wb3J0IHsgSW5wdXRGaWxlUmVqZWN0ZWQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUtcmVqZWN0ZWQnO1xuaW1wb3J0IHsgSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24gfSBmcm9tICcuLi8uLi9lbnVtcy9pbnB1dC1maWxlLXJlamVjdGVkLXJlYXNvbic7XG5pbXBvcnQgeyBJbnB1dEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdEJ1dHRvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyB1cmxWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi92YWxpZGF0b3JzL3VybC52YWxpZGF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lucHV0LWZpbGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbnB1dC1maWxlLnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dEZpbGVDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gICAgc3RhdGljIG5leHRJZCA9IDA7XG4gICAgcHJpdmF0ZSBfY2xhc3NBbmltYXRpb246IHN0cmluZztcbiAgICBwcml2YXRlIF9maWxlQWNjZXB0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmlsZUxpbWl0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWNvbkFkZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ljb25EZWxldGU6IHN0cmluZztcbiAgICBwcml2YXRlIF9pY29uRmlsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ljb25MaW5rOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGlua0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJMaW5rOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2l6ZUxpbWl0OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc2V0IGNsYXNzQW5pbWF0aW9uKGNsYXNzQW5pbWF0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xhc3NBbmltYXRpb24gPSBjbGFzc0FuaW1hdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgY2xhc3NBbmltYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzc0FuaW1hdGlvbiB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmNsYXNzQW5pbWF0aW9uIHx8IGRlZmF1bHRTZXR0aW5ncy5jbGFzc0FuaW1hdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgZmlsZUFjY2VwdChmaWxlQWNjZXB0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZmlsZUFjY2VwdCA9IGZpbGVBY2NlcHQ7XG4gICAgfVxuXG4gICAgZ2V0IGZpbGVBY2NlcHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlQWNjZXB0IHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuZmlsZUFjY2VwdCB8fCBkZWZhdWx0U2V0dGluZ3MuZmlsZUFjY2VwdDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgZmlsZUxpbWl0KGZpbGVMaW1pdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZpbGVMaW1pdCA9IGZpbGVMaW1pdDtcbiAgICB9XG5cbiAgICBnZXQgZmlsZUxpbWl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZUxpbWl0IHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuZmlsZUxpbWl0IHx8IGRlZmF1bHRTZXR0aW5ncy5maWxlTGltaXQ7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGljb25BZGQoaWNvbkFkZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ljb25BZGQgPSBpY29uQWRkO1xuICAgIH1cblxuICAgIGdldCBpY29uQWRkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbkFkZCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmljb25BZGQgfHwgZGVmYXVsdFNldHRpbmdzLmljb25BZGQ7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGljb25EZWxldGUoaWNvbkRlbGV0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ljb25EZWxldGUgPSBpY29uRGVsZXRlO1xuICAgIH1cblxuICAgIGdldCBpY29uRGVsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbkRlbGV0ZSB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmljb25EZWxldGUgfHwgZGVmYXVsdFNldHRpbmdzLmljb25EZWxldGU7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGljb25GaWxlKGljb25GaWxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWNvbkZpbGUgPSBpY29uRmlsZTtcbiAgICB9XG5cbiAgICBnZXQgaWNvbkZpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uRmlsZSB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmljb25GaWxlIHx8IGRlZmF1bHRTZXR0aW5ncy5pY29uRmlsZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgaWNvbkxpbmsoaWNvbkxpbms6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pY29uTGluayA9IGljb25MaW5rO1xuICAgIH1cblxuICAgIGdldCBpY29uTGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb25MaW5rIHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuaWNvbkxpbmsgfHwgZGVmYXVsdFNldHRpbmdzLmljb25MaW5rO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBsaW5rRW5hYmxlZChsaW5rRW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9saW5rRW5hYmxlZCA9IGxpbmtFbmFibGVkO1xuICAgIH1cblxuICAgIGdldCBsaW5rRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmtFbmFibGVkIHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcubGlua0VuYWJsZWQgfHwgZGVmYXVsdFNldHRpbmdzLmxpbmtFbmFibGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHNldCBwbGFjZWhvbGRlckxpbmsocGxhY2Vob2xkZXJMaW5rOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXJMaW5rID0gcGxhY2Vob2xkZXJMaW5rO1xuICAgIH1cblxuICAgIGdldCBwbGFjZWhvbGRlckxpbmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlckxpbmsgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5wbGFjZWhvbGRlckxpbmsgfHwgZGVmYXVsdFNldHRpbmdzLnBsYWNlaG9sZGVyTGluaztcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgc2l6ZUxpbWl0KHNpemVMaW1pdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NpemVMaW1pdCA9IHNpemVMaW1pdDtcbiAgICB9XG5cbiAgICBnZXQgc2l6ZUxpbWl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZUxpbWl0IHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuc2l6ZUxpbWl0IHx8IGRlZmF1bHRTZXR0aW5ncy5zaXplTGltaXQ7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIGFjY2VwdGVkRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5wdXRGaWxlPigpO1xuICAgIEBPdXRwdXQoKSBkZWxldGVkRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5wdXRGaWxlPigpO1xuICAgIEBPdXRwdXQoKSByZWplY3RlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZVJlamVjdGVkPigpO1xuICAgIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgYWRkTGluazogYm9vbGVhbjtcbiAgICBwdWJsaWMgZmlsZXMgPSBuZXcgQXJyYXk8SW5wdXRGaWxlPigpO1xuICAgIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG4gICAgcHVibGljIGlkID0gYG5neC1pbnB1dC1maWxlLSR7SW5wdXRGaWxlQ29tcG9uZW50Lm5leHRJZCsrfWA7XG4gICAgcHVibGljIG9uQ2hhbmdlID0gKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+KSA9PiB7IH07XG4gICAgcHVibGljIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICAgIGdldCBjYW5BZGRGaWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA8IHRoaXMuZmlsZUxpbWl0O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBpbnB1dEZpbGVTZXJ2aWNlOiBJbnB1dEZpbGVTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEFuZ3VsYXIgbGlmZWN5bGUgT25Jbml0IGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRGb3JtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gZGVsZXRlIGEgZmlsZSBldmVudCBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRlbGV0ZUZpbGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcy5zbGljZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWxldGVkRmlsZS5lbWl0KGZpbGVzW2luZGV4XSk7XG4gICAgICAgICAgICBmaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGRyYWcgb3ZlciBldmVudCBoYW5kbGVyLlxuICAgICAqIEFkZHMgYSByaXBwbGUgZWZmZWN0IG9uIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgcHVibGljIG9uRHJhZ092ZXIoYnV0dG9uOiBNYXRCdXR0b24pOiB2b2lkIHtcbiAgICAgICAgYnV0dG9uLnJpcHBsZS5sYXVuY2goeyBjZW50ZXJlZDogdHJ1ZSwgcGVyc2lzdGVudDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBkcmFnIGxlYXZlIGV2ZW50IGhhbmRsZXIuXG4gICAgICogRmFkZXMgdGhlIHJpcHBsZSBlZmZlY3Qgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnTGVhdmUoYnV0dG9uOiBNYXRCdXR0b24pOiB2b2lkIHtcbiAgICAgICAgYnV0dG9uLnJpcHBsZS5mYWRlT3V0QWxsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gYWRkcyBhIGxpbmsuXG4gICAgICovXG4gICAgcHVibGljIG9uTGluaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRMaW5rID0gIXRoaXMuYWRkTGluaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiByZXBsYWNlIG9uZSBmaWxlIGV2ZW50IGhhbmRsZXIuXG4gICAgICogV3JpdGVzIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gZmlsZUxpc3RcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcGFyYW0gZmlsZUlucHV0XG4gICAgICovXG4gICAgcHVibGljIG9uUmVwbGFjZUZpbGUoZmlsZUxpc3Q6IEZpbGVMaXN0LCBpbmRleDogbnVtYmVyLCBidXR0b246IE1hdEJ1dHRvbiwgZmlsZUlucHV0PzogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIENvcGllcyB0aGUgYXJyYXkgd2l0aG91dCByZWZlcmVuY2UuXG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIEFzc3VtZXMgdGhhdCBhIHNpbmdsZSBmaWxlIGNhbiBiZSByZXBsYWNlZCBieSBhIHNpbmdsZSBmaWxlLlxuICAgICAgICAgICAgY29uc3QgaW5wdXRGaWxlOiBJbnB1dEZpbGUgPSB7IGZpbGUgOiBmaWxlTGlzdC5pdGVtKDApIH07XG4gICAgICAgICAgICBidXR0b24ucmlwcGxlLmZhZGVPdXRBbGwoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVHdWFyZChmaWxlcywgaW5wdXRGaWxlLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgIGZpbGVzW2luZGV4XSA9IGlucHV0RmlsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGVkRmlsZS5lbWl0KGlucHV0RmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xuICAgICAgICAgICAgaWYgKGZpbGVJbnB1dCkge1xuICAgICAgICAgICAgICAgIGZpbGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gc2VsZWN0IG9uZSBvciBtb3JlIGZpbGVzIGV2ZW50IGhhbmRsZXIuXG4gICAgICogV3JpdGVzIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gZmlsZUxpc3RcbiAgICAgKi9cbiAgICBwdWJsaWMgb25TZWxlY3RGaWxlKGZpbGVMaXN0OiBGaWxlTGlzdCwgYnV0dG9uOiBNYXRCdXR0b24pOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBidXR0b24ucmlwcGxlLmZhZGVPdXRBbGwoKTtcbiAgICAgICAgICAgIC8vIENvcGllcyB0aGUgYXJyYXkgd2l0aG91dCByZWZlcmVuY2UuXG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIEFycmF5LmZyb20oZmlsZUxpc3QpLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRGaWxlOiBJbnB1dEZpbGUgPSB7IGZpbGUgfTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlR3VhcmQoZmlsZXMsIGlucHV0RmlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXMucHVzaChpbnB1dEZpbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGVkRmlsZS5lbWl0KGlucHV0RmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gc3VibWl0IHRoZSBsaW5rIGZvcm0gZXZlbnQgaGFuZGxlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25TdWJtaXRMaW5rKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmlsZTogSW5wdXRGaWxlID0geyBsaW5rOiB0aGlzLmZvcm0udmFsdWUubGluaywgcHJldmlldzogdGhpcy5mb3JtLnZhbHVlLmxpbmsgfTtcbiAgICAgICAgICAgIGZpbGVzLnB1c2goaW5wdXRGaWxlKTtcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0ZWRGaWxlLmVtaXQoaW5wdXRGaWxlKTtcbiAgICAgICAgICAgIHRoaXMub25MaW5rKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVWYWx1ZShmaWxlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICAgKiBAcGFyYW0gZm5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICAgKiBAcGFyYW0gZm5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICAgKiBAcGFyYW0gaXNEaXNhYmxlZFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICogQHBhcmFtIGZpbGVzXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUoZmlsZXM6IEFycmF5PElucHV0RmlsZT4pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFmaWxlcykge1xuICAgICAgICAgICAgZmlsZXMgPSBuZXcgQXJyYXk8SW5wdXRGaWxlPigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgICAgICAgdGhpcy5zZXRGaWxlUHJldmlldygpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZmlsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGZpbGUgY2FuIGJlIGFkZGVkIHRvIHRoZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gZmlsZXNcbiAgICAgKiBAcGFyYW0gZmlsZSxcbiAgICAgKiBAcGFyYW0gYnlwYXNzTGltaXRcbiAgICAgKi9cbiAgICBwcml2YXRlIGZpbGVHdWFyZChmaWxlczogQXJyYXk8SW5wdXRGaWxlPiwgZmlsZTogSW5wdXRGaWxlLCBieXBhc3NMaW1pdD86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFieXBhc3NMaW1pdCAmJiAhdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmxpbWl0R3VhcmQoZmlsZXMsIHRoaXMuZmlsZUxpbWl0KSkge1xuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24ubGltaXRSZWFjaGVkLCBmaWxlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RmlsZVNlcnZpY2Uuc2l6ZUd1YXJkKGZpbGUuZmlsZSwgdGhpcy5zaXplTGltaXQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5zaXplUmVhY2hlZCwgZmlsZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnR5cGVHdWFyZChmaWxlLmZpbGUsIHRoaXMuZmlsZUFjY2VwdCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ZWRGaWxlLmVtaXQoeyByZWFzb246IElucHV0RmlsZVJlamVjdGVkUmVhc29uLmJhZEZpbGUsIGZpbGUgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBmaWxlIHByZXZpZXcgd2l0aCBGaWxlUmVhZGVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0RmlsZVByZXZpZXcoKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4gdGhpcy5maWxlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZXNbaW5kZXhdLmZpbGUgIT0gbnVsbCAmJiB0aGlzLmlucHV0RmlsZVNlcnZpY2UudHlwZUd1YXJkKHRoaXMuZmlsZXNbaW5kZXhdLmZpbGUsICdpbWFnZS8qJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgZnIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS5wcmV2aWV3ID0gZnIucmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZnIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzW2luZGV4XS5maWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHJlYWN0aXZlIGZvcm0gdG8gaW5zZXJ0IGEgbGluay5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEZvcm0oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgbGluazogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdXJsVmFsaWRhdG9yXV1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImlucHV0LWZpbGUtY29udGFpbmVyXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibWF0LW9ycGhhbi1sYWJlbFwiIFtmb3JdPVwiaWRcIiBbY2xhc3MuYWN0aXZlXT1cImZpbGVzPy5sZW5ndGhcIiBbaW5uZXJIdG1sXT1cInBsYWNlaG9sZGVyXCIgKm5nSWY9XCJwbGFjZWhvbGRlclwiPjwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImZpbGVzLWNvbnRhaW5lclwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmlsZXM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cImNsYXNzQW5pbWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpbGVUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGZpbGUsIGluZGV4OiBpIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2FuQWRkRmlsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhZGRMaW5rOyBlbHNlIGxpbmtUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYWRkVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjYWRkVGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGlucHV0RmlsZURyb3Bab25lIGNsYXNzPVwiZmlsZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImZpbGVJbnB1dC5jbGljaygpXCIgKGl0ZW1Ecm9wKT1cIm9uU2VsZWN0RmlsZSgkZXZlbnQsIHNlbGVjdEJ1dHRvbilcIlxuICAgICAgICAoaXRlbURyYWdPdmVyKT1cIm9uRHJhZ092ZXIoc2VsZWN0QnV0dG9uKVwiIChpdGVtRHJhZ0xlYXZlKT1cIm9uRHJhZ0xlYXZlKHNlbGVjdEJ1dHRvbilcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAjc2VsZWN0QnV0dG9uPlxuICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJpbnB1dC1pY29uXCI+e3sgaWNvbkFkZCB9fTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwic2Vjb25kYXJ5LWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwib25MaW5rKClcIiAqbmdJZj1cImxpbmtFbmFibGVkXCI+XG4gICAgICAgIDxtYXQtaWNvbj57eyBpY29uTGluayB9fTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGlucHV0IFtpZF09XCJpZFwiIFthY2NlcHRdPVwiZmlsZUFjY2VwdFwiIGhpZGRlbiB0eXBlPVwiZmlsZVwiIFthdHRyLm11bHRpcGxlXT1cImZpbGVMaW1pdCA+IDEgPyB0cnVlIDogbnVsbFwiICNmaWxlSW5wdXQgKGNoYW5nZSk9XCJvblNlbGVjdEZpbGUoJGV2ZW50LnRhcmdldC5maWxlcywgc2VsZWN0QnV0dG9uKVwiPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNmaWxlVGVtcGxhdGUgbGV0LWZpbGUgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICA8aW1nIGNsYXNzPVwiaW1hZ2UtcHJldmlld1wiIFtzcmNdPVwiZmlsZS5wcmV2aWV3XCIgKm5nSWY9XCJmaWxlLnByZXZpZXdcIj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gaW5wdXRGaWxlRHJvcFpvbmUgY2xhc3M9XCJyZXBsYWNlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZmlsZVJlcGxhY2UuY2xpY2soKVwiIChpdGVtRHJvcCk9XCJvblJlcGxhY2VGaWxlKCRldmVudCwgaW5kZXgsIHJlcGxhY2VCdXR0b24pXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGl0ZW1EcmFnT3Zlcik9XCJvbkRyYWdPdmVyKHJlcGxhY2VCdXR0b24pXCIgKGl0ZW1EcmFnTGVhdmUpPVwib25EcmFnTGVhdmUocmVwbGFjZUJ1dHRvbilcIiAjcmVwbGFjZUJ1dHRvbj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWxlLnByZXZpZXdcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImlucHV0LWljb25cIj57eyBpY29uRmlsZSB9fTwvbWF0LWljb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lIHRleHQtdHJ1bmNhdGVcIiBbaW5uZXJIdG1sXT1cImZpbGUuZmlsZS5uYW1lXCIgKm5nSWY9XCJmaWxlLmZpbGVcIj48L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwic2Vjb25kYXJ5LWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25EZWxldGVGaWxlKGluZGV4KVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8bWF0LWljb24+e3sgaWNvbkRlbGV0ZSB9fTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGlucHV0IFthY2NlcHRdPVwiZmlsZUFjY2VwdFwiIGhpZGRlbiB0eXBlPVwiZmlsZVwiICNmaWxlUmVwbGFjZSAoY2hhbmdlKT1cIm9uUmVwbGFjZUZpbGUoJGV2ZW50LnRhcmdldC5maWxlcywgaW5kZXgsIHJlcGxhY2VCdXR0b24sIGZpbGVSZXBsYWNlKVwiPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNsaW5rVGVtcGxhdGU+XG4gICAgPGZvcm0gY2xhc3M9XCJmb3JtLWxpbmsgc2xpZGUtaW4tdXBcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXRMaW5rKClcIiBub3ZhbGlkYXRlPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJpbnB1dC1saW5rXCI+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwibGlua1wiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlckxpbmtcIj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGluay1idXR0b25cIj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uTGluaygpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPmFycm93X2JhY2s8L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jaGVjazwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuPC9uZy10ZW1wbGF0ZT4iXX0=