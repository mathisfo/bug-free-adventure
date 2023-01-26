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
                  activityId: "artithmetic.inc_dec_operators",
                  name: "Increment-Decrement Operators",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arithmetic.f_to_c_conversion",
                  name: "Unit Converter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.f_to_c_conversion&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arithmetic.time_conversion",
                  name: "Time Converter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.time_conversion&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "artihmetic.vending_machine",
                  name: "Vending Machine",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artihmetic.vending_machine&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arithmetic.bmi_calculator",
                  name: "BMI Calculator",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.bmi_calculator&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arithmetic.pythagorean_theorem",
                  name: "Pythagorean Theorem",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.pythagorean_theorem&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JDecInc2",
                  name: "Increment/Decrement Operators (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JDecInc3",
                  name: "Increment/Decrement Operators (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "FahrenheitToCelsius",
                  name: "Fahrenheit to Celsius Conversion",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.f_to_c_conversion&ch=FahrenheitToCelsius&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "DisplayTime2",
                  name: "Converting Milliseconds to Hours, Minutes, and Seconds",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.time_conversion&ch=DisplayTime2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "VendingMachine2",
                  name: "Vending Machine With Quarters, Dimes, and Nickels",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artihmetic.vending_machine&ch=VendingMachine2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "BmiCalculator2",
                  name: "Calculating and Rounding Up Body Mass Index (BMI) To the Nearest Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.bmi_calculator&ch=BmiCalculator2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "PythagoreanTheorem2",
                  name: "Pythagorean Theorem (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.pythagorean_theorem&ch=PythagoreanTheorem2&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "second_in_days",
                  name: "Calculating the Seconds in n Days",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/335/embed?act=PCRS&sub=second_in_days&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "rectangle_perimeter",
                  name: "Calculating the Perimeter of a Rectangle",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/336/embed?act=PCRS&sub=rectangle_perimeter&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "days_to_week_conversion",
                  name: "Converting n Days into Weeks and Remaining Days",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/337/embed?act=PCRS&sub=days_to_week_conversion&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "percentage_correctness",
                  name: "Calculating the Percentage of the Correctly Answered Questions on a Test",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/338/embed?act=PCRS&sub=percentage_correctness&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "compute_average",
                  name: "Calculating the Average of Three Numbers",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/339/embed?act=PCRS&sub=compute_average&svc=masterygractivityIds",
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
                  activityId: "strings.substring",
                  name: "name Initials",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "strings.addition",
                  name: "String Addition",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.addition&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "strings.escape_chars",
                  name: "Strings With Escape Characters",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "strings.equals",
                  name: "String Comparison",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.equals&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "strings.charAt",
                  name: "Accessing String Characters",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.charAt&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "Initials2",
                  name: "Printing Full name with MactivityIddle Initial",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&ch=Initials2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "Initials3",
                  name: "Printing name in APA Style",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&ch=Initials3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "StringAddition2",
                  name: "String Concatenation (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.addition&ch=StringAddition2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JEscapeChar2",
                  name: "String With Escape Characters (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&ch=JEscapeChar2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JEscapeChar3",
                  name: "String With Escape Characters (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&ch=JEscapeChar3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JStringEqual2",
                  name: "String Comparison (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.equals&ch=JStringEqual2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JCharAt2",
                  name: "Accessing String Characters (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.charAt&ch=JCharAt2&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "first_half",
                  name: "Printing the First Half of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/258/embed?act=PCRS&sub=first_half&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "non_start",
                  name: "Concatenating Two Strings Without Including the First Character of Each of Them",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/259/embed?act=PCRS&sub=non_start&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "make_out_word",
                  name: "Adding One String in the MactivityIddle of Another ",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/342/embed?act=PCRS&sub=make_out_word&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "repeat_last_char",
                  name: "Repeating the Last Character of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/344/embed?act=PCRS&sub=repeat_last_char&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "first_last_swap",
                  name: "Swapping the First and Last Characters of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/346/embed?act=PCRS&sub=first_last_swap&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "end_characters",
                  name: "Checking Ending Characters of a String",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/345/embed?act=PCRS&sub=end_characters&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "is_is_substring_or_ not_is_not_substring",
                  name: "Is is substring or not is not substring",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/387/embed?act=PCRS&sub=is_is_substring_or_ not_is_not_substring&svc=masterygractivityIds",
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
                  activityId: "booleans.phone_age",
                  name: "Buying a New Phone",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.phone_age&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "booleans.fail_course",
                  name: "Pass-Fail Rule",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "booleans.rent_car",
                  name: "Renting a Car",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "booleans.hot_dry",
                  name: "Hot-Dry Weather",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "booleans.three_booleans",
                  name: "Three Booleans",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JPhoneAge2",
                  name: "Determining When to Buy a New Phone (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.phone_age&ch=JPhoneAge2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JFailCourse2",
                  name: "Determining When a Student Fails a Course (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&ch=JFailCourse2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JFailCourse3",
                  name: "Determining When a Student Fails a Course (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&ch=JFailCourse3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JRentCar2",
                  name: "Determining When a Customer Could Rent a Car (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&ch=JRentCar2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JRentCar3",
                  name: "Determining When a Customer Could Rent a Car (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&ch=JRentCar3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JBooleanDryHot2",
                  name: "Determining the Weather Condition (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JBooleanDryHot3",
                  name: "Determining the Weather Condition (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JBooleanDryHot4",
                  name: "Determining the Weather Condition (Case 4)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot4&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JThreeBoolean2",
                  name: "Determining When at Least One of the Three Boolean Variables is False",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&ch=JThreeBoolean2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JThreeBoolean3",
                  name: "Determining When All Three Boolean Variables Are Equal",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&ch=JThreeBoolean3&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "love6",
                  name: "Determining Equality to a Specific Number",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/347/embed?act=PCRS&sub=love6&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "is_special",
                  name: "Determining When a Number is Special",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/348/embed?act=PCRS&sub=is_special&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "check_start_end_character",
                  name: "Determining When a String Starts and Ends with Specific Characters",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/349/embed?act=PCRS&sub=check_start_end_character&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "squirrel_play",
                  name: "Determining When the Squirrels in Palo Alto Play",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/350/embed?act=PCRS&sub=squirrel_play&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "in_order",
                  name: "Determining When the three Numbers are in order",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/351/embed?act=PCRS&sub=in_order&svc=masterygractivityIds",
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
                  activityId: "ifelse.if_else_num",
                  name: "The Sign of a Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_num&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "ifelse.if_else_wage",
                  name: "The Wage of an Employee",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_wage&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "ifelse.if_else_if_grade",
                  name: "The Grade Letter",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_if_grade&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "ifelse.nested_if_temperature",
                  name: "Warning about the Changes in the Weather Condition",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_temperature&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "ifelse.nested_if_min_max",
                  name: "The Min/Max of Three Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_min_max&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "ifElseOddEven",
                  name: "Determining Whether an Integer is Even or Odd",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_num&ch=ifElseOddEven&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JIfElseWages2",
                  name: "Calculating the Wage of an Employee at the Customer Service Call Center",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_wage&ch=JIfElseWages2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JIfElseIfGrade2",
                  name: "Converting the Letter Grade of a Student to It's Numeric Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_if_grade&ch=JIfElseIfGrade2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JNestedIfTemperature2",
                  name: "Warning the User about the Changes in the Temperature and HumactivityIdity",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_temperature&ch=JNestedIfTemperature2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JNestedIfMaxOfThree",
                  name: "Determining the Largest of the Three Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_min_max&ch=JNestedIfMaxOfThree&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "sortaSum",
                  name: "Conditional statements 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/352/embed?act=PCRS&sub=sortaSum&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "twoAsOne",
                  name: "Conditional statements 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/353/embed?act=PCRS&sub=twoAsOne&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "greenTicket",
                  name: "Conditional statements 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/354/embed?act=PCRS&sub=greenTicket&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "without2",
                  name: "Conditional statements 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/355/embed?act=PCRS&sub=without2&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "in1To10",
                  name: "Conditional statements 5",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/356/embed?act=PCRS&sub=in1To10&svc=masterygractivityIds",
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
                  activityId: "while_loops.divisor",
                  name: "Finding Smallest/Largest Divisor of a Positive Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.divisor&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "while_loops.inputs",
                  name: "Receiving Input Integers Until a Certain Condition is Met",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "while_loops.j_average",
                  name: "Calculating the Average of the Input Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "while_loops.j_check_adjacent",
                  name: "Comparing Adjacent Numbers in a Sequence of Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "while_loops.j_digits",
                  name: "Processing the Digits of an Integer ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "while_loops.win_percentage",
                  name: "Calculating the Winning Percentage of a Sports Team ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JLargestDivisor",
                  name: "Finding the Largest Divisor of a Positive Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.divisor&ch=JLargestDivisor&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JInput2",
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JInput3",
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JInput4",
                  name: "Receiving Input Integers Until a Certain Condition is Met (Case 4)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput4&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JAverageEvenNums",
                  name: "Calculating the Average of the Input Integers that are an Even Number",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&ch=JAverageEvenNums&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JAverageDouble",
                  name: "Calculating the Average of Floating-Point Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&ch=JAverageDouble&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JAdjacentConsecutives",
                  name: "Finding Adjacent Consecutive Numbers in a Sequence of Integers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&ch=JAdjacentConsecutives&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JAdjacentGreater",
                  name: "Finding Adjacent Numbers in Ascending order in a Sequence of Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&ch=JAdjacentGreater&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JSumDigits",
                  name: "The Digit Sum of an Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&ch=JSumDigits&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JReverseNumber",
                  name: "Reversing the Digits of an Integer",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&ch=JReverseNumber&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JWinPercentageInput",
                  name: "Calculating the Winning Percentage of a Sports Team (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&ch=JWinPercentageInput&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JWinPercentageWonEqual",
                  name: "Calculating the Winning Percentage of a Sports Team (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&ch=JWinPercentageWonEqual&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "while1_CODING",
                  name: "While Loops 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/357/embed?act=PCRS&sub=while1_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "while2_CODING",
                  name: "While Loops 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/358/embed?act=PCRS&sub=while2_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "while3_CODING",
                  name: "While Loops 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/359/embed?act=PCRS&sub=while3_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "while4_CODING",
                  name: "While Loops 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/360/embed?act=PCRS&sub=while4_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "while5_CODING",
                  name: "While Loops 5",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/361/embed?act=PCRS&sub=while5_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "smallest_integer",
                  name: "Smallest integer",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/388/embed?act=PCRS&sub=smallest_integer&svc=masterygractivityIds",
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
                  activityId: "for_loops.j_for_one",
                  name: "Printing Consecutive Numbers Starting from Zero",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_one&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "for_loops.j_for_two",
                  name: "Printing Consecutive Numbers Within a Specified Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_two&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "for_loops.j_for_three",
                  name: "Printing Sequence of Numbers with a Gap Between Adjacent Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_three&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "for_loops.j_squares",
                  name: "Printing the Squares of Numbers Within a Specified Range",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JForOne2",
                  name: "Printing Consecutive Numbers Starting from Zero (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_one&ch=JForOne2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JForTwo2",
                  name: "Printing Consecutive Numbers Within a Specified Range (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_two&ch=JForTwo2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JForThree2",
                  name: "Printing Sequence of Numbers with a Gap Between Adjacent Values (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_three&ch=JForThree2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JWriteSquaresOdd",
                  name: "Printing the Squares of Numbers Within a Specified Range (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&ch=JWriteSquaresOdd&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JWriteSquaresRange",
                  name: "Printing the Squares of Numbers Within a Specified Range (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&ch=JWriteSquaresRange&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "for1_CODING",
                  name: "For Loop 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/362/embed?act=PCRS&sub=for1_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "for2_CODING",
                  name: "For Loop 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/363/embed?act=PCRS&sub=for2_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "for3_CODING",
                  name: "For Loop 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/364/embed?act=PCRS&sub=for3_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "for4_CODING",
                  name: "For Loop 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/365/embed?act=PCRS&sub=for4_CODING&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "sum_square_difference",
                  name: "Sum square difference",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/384/embed?act=PCRS&sub=sum_square_difference&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "largest_prime_factor",
                  name: "Largest prime factor",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/389/embed?act=PCRS&sub=largest_prime_factor&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "largest_palindrome_product",
                  name: "Largest palindrome product",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/390/embed?act=PCRS&sub=largest_palindrome_product&svc=masterygractivityIds",
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
                  activityId: "objects.classes.point",
                  name: "The Class for Representing a Point in the EuclactivityIdean Plane",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.point&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "objects.classes.tv",
                  name: "The Class for Representing a TV",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.tv&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "objects.classes.account",
                  name: "The Class for Representing a Bank Account",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.account&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "objects.classes.loan",
                  name: "The Class for Representing a Loan",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.loan&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "PointTester2",
                  name: "The Class for Representing a Point in the EuclactivityIdean Plane (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.point&ch=PointTester2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "TVTester2",
                  name: "The Class for Representing a TV (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.tv&ch=TVTester2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "Transactions2",
                  name: "The Class for Representing a Bank Account (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.account&ch=Transactions2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "LoanTester2",
                  name: "The Class for Representing a Loan (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.loan&ch=LoanTester2&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "object_classes_1",
                  name: "Objects and Classes 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/366/embed?act=PCRS&sub=object_classes_1&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "object_classes_2",
                  name: "Objects and Classes 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/368/embed?act=PCRS&sub=object_classes_2&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "object_classes_3",
                  name: "Objects and Classes 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/370/embed?act=PCRS&sub=object_classes_3&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "object_classes_4",
                  name: "Objects and Classes 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/371/embed?act=PCRS&sub=object_classes_4&svc=masterygractivityIds",
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
                  activityId: "nested_for.star_patterns",
                  name: "Printing A Right Triangle Star Pattern",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.star_patterns&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "nested_for.repeated_sequence",
                  name: "Printing A Sequence of Repeated Numbers",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.repeated_sequence&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JStars2",
                  name: "Printing an Inverted Right Triangle Star Pattern",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.star_patterns&ch=JStars2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JRepeatedSequence2",
                  name: "Printing A Sequence of Repeated Numbers (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.repeated_sequence&ch=JRepeatedSequence2&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "nested_loops_1",
                  name: "Nested Loops 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/372/embed?act=PCRS&sub=nested_loops_1&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "nested_loops_2",
                  name: "Nested Loops 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/373/embed?act=PCRS&sub=nested_loops_2&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "symmetrical_array",
                  name: "Symmetrical array",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/385/embed?act=PCRS&sub=symmetrical_array&svc=masterygractivityIds",
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
                  activityId: "arrays.j_array_basic",
                  name: "Updating an Element in the Array ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays.j_array_fill",
                  name: "Creating an Array of Numbers/Strings",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_fill&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays.j_array_change",
                  name: "Modifying an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_change&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays.j_array_process_elements",
                  name: "Calculating Sum/Average of the Array Values ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_process_elements&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays.j_array_min_max",
                  name: "Finding the Max/Min Value in an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_min_max&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays.j_temperature",
                  name: "Processing a List of Temperature Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_temperature&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays.j_array_rotate",
                  name: "Rotating the Array Values",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays.j_search_array",
                  name: "Searching Values of an Array in Another Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JArrayBasic2",
                  name: "Updating an Element in the Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&ch=JArrayBasic2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JArrayBasic3",
                  name: "Updating an Element in the Array (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&ch=JArrayBasic3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JArrayFillUserInput",
                  name: "Creating an Array of User Inputs",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_fill&ch=JArrayFillUserInput&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JArraySwapAdjacentElements",
                  name: "Modifying an Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_change&ch=JArraySwapAdjacentElements&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JAverageArrayElements",
                  name: "Calculating the Average of the Values in the Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_process_elements&ch=JAverageArrayElements&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JArrayMin",
                  name: "Finding the Minimum Value in an Array",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_min_max&ch=JArrayMin&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JTemperatureListDaysAboveThreshold",
                  name: "Displaying the Days That are Above 32 Degrees Fahrenheit",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_temperature&ch=JTemperatureListDaysAboveThreshold&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JArrayRotateLeftTwice",
                  name: "Rotating the Array Values to the Left by Two Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateLeftTwice&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JArrayRotateRight",
                  name: "Rotating the Array Values to the Right by One Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateRight&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JArrayRotateRightTwice",
                  name: "Rotating the List Values to the Right by Two Position",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateRightTwice&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JSearchArrayTotalCounts",
                  name: "Searching Arrays (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&ch=JSearchArrayTotalCounts&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JSearchArrayCountsEach",
                  name: "Searching Arrays (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&ch=JSearchArrayCountsEach&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "arrays_1",
                  name: "Arrays 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/325/embed?act=PCRS&sub=arrays_1&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "arrays_2",
                  name: "Arrays 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/323/embed?act=PCRS&sub=arrays_2&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "arrays_3",
                  name: "Arrays 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/318/embed?act=PCRS&sub=arrays_3&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "array_4",
                  name: "Arrays 4",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/331/embed?act=PCRS&sub=array_4&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "fixing_order_of_numbers",
                  name: "Fixing order of numbers",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/386/embed?act=PCRS&sub=fixing_order_of_numbers&svc=masterygractivityIds",
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
                  activityId: "arrays2d.j_array2d_basic",
                  name: "Updating an Element in the 2D Array ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays2d.j_print_medals",
                  name: "Printing Table of Medal Counts with Row/Column Total",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_print_medals&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "arrays2d.j_soda_survery",
                  name: "Processing the Results of a Soda Survey",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JArrays2dBasic2",
                  name: "Updating Two-Dimensional Array (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&ch=JArrays2dBasic2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JArrays2dBasic3",
                  name: "Updating Two-Dimensional Array (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&ch=JArrays2dBasic3&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JPrintMedalsRowColumnTotal",
                  name: "Printing Table of Medal Winner Counts with Row and Column Totals",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_print_medals&ch=JPrintMedalsRowColumnTotal&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JSodaSurverySodaAvg",
                  name: "Processing Soda Survery (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&ch=JSodaSurverySodaAvg&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JSodaSurverySodaRespondentAvg",
                  name: "Processing Soda Survery (Case 3)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&ch=JSodaSurverySodaRespondentAvg&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "pcrs_2d_arrays_1",
                  name: "Two-Dimensional Arrays 1 ",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/329/embed?act=PCRS&sub=pcrs_2d_arrays_1&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "pcrs_2d_arrays_2",
                  name: "Two-Dimensional Arrays 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/375/embed?act=PCRS&sub=pcrs_2d_arrays_2&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "pcrs_2d_arrays_3",
                  name: "Two-Dimensional Arrays 3",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/296/embed?act=PCRS&sub=pcrs_2d_arrays_3&svc=masterygractivityIds",
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
                  activityId: "exceptions.j_check_age",
                  name: "Determining Whether One is a Teenager",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_age&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "exceptions.j_check_producut_code",
                  name: "Counting the Number of ValactivityId and Banned Product Codes",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_producut_code&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JCheckAge2",
                  name: "Determining Whether One is a Teenager (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_age&ch=JCheckAge2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JCheckProductCode2",
                  name: "Counting the Number of ValactivityId and Banned Product Codes (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_producut_code&ch=JCheckProductCode2&svc=masterygractivityIds",
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
                  activityId: "files.j_work_hours",
                  name: "Reporting the Total Hours Each Employee Worked ",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_work_hours&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "files.j_input_stat",
                  name: "Reporting File Information",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_input_stat&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JWorkHours2",
                  name: "Reporting the Total Hours Each Employee Worked (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_work_hours&ch=JWorkHours2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "JInputStat2",
                  name: "Reporting File Information (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_input_stat&ch=JInputStat2&svc=masterygractivityIds",
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
                  activityId: "arraylist.vocabulary",
                  name: "Creating a List of Words from File(s)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arraylist.vocabulary&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "JVocabulary2",
                  name: "Comparing the List of Words from Two Files",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arraylist.vocabulary&ch=JVocabulary2&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "array_lst_1",
                  name: "ArrayLists 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/374/embed?act=PCRS&sub=array_lst_1&svc=masterygractivityIds",
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
                  activityId: "inheritance.animals",
                  name: "Animal Class Hierarchy",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.animals&svc=masterygractivityIds",
                },
                {
                  type: type.EXAMPLE,
                  activityId: "inheritance.point",
                  name: "Point Class Hierarchy",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.point&svc=masterygractivityIds",
                },

                {
                  type: type.CHALLENGE,
                  activityId: "AnimalTester2",
                  name: "Animal Class Hierarchy (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.animals&ch=AnimalTester2&svc=masterygractivityIds",
                },
                {
                  type: type.CHALLENGE,
                  activityId: "InheritancePointTester2",
                  name: "Point Class Hierarchy (Case 2)",
                  url: "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.point&ch=InheritancePointTester2&svc=masterygractivityIds",
                },

                {
                  type: type.CODING,
                  activityId: "inheritance_1",
                  name: "Inheritance 1",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/376/embed?act=PCRS&sub=inheritance_1&svc=masterygractivityIds",
                },
                {
                  type: type.CODING,
                  activityId: "inheritance_2",
                  name: "inheritance 2",
                  url: "https://pcrs.utm.utoronto.ca/mgrids/problems/java/377/embed?act=PCRS&sub=inheritance_2&svc=masterygractivityIds",
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
