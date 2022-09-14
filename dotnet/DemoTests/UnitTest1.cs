using Microsoft.VisualStudio.TestTools.UnitTesting;
using UtilityLibraries;

namespace DemoTests;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestStartsWithUpper()
    {
        // Tests that we expect to return true.
        string[] words = { "Alphabet", "Zebra", "ABC", "Αθήνα", "Москва" };
        foreach (var word in words)
        {
            bool result = word.StartsWithUpper();
            Assert.IsTrue(result,
                   string.Format("Expected for '{0}': true; Actual: {1}",
                                 word, result));
        }
    }

    [TestMethod]
    public void TestDoesNotStartWithUpper()
    {
        // Tests that we expect to return false.
        string[] words = { "alphabet", "zebra", "abc", "αυτοκινητοβιομηχανία", "государство",
                               "1234", ".", ";", " " };
        foreach (var word in words)
        {
            bool result = word.StartsWithUpper();
            Assert.IsFalse(result,
                   string.Format("Expected for '{0}': false; Actual: {1}",
                                 word, result));
        }
    }

    [TestMethod]
    public void DirectCallWithNullOrEmpty()
    {
        // Tests that we expect to return false.
        string?[] words = { string.Empty, null };
        foreach (var word in words)
        {
            bool result = Demo.StartsWithUpper(word);
            Assert.IsFalse(result,
                   string.Format("Expected for '{0}': false; Actual: {1}",
                                 word == null ? "<null>" : word, result));
        }
    }

    [TestMethod]
    public void TestDoesNotStartWithLower()
    {
        // Tests that we expect to return true.
        string[] words = { "Alphabet", "Zebra", "ABC", "Αθήνα", "Москва" };
        foreach (var word in words)
        {
            bool result = word.StartsWithLower();
            Assert.IsFalse(result,
                   string.Format("Expected for '{0}': true; Actual: {1}",
                                 word, result));
        }
    }

    [TestMethod]
    public void TestStartsWithLower()
    {
        // Tests that we expect to return false.
        string[] words = { "alphabet", "zebra", "abc", "αυτοκινητοβιομηχανία", "государство" };
        foreach (var word in words)
        {
            bool result = word.StartsWithLower();
            Assert.IsTrue(result,
                   string.Format("Expected for '{0}': false; Actual: {1}",
                                 word, result));
        }
    }

    [TestMethod]
    public void TestDoesNotStartWithNumber()
    {
        // Tests that we expect to return false.
        string[] words = { "alphabet", "zebra", "abc", "αυτοκινητοβιομηχανία", "государство",
                               "a1234", ".", ";", " " };
        foreach (var word in words)
        {
            bool result = word.StartsWithNumber();
            Assert.IsFalse(result,
                   string.Format("Expected for '{0}': false; Actual: {1}",
                                 word, result));
        }
    }

    [TestMethod]
    public void TestStartsWithNumber()
    {
        // Tests that we expect to return false.
        string[] words = { "1alphabet", "2zebra", "3abc", "4αυτοκινητοβιομηχανία", "5государство" };
        foreach (var word in words)
        {
            bool result = word.StartsWithNumber();
            Assert.IsTrue(result,
                   string.Format("Expected for '{0}': false; Actual: {1}",
                                 word, result));
        }
    }
}
