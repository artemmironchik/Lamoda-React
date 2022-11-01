export function debounce(f, ms) {
    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}

export function throttle(func, ms) {

    let isThrottled = false,
    savedArgs,
    savedThis;

    function wrapper() {

      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
        }

      func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}