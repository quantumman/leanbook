import "bootstrap.css";
import "bootstrap.js";

// Controller
function controller() {
}

// View
function view() {
  return (
    <div class="row">
      <div class="col-xs-12">
        <input type="text" id="title" class="form-control" placeholder="タイトル" />
      </div>
    </div>
  );
}

m.mount(
  document.getElementById("editor"),
  {
    controller: controller,
    view: view
  }
);
