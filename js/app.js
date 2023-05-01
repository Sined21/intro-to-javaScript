'use strict';

(function () {
  const counter = (count = 0) => {
    let increaseCalls = 0;
    let decreaseCalls = 0;
    let valueCalls = 0;

    return {
      increase() {
        increaseCalls++;
        return ++count;
      },
      decrease() {
        decreaseCalls++;
        return --count;
      },
      value() {
        valueCalls++;
        return count;
      },
      reset() {
        increaseCalls = 0;
        decreaseCalls = 0;
        valueCalls = 0;

        return count = 0;
      },
      getStatistic() {
        return { increaseCalls, decreaseCalls, valueCalls };
      },
    };
  };

  const counterInstance = counter();
  counterInstance.increase();
  counterInstance.decrease();
  counterInstance.reset();
  counterInstance.increase();
  console.log(counterInstance.getStatistic());
  console.log(counterInstance.value());
})();
