def diamond(rows):
    for i in range(0, rows):
        for j in range(0, rows - i - 1):
            print(end = "  ")
        for j in range(0, 2 * i + 1):
            print("*", end=" ")
        print()
    for i in range(rows - 2, -1, -1):
        for j in range(0, rows - i - 1):
            print(end = "  ")
        for j in range(0, 2 * i + 1):
            print("*", end = " ")
        print()

rows = int(input("Enter the number of rows: "))
diamond(rows)