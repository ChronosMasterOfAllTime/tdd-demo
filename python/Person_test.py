import unittest
import Person


class Testing(unittest.TestCase):
    expected = 'test'

    def test_set(self):
        person = Person.Person(self.expected)

        id = person.get_id_by_name(self.expected)

        name = person.get_name_by_id(id)

        self.assertEqual(self.expected, name)


if __name__ == '__main__':
    unittest.main()
