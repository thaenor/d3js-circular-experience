class Model {
  constructor(name, number, tablet, tabletPercentage, smartphone, smartphonePercentage){
    this._name = name;
    this._number = number;
    this._tablet = tablet;
    this._tabletPercentage = tabletPercentage;
    this._smartphone = smartphone;
    this._smartphonePercentage = smartphonePercentage;
  }

  get name() { return this._name; }
  get number() { return this._number; }
  get tablet() { return this._tablet; }
  get tabletPercentage() { return this._tabletPercentage; }
  get smartphone() { return this._smartphone; }
  get smartphonePercentage() { return this._smartphonePercentage; }
}
