'use strict';

(function () {
  const obj = {
    name: 'Jhon',
    age: 20
  };

  const foo = function (phone, address) {
    console.log(this.name, this.age, phone, address);
  };

  foo.bind(obj)('093-444-44-44', '4 Avenue');

  const bind = (fn, ctx, ...rest) => {
    return (...args) => {
      const id = Date.now().toString();

      ctx[id] = fn;

      const result = ctx[id](...rest.concat(...args));

      delete ctx[id];

      return result;
    };
  };

  bind(foo, obj, '093-333-33-33', '3 Avenue')();
})();
