rows = int(input("Enter number of rows : "))
print("Hollow Diamond Pattern")
# Upper triangle shape
for i in range(1, rows + 1):
    for j in range(1, rows - i + 1):
        # print spaces
        print(end = ' ')
    for k in range(1, 2 * i):
        if k == 1 or k == i * 2 - 1:
            # print spaces
            print('*', end = '')
        else:
            # move to next row
            print(' ', end = '')
    print()
# Lower triangle shape
for i in range(rows - 1, 0, -1):
    for j in range(1, rows - i + 1):
        # print spaces
        print(' ', end = '')
    for k in range(1, 2 * i):
        if k == 1 or k == i * 2 - 1:
            # print spaces
            print('*', end = '')
        else:
            # move to next row
            print(' ', end = '')
    print()