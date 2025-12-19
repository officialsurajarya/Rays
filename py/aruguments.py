def show(name, age):
    print("Hello",name,"wish you happy birthday on your",age,"birthday")

# show() #through error
# show("Rakesh") #through error
show("rakesh", 25)
# show(25,"Rakesh") #through error
# show("Rakesh", 25, "extra") #through error

show(age=25, name="Rakesh") #works fine