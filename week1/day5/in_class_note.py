board = [[" ", " ", " "],
         [" ", " ", " "],
         [" ", " ", " "]]

def display_board():
    for row in board:
        print(row[0], "|", row[1], "|", row[2])
        print("--------------")

def player_input(current_player):
    print(f"Now it is player {current_player} playing")

    while True: 
        player_move_row = int(input(f"Player {current_player}, choose row (0/1/2/): ")) #later I may use 1/2/3 instead of 0/1/2
        player_move_col = int(input(f"Player {current_player}, choose column (0/1/2): "))

        #check if move is valid:    (#check if input valid # if player_move_row == 1, or player_move_row ==2, or player_move_row == 3 and player_move_col == 1, or player_move_col ==2, or player_move_col == 3: )
        # Step 1: Check input range
        if not (0 <= int(player_move_row) <= 2 and 0 <= int(player_move_col) <= 2):
            print("Invalid input, please type 0, 1, or 2 only.")
            continue

        # Step 2: Check if spot is taken
        if board[player_move_row][player_move_col] != " ":
            print("Spot already taken, please choose again")
            continue #go back to the start of loop(same player)

        #valid move- switch " " with player symbol
        board[player_move_row][player_move_col] = current_player
        return  # move is done, go back to main loop

        #after a valid move, switch to the other player:
        current_player = "O" if current_player == "X" else "X"

    #next step if there is time on weekend, I want to use "turn = 0" "turn += 1" to print(f"turn{turn}"), which is less than 9, counting and switching between players. # current_player = players[turn % 2]   # 0->X, 1->O, 2->X...

player_input()