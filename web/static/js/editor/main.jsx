// Controller
function controller() {
}

// View
function view() {
  return (
    <div class="row">
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
