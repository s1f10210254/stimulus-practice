import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["countDisplay"];
  static values = {
    count: Number,
  };

  declare countValue: number;
  declare hasCountDisplayTarget: boolean;
  declare countDisplayTarget: HTMLElement;

  connect() {
    console.log("CounterController connected");
    this.countValue = 0;
    this.updateView();
  }

  increment() {
    console.log("Incrementing count");
    this.countValue++;
    this.updateView();
  }

  updateView() {
    console.log("Updating view");
    if (this.hasCountDisplayTarget) {
      this.countDisplayTarget.textContent = this.countValue.toString();
    }

    if (this.countValue >= 10) {
      (this.element as HTMLElement).style.backgroundColor = "#ffe0e0";
    } else {
      (this.element as HTMLElement).style.backgroundColor = "transparent";
    }
  }
}
