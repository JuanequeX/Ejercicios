function isMultipleOf(x, y)
        {
            var r = x % y;
            if(r === 0)
                return true;
            else
                return false;
        }
print(isMultipleOf(6,3))
print(isMultipleOf(3,6))
