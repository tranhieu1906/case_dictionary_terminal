"use strict";
exports.__esModule = true;
exports.DictionaryManager = void 0;
var readlineSync = require("readline-sync");
var DictionaryManager = /** @class */ (function () {
    function DictionaryManager() {
    }
    DictionaryManager.add = function (dictionary) {
        this.dictionary.push(dictionary);
    };
    DictionaryManager.showList = function () {
        console.table(this.dictionary);
    };
    DictionaryManager.getTotalWord = function () {
        return this.dictionary.length;
    };
    DictionaryManager.searchByName = function (name) {
        var result = this.dictionary.filter(function (element) {
            return element.getWord() == name;
        });
        console.table(result);
    };
    // edit
    DictionaryManager.editWord = function (word, word_1) {
        this.dictionary.filter(function (element) {
            if (element.getWord() == word) {
                element.setWord(word_1);
            }
            else {
                console.log("khong tim thay");
            }
        });
    };
    DictionaryManager.editPhonetic = function (phonetic_1, phonetic_2) {
        this.dictionary.filter(function (element) {
            if (element.getWord() == phonetic_1) {
                element.setPhonetic(phonetic_2);
            }
            else {
                console.log("khong tim thay");
            }
        });
    };
    DictionaryManager.editNoun = function (noun_1, noun_2) {
        this.dictionary.filter(function (element) {
            if (element.getWord() == noun_1) {
                element.setNoun(noun_2);
            }
            else {
                console.log("khong tim thay");
            }
        });
    };
    DictionaryManager.editAdj = function (adj_1, adj_2) {
        this.dictionary.filter(function (element) {
            if (element.getWord() == adj_1) {
                element.setAdj(adj_2);
            }
            else {
                console.log("khong tim thay");
            }
        });
    };
    DictionaryManager.editVerb = function (verb_1, verb_2) {
        this.dictionary.filter(function (element) {
            if (element.getWord() == verb_1) {
                element.setVerb(verb_2);
            }
            else {
                console.log("khong tim thay");
            }
        });
    };
    DictionaryManager.editSynonym = function (synonym_1, synonym_2) {
        this.dictionary.filter(function (element) {
            if (element.getWord() == synonym_1) {
                element.setSynonym(synonym_2);
            }
            else {
                console.log("khong tim thay");
            }
        });
    };
    // delete 
    DictionaryManager.deleteWords = function (words) {
        var _this = this;
        this.dictionary.filter(function (item, index) {
            if (item.getWord() === words) {
                _this.dictionary.splice(index, 1);
            }
            return _this.dictionary;
        });
    };
    // dang nhap
    DictionaryManager.signIn = function (user, pas) {
        if (user == this.userName && pas == this.password) {
            console.log("Login....");
            return DictionaryManager.flag = true;
        }
        else {
            console.log("đăng nhập lại");
            var useName = readlineSync.question('Nhập tên đăng nhập:  ');
            var password = readlineSync.question('PASSWORD: ', { hideEchoBack: true });
            DictionaryManager.signIn(useName, password);
            return DictionaryManager.flag = false;
        }
    };
    DictionaryManager.dictionary = [];
    DictionaryManager.userName = "admin";
    DictionaryManager.password = 1;
    DictionaryManager.flag = false;
    return DictionaryManager;
}());
exports.DictionaryManager = DictionaryManager;
