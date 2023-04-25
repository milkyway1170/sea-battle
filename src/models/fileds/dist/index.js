"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.setShip = exports.temporarySetShip = exports.$fields = void 0;
var mock_data_1 = require("@/constants/mock-data");
var enums_1 = require("@/types/enums");
var effector_1 = require("effector");
var selected_ship_1 = require("../selected-ship");
var ships_list_1 = require("../ships-list");
exports.$fields = effector_1.createStore(mock_data_1.DEFAULT_FIELDS);
exports.temporarySetShip = effector_1.createEvent();
exports.setShip = effector_1.createEvent();
var temporarySetShipFn = function (state, data) {
    var field = data.fieldName === enums_1.PlayersEnum.firstPlayer
        ? state.firstPlayerField
        : state.secondPlayerField;
    var position = data.position, length = data.length, orientation = data.orientation;
    var newField = field.map(function (item) {
        if (orientation === enums_1.OrientationEnum.Horizontal) {
            if (item.position.y >= position.y &&
                item.position.y < position.y + length &&
                item.position.x === position.x &&
                item.cellStatus !== enums_1.CellStatusEnum.AliveShip &&
                item.isTemporary)
                return __assign(__assign({}, item), { cellStatus: enums_1.CellStatusEnum.AliveShip, isTemporary: true });
            if (Math.abs(item.position.x - position.x) <= 1 &&
                position.y - 1 <= item.position.y &&
                item.position.y < position.y + length + 1)
                return __assign(__assign({}, item), { cellStatus: enums_1.CellStatusEnum.Buffer, isTemporary: true });
        }
        else {
            if (item.position.x >= position.x &&
                item.position.x < position.x + length &&
                item.position.y === position.y &&
                item.cellStatus !== enums_1.CellStatusEnum.AliveShip &&
                item.isTemporary)
                return __assign(__assign({}, item), { cellStatus: enums_1.CellStatusEnum.AliveShip, isTemporary: true });
            if (Math.abs(item.position.y - position.y) <= 1 &&
                position.x - 1 <= item.position.x &&
                item.position.x < position.x + length + 1)
                return __assign(__assign({}, item), { cellStatus: enums_1.CellStatusEnum.Buffer, isTemporary: true });
        }
        if (item.isTemporary)
            return __assign(__assign({}, item), { cellStatus: enums_1.CellStatusEnum.Empty, isTemporary: false });
        return item;
    });
    return data.fieldName === enums_1.PlayersEnum.firstPlayer
        ? __assign(__assign({}, state), { firstPlayerField: newField }) : __assign(__assign({}, state), { secondPlayerField: newField });
};
var setShipFn = function (state, data) {
    console.log('setShipFn', data);
    ships_list_1.setIsPlaced(data.shipName);
    selected_ship_1.setSelectedShip(null);
    var field = data.fieldName === enums_1.PlayersEnum.firstPlayer
        ? state.firstPlayerField.map(function (item) {
            return __assign(__assign({}, item), { isTemporary: false });
        })
        : state.secondPlayerField.map(function (item) {
            return __assign(__assign({}, item), { isTemporary: false });
        });
    return data.fieldName === enums_1.PlayersEnum.firstPlayer
        ? __assign(__assign({}, state), { firstPlayerField: field }) : __assign(__assign({}, state), { secondPlayerField: field });
};
exports.$fields.on(exports.temporarySetShip, function (state, data) { return temporarySetShipFn(state, data); });
exports.$fields.on(exports.setShip, function (state, data) { return setShipFn(state, data); });
