"""Module providing a class to instance a person."""

class Person:
    """Class to instance a person."""
    users = []

    def __init__(self, **kwargs):
        if len(kwargs) > 0 and 'username' in kwargs:
            self.set_user(kwargs)

    def get_usernames(self):
        """Return a dictionary of users."""
        users_dict = {}
        for i, user in enumerate(self.users):
            users_dict[i] = user

        return users_dict

    def set_user(self, user):
        """Set a user."""
        if 'username' not in user:
            return -1

        self.users.append(user)
        return len(self.users) - 1

    def get_id_by_field(self, field, lookup):
        """Return the id of a user."""
        users_dict = self.get_usernames()

        for k, value in users_dict.items():
            if value[field] == lookup:
                return k

        return {'error': 'There is no such user'}

    def get_user_by_id(self, user_id):
        """Return a user by id."""
        users_dict = self.get_usernames()

        if user_id not in users_dict:
            return {'error': 'There is no such user'}

        return users_dict[user_id]


if __name__ == '__main__':
    person = Person()
    input_id = person.set_name('Ευστάθιος')
    print(f'User Ευστάθιος has been added with id {input_id}')
    print(f'User associated with id {input_id} is ', person.get_user_by_id(input_id))


# Solutions:

    # def __init__(self, **kwargs):
    #     if len(kwargs) > 0 and 'username' in kwargs:
    #         self.set_user(kwargs)

    # def set_user(self, user):
    #     if 'username' not in user:
    #         return -1

    #     self.users.append(user)
    #     return len(self.users) - 1

    # def get_id_by_field(self, field, lookup):
    #     users_dict = self.get_usernames()

    #     for k in users_dict:
    #         if users_dict[k][field] == lookup:
    #             return k

    #     return {'error': 'There is no such user'}
