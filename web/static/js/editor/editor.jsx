import * as _m from "helpers/MithrilHelper";
import _Asciidoctor_ from "asciidoctor.js";

import "editor.css";
import "asciidoctor.css";

// Model
let Page = function(data) {
  this.id = m.prop(data.id);
  this.chapter = m.prop(data.chapter);
  this.section = m.prop(data.section);
  this.markup = m.prop(data.markup);
};

// ViewModel
let vm = {
  init: function() {
    let {Opal, Asciidoctor} = _Asciidoctor_();
    let processor = Asciidoctor();
    let options = Opal.hash2(
      {doctype: "inline", attributes: ["showtitle"]}
    );
    let renderPreview = function(markup) {
      return processor.$convert(markup, options);
    };

    vm.markup = m.prop("");
    vm.preview = m.prop(renderPreview(vm.markup()));
    vm.updatePreview = function(value) {
      let html = renderPreview(value);
      vm.preview(html);
    };
    vm.updatePreviewAutomatically = function(value) {
      if (vm.timer) {
        clearTimeout(vm.timer);
        delete vm.timer;
        m.endComputation();
      }

      m.startComputation();
      vm.timer = setTimeout(
        function() {
          vm.updatePreview(value);
          m.endComputation();
        },
        500
      );
    };
  }
};

// Controller
let controller = function() {
  vm.init();
};

// View
let view = function() {
  return (
    <div>
      <div class="col-xs-6">
        <textarea class="form-control text-editing-area"
                onchange={_m.multi(
                          m.withAttr("value", vm.updatePreview),
                          m.withAttr("value", vm.markup)
                          )}
                onkeyup={m.withAttr("value", vm.updatePreviewAutomatically)}
                value={vm.markup()}
        >
        </textarea>
      </div>
      <div class="col-xs-6">
        <div class="form-control preview-area">{m.trust(vm.preview())}</div>
      </div>
    </div>
  );
};

let Editor = {controller: controller, view: view};
export default Editor;
