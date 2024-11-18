"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWhereConditions = void 0;
const constant_1 = require("./constant");
const GetWhereConditions = (filters) => {
    if (!filters)
        return {}; // Handle undefined or null filters early
    const { search } = filters, filterData = __rest(filters, ["search"]);
    const andConditions = [];
    // Handle search conditions
    if (search) {
        andConditions.push({
            OR: constant_1.blogs_search_condition_keys.map((field) => ({
                [field]: {
                    contains: search,
                    mode: "insensitive",
                },
            })),
        });
    }
    // Handle other filter conditions
    const filterKeys = Object.keys(filterData);
    if (filterKeys.length > 0) {
        const filterConditions = filterKeys.map((key) => ({
            [key]: {
                equals: filterData[key], // Ensure type safety
            },
        }));
        andConditions.push({ AND: filterConditions });
    }
    // Return constructed conditions or an empty object
    return andConditions.length > 0 ? { AND: andConditions } : {};
};
exports.GetWhereConditions = GetWhereConditions;
