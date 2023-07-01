Feature: Automate a website
@myScenario2 @flaky
    Scenario: perform click events
      When visit url "https://lambdatest.github.io/sample-todo-app"
      When field with name "li1" is present check the box
      When field with name "li3" is present check the box
      When select the textbox add "Kya Kar rahe ho" in the box
      Then click the "addbutton"
      Then I must see title "Sample page - lambdatest.com"