import turtle

wn = turtle.Screen()
wn.title("COOKIE CLICKER")
wn.bgcolor("black")

wn.register_shape("sfu.gif")

cookie = turtle.Turtle()
cookie.shape("sfu.gif")
cookie.speed(0)

clicks = 0

pen = turtle.Turtle()
pen.hideturtle()
pen.color("white")
pen.penup()
pen.goto(0, 250)
pen.write(f"Clicks: {clicks}", align="center", font=("Courier New", 32, "normal"))


#we have to use xy as parameters cuz turtle.onclick is dumb and needs 2 arguments btw
def clicked(x, y):
    global clicks
    clicks += 1
    pen.clear()
    pen.write(f"Clicks: {clicks}", align="center", font=("Courier New", 32, "normal"))

cookie.onclick(clicked)

wn.mainloop()

