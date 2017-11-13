using System;
using System.Collections.Generic;

namespace hashTables
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine(areFollowingPatterns(new string[] { "cat", "dog", "dog" }, new string[] { "a", "b", "c" }));
        }

        static bool areFollowingPatterns(string[] strings, string[] patterns)
        {
            Dictionary<string, string> curPattern = new Dictionary<string, string>();

            for (int i = 0; i < strings.Length; i++)
            {

                if (!curPattern.ContainsKey(patterns[i]))
                {
                    if (!curPattern.ContainsValue(strings[i]))
                    {
                        curPattern.Add(patterns[i], strings[i]);
                    }
                    else
                    {
                        return false;
                    }

                }
                else if (curPattern[patterns[i]] != strings[i])
                {
                    return false;
                }
            }
            return true;
        }

    }
}
