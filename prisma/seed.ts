import { PrismaClient, type } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("\n + 📚 Seeding Java course");
  const java = await prisma.course.create({
    data: {
      courseName: "Java",
      modules: {
        create: [
          {
            moduleName: "Variables and Operations",
            order: 1,
            description:
              "Variables are used to store values in a program, while operations are used to manipulate those values. In Java, variables must be declared before they can be used and can be of different types, such as int, double, and String. Operations can include arithmetic, logical, and relational.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "artithmetic.inc_dec_operators",
                  name: "Increment-Decrement Operators",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arithmetic.f_to_c_conversion",
                  name: "Unit Converter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.f_to_c_conversion&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arithmetic.time_conversion",
                  name: "Time Converter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.time_conversion&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "artihmetic.vending_machine",
                  name: "Vending Machine",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artihmetic.vending_machine&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arithmetic.bmi_calculator",
                  name: "BMI Calculator",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.bmi_calculator&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arithmetic.pythagorean_theorem",
                  name: "Pythagorean Theorem",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.pythagorean_theorem&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JDecInc2",
                  name: "Increment/Decrement Operators (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JDecInc3",
                  name: "Increment/Decrement Operators (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "FahrenheitToCelsius",
                  name: "Fahrenheit to Celsius Conversion",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.f_to_c_conversion&ch=FahrenheitToCelsius&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "DisplayTime2",
                  name: "Converting Milliseconds to Hours, Minutes, and Seconds",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.time_conversion&ch=DisplayTime2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "VendingMachine2",
                  name: "Vending Machine With Quarters, Dimes, and Nickels",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artihmetic.vending_machine&ch=VendingMachine2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "BmiCalculator2",
                  name: "Calculating and Rounding Up Body Mass Index (BMI) To the Nearest Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.bmi_calculator&ch=BmiCalculator2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "PythagoreanTheorem2",
                  name: "Pythagorean Theorem (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.pythagorean_theorem&ch=PythagoreanTheorem2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "second_in_days",
                  name: "Calculating the Seconds in n Days",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/335/embed?act=PCRS&sub=second_in_days&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "rectangle_perimeter",
                  name: "Calculating the Perimeter of a Rectangle",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/336/embed?act=PCRS&sub=rectangle_perimeter&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "days_to_week_conversion",
                  name: "Converting n Days into Weeks and Remaining Days",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/337/embed?act=PCRS&sub=days_to_week_conversion&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "percentage_correctness",
                  name: "Calculating the Percentage of the Correctly Answered Questions on a Test",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/338/embed?act=PCRS&sub=percentage_correctness&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "compute_average",
                  name: "Calculating the Average of Three Numbers",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/339/embed?act=PCRS&sub=compute_average&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Strings",
            order: 2,
            description:
              "Strings in Java are used to represent sequences of characters. They are a built-in class and can be manipulated using various methods, such as concatenation, length, and substring.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "strings.substring",
                  name: "name Initials",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "strings.addition",
                  name: "String Addition",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.addition&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "strings.escape_chars",
                  name: "Strings With Escape Characters",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "strings.equals",
                  name: "String Comparison",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.equals&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "strings.charAt",
                  name: "Accessing String Characters",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.charAt&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "Initials2",
                  name: "Printing Full name with Middle Initial",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&ch=Initials2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "Initials3",
                  name: "Printing name in APA Style",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&ch=Initials3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "StringAddition2",
                  name: "String Concatenation (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.addition&ch=StringAddition2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JEscapeChar2",
                  name: "String With Escape Characters (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&ch=JEscapeChar2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JEscapeChar3",
                  name: "String With Escape Characters (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&ch=JEscapeChar3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JStringEqual2",
                  name: "String Comparison (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.equals&ch=JStringEqual2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JCharAt2",
                  name: "Accessing String Characters (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.charAt&ch=JCharAt2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "first_half",
                  name: "Printing the First Half of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/258/embed?act=PCRS&sub=first_half&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "non_start",
                  name: "Concatenating Two Strings Without Including the First Character of Each of Them",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/259/embed?act=PCRS&sub=non_start&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "make_out_word",
                  name: "Adding One String in the Middle of Another ",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/342/embed?act=PCRS&sub=make_out_word&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "repeat_last_char",
                  name: "Repeating the Last Character of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/344/embed?act=PCRS&sub=repeat_last_char&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "first_last_swap",
                  name: "Swapping the First and Last Characters of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/346/embed?act=PCRS&sub=first_last_swap&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "end_characters",
                  name: "Checking Ending Characters of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/345/embed?act=PCRS&sub=end_characters&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "is_is_substring_or_ not_is_not_substring",
                  name: "Is is substring or not is not substring",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/387/embed?act=PCRS&sub=is_is_substring_or_ not_is_not_substring&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Boolean Expressions",
            order: 3,
            description:
              "Boolean expressions are used to evaluate conditions in a program. They can be true or false, and are often used in if statements and while loops.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "booleans.phone_age",
                  name: "Buying a New Phone",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.phone_age&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "booleans.fail_course",
                  name: "Pass-Fail Rule",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "booleans.rent_car",
                  name: "Renting a Car",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "booleans.hot_dry",
                  name: "Hot-Dry Weather",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "booleans.three_booleans",
                  name: "Three Booleans",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JPhoneAge2",
                  name: "Determining When to Buy a New Phone (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.phone_age&ch=JPhoneAge2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JFailCourse2",
                  name: "Determining When a Student Fails a Course (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&ch=JFailCourse2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JFailCourse3",
                  name: "Determining When a Student Fails a Course (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&ch=JFailCourse3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JRentCar2",
                  name: "Determining When a Customer Could Rent a Car (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&ch=JRentCar2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JRentCar3",
                  name: "Determining When a Customer Could Rent a Car (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&ch=JRentCar3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JBooleanDryHot2",
                  name: "Determining the Weather Condition (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JBooleanDryHot3",
                  name: "Determining the Weather Condition (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JBooleanDryHot4",
                  name: "Determining the Weather Condition (Case 4)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot4&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JThreeBoolean2",
                  name: "Determining When at Least One of the Three Boolean Variables is False",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&ch=JThreeBoolean2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JThreeBoolean3",
                  name: "Determining When All Three Boolean Variables Are Equal",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&ch=JThreeBoolean3&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "love6",
                  name: "Determining Equality to a Specific Number",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/347/embed?act=PCRS&sub=love6&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "is_special",
                  name: "Determining When a Number is Special",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/348/embed?act=PCRS&sub=is_special&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "check_start_end_character",
                  name: "Determining When a String Starts and Ends with Specific Characters",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/349/embed?act=PCRS&sub=check_start_end_character&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "squirrel_play",
                  name: "Determining When the Squirrels in Palo Alto Play",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/350/embed?act=PCRS&sub=squirrel_play&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "in_order",
                  name: "Determining When the three Numbers are in order",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/351/embed?act=PCRS&sub=in_order&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "If-Else",
            order: 4,
            description:
              "The if-else statement is used to execute a block of code if a condition is true, and another block of code if the condition is false. It is a common way to control the flow of a program based on certain conditions.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "ifelse.if_else_num",
                  name: "The Sign of a Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_num&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "ifelse.if_else_wage",
                  name: "The Wage of an Employee",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_wage&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "ifelse.if_else_if_grade",
                  name: "The Grade Letter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_if_grade&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "ifelse.nested_if_temperature",
                  name: "Warning about the Changes in the Weather Condition",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_temperature&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "ifelse.nested_if_min_max",
                  name: "The Min/Max of Three Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_min_max&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "ifElseOddEven",
                  name: "Determining Whether an Integer is Even or Odd",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_num&ch=ifElseOddEven&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JIfElseWages2",
                  name: "Calculating the Wage of an Employee at the Customer Service Call Center",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_wage&ch=JIfElseWages2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JIfElseIfGrade2",
                  name: "Converting the Letter Grade of a Student to It's Numeric Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_if_grade&ch=JIfElseIfGrade2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JNestedIfTemperature2",
                  name: "Warning the User about the Changes in the Temperature and Humidity",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_temperature&ch=JNestedIfTemperature2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JNestedIfMaxOfThree",
                  name: "Determining the Largest of the Three Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_min_max&ch=JNestedIfMaxOfThree&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "sortaSum",
                  name: "Conditional statements 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/352/embed?act=PCRS&sub=sortaSum&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "twoAsOne",
                  name: "Conditional statements 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/353/embed?act=PCRS&sub=twoAsOne&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "greenTicket",
                  name: "Conditional statements 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/354/embed?act=PCRS&sub=greenTicket&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "without2",
                  name: "Conditional statements 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/355/embed?act=PCRS&sub=without2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "in1To10",
                  name: "Conditional statements 5",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/356/embed?act=PCRS&sub=in1To10&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "While Loops",
            order: 5,
            description:
              "A while loop is used to execute a block of code repeatedly as long as a condition is true. It is a common way to repeat a certain action until a certain condition is met.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "while_loops.divisor",
                  name: "Finding Smallest/Largest Divisor of a Positive Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.divisor&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "while_loops.inputs",
                  name: "Receiving Input Integers Until a Certain Condition is Met",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "while_loops.j_average",
                  name: "Calculating the Average of the Input Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "while_loops.j_check_adjacent",
                  name: "Comparing Adjacent Numbers in a Sequence of Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "while_loops.j_digits",
                  name: "Processing the Digits of an Integer ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "while_loops.win_percentage",
                  name: "Calculating the Winning Percentage of a Sports Team ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JLargestDivisor",
                  name: "Finding the Largest Divisor of a Positive Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.divisor&ch=JLargestDivisor&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JInput2",
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JInput3",
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JInput4",
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 4)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput4&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JAverageEvenNums",
                  name: "Calculating the Average of the Input Integers that are an Even Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&ch=JAverageEvenNums&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JAverageDouble",
                  name: "Calculating the Average of Floating-Point Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&ch=JAverageDouble&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JAdjacentConsecutives",
                  name: "Finding Adjacent Consecutive Numbers in a Sequence of Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&ch=JAdjacentConsecutives&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JAdjacentGreater",
                  name: "Finding Adjacent Numbers in Ascending order in a Sequence of Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&ch=JAdjacentGreater&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JSumDigits",
                  name: "The Digit Sum of an Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&ch=JSumDigits&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JReverseNumber",
                  name: "Reversing the Digits of an Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&ch=JReverseNumber&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JWinPercentageInput",
                  name: "Calculating the Winning Percentage of a Sports Team (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&ch=JWinPercentageInput&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JWinPercentageWonEqual",
                  name: "Calculating the Winning Percentage of a Sports Team (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&ch=JWinPercentageWonEqual&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "while1_coding",
                  name: "While Loops 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/357/embed?act=PCRS&sub=while1_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "while2_coding",
                  name: "While Loops 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/358/embed?act=PCRS&sub=while2_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "while3_coding",
                  name: "While Loops 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/359/embed?act=PCRS&sub=while3_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "while4_coding",
                  name: "While Loops 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/360/embed?act=PCRS&sub=while4_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "while5_coding",
                  name: "While Loops 5",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/361/embed?act=PCRS&sub=while5_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "smallest_integer",
                  name: "Smallest integer",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/388/embed?act=PCRS&sub=smallest_integer&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "For Loops",
            order: 6,
            description:
              "A for loop is used to execute a block of code a specific number of times. It is often used when iterating over an array or a collection.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "for_loops.j_for_one",
                  name: "Printing Consecutive Numbers Starting from Zero",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_one&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "for_loops.j_for_two",
                  name: "Printing Consecutive Numbers Within a Specified Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_two&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "for_loops.j_for_three",
                  name: "Printing Sequence of Numbers with a Gap Between Adjacent Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_three&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "for_loops.j_squares",
                  name: "Printing the Squares of Numbers Within a Specified Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JForOne2",
                  name: "Printing Consecutive Numbers Starting from Zero (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_one&ch=JForOne2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JForTwo2",
                  name: "Printing Consecutive Numbers Within a Specified Range (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_two&ch=JForTwo2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JForThree2",
                  name: "Printing Sequence of Numbers with a Gap Between Adjacent Values (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_three&ch=JForThree2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JWriteSquaresOdd",
                  name: "Printing the Squares of Numbers Within a Specified Range (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&ch=JWriteSquaresOdd&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JWriteSquaresRange",
                  name: "Printing the Squares of Numbers Within a Specified Range (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&ch=JWriteSquaresRange&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "for1_coding",
                  name: "For Loop 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/362/embed?act=PCRS&sub=for1_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "for2_coding",
                  name: "For Loop 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/363/embed?act=PCRS&sub=for2_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "for3_coding",
                  name: "For Loop 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/364/embed?act=PCRS&sub=for3_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "for4_coding",
                  name: "For Loop 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/365/embed?act=PCRS&sub=for4_coding&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "sum_square_difference",
                  name: "Sum square difference",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/384/embed?act=PCRS&sub=sum_square_difference&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "largest_prime_factor",
                  name: "Largest prime factor",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/389/embed?act=PCRS&sub=largest_prime_factor&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "largest_palindrome_product",
                  name: "Largest palindrome product",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/390/embed?act=PCRS&sub=largest_palindrome_product&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Objects and Classes",
            order: 7,
            description:
              "Objects are instances of classes in Java. A class is a blueprint or template that defines the attributes and behaviors of an object. Java has many built-in classes, and users can also define their own classes.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "objects.classes.point",
                  name: "The Class for Representing a Point in the Euclidean Plane",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.point&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "objects.classes.tv",
                  name: "The Class for Representing a TV",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.tv&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "objects.classes.account",
                  name: "The Class for Representing a Bank Account",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.account&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "objects.classes.loan",
                  name: "The Class for Representing a Loan",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.loan&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "PointTester2",
                  name: "The Class for Representing a Point in the Euclidean Plane (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.point&ch=PointTester2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "TVTester2",
                  name: "The Class for Representing a TV (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.tv&ch=TVTester2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "Transactions2",
                  name: "The Class for Representing a Bank Account (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.account&ch=Transactions2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "LoanTester2",
                  name: "The Class for Representing a Loan (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.loan&ch=LoanTester2&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "object_classes_1",
                  name: "Objects and Classes 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/366/embed?act=PCRS&sub=object_classes_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "object_classes_2",
                  name: "Objects and Classes 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/368/embed?act=PCRS&sub=object_classes_2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "object_classes_3",
                  name: "Objects and Classes 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/370/embed?act=PCRS&sub=object_classes_3&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "object_classes_4",
                  name: "Objects and Classes 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/371/embed?act=PCRS&sub=object_classes_4&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Nested Loops",
            order: 8,
            description:
              "A nested loop is a loop inside another loop. It is often used when iterating over a two-dimensional array or when performing certain calculations.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "nested_for.star_patterns",
                  name: "Printing A Right Triangle Star Pattern",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.star_patterns&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "nested_for.repeated_sequence",
                  name: "Printing A Sequence of Repeated Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.repeated_sequence&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JStars2",
                  name: "Printing an Inverted Right Triangle Star Pattern",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.star_patterns&ch=JStars2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JRepeatedSequence2",
                  name: "Printing A Sequence of Repeated Numbers (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.repeated_sequence&ch=JRepeatedSequence2&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "nested_loops_1",
                  name: "Nested Loops 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/372/embed?act=PCRS&sub=nested_loops_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "nested_loops_2",
                  name: "Nested Loops 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/373/embed?act=PCRS&sub=nested_loops_2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "symmetrical_array",
                  name: "Symmetrical array",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/385/embed?act=PCRS&sub=symmetrical_array&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Arrays",
            order: 9,
            description:
              "An array is a collection of elements of the same data type. Arrays are used to store and manipulate multiple values in a program. In Java, arrays are declared with a fixed size and can be accessed using an index.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "arrays.j_array_basic",
                  name: "Updating an Element in the Array ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays.j_array_fill",
                  name: "Creating an Array of Numbers/Strings",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_fill&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays.j_array_change",
                  name: "Modifying an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_change&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays.j_array_process_elements",
                  name: "Calculating Sum/Average of the Array Values ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_process_elements&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays.j_array_min_max",
                  name: "Finding the Max/Min Value in an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_min_max&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays.j_temperature",
                  name: "Processing a List of Temperature Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_temperature&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays.j_array_rotate",
                  name: "Rotating the Array Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays.j_search_array",
                  name: "Searching Values of an Array in Another Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JArrayBasic2",
                  name: "Updating an Element in the Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&ch=JArrayBasic2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JArrayBasic3",
                  name: "Updating an Element in the Array (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&ch=JArrayBasic3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JArrayFillUserInput",
                  name: "Creating an Array of User Inputs",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_fill&ch=JArrayFillUserInput&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JArraySwapAdjacentElements",
                  name: "Modifying an Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_change&ch=JArraySwapAdjacentElements&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JAverageArrayElements",
                  name: "Calculating the Average of the Values in the Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_process_elements&ch=JAverageArrayElements&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JArrayMin",
                  name: "Finding the Minimum Value in an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_min_max&ch=JArrayMin&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JTemperatureListDaysAboveThreshold",
                  name: "Displaying the Days That are Above 32 Degrees Fahrenheit",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_temperature&ch=JTemperatureListDaysAboveThreshold&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JArrayRotateLeftTwice",
                  name: "Rotating the Array Values to the Left by Two Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateLeftTwice&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JArrayRotateRight",
                  name: "Rotating the Array Values to the Right by One Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateRight&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JArrayRotateRightTwice",
                  name: "Rotating the List Values to the Right by Two Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateRightTwice&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JSearchArrayTotalCounts",
                  name: "Searching Arrays (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&ch=JSearchArrayTotalCounts&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JSearchArrayCountsEach",
                  name: "Searching Arrays (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&ch=JSearchArrayCountsEach&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "arrays_1",
                  name: "Arrays 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/325/embed?act=PCRS&sub=arrays_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "arrays_2",
                  name: "Arrays 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/323/embed?act=PCRS&sub=arrays_2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "arrays_3",
                  name: "Arrays 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/318/embed?act=PCRS&sub=arrays_3&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "array_4",
                  name: "Arrays 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/331/embed?act=PCRS&sub=array_4&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "fixing_order_of_numbers",
                  name: "Fixing order of numbers",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/386/embed?act=PCRS&sub=fixing_order_of_numbers&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Two-Dimensional Arrays",
            order: 10,
            description:
              "A two-dimensional array is an array with two dimensions or indices. It is used to store data in a table-like format and can be accessed using two indices.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "arrays2d.j_array2d_basic",
                  name: "Updating an Element in the 2D Array ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays2d.j_print_medals",
                  name: "Printing Table of Medal Counts with Row/Column Total",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_print_medals&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "arrays2d.j_soda_survery",
                  name: "Processing the Results of a Soda Survey",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JArrays2dBasic2",
                  name: "Updating Two-Dimensional Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&ch=JArrays2dBasic2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JArrays2dBasic3",
                  name: "Updating Two-Dimensional Array (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&ch=JArrays2dBasic3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JPrintMedalsRowColumnTotal",
                  name: "Printing Table of Medal Winner Counts with Row and Column Totals",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_print_medals&ch=JPrintMedalsRowColumnTotal&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JSodaSurverySodaAvg",
                  name: "Processing Soda Survery (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&ch=JSodaSurverySodaAvg&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JSodaSurverySodaRespondentAvg",
                  name: "Processing Soda Survery (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&ch=JSodaSurverySodaRespondentAvg&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "pcrs_2d_arrays_1",
                  name: "Two-Dimensional Arrays 1 ",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/329/embed?act=PCRS&sub=pcrs_2d_arrays_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "pcrs_2d_arrays_2",
                  name: "Two-Dimensional Arrays 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/375/embed?act=PCRS&sub=pcrs_2d_arrays_2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "pcrs_2d_arrays_3",
                  name: "Two-Dimensional Arrays 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/296/embed?act=PCRS&sub=pcrs_2d_arrays_3&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Exception handling",
            order: 11,
            description:
              " Exception handling is used to handle errors or exceptional conditions that occur during the execution of a program. In Java, exceptions are thrown when an error occurs, and can be caught and handled using try-catch blocks.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "exceptions.j_check_age",
                  name: "Determining Whether One is a Teenager",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_age&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "exceptions.j_check_producut_code",
                  name: "Counting the Number of Valid and Banned Product Codes",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_producut_code&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JCheckAge2",
                  name: "Determining Whether One is a Teenager (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_age&ch=JCheckAge2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JCheckProductCode2",
                  name: "Counting the Number of Valid and Banned Product Codes (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_producut_code&ch=JCheckProductCode2&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "File processing",
            order: 12,
            description:
              "File processing is the process of reading from and writing to files on a computer. In Java, this is typically done using classes such as FileReader and FileWriter.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "files.j_work_hours",
                  name: "Reporting the Total Hours Each Employee Worked ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_work_hours&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "files.j_input_stat",
                  name: "Reporting File Information",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_input_stat&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JWorkHours2",
                  name: "Reporting the Total Hours Each Employee Worked (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_work_hours&ch=JWorkHours2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "JInputStat2",
                  name: "Reporting File Information (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_input_stat&ch=JInputStat2&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "ArrayLists",
            order: 13,
            description:
              "ArrayLists are a type of collection in Java that can dynamically resize to accommodate new elements. They are similar to arrays, but do not have a fixed size and can be more flexible.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "arraylist.vocabulary",
                  name: "Creating a List of Words from File(s)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arraylist.vocabulary&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "JVocabulary2",
                  name: "Comparing the List of Words from Two Files",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arraylist.vocabulary&ch=JVocabulary2&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "array_lst_1",
                  name: "ArrayLists 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/374/embed?act=PCRS&sub=array_lst_1&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Inheritance",
            order: 14,
            description:
              "Inheritance is a way to create new classes based on existing ones. The new class, called a subclass or derived class, inherits attributes and behaviors from the existing class, called the superclass or base class. This is a key feature of object-oriented programming in Java.",
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  id: "inheritance.animals",
                  name: "Animal Class Hierarchy",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.animals&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  id: "inheritance.point",
                  name: "Point Class Hierarchy",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.point&svc=masterygrids",
                },

                {
                  type: type.CHALLENGE,
                  id: "AnimalTester2",
                  name: "Animal Class Hierarchy (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.animals&ch=AnimalTester2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  id: "InheritancePointTester2",
                  name: "Point Class Hierarchy (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.point&ch=InheritancePointTester2&svc=masterygrids",
                },

                {
                  type: type.CODING,
                  id: "inheritance_1",
                  name: "Inheritance 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/376/embed?act=PCRS&sub=inheritance_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  id: "inheritance_2",
                  name: "inheritance 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/377/embed?act=PCRS&sub=inheritance_2&svc=masterygrids",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("\n + 👷 Seeding test users");
  const mockUsers = await prisma.user.createMany({
    data: [
      {
        name: "Tester1",
        USNEmail: "test@usn.no",
        protusId: "norway22190",
        leaderboard: true,
        id: "clduelk2900003b6leubwp06d",
      },
      {
        name: "Tester2",
        USNEmail: "test@usn.no",
        protusId: "norway22191",
        leaderboard: true,
        id: "clduelk2900013b6lq99hnzqx",
      },
      {
        name: "Tester3",
        USNEmail: "test@usn.no",
        protusId: "norway22192",
        leaderboard: true,
        id: "clduelk2900023b6lbje3n09n",
      },
      {
        name: "Tester6",
        USNEmail: "test@usn.no",
        protusId: "norway22193",
        leaderboard: true,
        id: "clduelk2900033b6lr9tne35c",
      },
      {
        name: "Tester4",
        USNEmail: "test@usn.no",
        protusId: "norway22194",
        leaderboard: true,
        id: "clduelk2900043b6l17v5vswp",
      },
      {
        name: "Tester5",
        USNEmail: "test@usn.no",
        protusId: "norway22195",
        leaderboard: true,
        id: "clduelk2900053b6lq0vgmfdo",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
