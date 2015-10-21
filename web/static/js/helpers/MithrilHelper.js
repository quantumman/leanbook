export function multi() {
  let handlers = [].slice.call(arguments);

  return function execute(){
    let args = [].slice.call(arguments);

    handlers.forEach((fn) => {
      fn.apply(this, args);
    });
  };
}
