"""Unit tests for person.py."""
import unittest
from .Person import Person


class Testing(unittest.TestCase):
    """Unit tests for person.py."""
    expected = 'test'

    def test_set_success(self):
        """Test set_user."""
        person_instance = Person(username=self.expected)

        user_id = person_instance.get_id_by_field('username', self.expected)

        if isinstance(user_id, dict):
            self.assertFalse('error' in user_id,
                        f"Got error finding user: {user_id['error']}")

        user = person_instance.get_user_by_id(user_id)

        if 'error' in user:
            self.assertFalse('error' in user,
                        f"Got error finding user: {user['error']}")

        self.assertEqual(self.expected, user['username'])

    def test_get_fail(self):
        """Test get_user_by_id."""
        person_instance = Person()

        user_id = person_instance.get_id_by_field('username', 'wrong')

        user = person_instance.get_user_by_id('wrong')

        self.assertFalse('error' not in user or not isinstance(user_id, dict)
                         or 'error' not in user_id, 'expected error but got none')


if __name__ == '__main__':
    unittest.main()


# Solutions

    # person = Person(username=self.expected)

    # id = person.get_id_by_field('username', self.expected)
