"use strict";
exports.__esModule = true;
exports.Dictionary = void 0;
var Dictionary = /** @class */ (function () {
    function Dictionary(word, phonetic, noun, adj, verb, synonym, translate) {
        this.word = word;
        this.phonetic = phonetic;
        this.noun = noun;
        this.adj = adj;
        this.verb = verb;
        this.synonym = synonym;
        this.translate = translate;
    }
    Dictionary.prototype.getWord = function () {
        return this.word;
    };
    Dictionary.prototype.getPhonetic = function () {
        return this.phonetic;
    };
    Dictionary.prototype.getNoun = function () {
        return this.noun;
    };
    Dictionary.prototype.getAdj = function () {
        return this.adj;
    };
    Dictionary.prototype.getVerb = function () {
        return this.verb;
    };
    Dictionary.prototype.getSynonym = function () {
        return this.synonym;
    };
    Dictionary.prototype.getTranslation = function () {
        return this.translate;
    };
    Dictionary.prototype.setWord = function (word) {
        this.word = word;
    };
    Dictionary.prototype.setPhonetic = function (phonetic) {
        this.phonetic = phonetic;
    };
    Dictionary.prototype.setNoun = function (noun) {
        this.noun = noun;
    };
    Dictionary.prototype.setAdj = function (adj) {
        this.adj = adj;
    };
    Dictionary.prototype.setVerb = function (verb) {
        this.verb = verb;
    };
    Dictionary.prototype.setSynonym = function (synonym) {
        this.synonym = synonym;
    };
    Dictionary.prototype.setTransition = function (translate) {
        this.translate = translate;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
