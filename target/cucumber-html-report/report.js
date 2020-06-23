$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.WebOrder/LoginTest.feature");
formatter.feature({
  "name": "WebOrder Login page Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Page Positive Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser validate the home page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionality Negative Test",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"techtorial\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser validate \"Invalid Login or Password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionality Negative Test 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@negative"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@conditional"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"tttt\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser validate \"Invalid Login or Password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionality Negative Test 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@negative"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Techtorial\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"tttt\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser validate \"Invalid Login or Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Error Message Validation expected:\u003c...id Login or Password[]\u003e but was:\u003c...id Login or Password[.]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate(LoginPageSteps.java:64)\n\tat ✽.the demoUser validate \"Invalid Login or Password\"(file:///Users/nurgazynazarmambetov/IdeaProjects/cucumberbatch4-master/src/test/resources/com.WebOrder/LoginTest.feature:24)\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.WebOrder/NewOrder.feature");
formatter.feature({
  "name": "New order validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate new order in WebOrder page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter product info \"MyMoney\" and \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_product_info_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter address info \"David\", \"2200 E devon\", \"Des Plaines\", \"Illinois\", \"60018\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter payment info \"Visa\", \"4444333322221111\", \"05/24\"",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_payment_info(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.WebOrder/NewOrderDataTable.feature");
formatter.feature({
  "name": "Validation of headers",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validation of new order headers",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the new order page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_goes_to_the_new_order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the product headers",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_the_product_headers(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the address headers",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_the_address_headers(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.WebOrder/NewOrderOutline.feature");
formatter.feature({
  "name": "Validation of New order using Scenario Outline",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "New Order Validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user enter product info \"\u003cproductName\u003e\" and \"\u003cquantity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the user enter address info \"\u003cname\u003e\", \"\u003caddress\u003e\", \"\u003ccity\u003e\", \"\u003cstate\u003e\", \"\u003czipcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user enter payment info \"\u003ccardType\u003e\", \"\u003ccardNum\u003e\", \"\u003cexpDate\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.step({
  "name": "the user validate new order details \"\u003cproductName\u003e\", \"\u003cquantity\u003e\", \"\u003cname\u003e\", \"\u003caddress\u003e\", \"\u003ccity\u003e\", \"\u003cstate\u003e\", \"\u003czipcode\u003e\", \"\u003ccardType\u003e\", \"\u003ccardNum\u003e\", \"\u003cexpDate\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "productName",
        "quantity",
        "name",
        "address",
        "city",
        "state",
        "zipcode",
        "cardType",
        "cardNum",
        "expDate"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "10",
        "David",
        "2200 E devon",
        "Des Plaines",
        "Illinois",
        "60018",
        "Visa",
        "4444333322221111",
        "05/24"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "5",
        "John",
        "2222 E devon",
        "Chicago",
        "Arizona",
        "50456",
        "MasterCard",
        "4444333322226666",
        "06/26"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "3",
        "Jessica",
        "3445 E river",
        "Los Angeles",
        "California",
        "45679",
        "American Express",
        "4444333322228888",
        "08/22"
      ]
    }
  ]
});
formatter.scenario({
  "name": "New Order Validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter product info \"MyMoney\" and \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_product_info_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter address info \"David\", \"2200 E devon\", \"Des Plaines\", \"Illinois\", \"60018\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter payment info \"Visa\", \"4444333322221111\", \"05/24\"",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_payment_info(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate new order details \"MyMoney\", \"10\", \"David\", \"2200 E devon\", \"Des Plaines\", \"Illinois\", \"60018\", \"Visa\", \"4444333322221111\", \"05/24\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "New Order Validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter product info \"FamilyAlbum\" and \"5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_product_info_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter address info \"John\", \"2222 E devon\", \"Chicago\", \"Arizona\", \"50456\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter payment info \"MasterCard\", \"4444333322226666\", \"06/26\"",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_payment_info(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate new order details \"FamilyAlbum\", \"5\", \"John\", \"2222 E devon\", \"Chicago\", \"Arizona\", \"50456\", \"MasterCard\", \"4444333322226666\", \"06/26\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "New Order Validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter product info \"ScreenSaver\" and \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_product_info_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter address info \"Jessica\", \"3445 E river\", \"Los Angeles\", \"California\", \"45679\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter payment info \"American Express\", \"4444333322228888\", \"08/22\"",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_payment_info(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate new order details \"ScreenSaver\", \"3\", \"Jessica\", \"3445 E river\", \"Los Angeles\", \"California\", \"45679\", \"American Express\", \"4444333322228888\", \"08/22\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.WebOrder/ProductDataTable.feature");
formatter.feature({
  "name": "All Products",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validation of All products",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the all products button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_clicks_the_all_products_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the product details",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_the_product_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});