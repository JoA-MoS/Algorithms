using System;

namespace strings
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(isPalidrome("Hello World!"));
            Console.WriteLine(isPalidrome("racecar"));
            Console.WriteLine(isPalidrome("madam"));
            Console.WriteLine(isPalidrome("tacocat"));
            Console.WriteLine(isPalidrome("r"));
            Console.WriteLine(isPalidrome(""));
            Console.WriteLine(isPalidrome("test"));


        }

        static bool isPalidrome(string str)
        {
            for (int left = 0, right = str.Length - 1; left < right; left++, right--)
            {
                if (str[left] != str[right])
                {
                    return false;
                }
            }
            return true;
        }
    }
}
