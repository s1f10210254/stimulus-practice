import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name"];
  nameTarget: any;

  greet() {
    const name = this.nameTarget.value;
    alert(`こんにちは、${name}さん！`);
  }
}
