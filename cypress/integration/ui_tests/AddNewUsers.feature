Feature: New User SignUp
    I want to sign up as a New User
    Background: Navigate to the Way2Automation Website
        Given I navigate to the Way2Automation website
        And Verify that the User table exists

    Scenario Outline: SignUp as New User
        When I click on Add User button
        Then I Verify that the Add User Pop-up is displayed
        And enter the <FirstName> inputValue
        And enter the<LastName> inputValue
        And enter the<UserName> inputValue
        And enter the<Password> inputValue
        And enter the<Customer> inputValue
        And enter the<Role> inputValue
        And enter the<Email> inputValue
        And enter the<Cell> inputValue
        Examples:
            | FirstName | LastName | UserName | Password | Customer    | Role     | Email             | Cell   |
            | FName1    | LName1   | User     | Pass     | Company AAA | Admin    | admin@mail.com    | 082555 |
            | FName2    | LName2   | User     | Pass     | Company BBB | Customer | customer@mail.com | 082444 |