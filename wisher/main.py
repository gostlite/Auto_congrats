import random, requests
from datetime import datetime

# get a list of paid users that thier friend birthday falls on the present day
# for each of the users get a cusomized message and send to everyone

class Wisher:
    def __init__(self, all_paid:list) -> None:
        self.details = all_paid

    def get_message(self,event, relationship):
        # api = requests.get(f"url/{event}")
        list_of_message = [{"message":"God bless you"},
                        {"message":"Happy birthday" }]
        random_message = random.choice(list_of_message)
        print(random_message["message"])
        return random_message

    def send_message(self,wisher, celebrant_name, celebrant_num):
        pass
Wisher("goke")

now = datetime.now().date()
day = now.day
month = now.month
print(now)
paid_users = [{"sender":"Goke","celebrant":"Shola", "paid": True,
               "date":12, "celebrant_num": 8162448451,
               "event":"birthday", "relationship":"family"}]
