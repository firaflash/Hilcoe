def func1():
    try:
        func2()
    except:
        print(1)
    print(2)

def func2():
    try:
        func3()
    except:
        print(3)
    print(4)

def func3():
    raise Exception("5")
    print(6)

func1()
