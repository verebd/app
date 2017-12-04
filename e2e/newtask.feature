Feature: New task test
  As an admin
  I want to create new task
  so that I can include them in a test

  Scenario Outline: 1. The admin should be able to add a new task to the database
    Given the create-new-task page is opened
    Then the input field for option A should be hidden
    And the input field for option B should be hidden
    And the input field for option C should be hidden
    And the input field for option D should be hidden
    And the selection field for the answer should be hidden

    When the <type> option is selected in the type dropdown
    Then the input field for option A should be visible
    And the input field for option B should be visible
    And the input field for option C should be visible
    And the input field for option D should be visible
    And the selection field for the answer should be visible

    When the text <topic> is typed into the topic field
    And the option <difficulty> is selected for the difficulty field
    And the text <text> is typed into the text field
    And the text <optionA> is typed into the option A field
    And the text <optionB> is typed into the option B field
    And the text <optionC> is typed into the option C field
    And the text <optionD> is typed into the option D field
    And the option <answer> is selected for the answer field
    And the Save button is clicked
    Then the tasks page should be loaded
    And the last task text should be <text>

    Examples:
      | type            | topic      | difficulty | text          | optionA | optionB | optionC | optionD | answer |
      | multiple-choice | test topic | easy       | test question | optionA | optionB | optionC | optionD | C      |
