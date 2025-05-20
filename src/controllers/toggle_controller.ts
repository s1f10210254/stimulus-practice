import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["status"];
  static values = {
    active: Boolean,
  };

  declare statusTarget: HTMLElement;
  declare activeValue: boolean;

  connect() {
    console.log("ToggleController connected");
    this.activeValue = false;
    this.updateView();
  }

  toggle() {
    console.log("Toggling state");
    this.activeValue = !this.activeValue;
    this.updateView();
  }

  updateView() {
    console.log("Updating view");
    this.statusTarget.textContent = `状態: ${
      this.activeValue ? "表示中" : "非表示中"
    }`;
    (this.element as HTMLElement).style.backgroundColor = this.activeValue
      ? "#e0ffe0"
      : "#f0f0f0";
  }
}
