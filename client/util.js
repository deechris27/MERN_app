export const debounce = (fn, delay)=>{
    let timerId;

    return (...args)=>{
        if(timerId){
            clearTimeout();
        }

        timerId = setTimeout(()=>{
            fn(...args);
        }, delay);
    }
};

export const throttle = (fn, delay)=>{
    let last = 0;

    return (...args)=>{
        const now = new Date().getTime();
        if(now-last < delay){
            return;
        }

        last = now;
        return fn(...args);
    }
};