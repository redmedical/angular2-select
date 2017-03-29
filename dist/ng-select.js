"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var select_component_1 = require("./select.component");
var select_dropdown_component_1 = require("./select-dropdown.component");
__export(require("./select.component"));
var SelectModule = (function () {
    function SelectModule() {
    }
    return SelectModule;
}());
SelectModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    select_component_1.SelectComponent,
                    select_dropdown_component_1.SelectDropdownComponent
                ],
                exports: [
                    select_component_1.SelectComponent
                ],
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ]
            },] },
];
/** @nocollapse */
SelectModule.ctorParameters = function () { return []; };
exports.SelectModule = SelectModule;
