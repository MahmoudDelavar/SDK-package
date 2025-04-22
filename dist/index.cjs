"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  createClient: () => createClient
});
module.exports = __toCommonJS(index_exports);

// src/client/client.ts
var import_axios = __toESM(require("axios"));

// src/services/user/user.mapper.ts
var mappers = {
  get: (response) => ({
    email: response.email,
    id: response.id,
    name: response.name,
    phone: response.phone,
    username: response.username,
    website: response.website
  })
};

// src/services/user/user.services.ts
var createUserServices = (client2) => ({
  get: async ({ id }) => {
    const response = await client2.get(`/users/${id}`);
    return mappers.get(response.data);
  }
});

// src/client/client.ts
var client = import_axios.default.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
var createClient = () => {
  return {
    userServices: createUserServices(client)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createClient
});
