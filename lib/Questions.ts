const Questions = [
  {
    serialNo: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptanceRatio: '47.9%',
    description:
      'Given an array of integers, find two numbers such that they add up to a specific target number.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '[2, 7, 11, 15], 9',
        output: '[0, 1]',
        explanation:
          'The sum of 2 and 7 is 9, so the indices of these numbers are returned.',
      },
      {
        exampleSerialNo: 2,
        input: '[-3, 4, 2, 8], 6',
        output: '[1, 2]',
        explanation:
          'The sum of 4 and 2 is 6, so the indices of these numbers are returned.',
      },
    ],
  },
  {
    serialNo: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    acceptanceRatio: '36.1%',
    description:
      'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '[2,4,3], [5,6,4]',
        output: '[7,0,8]',
        explanation:
          'The input lists represent the numbers 342 and 465, which add up to 807.',
      },
      {
        exampleSerialNo: 2,
        input: '[0], [0]',
        output: '[0]',
        explanation:
          'The input lists represent the numbers 0 and 0, which add up to 0.',
      },
    ],
  },
  {
    serialNo: 3,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    acceptanceRatio: '31.7%',
    description:
      'Given a string, find the length of the longest substring without repeating characters.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '"abcabcbb"',
        output: '3',
        explanation:
          'The longest substring without repeating characters is "abc", which has a length of 3.',
      },
      {
        exampleSerialNo: 2,
        input: '"bbbbb"',
        output: '1',
        explanation:
          'The longest substring without repeating characters is "b", which has a length of 1.',
      },
    ],
  },
  {
    serialNo: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptanceRatio: '30.5%',
    description:
      'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '[1, 3], [2]',
        output: '2.0',
        explanation:
          'The median is 2.0 since the merged array would be [1, 2, 3].',
      },
      {
        exampleSerialNo: 2,
        input: '[1, 2], [3, 4]',
        output: '2.5',
        explanation:
          'The median is (2 + 3) / 2 = 2.5 since the merged array would be [1, 2, 3, 4].',
      },
    ],
  },
  {
    serialNo: 5,
    title: 'Reverse Integer',
    difficulty: 'Easy',
    acceptanceRatio: '28.5%',
    description: 'Given a signed 32-bit integer x, reverse its digits.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '123',
        output: '321',
        explanation: 'The reversed number of 123 is 321.',
      },
      {
        exampleSerialNo: 2,
        input: '-123',
        output: '-321',
        explanation: 'The reversed number of -123 is -321.',
      },
    ],
  },
  {
    serialNo: 6,
    title: 'Container With Most Water',
    difficulty: 'Medium',
    acceptanceRatio: '53.2%',
    description:
      'Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i are at (i, ai) and (i, 0). Find two lines, which, together with the x-axis, forms a container, such that the container contains the most water.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '[1, 8, 6, 2, 5, 4, 8, 3, 7]',
        output: '49',
        explanation:
          'The max area can be formed between the vertical lines at indices 1 and 8, resulting in an area of 49.',
      },
      {
        exampleSerialNo: 2,
        input: '[1, 1]',
        output: '1',
        explanation:
          'The max area can be formed between the vertical lines at indices 0 and 1, resulting in an area of 1.',
      },
    ],
  },
  {
    serialNo: 7,
    title: '3Sum',
    difficulty: 'Medium',
    acceptanceRatio: '28.3%',
    description:
      'Given an array nums of n integers, find all unique triplets in the array that give the sum of zero.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '[-1, 0, 1, 2, -1, -4]',
        output: '[[-1, -1, 2], [-1, 0, 1]]',
        explanation:
          'The unique triplets that sum up to zero are [-1, -1, 2] and [-1, 0, 1].',
      },
      {
        exampleSerialNo: 2,
        input: '[]',
        output: '[]',
        explanation:
          'There are no triplets in the empty array, so the result is an empty array as well.',
      },
    ],
  },
  {
    serialNo: 8,
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    acceptanceRatio: '30.4%',
    description:
      'Given a string s, find the longest palindromic substring in s.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '"babad"',
        output: '"bab"',
        explanation: 'The longest palindromic substring in "babad" is "bab".',
      },
      {
        exampleSerialNo: 2,
        input: '"cbbd"',
        output: '"bb"',
        explanation: 'The longest palindromic substring in "cbbd" is "bb".',
      },
    ],
  },
  {
    serialNo: 9,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    acceptanceRatio: '43.7%',
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.",
    examples: [
      {
        exampleSerialNo: 1,
        input: '"()[]{}"',
        output: 'true',
        explanation:
          'The input string contains valid parentheses and brackets, so the result is true.',
      },
      {
        exampleSerialNo: 2,
        input: '"([)]"',
        output: 'false',
        explanation:
          'The input string contains invalid parentheses and brackets, so the result is false.',
      },
    ],
  },
  {
    serialNo: 10,
    title: 'Merge Intervals',
    difficulty: 'Medium',
    acceptanceRatio: '41.2%',
    description:
      'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.',
    examples: [
      {
        exampleSerialNo: 1,
        input: '[[1, 3], [2, 6], [8, 10], [15, 18]]',
        output: '[[1, 6], [8, 10], [15, 18]]',
        explanation:
          'The intervals [1,3] and [2,6] are overlapping, so they are merged into [1,6].',
      },
      {
        exampleSerialNo: 2,
        input: '[[1, 4], [4, 5]]',
        output: '[[1, 5]]',
        explanation:
          'The intervals [1,4] and [4,5] overlap and can be merged into [1,5].',
      },
    ],
  },
];

export default Questions;
