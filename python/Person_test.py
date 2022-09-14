import unittest
import Person


class Testing(unittest.TestCase):
    expected = 'test'

    def test_set_success(self):
        person = Person.Person(self.expected)

        id = person.get_id_by_name(self.expected)

        if type(id) is dict:
            self.failIf('error' in id,
                        f"Got error finding user: {id['error']}")

        user = person.get_user_by_id(id)

        if 'error' in user:
            self.failIf('error' in user,
                        f"Got error finding user: {user['error']}")

        self.assertEqual(self.expected, user['username'])

    def test_get_fail(self):
        person = Person.Person()

        id = person.get_id_by_name('wrong')

        user = person.get_user_by_id('wrong')

        self.failIf('error' not in user or type(
            id) is not dict or 'error' not in id, 'expected error but got none')


if __name__ == '__main__':
    unittest.main()


# Solutions

    # person = Person.Person(username=self.expected)

    # id = person.get_id_by_field('username', self.expected)
