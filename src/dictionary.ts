export class Dictionary {
  private word: string;
  private phonetic: string;
  private noun: string;
  private adj: string;
  private verb: string;
  private synonym: string;
  private translate: string;
  constructor(
    word: string,
    phonetic: string,
    noun: string,
    adj: string,
    verb: string,
    synonym: string,
    translate: string,
  ) {
    this.word = word;
    this.phonetic = phonetic;
    this.noun = noun;
    this.adj = adj;
    this.verb = verb;
    this.synonym = synonym;
    this.translate = translate;
  }

  getWord(): string {
    return this.word;
  }
  getPhonetic(): string {
    return this.phonetic;
  }
  getNoun(): string {
    return this.noun;
  }
  getAdj(): string {
    return this.adj;
  }
  getVerb(): string {
    return this.verb;
  }
  getSynonym(): string {
    return this.synonym;
  }
  getTranslation(): string {
    return this.translate;
  }
  setWord(word: string): void {
    this.word = word;
  }
  setPhonetic(phonetic: string): void {
    this.phonetic = phonetic;
  }
  setNoun(noun: string): void {
    this.noun = noun;
  }
  setAdj(adj: string): void {
    this.adj = adj;
  }
  setVerb(verb: string): void {
    this.verb = verb;
  }
  setSynonym(synonym: string): void {
    this.synonym = synonym;
  }
  setTransition(translate: string): void {
    this.translate = translate;
  }
}
