/*
Our algorithm will look like this:

1. Sort the intervals on the start time to ensure a.start <= b.start
2. If ‘a’ overlaps ‘b’ (i.e. b.start <= a.end), we need to merge them into a new interval ‘c’ such that:
    c.start = a.start
    c.end = max(a.end, b.end)
3. We will keep repeating the above two steps to merge ‘c’ with the next interval if it overlaps with ‘c’.
*/

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}


function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    // sort the intervals on the start time
    intervals.sort((a, b) => a.start - b.start);

    const mergedIntervals = [];
    let start = intervals[0].start,
        end = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval.start <= end) { // overlapping intervals, adjust the 'end'
            end = Math.max(interval.end, end);
        } else { // non-overlapping interval, add the previous interval and reset
            mergedIntervals.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    // add the last interval
    mergedIntervals.push(new Interval(start, end));
    return mergedIntervals;
}


process.stdout.write('Merged intervals: ');
let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
console.log('Number of Appointments: ', result.length);
for (let i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Merged intervals: ');
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (let i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Merged intervals: ');
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (let i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();
