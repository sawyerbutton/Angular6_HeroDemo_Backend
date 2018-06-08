"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const inject_decorator_1 = require("@nestjs/common/utils/decorators/inject.decorator");
const typeorm_1 = require("typeorm");
const hero_entity_1 = require("./hero.entity");
let AppService = class AppService {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }
    getAllHero() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.heroRepository.find();
        });
    }
    getHeroById(heroId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.heroRepository.findOne({ where: { id: heroId } });
        });
    }
    addHero(hero) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.heroRepository.save(hero);
        });
    }
    updateHero(heroId, newHero) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(hero_entity_1.HeroEntity).where('id = :id', { id: heroId })
                .set(newHero).execute();
        });
    }
    deleteHero(heroId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .delete()
                .from(hero_entity_1.HeroEntity)
                .where('id = :id', { id: heroId })
                .execute();
            return yield this.heroRepository.findOne({ where: { id: heroId } });
        });
    }
    searchHero(heroName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.heroRepository.find({ where: { name: heroName } });
        });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, inject_decorator_1.Inject('HeroRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map