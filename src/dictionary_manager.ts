import { Dictionary } from "./dictionary";
import * as readlineSync from "readline-sync";

export class DictionaryManager {
  static dictionary: Dictionary[] = [];
  static userName: string = "admin";
  static password: any = 1;
  static flag = false;
  constructor() {}

  static add(dictionary: Dictionary): void {
    this.dictionary.push(dictionary);
  }

  static showList() {
    console.table(this.dictionary);
  }

  static getTotalWord(): number {
    return this.dictionary.length;
  }

  static searchByName(name: string): void {
    let result = this.dictionary.filter((element) => {
      return element.getWord() == name;
    });
    if (!result) {
      console.table(result);
    } else {
      console.log("khong tim thay");
    }
  }
  // edit
  static editWord(word: string, word_1: string): void {
    this.dictionary.filter((element) => {
      if (element.getWord() == word) {
        element.setWord(word_1);
      } else {
        console.log("khong tim thay");
      }
    });
  }
  static editPhonetic(phonetic_1: string, phonetic_2: string): void {
    this.dictionary.filter((element) => {
      if (element.getWord() == phonetic_1) {
        element.setPhonetic(phonetic_2);
      } else {
        console.log("khong tim thay");
      }
    });
  }
  static editNoun(noun_1: string, noun_2: string): void {
    this.dictionary.filter((element) => {
      if (element.getWord() == noun_1) {
        element.setNoun(noun_2);
      } else {
        console.log("khong tim thay");
      }
    });
  }
  static editAdj(adj_1: string, adj_2: string): void {
    this.dictionary.filter((element) => {
      if (element.getWord() == adj_1) {
        element.setAdj(adj_2);
      } else {
        console.log("khong tim thay");
      }
    });
  }
  static editVerb(verb_1: string, verb_2: string): void {
    this.dictionary.filter((element) => {
      if (element.getWord() == verb_1) {
        element.setVerb(verb_2);
      } else {
        console.log("khong tim thay");
      }
    });
  }
  static editSynonym(synonym_1: string, synonym_2: string): void {
    this.dictionary.filter((element) => {
      if (element.getWord() == synonym_1) {
        element.setSynonym(synonym_2);
      } else {
        console.log("khong tim thay");
      }
    });
  }
  // delete
  static deleteWords(words: string) {
    this.dictionary.filter((item, index) => {
      if (item.getWord() === words) {
        this.dictionary.splice(index, 1);
      }
      return this.dictionary;
    });
  }
  // dang nhap
  static signIn(
    user: string | undefined | number,
    pas: string | undefined | number
  ) {
    if (user == this.userName && pas == this.password) {
      console.log("Login....");
      return (DictionaryManager.flag = true);
    } else {
      console.log("đăng nhập lại");
      let useName = readlineSync.question("Nhập tên đăng nhập:  ");
      let password = readlineSync.question("PASSWORD: ", {
        hideEchoBack: true,
      });
      DictionaryManager.signIn(useName, password);
      return (DictionaryManager.flag = false);
    }
  }
}
