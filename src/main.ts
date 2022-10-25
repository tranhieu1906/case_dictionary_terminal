import { Dictionary } from "./dictionary";
import { DictionaryManager } from "./dictionary_manager";
import * as readlineSync from "readline-sync";
import * as fs from "fs";
let isExist = false;

function menuUser() {
  console.log("1: Hiển thị danh sách");
  console.log("2: Tìm theo tên  ");
  console.log("3: Đăng nhập");
  console.log("0: Thoát");
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
  console.log("1: Thêm từ mới ");
  console.log("2: Hiển thị danh sách");
  console.log("3: Tìm theo tên  ");
  console.log("4: Sửa từ ");
  console.log("5: xóa từ ");
  console.log("6: Đăng Xuất");
  console.log("0: Thoát");
}
function validate(x: string): void {
  while (x == "") {
    x = readlineSync.question("Bạn phải nhập trường này ?");
    if (x !== "") {
      break;
    }
  }
}
while (!isExist) {
  if (DictionaryManager.flag === false) {
    menuUser();
    let number1 = readlineSync.question("Chọn chức năng:  ");
    switch (number1) {
      case "0":
        isExist = true;
        break;
      case "1":
        DictionaryManager.showList();
        break;
      case "2":
        let name = readlineSync.question("Nhập tên cần tìm:  ");
        while (name == "") {
          let name = readlineSync.question("Nhập từ cần tìm ?");
          if (name !== "") {
            break;
          }
        }
        DictionaryManager.searchByName(name.toLowerCase().trim());
        break;

      case "3":
        let useName = readlineSync.question("Nhập tên đăng nhập:  ");
        let password = readlineSync.question("PASSWORD: ", {
          hideEchoBack: true,
        });
        DictionaryManager.signIn(useName, password);
        break;
    }
  } else {
    menuAdmins();
    let number = readlineSync.question("Chọn chức năng:");
    switch (number) {
      case "0":
        isExist = true;
        break;
      case "1":
        let word = readlineSync.question("thêm từ mới ?");
        while (word == "") {
          word = readlineSync.question("Nhập lại từ mới ?");
          if (word !== "") {
            break;
          }
        }

        let phonetic = readlineSync.question("thêm cách phát âm ?");
        while (phonetic == "") {
          phonetic = readlineSync.question("nhập lại cách phát âm ?");
          if (phonetic !== "") {
            break;
          }
        }
        let noun = readlineSync.question("thêm danh từ ?");

        let adj = readlineSync.question("thêm tính từ ?");

        let verb = readlineSync.question("thêm động từ ?");

        let synonymous = readlineSync.question("thêm từ đồng nghĩa ?");

        let translate = readlineSync.question("thêm nghĩa của từ ?");
        let dictionary = new Dictionary(
          word.toLowerCase().trim(),
          phonetic.toLowerCase().trim(),
          noun.toLowerCase().trim(),
          adj.toLowerCase().trim(),
          verb.toLowerCase().trim(),
          synonymous.toLowerCase().trim(),
          translate.toLowerCase().trim()
        );
        DictionaryManager.add(dictionary);

        break;

      case "2":
        DictionaryManager.showList();
        break;
      case "3":
        let name = readlineSync.question("Nhập tên cần tìm:  ");
        while (name == "") {
          let name = readlineSync.question("Nhập lại tên cần tìm ?");
          if (name !== "") {
            break;
          }
        }
        DictionaryManager.searchByName(name.toLowerCase().trim());
        break;

      case "4":
        submenu();
        let number = readlineSync.question("Chọn chức năng:");
        switch (number) {
          case "1":
            let word_1 = readlineSync.question("Chọn từ muốn sửa?  ");
            validate(word_1);
            let word_2 = readlineSync.question("Nhập từ cần sửa ?  ");
            validate(word_2);
            DictionaryManager.editWord(
              word_1.toLowerCase().trim(),
              word_2.toLowerCase().trim()
            );
            break;
          case "2":
            let phonetic_1 = readlineSync.question("Chọn từ muốn sửa ?");
            validate(phonetic_1);
            let phonetic_2 = readlineSync.question(
              "Nhập cách phát âm cần sửa ? "
            );
            validate(phonetic_2);
            DictionaryManager.editPhonetic(
              phonetic_1.toLowerCase().trim(),
              phonetic_2.toLowerCase().trim()
            );
            break;
          case "3":
            let noun_1 = readlineSync.question("Chọn từ muốn sửa?  ");
            validate(noun_1);
            let noun_2 = readlineSync.question("Nhập danh từ cần sửa ? ");
            validate(noun_2);
            DictionaryManager.editNoun(
              noun_1.toLowerCase().trim(),
              noun_2.toLowerCase().trim()
            );
            break;
          case "4":
            let adj_1 = readlineSync.question("Chọn từ muốn sửa?  ");
            validate(adj_1);
            let adj_2 = readlineSync.question("Nhập tính từ cần sửa ? ");
            validate(adj_2);
            DictionaryManager.editAdj(
              adj_1.toLowerCase().trim(),
              adj_2.toLowerCase().trim()
            );
            break;
          case "5":
            let verb_1 = readlineSync.question("Chọn từ muốn sửa?  ");
            validate(verb_1);
            let verb_2 = readlineSync.question("Nhập động từ cần sửa ? ");
            validate(verb_2);
            DictionaryManager.editVerb(
              verb_1.toLowerCase().trim(),
              verb_2.toLowerCase().trim()
            );
            break;
          case "6":
            let synonym_1 = readlineSync.question("Chọn từ muốn sửa?  ");
            validate(synonym_1);
            let synonym_2 = readlineSync.question(
              "Nhập từ đồng nghĩa cần sửa ? "
            );
            validate(synonym_2);
            DictionaryManager.editSynonym(
              synonym_1.toLowerCase().trim(),
              synonym_2.toLowerCase().trim()
            );
            break;
        }

        break;
      case "5":
        if (DictionaryManager.flag == true) {
          let deleteWord = readlineSync.question("Nhập từ cần xóa:  ");
          DictionaryManager.deleteWords(deleteWord.toLowerCase().trim());
        }
        break;
      case "6":
        if (DictionaryManager.flag == true) {
          DictionaryManager.flag = false;
          console.log("Đã đăng xuất thành công !");
        }
        break;
    }
  }
}
