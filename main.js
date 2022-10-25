"use strict";
exports.__esModule = true;
var dictionary_1 = require("./dictionary");
var dictionary_manager_1 = require("./dictionary_manager");
var readlineSync = require("readline-sync");
var isExist = false;
function menuUser() {
    console.log('1: Hiển thị danh sách');
    console.log('2: Tìm theo tên  ');
    console.log('3: Đăng nhập');
    console.log('0: Thoát');
}
function submenu() {
    console.log("1: sửa tên");
    console.log("2: sửa cách phát âm");
    console.log("3: sửa danh từ");
    console.log("4: sửa tính từ");
    console.log("5: sửa động từ");
    console.log("6: sửa từ tương đồng");
    console.log("0: Quay lại");
}
function menuAdmins() {
    console.log('1: Thêm từ mới ');
    console.log('2: Hiển thị danh sách');
    console.log('3: Tìm theo tên  ');
    console.log('4: Sửa từ ');
    console.log('5: xóa từ ');
    console.log('6: Đăng Xuất');
    console.log('0: Thoát');
}
function validate(x) {
    while (x == "") {
        x = readlineSync.question('you must re-enter this field ?');
        if (x !== "") {
            break;
        }
    }
}
while (!isExist) {
    if (dictionary_manager_1.DictionaryManager.flag === false) {
        menuUser();
        var number1 = readlineSync.question('Chọn chức năng:  ');
        switch (number1) {
            case "0":
                isExist = true;
                break;
            case "1":
                dictionary_manager_1.DictionaryManager.showList();
                break;
            case "2":
                var name_1 = readlineSync.question('Nhập tên cần tìm:  ');
                while (name_1 == "") {
                    var name_2 = readlineSync.question('re-enter the search name ?');
                    if (name_2 !== "") {
                        break;
                    }
                }
                dictionary_manager_1.DictionaryManager.searchByName(name_1.toLowerCase().trim());
                break;
            case "3":
                var useName = readlineSync.question('Nhập tên đăng nhập:  ');
                var password = readlineSync.question('PASSWORD: ', { hideEchoBack: true });
                dictionary_manager_1.DictionaryManager.signIn(useName, password);
                break;
        }
    }
    else {
        menuAdmins();
        var number = readlineSync.question('Chọn chức năng:');
        switch (number) {
            case "0":
                isExist = true;
                break;
            case "1":
                var word = readlineSync.question('add new words ?');
                while (word == "") {
                    word = readlineSync.question('add new words again ?');
                    if (word !== "") {
                        break;
                    }
                }
                var phonetic = readlineSync.question('add pronunciation ?');
                while (phonetic == "") {
                    phonetic = readlineSync.question('add pronunciation again ?');
                    if (phonetic !== "") {
                        break;
                    }
                }
                var noun = readlineSync.question('add Noun ?');
                while (noun == "") {
                    noun = readlineSync.question('add Noun again ?');
                    if (noun !== "") {
                        break;
                    }
                }
                var adj = readlineSync.question('add Adj ?');
                while (adj == "") {
                    adj = readlineSync.question('add Adj again ?');
                    if (adj !== "") {
                        break;
                    }
                }
                var verb = readlineSync.question('add Verb ?');
                while (verb == "") {
                    verb = readlineSync.question('add Verb again ?');
                    if (verb !== "") {
                        break;
                    }
                }
                var synonymous = readlineSync.question('add synonymous ?');
                while (synonymous == "") {
                    synonymous = readlineSync.question('add synonymous again ?');
                    if (synonymous !== "") {
                        break;
                    }
                }
                var student = new dictionary_1.Dictionary(word.toLowerCase().trim(), phonetic.toLowerCase().trim(), noun.toLowerCase().trim(), adj.toLowerCase().trim(), verb.toLowerCase().trim(), synonymous.toLowerCase().trim());
                dictionary_manager_1.DictionaryManager.add(student);
                break;
            case "2":
                dictionary_manager_1.DictionaryManager.showList();
                break;
            case "3":
                var name_3 = readlineSync.question('Nhập tên cần tìm:  ');
                while (name_3 == "") {
                    var name_4 = readlineSync.question('re-enter the search name ?');
                    if (name_4 !== "") {
                        break;
                    }
                }
                dictionary_manager_1.DictionaryManager.searchByName(name_3.toLowerCase().trim());
                break;
            case "4":
                submenu();
                var number_1 = readlineSync.question('Chọn chức năng:');
                switch (number_1) {
                    case "1":
                        var word_1 = readlineSync.question('Select the word you want to correct?  ');
                        validate(word_1);
                        var word_2 = readlineSync.question('enter edit word ?  ');
                        validate(word_2);
                        dictionary_manager_1.DictionaryManager.editWord(word_1.toLowerCase().trim(), word_2.toLowerCase().trim());
                        break;
                    case "2":
                        var phonetic_1 = readlineSync.question('Select the word you want to correct?  ');
                        validate(phonetic_1);
                        var phonetic_2 = readlineSync.question('enter edit phonetic ?  ');
                        validate(phonetic_2);
                        dictionary_manager_1.DictionaryManager.editPhonetic(phonetic_1.toLowerCase().trim(), phonetic_2.toLowerCase().trim());
                        break;
                    case "3":
                        var noun_1 = readlineSync.question('Select the word you want to correct?  ');
                        validate(noun_1);
                        var noun_2 = readlineSync.question('enter edit noun ?  ');
                        validate(noun_2);
                        dictionary_manager_1.DictionaryManager.editNoun(noun_1.toLowerCase().trim(), noun_2.toLowerCase().trim());
                        break;
                    case "4":
                        var adj_1 = readlineSync.question('Select the word you want to correct?  ');
                        validate(adj_1);
                        var adj_2 = readlineSync.question('enter edit adj ?  ');
                        validate(adj_2);
                        dictionary_manager_1.DictionaryManager.editAdj(adj_1.toLowerCase().trim(), adj_2.toLowerCase().trim());
                        break;
                    case "5":
                        var verb_1 = readlineSync.question('Select the word you want to correct?  ');
                        validate(verb_1);
                        var verb_2 = readlineSync.question('enter edit verb ?  ');
                        validate(verb_2);
                        dictionary_manager_1.DictionaryManager.editVerb(verb_1.toLowerCase().trim(), verb_2.toLowerCase().trim());
                        break;
                    case "6":
                        var synonym_1 = readlineSync.question('Select the word you want to correct?  ');
                        validate(synonym_1);
                        var synonym_2 = readlineSync.question('enter edit synonym ?  ');
                        validate(synonym_2);
                        dictionary_manager_1.DictionaryManager.editSynonym(synonym_1.toLowerCase().trim(), synonym_2.toLowerCase().trim());
                        break;
                }
                break;
            case "5":
                if (dictionary_manager_1.DictionaryManager.flag == true) {
                    var deleteWord = readlineSync.question('Nhập từ cần xóa:  ');
                    dictionary_manager_1.DictionaryManager.deleteWords(deleteWord.toLowerCase().trim());
                }
                break;
            case "6":
                if (dictionary_manager_1.DictionaryManager.flag == true) {
                    dictionary_manager_1.DictionaryManager.flag = false;
                    console.log("Đã đăng xuất thành công !");
                }
                break;
        }
    }
}
