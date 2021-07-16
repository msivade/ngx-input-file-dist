(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/form-field'), require('@angular/material/input')) :
    typeof define === 'function' && define.amd ? define('ngx-input-file', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/button', '@angular/material/icon', '@angular/material/form-field', '@angular/material/input'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-input-file'] = {}, global.ng.core, global.ng.forms, global.ng.common, global.ng.material.button, global.ng.material.icon, global.ng.material.formField, global.ng.material.input));
}(this, (function (exports, i0, i1, i3, i4, i6, i7, i8) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);

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
        if (i1.Validators.required(control) != null) {
            return null;
        }
        var v = control.value;
        /* tslint:disable */
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
        /* tslint:enable */
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var InputFileService = /** @class */ (function () {
        function InputFileService(_config) {
            this._config = _config;
        }
        Object.defineProperty(InputFileService.prototype, "config", {
            get: function () {
                return this._config;
            },
            enumerable: false,
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
        return InputFileService;
    }());
    InputFileService.ɵfac = function InputFileService_Factory(t) { return new (t || InputFileService)(i0__namespace.ɵɵinject('config')); };
    InputFileService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: InputFileService, factory: InputFileService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputFileService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['config']
                        }] }];
        }, null);
    })();

    var DropZoneDirective = /** @class */ (function () {
        function DropZoneDirective() {
            this.disabled = false;
            this.itemDragOver = new i0.EventEmitter();
            this.itemDragLeave = new i0.EventEmitter();
            this.itemDrop = new i0.EventEmitter();
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
        return DropZoneDirective;
    }());
    DropZoneDirective.ɵfac = function DropZoneDirective_Factory(t) { return new (t || DropZoneDirective)(); };
    DropZoneDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: DropZoneDirective, selectors: [["", "inputFileDropZone", ""]], hostBindings: function DropZoneDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DropZoneDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DropZoneDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
            }
        }, inputs: { disabled: "disabled" }, outputs: { itemDragOver: "itemDragOver", itemDragLeave: "itemDragLeave", itemDrop: "itemDrop" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DropZoneDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[inputFileDropZone]'
                    }]
            }], null, { disabled: [{
                    type: i0.Input
                }], itemDragOver: [{
                    type: i0.Output
                }], itemDragLeave: [{
                    type: i0.Output
                }], itemDrop: [{
                    type: i0.Output
                }], onDragOver: [{
                    type: i0.HostListener,
                    args: ['dragover', ['$event']]
                }], onDragLeave: [{
                    type: i0.HostListener,
                    args: ['dragleave', ['$event']]
                }], onDrop: [{
                    type: i0.HostListener,
                    args: ['drop', ['$event']]
                }] });
    })();

    var _c0 = ["fileInput"];
    function InputFileComponent_label_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "label", 8);
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("active", ctx_r0.files == null ? null : ctx_r0.files.length);
            i0__namespace.ɵɵproperty("for", ctx_r0.id)("innerHtml", ctx_r0.placeholder, i0__namespace.ɵɵsanitizeHtml);
        }
    }
    function InputFileComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    var _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
    function InputFileComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "div", 9);
            i0__namespace.ɵɵtemplate(2, InputFileComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var file_r9 = ctx.$implicit;
            var i_r10 = ctx.index;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            var _r5 = i0__namespace.ɵɵreference(8);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", ctx_r1.classAnimation);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction2(3, _c1, file_r9, i_r10));
        }
    }
    function InputFileComponent_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function InputFileComponent_ng_container_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, InputFileComponent_ng_container_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 13);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext(2);
            var _r3 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r3);
        }
    }
    function InputFileComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "div", 11);
            i0__namespace.ɵɵtemplate(2, InputFileComponent_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 12);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            var _r7 = i0__namespace.ɵɵreference(10);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r2.addLink)("ngIfElse", _r7);
        }
    }
    function InputFileComponent_ng_template_5_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 20);
            i0__namespace.ɵɵlistener("click", function InputFileComponent_ng_template_5_button_4_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r18_1); var ctx_r17 = i0__namespace.ɵɵnextContext(2); return ctx_r17.onLink(); });
            i0__namespace.ɵɵelementStart(1, "mat-icon");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("disabled", ctx_r15.disabled);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(ctx_r15.iconLink);
        }
    }
    function InputFileComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 14, 15);
            i0__namespace.ɵɵlistener("click", function InputFileComponent_ng_template_5_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r20_1); var _r16 = i0__namespace.ɵɵreference(6); return _r16.click(); })("itemDrop", function InputFileComponent_ng_template_5_Template_button_itemDrop_0_listener($event) { i0__namespace.ɵɵrestoreView(_r20_1); var _r14 = i0__namespace.ɵɵreference(1); var ctx_r21 = i0__namespace.ɵɵnextContext(); return ctx_r21.onSelectFile($event, _r14); })("itemDragOver", function InputFileComponent_ng_template_5_Template_button_itemDragOver_0_listener() { i0__namespace.ɵɵrestoreView(_r20_1); var _r14 = i0__namespace.ɵɵreference(1); var ctx_r22 = i0__namespace.ɵɵnextContext(); return ctx_r22.onDragOver(_r14); })("itemDragLeave", function InputFileComponent_ng_template_5_Template_button_itemDragLeave_0_listener() { i0__namespace.ɵɵrestoreView(_r20_1); var _r14 = i0__namespace.ɵɵreference(1); var ctx_r23 = i0__namespace.ɵɵnextContext(); return ctx_r23.onDragLeave(_r14); });
            i0__namespace.ɵɵelementStart(2, "mat-icon", 16);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, InputFileComponent_ng_template_5_button_4_Template, 3, 2, "button", 17);
            i0__namespace.ɵɵelementStart(5, "input", 18, 19);
            i0__namespace.ɵɵlistener("change", function InputFileComponent_ng_template_5_Template_input_change_5_listener($event) { i0__namespace.ɵɵrestoreView(_r20_1); var _r14 = i0__namespace.ɵɵreference(1); var ctx_r24 = i0__namespace.ɵɵnextContext(); return ctx_r24.onSelectFile($event.target.files, _r14); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("disabled", ctx_r4.disabled);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r4.iconAdd);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r4.linkEnabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("id", ctx_r4.id)("accept", ctx_r4.fileAccept);
            i0__namespace.ɵɵattribute("multiple", ctx_r4.fileLimit > 1 ? true : null);
        }
    }
    function InputFileComponent_ng_template_7_img_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "img", 26);
        }
        if (rf & 2) {
            var file_r25 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵproperty("src", file_r25.preview, i0__namespace.ɵɵsanitizeUrl);
        }
    }
    function InputFileComponent_ng_template_7_ng_container_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 28);
        }
        if (rf & 2) {
            var file_r25 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("innerHtml", file_r25.file.name, i0__namespace.ɵɵsanitizeHtml);
        }
    }
    function InputFileComponent_ng_template_7_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "mat-icon", 16);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(3, InputFileComponent_ng_template_7_ng_container_3_div_3_Template, 1, 1, "div", 27);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var file_r25 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r29 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(ctx_r29.iconFile);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", file_r25.file);
        }
    }
    function InputFileComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵtemplate(0, InputFileComponent_ng_template_7_img_0_Template, 1, 1, "img", 21);
            i0__namespace.ɵɵelementStart(1, "button", 22, 23);
            i0__namespace.ɵɵlistener("click", function InputFileComponent_ng_template_7_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r36_1); var _r30 = i0__namespace.ɵɵreference(8); return _r30.click(); })("itemDrop", function InputFileComponent_ng_template_7_Template_button_itemDrop_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r36_1); var index_r26 = restoredCtx.index; var _r28 = i0__namespace.ɵɵreference(2); var ctx_r37 = i0__namespace.ɵɵnextContext(); return ctx_r37.onReplaceFile($event, index_r26, _r28); })("itemDragOver", function InputFileComponent_ng_template_7_Template_button_itemDragOver_1_listener() { i0__namespace.ɵɵrestoreView(_r36_1); var _r28 = i0__namespace.ɵɵreference(2); var ctx_r38 = i0__namespace.ɵɵnextContext(); return ctx_r38.onDragOver(_r28); })("itemDragLeave", function InputFileComponent_ng_template_7_Template_button_itemDragLeave_1_listener() { i0__namespace.ɵɵrestoreView(_r36_1); var _r28 = i0__namespace.ɵɵreference(2); var ctx_r39 = i0__namespace.ɵɵnextContext(); return ctx_r39.onDragLeave(_r28); });
            i0__namespace.ɵɵtemplate(3, InputFileComponent_ng_template_7_ng_container_3_Template, 4, 2, "ng-container", 4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "button", 20);
            i0__namespace.ɵɵlistener("click", function InputFileComponent_ng_template_7_Template_button_click_4_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r36_1); var index_r26 = restoredCtx.index; var ctx_r40 = i0__namespace.ɵɵnextContext(); return ctx_r40.onDeleteFile(index_r26); });
            i0__namespace.ɵɵelementStart(5, "mat-icon");
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "input", 24, 25);
            i0__namespace.ɵɵlistener("change", function InputFileComponent_ng_template_7_Template_input_change_7_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r36_1); var index_r26 = restoredCtx.index; var _r28 = i0__namespace.ɵɵreference(2); var _r30 = i0__namespace.ɵɵreference(8); var ctx_r41 = i0__namespace.ɵɵnextContext(); return ctx_r41.onReplaceFile($event.target.files, index_r26, _r28, _r30); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var file_r25 = ctx.$implicit;
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", file_r25.preview);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("disabled", ctx_r6.disabled);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", !file_r25.preview);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("disabled", ctx_r6.disabled);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(ctx_r6.iconDelete);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("accept", ctx_r6.fileAccept);
        }
    }
    function InputFileComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r43_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "form", 29);
            i0__namespace.ɵɵlistener("ngSubmit", function InputFileComponent_ng_template_9_Template_form_ngSubmit_0_listener() { i0__namespace.ɵɵrestoreView(_r43_1); var ctx_r42 = i0__namespace.ɵɵnextContext(); return ctx_r42.onSubmitLink(); });
            i0__namespace.ɵɵelementStart(1, "mat-form-field", 30);
            i0__namespace.ɵɵelement(2, "input", 31);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div", 32);
            i0__namespace.ɵɵelementStart(4, "button", 33);
            i0__namespace.ɵɵlistener("click", function InputFileComponent_ng_template_9_Template_button_click_4_listener() { i0__namespace.ɵɵrestoreView(_r43_1); var ctx_r44 = i0__namespace.ɵɵnextContext(); return ctx_r44.onLink(); });
            i0__namespace.ɵɵelementStart(5, "mat-icon");
            i0__namespace.ɵɵtext(6, "arrow_back");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "button", 34);
            i0__namespace.ɵɵelementStart(8, "mat-icon");
            i0__namespace.ɵɵtext(9, "check");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("formGroup", ctx_r8.form);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("placeholder", ctx_r8.placeholderLink);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("disabled", ctx_r8.disabled);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("disabled", ctx_r8.disabled);
        }
    }
    var InputFileComponent = /** @class */ (function () {
        function InputFileComponent(formBuilder, inputFileService) {
            this.formBuilder = formBuilder;
            this.inputFileService = inputFileService;
            this.acceptedFile = new i0.EventEmitter();
            this.deletedFile = new i0.EventEmitter();
            this.rejectedFile = new i0.EventEmitter();
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
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "fileAccept", {
            get: function () {
                return this._fileAccept || this.inputFileService.config.fileAccept || defaultSettings.fileAccept;
            },
            set: function (fileAccept) {
                this._fileAccept = fileAccept;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "fileLimit", {
            get: function () {
                return this._fileLimit || this.inputFileService.config.fileLimit || defaultSettings.fileLimit;
            },
            set: function (fileLimit) {
                this._fileLimit = fileLimit;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "iconAdd", {
            get: function () {
                return this._iconAdd || this.inputFileService.config.iconAdd || defaultSettings.iconAdd;
            },
            set: function (iconAdd) {
                this._iconAdd = iconAdd;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "iconDelete", {
            get: function () {
                return this._iconDelete || this.inputFileService.config.iconDelete || defaultSettings.iconDelete;
            },
            set: function (iconDelete) {
                this._iconDelete = iconDelete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "iconFile", {
            get: function () {
                return this._iconFile || this.inputFileService.config.iconFile || defaultSettings.iconFile;
            },
            set: function (iconFile) {
                this._iconFile = iconFile;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "iconLink", {
            get: function () {
                return this._iconLink || this.inputFileService.config.iconLink || defaultSettings.iconLink;
            },
            set: function (iconLink) {
                this._iconLink = iconLink;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "linkEnabled", {
            get: function () {
                return this._linkEnabled || this.inputFileService.config.linkEnabled || defaultSettings.linkEnabled;
            },
            set: function (linkEnabled) {
                this._linkEnabled = linkEnabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "placeholderLink", {
            get: function () {
                return this._placeholderLink || this.inputFileService.config.placeholderLink || defaultSettings.placeholderLink;
            },
            set: function (placeholderLink) {
                this._placeholderLink = placeholderLink;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "sizeLimit", {
            get: function () {
                return this._sizeLimit || this.inputFileService.config.sizeLimit || defaultSettings.sizeLimit;
            },
            set: function (sizeLimit) {
                this._sizeLimit = sizeLimit;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "canAddFile", {
            get: function () {
                return this.files && this.files.length < this.fileLimit;
            },
            enumerable: false,
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
                link: ['', [i1.Validators.required, urlValidator]]
            });
        };
        return InputFileComponent;
    }());
    InputFileComponent.nextId = 0;
    InputFileComponent.ɵfac = function InputFileComponent_Factory(t) { return new (t || InputFileComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder), i0__namespace.ɵɵdirectiveInject(InputFileService)); };
    InputFileComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputFileComponent, selectors: [["input-file"]], viewQuery: function InputFileComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
            }
        }, inputs: { disabled: "disabled", placeholder: "placeholder", classAnimation: "classAnimation", fileAccept: "fileAccept", fileLimit: "fileLimit", iconAdd: "iconAdd", iconDelete: "iconDelete", iconFile: "iconFile", iconLink: "iconLink", linkEnabled: "linkEnabled", placeholderLink: "placeholderLink", sizeLimit: "sizeLimit" }, outputs: { acceptedFile: "acceptedFile", deletedFile: "deletedFile", rejectedFile: "rejectedFile" }, features: [i0__namespace.ɵɵProvidersFeature([
                {
                    provide: i1.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return InputFileComponent; }),
                    multi: true
                }
            ])], decls: 11, vars: 3, consts: [[1, "input-file-container"], ["class", "mat-orphan-label", 3, "for", "active", "innerHtml", 4, "ngIf"], [1, "files-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["addTemplate", ""], ["fileTemplate", ""], ["linkTemplate", ""], [1, "mat-orphan-label", 3, "for", "innerHtml"], [1, "file-container", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "file-container"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["mat-button", "", "inputFileDropZone", "", "type", "button", 1, "file-button", 3, "disabled", "click", "itemDrop", "itemDragOver", "itemDragLeave"], ["selectButton", ""], [1, "input-icon"], ["mat-button", "", "class", "secondary-button", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["hidden", "", "type", "file", 3, "id", "accept", "change"], ["fileInput", ""], ["mat-button", "", "type", "button", 1, "secondary-button", 3, "disabled", "click"], ["class", "image-preview", 3, "src", 4, "ngIf"], ["mat-button", "", "inputFileDropZone", "", "type", "button", 1, "replace-button", 3, "disabled", "click", "itemDrop", "itemDragOver", "itemDragLeave"], ["replaceButton", ""], ["hidden", "", "type", "file", 3, "accept", "change"], ["fileReplace", ""], [1, "image-preview", 3, "src"], ["class", "file-name text-truncate", 3, "innerHtml", 4, "ngIf"], [1, "file-name", "text-truncate", 3, "innerHtml"], ["novalidate", "", 1, "form-link", "slide-in-up", 3, "formGroup", "ngSubmit"], [1, "input-link"], ["matInput", "", "formControlName", "link", 3, "placeholder"], [1, "form-link-button"], ["mat-button", "", "type", "button", 3, "disabled", "click"], ["mat-button", "", "type", "submit", 3, "disabled"]], template: function InputFileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, InputFileComponent_label_1_Template, 1, 4, "label", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵtemplate(3, InputFileComponent_ng_container_3_Template, 3, 6, "ng-container", 3);
                i0__namespace.ɵɵtemplate(4, InputFileComponent_ng_container_4_Template, 3, 2, "ng-container", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(5, InputFileComponent_ng_template_5_Template, 7, 6, "ng-template", null, 5, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(7, InputFileComponent_ng_template_7_Template, 9, 6, "ng-template", null, 6, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(9, InputFileComponent_ng_template_9_Template, 10, 4, "ng-template", null, 7, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.placeholder);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.files);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.canAddFile);
            }
        }, directives: [i3__namespace.NgIf, i3__namespace.NgForOf, i3__namespace.NgClass, i3__namespace.NgTemplateOutlet, i4__namespace.MatButton, DropZoneDirective, i6__namespace.MatIcon, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i7__namespace.MatFormField, i8__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName], styles: [".input-file-container[_ngcontent-%COMP%]{position:relative}.input-file-container[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%], .input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%]{flex:1}.input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{flex-direction:column;margin-right:1rem;overflow:hidden}.input-file-container[_ngcontent-%COMP%]   .replace-button[_ngcontent-%COMP%]{flex:1;width:10rem}.input-file-container[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:focus{outline:0}.input-file-container[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:calc(10rem - 2.5rem)}.input-file-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{position:absolute;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container[_ngcontent-%COMP%]   .form-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-link[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]{display:flex;flex-direction:row}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:calc(10rem / 2);width:calc(10rem / 2)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label.active[_ngcontent-%COMP%]{transform:scale(.75)}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounce-in[_ngcontent-%COMP%]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes slideInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes slideInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.slide-in-up[_ngcontent-%COMP%]{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-name:slideInUp;animation-name:slideInUp}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputFileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'input-file',
                        templateUrl: './input-file.component.html',
                        styleUrls: ['./input-file.scss'],
                        providers: [
                            {
                                provide: i1.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return InputFileComponent; }),
                                multi: true
                            }
                        ]
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }, { type: InputFileService }]; }, { disabled: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], classAnimation: [{
                    type: i0.Input
                }], fileAccept: [{
                    type: i0.Input
                }], fileLimit: [{
                    type: i0.Input
                }], iconAdd: [{
                    type: i0.Input
                }], iconDelete: [{
                    type: i0.Input
                }], iconFile: [{
                    type: i0.Input
                }], iconLink: [{
                    type: i0.Input
                }], linkEnabled: [{
                    type: i0.Input
                }], placeholderLink: [{
                    type: i0.Input
                }], sizeLimit: [{
                    type: i0.Input
                }], acceptedFile: [{
                    type: i0.Output
                }], deletedFile: [{
                    type: i0.Output
                }], rejectedFile: [{
                    type: i0.Output
                }], fileInput: [{
                    type: i0.ViewChild,
                    args: ['fileInput', { static: false }]
                }] });
    })();

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
        return InputFileModule;
    }());
    InputFileModule.ɵfac = function InputFileModule_Factory(t) { return new (t || InputFileModule)(); };
    InputFileModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: InputFileModule });
    InputFileModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            InputFileService
        ], imports: [[
                i3.CommonModule,
                i1.FormsModule,
                i4.MatButtonModule,
                i7.MatFormFieldModule,
                i6.MatIconModule,
                i8.MatInputModule,
                i1.ReactiveFormsModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputFileModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DropZoneDirective,
                            InputFileComponent
                        ],
                        imports: [
                            i3.CommonModule,
                            i1.FormsModule,
                            i4.MatButtonModule,
                            i7.MatFormFieldModule,
                            i6.MatIconModule,
                            i8.MatInputModule,
                            i1.ReactiveFormsModule
                        ],
                        exports: [
                            InputFileComponent
                        ],
                        providers: [
                            InputFileService
                        ],
                        entryComponents: [InputFileComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(InputFileModule, { declarations: [DropZoneDirective,
                InputFileComponent], imports: [i3.CommonModule,
                i1.FormsModule,
                i4.MatButtonModule,
                i7.MatFormFieldModule,
                i6.MatIconModule,
                i8.MatInputModule,
                i1.ReactiveFormsModule], exports: [InputFileComponent] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputFileComponent = InputFileComponent;
    exports.InputFileModule = InputFileModule;
    exports.InputFileService = InputFileService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-input-file.umd.js.map
