Feature: Addition
@myScenario1
  # Inputs first number and second number are in one line
  Scenario: Sum of two numbers
  
    Given first number is 10 and second number is 20
    When user executes sum function
    Then the sum is equal to expectedSum