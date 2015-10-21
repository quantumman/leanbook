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
    vm.markup = m.prop("");
  }
};
