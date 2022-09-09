class Person:
    usernames = []

    def __init__(self, username):
        if len(username) > 0:
            self.set_name(username)

    def get_usernames(self):
        users_dict = {}
        for i, username in enumerate(self.usernames):
            users_dict[i] = username

        return users_dict

    def set_name(self, user_name):
        self.usernames.append(user_name)
        return len(self.usernames) - 1

    def get_id_by_name(self, username):
        users_dict = self.get_usernames()

        if username not in users_dict.values():
            return 'There is no such user'
        else:
            for k in users_dict:
                if users_dict[k] == username:
                    return k

    def get_name_by_id(self, user_id):
        users_dict = self.get_usernames()

        if user_id not in users_dict.keys():
            return 'There is no such user'
        else:
            return users_dict[user_id]


if __name__ == '__main__':
    person = Person()
    print('User Abbas has been added with id ', person.set_name('Abbas'))
    print('User associated with id 0 is ', person.get_name(0))
