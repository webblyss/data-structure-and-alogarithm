function twoSum(nums, target) {
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      console.log(complement)
  
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
  
      map.set(nums[i], i);
    }
  
    return [];
  }

  
  const numbs = [2, 7, 11, 15];
  const target = 9;
  
  const result = twoSum(numbs, target);
  console.log(result);  // Output: [0, 1]
  

