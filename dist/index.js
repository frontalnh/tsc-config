"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
const PlainPerson_1 = require("@root/PlainPerson");
const TypedPerson_1 = require("@root/TypedPerson");
const plainPerson = new PlainPerson_1.PlainPerson();
const typedPerson = new TypedPerson_1.TypedPerson();
plainPerson.say();
typedPerson.say();
//# sourceMappingURL=index.js.map