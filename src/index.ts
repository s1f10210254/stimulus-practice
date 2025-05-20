import { Application } from "@hotwired/stimulus";
import HelloController from "./controllers/hello_controller";
import counter_controller from "./controllers/counter_controller";

const app = Application.start();
app.register("hello", HelloController);
app.register("counter", counter_controller);
