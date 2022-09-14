class Person:
    users = []

    def __init__(self, username=None):
        if username is not None and len(username) > 0:
            self.set_name(username)

    def get_usernames(self):
        users_dict = {}
        for i, user in enumerate(self.users):
            users_dict[i] = user

        return users_dict

    def set_name(self, user_name):
        self.users.append({'username': user_name})
        return len(self.users) - 1

    def get_id_by_name(self, username):
        users_dict = self.get_usernames()

        for k in users_dict:
            if users_dict[k]['username'] == username:
                return k

        return {'error': 'There is no such user'}

    def get_user_by_id(self, user_id):
        users_dict = self.get_usernames()

        if user_id not in users_dict.keys():
            return {'error': 'There is no such user'}
        else:
            return users_dict[user_id]


if __name__ == '__main__':
    person = Person()
    id = person.set_name('Ευστάθιος')
    print(f'User Ευστάθιος has been added with id {id}')
    print(f'User associated with id {id} is ', person.get_user_by_id(id))


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
