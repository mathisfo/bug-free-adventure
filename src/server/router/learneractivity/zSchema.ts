import { TypeOf, z } from "zod";

const activityValues = z.object({
  k: z.number(),
  p: z.number(),
  a: z.number(),
  s: z.number(),
  t: z.number(),
  aSeq: z.string(),
});

const topicValues = z.object({
  Examples: z.object({ k: z.number(), p: z.number() }),
  Challenges: z.object({ k: z.number(), p: z.number() }),
  Coding: z.object({ k: z.number(), p: z.number() }),
});

const sequencing = z.object({
  Examples: z.number(),
  Challenges: z.number(),
  Coding: z.number(),
});

const overall = z.object({ k: z.number(), p: z.number() });

const topic = z.record(
  z.string(),
  z.object({
    topicValues,
    sequencing,
    overall,
  })
);



const LearnerActivitySchema = z.object({
  lastActivityId: z.string(),
  lastActivityRes: z.number(),
  learner: z.object({
    id: z.string(),
    name: z.string(),
    state: z.object({
      topics: topic,
      activities: z.object({
        "Variables and Operations": z.object({
          Examples: z.object({
            "artithmetic.inc_dec_operators": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arithmetic.f_to_c_conversion": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arithmetic.time_conversion": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "artihmetic.vending_machine": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arithmetic.bmi_calculator": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arithmetic.pythagorean_theorem": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JDecInc2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JDecInc3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            FahrenheitToCelsius: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            DisplayTime2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            VendingMachine2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            BmiCalculator2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            PythagoreanTheorem2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            second_in_days: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            rectangle_perimeter: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            days_to_week_conversion: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            percentage_correctness: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            compute_average: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        Strings: z.object({
          Examples: z.object({
            "strings.substring": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "strings.addition": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "strings.escape_chars": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "strings.equals": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "strings.charAt": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            Initials2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            Initials3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            StringAddition2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JEscapeChar2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JEscapeChar3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JStringEqual2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JCharAt2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            first_half: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            non_start: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            make_out_word: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            repeat_last_char: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            first_last_swap: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            end_characters: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "is_is_substring_or_ not_is_not_substring": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        "Boolean Expressions": z.object({
          Examples: z.object({
            "booleans.phone_age": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "booleans.fail_course": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "booleans.rent_car": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "booleans.hot_dry": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "booleans.three_booleans": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JPhoneAge2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JFailCourse2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JFailCourse3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JRentCar2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JRentCar3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JBooleanDryHot2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JBooleanDryHot3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JBooleanDryHot4: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JThreeBoolean2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JThreeBoolean3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            love6: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            is_special: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            check_start_end_character: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            squirrel_play: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            in_order: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        "If-Else": z.object({
          Examples: z.object({
            "ifelse.if_else_num": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "ifelse.if_else_wage": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "ifelse.if_else_if_grade": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "ifelse.nested_if_temperature": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "ifelse.nested_if_min_max": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            ifElseOddEven: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JIfElseWages2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JIfElseIfGrade2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JNestedIfTemperature2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JNestedIfMaxOfThree: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            sortaSum: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            twoAsOne: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            greenTicket: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            without2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            in1To10: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        "While Loops": z.object({
          Examples: z.object({
            "while_loops.divisor": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "while_loops.inputs": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "while_loops.j_average": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "while_loops.j_check_adjacent": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "while_loops.j_digits": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "while_loops.win_percentage": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JLargestDivisor: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JInput2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JInput3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JInput4: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JAverageEvenNums: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JAverageDouble: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JAdjacentConsecutives: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JAdjacentGreater: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JSumDigits: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JReverseNumber: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JWinPercentageInput: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JWinPercentageWonEqual: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            while1_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            while2_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            while3_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            while4_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            while5_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            smallest_integer: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        "For Loops": z.object({
          Examples: z.object({
            "for_loops.j_for_one": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "for_loops.j_for_two": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "for_loops.j_for_three": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "for_loops.j_squares": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JForOne2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JForTwo2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JForThree2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JWriteSquaresOdd: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JWriteSquaresRange: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            for1_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            for2_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            for3_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            for4_coding: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            sum_square_difference: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            largest_prime_factor: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            largest_palindrome_product: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        "Objects and Classes": z.object({
          Examples: z.object({
            "objects.classes.point": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "objects.classes.tv": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "objects.classes.account": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "objects.classes.loan": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            PointTester2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            TVTester2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            Transactions2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            LoanTester2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            object_classes_1: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            object_classes_2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            object_classes_3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            object_classes_4: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        "Nested Loops": z.object({
          Examples: z.object({
            "nested_for.star_patterns": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "nested_for.repeated_sequence": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JStars2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JRepeatedSequence2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            nested_loops_1: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            nested_loops_2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            symmetrical_array: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        Arrays: z.object({
          Examples: z.object({
            "arrays.j_array_basic": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays.j_array_fill": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays.j_array_change": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays.j_array_process_elements": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays.j_array_min_max": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays.j_temperature": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays.j_array_rotate": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays.j_search_array": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JArrayBasic2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JArrayBasic3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JArrayFillUserInput: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JArraySwapAdjacentElements: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JAverageArrayElements: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JArrayMin: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JTemperatureListDaysAboveThreshold: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JArrayRotateLeftTwice: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JArrayRotateRight: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JArrayRotateRightTwice: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JSearchArrayTotalCounts: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JSearchArrayCountsEach: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            arrays_1: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            arrays_2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            arrays_3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            array_4: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            fixing_order_of_numbers: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        "Two-Dimensional Arrays": z.object({
          Examples: z.object({
            "arrays2d.j_array2d_basic": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays2d.j_print_medals": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "arrays2d.j_soda_survery": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JArrays2dBasic2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JArrays2dBasic3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JPrintMedalsRowColumnTotal: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JSodaSurverySodaAvg: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JSodaSurverySodaRespondentAvg: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            pcrs_2d_arrays_1: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            pcrs_2d_arrays_2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            pcrs_2d_arrays_3: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        "Exception handling": z.object({
          Examples: z.object({
            "exceptions.j_check_age": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "exceptions.j_check_producut_code": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JCheckAge2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JCheckProductCode2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({}).catchall(z.any()),
        }),
        "File processing": z.object({
          Examples: z.object({
            "files.j_work_hours": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "files.j_input_stat": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JWorkHours2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            JInputStat2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({}).catchall(z.any()),
        }),
        ArrayLists: z.object({
          Examples: z.object({
            "arraylist.vocabulary": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            JVocabulary2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            array_lst_1: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
        Inheritance: z.object({
          Examples: z.object({
            "inheritance.animals": z.object({
              activityValues,
              sequencing: z.number(),
            }),
            "inheritance.point": z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Challenges: z.object({
            AnimalTester2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            InheritancePointTester2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
          Coding: z.object({
            inheritance_1: z.object({
              activityValues,
              sequencing: z.number(),
            }),
            inheritance_2: z.object({
              activityValues,
              sequencing: z.number(),
            }),
          }),
        }),
      }),
    }),
  }),
  groups: z.array(z.any()),
  recommendation: z.array(z.any()),
  recommendationKC: z.array(z.any()),
  feedback: z.object({}).catchall(z.any()),
  logs: z.array(z.any()),
  ownBadges: z.array(z.any()),
  rmcCount: z.object({}).catchall(z.any()),
});
