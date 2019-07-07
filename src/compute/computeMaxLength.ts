import { Input } from '../interface';
import cache from '../$_cache';

export default ({ pointLength, isFirst }: { pointLength:number, isFirst:boolean}): number => {
    if (isFirst) {
        cache.set({maxPointLength:pointLength});
        return pointLength;
    } else {
        const maxLength = cache.get('maxPointLength', 0);
        if (pointLength > maxLength) {
            cache.set({maxPointLength:pointLength});
        }

        return cache.get('maxPointLength', 0)
    }
};