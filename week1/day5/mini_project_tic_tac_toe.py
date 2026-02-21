board = [[" ", " ", " "],
         [" ", " ", " "],
         [" ", " ", " "]]

def display_board(board):
    print("***********************")
    print("*      TIC TAC TOE    *")
    print("***********************")

    for row in board:
        print(row[0], "|", row[1], "|", row[2])
        print("--------------")
    print("***********************")

def player_input(board, current_player):
    print(f"Now it is player {current_player} playing")

    while True: 
        try: 
            player_move_row = int(input(f"Player {current_player}, choose row (0/1/2/): ")) #later I may use 1/2/3 instead of 0/1/2
            player_move_col = int(input(f"Player {current_player}, choose column (0/1/2): "))
        except ValueError:
            print("Invalid input! Please enter numbers only.")
            continue
    
        # check if move is valid:    (#check if input valid # if player_move_row == 1, or player_move_row ==2, or player_move_row == 3 and player_move_col == 1, or player_move_col ==2, or player_move_col == 3: )
        # Step 1: Check input range
        if not (0 <= player_move_row <= 2 and 0 <= player_move_col <= 2):
            print("Invalid input, please type 0, 1, or 2 only.")
            continue

        # Step 2: Check if spot is taken
        if board[player_move_row][player_move_col] != " ":
            print("Spot already taken, please choose again")
            continue #go back to the start of loop(same player)

        #valid move- switch " " with player symbol
        board[player_move_row][player_move_col] = current_player
        return  # move is done, go back to main loop

        # #after a valid move, switch to the other player:
        # current_player = "O" if current_player == "X" else "X"

def check_win(board, player):
    # board[0] == "X" or board[1] == "X" or board [2] == "X" 
    # or board [0][0] == board [1][0] == board [2][0] == "X" or  board [0][1] == board [1][1] == board [2][1] == "X" or  board [0][2] == board [1][2] == board [2][2] == "X" 
    # or  board [0][0] == board [1][1] == board [2][2] == "X" 
    # or  board [2][0] == board [1][1] == board [0][0] == "X":
    # use all(cell == "X" for cell in board), just like "or any() logic"

    # Check rows
    for row in board:
        if all(cell == player for cell in row):
            return True # return True immediately exits the function and sends back True to wherever the function was true 把 True 传回调用它的地方(which is to check_win)

    # Check columns
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True

    # Check main diagonal
    if all(board[i][i] == player for i in range(3)):
        return True

    # Check other diagonal
    if all(board[i][2 - i] == player for i in range(3)):
        return True

    return False    

def check_tie(board):
    for row in board:
        if " " in row:
            return False  # still empty space available
    return True  # no empty spaces left

def play():
    current_player = "X"

    while True: #English: Start an infinite loop (repeat forever) until you break or return.中文： 开始一个“无限循环”，会一直重复执行，直到你用 break（退出循环）或 return（退出函数）停止它。
        display_board(board)

        player_input(board, current_player)

        # show updated board immediately after move
        display_board(board)

        #check if there is a win here
        if check_win(board, current_player):
            print(f"Player {current_player} wins!")
            break
        
        #check if there is a tie
        if check_tie(board):
            print("No one wins: it is a tie")
            break

        # switch player AFTER a valid move
        current_player = "O" if current_player == "X" else "X"




play()

# Mini-Project - Tic Tac Toe
# Last Updated: October 7th, 2025

# Goal: Create a Tic Tac Toe game in Python where two players can play against each other.



# 👩‍🏫 👩🏿‍🏫 What You’ll learn
# Conditionals (if, elif, else)
# Loops (for, while)
# Functions
# List manipulation
# User input


# Key Python Topics:

# Lists (2D lists)
# Loops (while)
# Conditional statements (if, elif, else)
# Functions
# User input (input())
# String formatting


# 🛠️ What you will create
# A command-line Tic Tac Toe game that allows two players to take turns marking a 3x3 grid.



# tic-tac-toe



# Instructions:
# Tic Tac Toe is played on a 3x3 grid. Players take turns marking empty squares with their symbol (‘O’ or ‘X’). The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins. If all squares are filled and no player has three in a row, the game is a tie.



# Step 1: Representing the Game Board

# You’ll need a way to represent the 3x3 grid.
# A list of lists (a 2D list) is a good choice.
# Initially, each cell in the grid should be empty (e.g., represented by a space ‘ ‘).


# Step 2: Displaying the Game Board

# Create a function called display_board() to print the current state of the game board.
# The output should visually represent the 3x3 grid.
# Think about how to format the output to make it easy to read.


# Step 3: Getting Player Input

# Create a function called player_input(player) to get the player’s move.
# The function should ask the player to enter a position (e.g., row and column numbers).
# Validate the input to ensure it’s within the valid range and that the chosen cell is empty.
# Think about how to ask the user for input, and how to validate that input.


# Step 4: Checking for a Winner

# Create a function called check_win(board, player) to check if the current player has won.
# The function should check all possible winning combinations (rows, columns, diagonals).
# If a player has won, return True; otherwise, return False.
# Think about how to check every possible winning combination.


# Step 5: Checking for a Tie

# Create a function to check if the game has resulted in a tie.
# The function should check if all positions of the board are full, without a winner.


# Step 6: The Main Game Loop

# Create a function called play() to manage the game flow.
# Initialize the game board.
# Use a while loop to continue the game until there’s a winner or a tie.
# Inside the loop:
# Display the board.
# Get the current player’s input.
# Update the board with the player’s move.
# Check for a winner.
# Check for a tie.
# Switch to the next player.
# After the loop ends, display the final result (winner or tie).


# Tips:

# Consider creating helper functions to break down the logic into smaller, manageable parts.
# Follow the single responsibility principle: each function should do one thing and do it well.
# Think about how to switch between players.
# Think about how you will store the player’s symbol.


