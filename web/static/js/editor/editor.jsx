import _Asciidoctor_ from "asciidoctor.js";

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
  }
};

// Controller
let controller = function() {
  vm.init();
};

// View
let view = function() {
  return (
    <div></div>
  );
};
