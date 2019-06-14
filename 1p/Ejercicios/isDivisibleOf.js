function isDiv(divisor, dividendo)
        {
            var res = divisor/dividendo;
            if(res%1 == 0)
                return true;
            else
                return false;
        }
print(isDiv(10,3))