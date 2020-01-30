@NewsletterRegistration
Feature: Register For Newsletter
  As a shopper
  In order to stay informed via newsletter
  I need to bee able to register my email

  Background:
    Given Shopper has navigated to the store

  Scenario Outline: Register <email> email address
    When Shopper registers a <email> email address
    Then A <message> message is displayed
    Examples:
      | email   | message       |
      | valid   | success       |
      | invalid | Invalid email |


# Scenario: Invalid email address error message
#   When Shopper registers a "invalid" email address
#   Then A "Invalid email" message is displayed

