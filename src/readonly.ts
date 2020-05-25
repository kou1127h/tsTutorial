export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisa = new VisaCard('hayashi');

console.log(myVisa.owner);
