/**
 * STN-7 Problem Solving Assessment
 * All 20 solutions in one TypeScript file.
 */

// Problem 1: Staircase
var staircase = function (n: number): string {
  let output = "";
  for (let i = 1; i <= n; i++) {
    const row = " ".repeat(n - i) + "#".repeat(i);
    if (i > 1) output += "\n";
    output += row;
  }
  return output;
};

// Problem 2: Grading Students
var gradingStudents = function (grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultiple = Math.ceil(grade / 5) * 5;
    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
};

// Problem 3: Time Conversion
var timeConversion = function (s: string): string {
  const period = s.slice(-2);
  const parts = s.slice(0, -2).split(":");
  let hours = Number(parts[0]);

  if (period === "AM" && hours === 12) hours = 0;
  else if (period === "PM" && hours !== 12) hours += 12;

  return `${String(hours).padStart(2, "0")}:${parts[1]}:${parts[2]}`;
};

// Problem 4: String Repeat
var repeatStr = function (n: number, s: string): string {
  return s.repeat(n);
};

// Problem 5: Reversed Strings
var solution = function (str: string): string {
  return str.split("").reverse().join("");
};

// Problem 6: Sum of Positive
var positiveSum = function (arr: number[]): number {
  let sum = 0;
  for (const num of arr) {
    if (num > 0) sum += num;
  }
  return sum;
};

// Problem 7: Grasshopper Summation
var summation = function (num: number): number {
  return (num * (num + 1)) / 2;
};

// Problem 8: Boolean to String
var booleanToString = function (b: boolean): string {
  return String(b);
};

// Problem 9: Fizz Buzz
var fizzBuzz = function (n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};

// Problem 10: Running Sum
var runningSum = function (nums: number[]): number[] {
  const result: number[] = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    result.push(sum);
  }
  return result;
};

// Problem 11: Richest Customer Wealth
var maximumWealth = function (accounts: number[][]): number {
  let maxWealth = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) wealth += amount;
    if (wealth > maxWealth) maxWealth = wealth;
  }
  return maxWealth;
};

// Problem 12: Remove Duplicates from Sorted Array
var removeDuplicates = function (nums: number[]): number {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[write - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
};

// Problem 13: Contains Duplicate
var containsDuplicate = function (nums: number[]): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};

// Problem 14: Move Zeroes
var moveZeroes = function (nums: number[]): void {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }
  while (write < nums.length) {
    nums[write] = 0;
    write++;
  }
};

// Problem 15: Merge Sorted Array
var merge = function (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

// Problem 16: 3Sum
var threeSum = function (nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Problem 17: Plus One
var plusOne = function (digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

// Problem 18: Reverse String
var reverseString = function (s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

// Problem 19: Length of Last Word
var lengthOfLastWord = function (s: string): number {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;

  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};

// Problem 20: Longest Common Prefix
var longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};
