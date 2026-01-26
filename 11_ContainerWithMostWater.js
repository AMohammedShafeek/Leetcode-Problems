var maxArea = function(height) { 
    let left = 0;
    right = height.length - 1; 
    let max = 0; 
    while (left < right) { 
        let w = right - left; 
        let h = Math.min(height[left], height[right]);   
        let area = w * h; 
        max = Math.max(max, area);
        if (height[left] < height[right]) { 
            left++; 
        } 
        else { 
            right--; 
        } 
    } 
    return max; 
};

console.log(maxArea([5,6,3,4,8,7]));
