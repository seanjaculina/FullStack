#!/usr/local/bin/bash

RED='\033[0;41;30m'
STD='\033[0;0;39m'

# Menu
function printMenu() {
  echo "1) Type some text"
  echo "2) Read Text From a File"
  echo "3) Quit"
}

# Caesars Cipher
function cipher() {
  SHIFT=$2

  printf -v A_UPPER_ASCII "$(printf '%d' "'A")" 
  printf -v A_LOWER_ASCII "$(printf '%d' "'a")"

  NEWSHIFTUPPER=$(($A_UPPER_ASCII+$SHIFT))
  NEWSHIFTLOWER=$(($A_LOWER_ASCII+$SHIFT))
  ONELESSUPPER=$(($A_UPPER_ASCII+$SHIFT-1))
  ONELESSLOWER=$(($A_LOWER_ASCII+$SHIFT-1))


  printf -v UPPER_SHIFTED "$(printf \\$(printf '%03o' $NEWSHIFTUPPER))"
  printf -v LOWER_SHIFTED "$(printf \\$(printf '%03o' $NEWSHIFTLOWER))"
  printf -v UPPER_LESS_SHIFTED "$(printf \\$(printf '%03o' $ONELESSUPPER))"
  printf -v LOWER_LESS_SHIFTED "$(printf \\$(printf '%03o' $ONELESSLOWER))"

  CUSTOM_TR="$UPPER_SHIFTED-ZA-$UPPER_LESS_SHIFTED$LOWER_SHIFTED-za-$LOWER_LESS_SHIFTED"

  case "$1" in
    [eE]) 
      echo "Result below: "
      echo "$3" | tr '[A-Za-z]' "[$CUSTOM_TR]"
      read -p "Enter a text file to save this encrypted data to: (e.g test.txt)" FILE_NAME
      echo "$3" | tr '[A-Za-z]' "[$CUSTOM_TR]" > $FILE_NAME;;
    [dD]) echo "$3" | tr "[$CUSTOM_TR]" '[A-Za-z]';;
    *) echo "Invalid selection. Going back to main menu.";;
  esac
}

function CC() {
  read -p "Please enter the amount of shifts for your input" SHIFTS
  echo "Would you like to encrypt or decrypt the text?"
  read -p "Enter e for encrypt or d for decrypt" CHOICE
  case "$CHOICE" in
    [eE]) cipher $CHOICE $SHIFTS $1;;
    [dD]) cipher $CHOICE $SHIFTS $1;;
    *) echo "Invalid selection. Going back to main menu.";;
  esac
}

function ROT(){
  echo "Would you like to encrypt or decrypt the text?"
  read -p "Enter e for encrypt or d for decrypt" CHOICE
  case "$CHOICE" in
    [eE]) 
      echo "Result below: "
      echo "$1" | tr 'A-Za-z' 'N-ZA-Mn-za-m'
      read -p "Enter a text file to save this encrypted data to: (e.g test.txt)" FILE_NAME
      echo "$1" | tr 'A-Za-z' 'N-ZA-Mn-za-m' > $FILE_NAME;;
    [dD]) echo "$1" | tr 'A-Za-z' 'N-ZA-Mn-za-m';;
    *) echo "Invalid selection. Going back to main menu.";;
  esac
}

function getInput() {
  # get the users input
  read -p "Please enter some text: " USER_INPUT
  read -p "Would you like to use CC or ROT13? Please enter C for CC and R for ROT" CHOICE

  case "$CHOICE" in
    [rR]) ROT $USER_INPUT;; 
    [cC]) CC $USER_INPUT;;
    *) echo "Invalid entry. Going back to menu."
  esac
}

function getFileName() {
  read -p "Please enter the file name: (e.g test.txt)" FILE_NAME

  if [ -e "$FILE_NAME" ]
    then
      read -p "Would you like to use CC or ROT13? Please enter C for CC and R for ROT" CHOICE
      case "$CHOICE" in
        [rR]) 
          FILE_CONTENTS=""
          for word in `cat $FILE_NAME`
            do 
              FILE_CONTENTS+="$word"
            done
          ROT $FILE_CONTENTS  # call the ROT13 Function
          ;; 
        [cC])
          FILE_CONTENTS=""
          for word in `cat $FILE_NAME`
            do 
              FILE_CONTENTS+="$word"
            done
          CC $FILE_CONTENTS
          ;;
        *) echo "Invalid entry. Going back to menu."
      esac
  else
    read -p "$FILE_NAME is not a file. Please enter some text instead:" INPUT
    ROT $INPUT
  fi
}

while true
do
    printMenu 
    read -p "Make a choice" INPUT
    case $INPUT in
      1) getInput;;
      2) getFileName;;
      3) exit 0;;
      *) echo -e "${RED}Error...${STD}" && sleep 2
    esac
done