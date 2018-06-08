"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_entity_1 = require("./hero.entity");
exports.HeroProvider = {
    provide: 'HeroRepository',
    useFactory: (connection) => connection.getRepository(hero_entity_1.HeroEntity),
    inject: ['TypeORMInstance'],
};
//# sourceMappingURL=hero.provider.js.map