import { PrismaClient, type } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const java = await prisma.course.create({
    data: {
      courseName: "Java",
      modules: {
        create: [
          {
            moduleName: "Variables and Operations",
            order: 1,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Increment-Decrement Operators",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Unit Converter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.f_to_c_conversion&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Time Converter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.time_conversion&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Vending Machine",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artihmetic.vending_machine&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "BMI Calculator",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.bmi_calculator&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Pythagorean Theorem",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.pythagorean_theorem&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Increment/Decrement Operators (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Increment/Decrement Operators (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Fahrenheit to Celsius Conversion",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.f_to_c_conversion&ch=FahrenheitToCelsius&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Converting Milliseconds to Hours, Minutes, and Seconds",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.time_conversion&ch=DisplayTime2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Vending Machine With Quarters, Dimes, and Nickels",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artihmetic.vending_machine&ch=VendingMachine2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Calculating and Rounding Up Body Mass Index (BMI) To the Nearest Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.bmi_calculator&ch=BmiCalculator2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Pythagorean Theorem (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.pythagorean_theorem&ch=PythagoreanTheorem2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Calculating the Seconds in n Days",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/335/embed?act=PCRS&sub=second_in_days&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Calculating the Perimeter of a Rectangle",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/336/embed?act=PCRS&sub=rectangle_perimeter&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Converting n Days into Weeks and Remaining Days",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/337/embed?act=PCRS&sub=days_to_week_conversion&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Calculating the Percentage of the Correctly Answered Questions on a Test",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/338/embed?act=PCRS&sub=percentage_correctness&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Calculating the Average of Three Numbers",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/339/embed?act=PCRS&sub=compute_average&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Strings",
            order: 2,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "name Initials",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "String Addition",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.addition&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Strings With Escape Characters",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "String Comparison",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.equals&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Accessing String Characters",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.charAt&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing Full name with Middle Initial",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&ch=Initials2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing name in APA Style",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&ch=Initials3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "String Concatenation (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.addition&ch=StringAddition2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "String With Escape Characters (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&ch=JEscapeChar2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "String With Escape Characters (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&ch=JEscapeChar3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "String Comparison (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.equals&ch=JStringEqual2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Accessing String Characters (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.charAt&ch=JCharAt2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Printing the First Half of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/258/embed?act=PCRS&sub=first_half&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Concatenating Two Strings Without Including the First Character of Each of Them",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/259/embed?act=PCRS&sub=non_start&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Adding One String in the Middle of Another ",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/342/embed?act=PCRS&sub=make_out_word&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Repeating the Last Character of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/344/embed?act=PCRS&sub=repeat_last_char&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Swapping the First and Last Characters of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/346/embed?act=PCRS&sub=first_last_swap&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Checking Ending Characters of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/345/embed?act=PCRS&sub=end_characters&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Is is substring or not is not substring",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/387/embed?act=PCRS&sub=is_is_substring_or_ not_is_not_substring&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Boolean Expressions",
            order: 3,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Buying a New Phone",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.phone_age&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Pass-Fail Rule",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Renting a Car",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Hot-Dry Weather",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Three Booleans",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining When to Buy a New Phone (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.phone_age&ch=JPhoneAge2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining When a Student Fails a Course (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&ch=JFailCourse2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining When a Student Fails a Course (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&ch=JFailCourse3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining When a Customer Could Rent a Car (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&ch=JRentCar2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining When a Customer Could Rent a Car (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&ch=JRentCar3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining the Weather Condition (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining the Weather Condition (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining the Weather Condition (Case 4)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot4&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining When at Least One of the Three Boolean Variables is False",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&ch=JThreeBoolean2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining When All Three Boolean Variables Are Equal",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&ch=JThreeBoolean3&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Determining Equality to a Specific Number",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/347/embed?act=PCRS&sub=love6&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Determining When a Number is Special",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/348/embed?act=PCRS&sub=is_special&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Determining When a String Starts and Ends with Specific Characters",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/349/embed?act=PCRS&sub=check_start_end_character&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Determining When the Squirrels in Palo Alto Play",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/350/embed?act=PCRS&sub=squirrel_play&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Determining When the three Numbers are in order",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/351/embed?act=PCRS&sub=in_order&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "If-Else",
            order: 4,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "The Sign of a Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_num&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "The Wage of an Employee",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_wage&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "The Grade Letter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_if_grade&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Warning about the Changes in the Weather Condition",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_temperature&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "The Min/Max of Three Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_min_max&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining Whether an Integer is Even or Odd",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_num&ch=ifElseOddEven&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Calculating the Wage of an Employee at the Customer Service Call Center",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_wage&ch=JIfElseWages2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Converting the Letter Grade of a Student to It's Numeric Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_if_grade&ch=JIfElseIfGrade2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Warning the User about the Changes in the Temperature and Humidity",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_temperature&ch=JNestedIfTemperature2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining the Largest of the Three Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_min_max&ch=JNestedIfMaxOfThree&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Conditional statements 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/352/embed?act=PCRS&sub=sortaSum&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Conditional statements 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/353/embed?act=PCRS&sub=twoAsOne&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Conditional statements 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/354/embed?act=PCRS&sub=greenTicket&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Conditional statements 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/355/embed?act=PCRS&sub=without2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Conditional statements 5",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/356/embed?act=PCRS&sub=in1To10&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "While Loops",
            order: 5,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Finding Smallest/Largest Divisor of a Positive Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.divisor&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Receiving Input Integers Until a Certain Condition is Met",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Calculating the Average of the Input Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Comparing Adjacent Numbers in a Sequence of Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Processing the Digits of an Integer ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Calculating the Winning Percentage of a Sports Team ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Finding the Largest Divisor of a Positive Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.divisor&ch=JLargestDivisor&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 4)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput4&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Calculating the Average of the Input Integers that are an Even Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&ch=JAverageEvenNums&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Calculating the Average of Floating-Point Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&ch=JAverageDouble&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Finding Adjacent Consecutive Numbers in a Sequence of Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&ch=JAdjacentConsecutives&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Finding Adjacent Numbers in Ascending order in a Sequence of Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&ch=JAdjacentGreater&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "The Digit Sum of an Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&ch=JSumDigits&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Reversing the Digits of an Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&ch=JReverseNumber&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Calculating the Winning Percentage of a Sports Team (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&ch=JWinPercentageInput&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Calculating the Winning Percentage of a Sports Team (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&ch=JWinPercentageWonEqual&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "While Loops 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/357/embed?act=PCRS&sub=while1_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "While Loops 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/358/embed?act=PCRS&sub=while2_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "While Loops 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/359/embed?act=PCRS&sub=while3_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "While Loops 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/360/embed?act=PCRS&sub=while4_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "While Loops 5",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/361/embed?act=PCRS&sub=while5_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Smallest integer",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/388/embed?act=PCRS&sub=smallest_integer&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "For Loops",
            order: 6,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Printing Consecutive Numbers Starting from Zero",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_one&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Printing Consecutive Numbers Within a Specified Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_two&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Printing Sequence of Numbers with a Gap Between Adjacent Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_three&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Printing the Squares of Numbers Within a Specified Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing Consecutive Numbers Starting from Zero (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_one&ch=JForOne2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing Consecutive Numbers Within a Specified Range (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_two&ch=JForTwo2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing Sequence of Numbers with a Gap Between Adjacent Values (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_three&ch=JForThree2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing the Squares of Numbers Within a Specified Range (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&ch=JWriteSquaresOdd&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing the Squares of Numbers Within a Specified Range (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&ch=JWriteSquaresRange&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "For Loop 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/362/embed?act=PCRS&sub=for1_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "For Loop 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/363/embed?act=PCRS&sub=for2_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "For Loop 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/364/embed?act=PCRS&sub=for3_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "For Loop 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/365/embed?act=PCRS&sub=for4_CODING&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Sum square difference",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/384/embed?act=PCRS&sub=sum_square_difference&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Largest prime factor",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/389/embed?act=PCRS&sub=largest_prime_factor&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Largest palindrome product",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/390/embed?act=PCRS&sub=largest_palindrome_product&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Objects and Classes",
            order: 7,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "The Class for Representing a Point in the Euclidean Plane",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.point&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "The Class for Representing a TV",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.tv&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "The Class for Representing a Bank Account",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.account&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "The Class for Representing a Loan",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.loan&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "The Class for Representing a Point in the Euclidean Plane (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.point&ch=PointTester2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "The Class for Representing a TV (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.tv&ch=TVTester2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "The Class for Representing a Bank Account (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.account&ch=Transactions2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "The Class for Representing a Loan (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.loan&ch=LoanTester2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Objects and Classes 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/366/embed?act=PCRS&sub=object_classes_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Objects and Classes 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/368/embed?act=PCRS&sub=object_classes_2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Objects and Classes 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/370/embed?act=PCRS&sub=object_classes_3&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Objects and Classes 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/371/embed?act=PCRS&sub=object_classes_4&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Nested Loops",
            order: 8,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Printing A Right Triangle Star Pattern",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.star_patterns&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Printing A Sequence of Repeated Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.repeated_sequence&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing an Inverted Right Triangle Star Pattern",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.star_patterns&ch=JStars2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing A Sequence of Repeated Numbers (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.repeated_sequence&ch=JRepeatedSequence2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Nested Loops 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/372/embed?act=PCRS&sub=nested_loops_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Nested Loops 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/373/embed?act=PCRS&sub=nested_loops_2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Symmetrical array",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/385/embed?act=PCRS&sub=symmetrical_array&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Arrays",
            order: 9,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Updating an Element in the Array ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Creating an Array of Numbers/Strings",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_fill&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Modifying an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_change&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Calculating Sum/Average of the Array Values ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_process_elements&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Finding the Max/Min Value in an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_min_max&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Processing a List of Temperature Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_temperature&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Rotating the Array Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Searching Values of an Array in Another Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Updating an Element in the Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&ch=JArrayBasic2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Updating an Element in the Array (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&ch=JArrayBasic3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Creating an Array of User Inputs",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_fill&ch=JArrayFillUserInput&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Modifying an Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_change&ch=JArraySwapAdjacentElements&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Calculating the Average of the Values in the Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_process_elements&ch=JAverageArrayElements&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Finding the Minimum Value in an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_min_max&ch=JArrayMin&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Displaying the Days That are Above 32 Degrees Fahrenheit",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_temperature&ch=JTemperatureListDaysAboveThreshold&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Rotating the Array Values to the Left by Two Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateLeftTwice&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Rotating the Array Values to the Right by One Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateRight&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Rotating the List Values to the Right by Two Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateRightTwice&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Searching Arrays (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&ch=JSearchArrayTotalCounts&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Searching Arrays (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&ch=JSearchArrayCountsEach&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Arrays 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/325/embed?act=PCRS&sub=arrays_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Arrays 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/323/embed?act=PCRS&sub=arrays_2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Arrays 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/318/embed?act=PCRS&sub=arrays_3&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Arrays 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/331/embed?act=PCRS&sub=array_4&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Fixing order of numbers",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/386/embed?act=PCRS&sub=fixing_order_of_numbers&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Two-Dimensional Arrays",
            order: 10,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Updating an Element in the 2D Array ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Printing Table of Medal Counts with Row/Column Total",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_print_medals&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Processing the Results of a Soda Survey",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Updating Two-Dimensional Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&ch=JArrays2dBasic2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Updating Two-Dimensional Array (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&ch=JArrays2dBasic3&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Printing Table of Medal Winner Counts with Row and Column Totals",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_print_medals&ch=JPrintMedalsRowColumnTotal&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Processing Soda Survery (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&ch=JSodaSurverySodaAvg&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Processing Soda Survery (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&ch=JSodaSurverySodaRespondentAvg&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Two-Dimensional Arrays 1 ",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/329/embed?act=PCRS&sub=pcrs_2d_arrays_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Two-Dimensional Arrays 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/375/embed?act=PCRS&sub=pcrs_2d_arrays_2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Two-Dimensional Arrays 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/296/embed?act=PCRS&sub=pcrs_2d_arrays_3&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Exception handling",
            order: 11,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Determining Whether One is a Teenager",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_age&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Counting the Number of Valid and Banned Product Codes",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_producut_code&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Determining Whether One is a Teenager (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_age&ch=JCheckAge2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Counting the Number of Valid and Banned Product Codes (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_producut_code&ch=JCheckProductCode2&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "File processing",
            order: 12,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Reporting the Total Hours Each Employee Worked ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_work_hours&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Reporting File Information",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_input_stat&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Reporting the Total Hours Each Employee Worked (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_work_hours&ch=JWorkHours2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Reporting File Information (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_input_stat&ch=JInputStat2&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "ArrayLists",
            order: 13,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Creating a List of Words from File(s)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arraylist.vocabulary&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Comparing the List of Words from Two Files",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arraylist.vocabulary&ch=JVocabulary2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "ArrayLists 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/374/embed?act=PCRS&sub=array_lst_1&svc=masterygrids",
                },
              ],
            },
          },
          {
            moduleName: "Inheritance",
            order: 14,
            ActivityResource: {
              create: [
                {
                  type: type.EXAMPLE,
                  name: "Animal Class Hierarchy",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.animals&svc=masterygrids",
                },
                {
                  type: type.EXAMPLE,
                  name: "Point Class Hierarchy",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.point&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Animal Class Hierarchy (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.animals&ch=AnimalTester2&svc=masterygrids",
                },
                {
                  type: type.CHALLENGE,
                  name: "Point Class Hierarchy (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.point&ch=InheritancePointTester2&svc=masterygrids",
                },
                {
                  type: type.CODING,
                  name: "Inheritance 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/376/embed?act=PCRS&sub=inheritance_1&svc=masterygrids",
                },
                {
                  type: type.CODING,
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
