export const map = (cb, iterable) => {
    const res = [];
    for (const iter of iterable) {
        res.push(cb(iter));
    }
    return res;
};

export const filter = (cb, iterable) => {
    const res = [];
    for (const iter of iterable) {
        if (cb(iter)) res.push(iter);
    }
    return res;
};

export const reduce = (cb, acc, iterable) => {
    if (!iterable) {
        iterable = acc[Symbol.iterator]();
        acc = iterable.next().value;
    }
    for (const iter of iterable) {
        acc = cb(acc, iter);
    }
    return acc;
};
export const go = (...fs) => {
    return reduce((a, f) => f(a), fs);
};
