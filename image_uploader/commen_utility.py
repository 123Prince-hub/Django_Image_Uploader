from datetime import datetime

def current_datetime():
    return datetime.now().strftime("%d_%B_%Y_%H_%M_%S")
