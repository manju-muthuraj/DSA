/*
Problem Statement #
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Example 1:
Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

Example 2:
Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.

Example 3:
Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.

Solution #

The problem follows the Merge Intervals pattern. We can sort all the intervals by start time and then check if any two intervals overlap.
A person will not be able to attend all appointments if any two appointments overlap
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

function can_attend_all_appointments(intervals) {
    intervals.sort((a, b) => a.start - b.start);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start < intervals[i - 1].end) {
            // please note the comparison above, it is "<" and not "<="
            // while merging we needed "<=" comparison, as we will be merging the two
            // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but
            // such intervals don't represent conflicting appointments as one starts right
            // after the other
            return false;
        }
    }
    return true;
}

// Time - O(N log n)
// Space - O(N)
console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
])}`);
