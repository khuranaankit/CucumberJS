@echo off

title This is your first batch script!
echo Welcome to batch scripting!
pause
call npx cucumber-js
echo Generating HTML Report in reports folder....
call node index.js