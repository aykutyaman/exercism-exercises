"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("./hello-world");
describe('Hello World', () => {
    it('says hello world with no name', () => {
        expect(hello_world_1.default.hello()).toEqual('Hello, World!');
    });
    it('says hello to bob', () => {
        expect(hello_world_1.default.hello('Bob')).toEqual('Hello, Bob!');
    });
    it('says hello to sally', () => {
        expect(hello_world_1.default.hello('Sally')).toEqual('Hello, Sally!');
    });
});
//# sourceMappingURL=hello-world.test.js.map