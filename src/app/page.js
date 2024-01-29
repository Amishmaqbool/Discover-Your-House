"use client";
import { useState } from "react";
const questions = [
  {
    id: 5,
    text: "IF YOU HAD TO CREATE A OPTION , WHAT WOULD YOU MAKE?",
    options: [
      {
        label: "ETERNITY",
        color: "Pink",
        image: "/Assets/choose-a-option/primary.svg",
      },
      {
        label: "INTELLECT",
        color: "Blue",
        image: "/Assets/choose-a-option/secondary.svg",
      },
      {
        label: "CREATIVITY",
        color: "Yellow",
        image: "/Assets/choose-a-option/tertiary.svg",
      },
    ],
  },
  {
    id: 4,
    text: "IF YOU HAD ANY POWER WHAT WOULD YOU CHOOSE?",
    options: [
      {
        label: "STRENGTH",
        color: "Yellow",
        image: "/Assets/choose-a-power/primary.svg",
      },
      {
        label: "SHAPESHIFT",
        color: "Blue",
        image: "/Assets/choose-a-power/secondary.svg",
      },
      {
        label: "Pink",
        color: "Blue",
        image: "/Assets/choose-a-power/tertiary.svg",
      },
    ],
  },
  
  {
    id: 1,
    text: "WHAT ARE  YOU MOST LOOKING FORWARD TO LEARNING AT SCHOOL OF INVENTION ?",
    options: [
      {
        label: "FLYING",
        color: "Yellow",
        image: "/Assets/school-of-invention/primary.svg",
      },
      {
        label: "TELEPORTING",
        color: "Blue",
        image: "/Assets/school-of-invention/secondary.svg",
      },
      {
        label: "CURING",
        color: "Pink",
        image: "/Assets/school-of-invention/tertiary.svg",
      },
    ],
  },
  {
    id: 2,
    text: "THREE BOXES ARE REPLACED BEFORE YOU WHICH ONE WOULD YOU CHOOSE?",
    options: [
      {
        label: "TOOLS",
        color: "Blue",
        image: "/Assets/three-boxes/primary.svg",
      },
      {
        label: "PAINTS",
        color: "Yellow",
        image: "/Assets/three-boxes/secondary.svg",
      },
      {
        label: "BLOOD",
        color: "Pink",
        image: "/Assets/three-boxes/tertiary.svg",
      },
    ],
  },
  {
    id: 4,
    text: "CHOOSE TO CONTINUE?",
    options: [
      {
        label: "RIVER",
        color: "Pink",
        image: "/Assets/choose-to-continue/primary.svg",
      },
      {
        label: "TREE",
        color: "Yellow",
        image: "/Assets/choose-to-continue/secondary.svg",
      },
      {
        label: "MOON",
        color: "Blue",
        image: "/Assets/choose-to-continue/tertiary.svg",
      },
    ],
  },
  {
    id: 4,
    text: "",
    options: [
      { label: "DANCE", color: "Yellow", image: "" },
      { label: "DISCOVER", color: "Blue", image: "" },
      { label: "DREAM", color: "Pink", image: "" },
    ],
  },
  {
    id: 4,
    text: "CHOOSE A PET",
    options: [
      {
        label: "",
        color: "Blue",
        image: "/Assets/choose-a-pet/primary.svg",
      },
      {
        label: "",
        color: "Pink",
        image: "/Assets/choose-a-pet/secondary.svg",
      },
      {
        label: "",
        color: "Yellow",
        image: "/Assets/choose-a-pet/tertiary.svg",
      },
    ],
  },
];

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sortingCeremonyEnded, setSortingCeremonyEnded] = useState(false);
  const [status , setStatus] = useState(false)
 const [result , setResults] = useState("")
  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleOptionSelect = (selectedOption) => {
    if (!quizStarted || sortingCeremonyEnded) {
      return;
    }

    const { label, color } = selectedOption;
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { option: label, color: color },
    ]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateResult();
      setSortingCeremonyEnded(true);
      setResults(result)
    }
  };

  const calculateResult = () => {
    const count = {
      Pink: 0,
      Yellow: 0,
      Blue: 0,
    };

    answers.forEach((answer) => {
      count[answer.color]++;
    });

    let mostSelected = "Pink";
    if (count.Yellow === count.Pink && count.Yellow === count.Blue) {
      mostSelected = "Pink";
    } else {
      mostSelected = Object.keys(count).reduce((a, b) =>
        count[a] > count[b] ? a : b
      );
    }

    return mostSelected;
  };
  const handleContinue = () => {
    setStatus(true)
  };

  return (
    <div
      className={
        quizStarted
          ? "bg-container relative text-white bg-black"
          : "h-screen pb-12 bg-black z-[10] text-white"
      }
    >
      <div className="mx-auto pt-36 max-w-[1000px]">
        {!quizStarted ? (
          <div className="flex flex-col mx-auto pt-10">
            <img src="/Assets/logo.svg" className="h-28 w-28 mx-auto" alt="" />
            <h1 className="mx-auto lg:text-[48px] pt-[24px] font-bold">
              DISCOVER YOUR HOUSE
            </h1>
            <div className="mx-auto pt-10">
              <button
                onClick={startQuiz}
                className="text-center hover:text-[#00FFFF] border-[#00FFFF] border-2 py-4 rounded-md px-12  text-3xl font-bold"
              >
                START THE SORTING CEREMONY
              </button>
            </div>
          </div>
        ) : (
          <>
            {!sortingCeremonyEnded && (
              <div className="z-[1000]">
                <ul>
                  <br />
                  <li className="flex lg:text-[28px] font-bold justify-center text-center">
                    {questions[currentQuestion].text} <br />
                  </li>
                  <br />
                </ul>
                <div className="lg:flex cursor-pointer lg:justify-between grid justify-center ">
                  {questions[currentQuestion].options.map((option) => (
                    <div
                      key={option.label}
                      onClick={() => handleOptionSelect(option)}
                      className="text-center min-h-[200px] z-[1000] w-full"
                    >
                      {option.image && (
                        <div>
                          <img
                            className=" shadow-2xl bg-black bg-opacity-30 h-[400px] w-[800px]"
                            src={option?.image}
                            alt=""
                          />
                        </div>
                      )}
                      <button className="lg:text-[30px] mt-8 font-bold">
                        {option?.label}
                        <br />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {sortingCeremonyEnded && (
        <>
        {!status && 
        <div className="absolute top-0 w-[100%] left-0 bg-container h-[100%]">
          <div className="grid justify-center items-center pt-[400px]">
            <h1 className="text-[32px] font-bold max-w-[600px] text-center">
              THE SORTING CEREMONY IS ABOUT TO END
            </h1>
            <button
              onClick={handleContinue}
              className="text-center font-bold my-3 border-[#00FFFF] border-2 py-4 rounded-md px-12"
            >
              CONTINUE
            </button>
        
          </div>
        </div>
        }
       </>
      )}
{status && (
  <div className="flex flex-col justify-center -mt-20 items-center h-screen">
    {result === "Yellow" && (
      <>
      <p className="lg:text-[58px] font-bold">CONGRATULATIONS!</p>
        <p className="lg:text-[43px] font-semibold">YOU ARE SELECTED FOR...</p>
      <div>
      <img className="size-48 animate-ping" src="/Assets/yellow-status.svg" alt="yellow"    />
      </div>
      <div className="max-w-[600px] px-12 py-5 rounded-md bg-yellow-500 text-4xl font-bold">
     HOUSE OF GADGETS
      </div>
      </>
    )}
    {result === "Blue" && (
      <>
            <p className="lg:text-[58px] font-bold">CONGRATULATIONS!</p>
        <p className="lg:text-[43px] font-semibold">YOU ARE SELECTED FOR...</p>
         <div>
      <img className="size-48 animate-ping" src="/Assets/blue-status.svg" alt="yellow"    />
      </div>
        <div className="max-w-[600px] px-12 py-5 rounded-md bg-blue-500  text-4xl font-bold">
     HOUSE OF PACE
      </div>
      </>
    )}
    {result === "Pink" && (
      <>
           <p className="lg:text-[58px] font-bold">CONGRATULATIONS!</p>
        <p className="lg:text-[43px] font-semibold">YOU ARE SELECTED FOR...</p>
         <div>
      <img className="size-48 animate-ping" src="/Assets/pink-status.svg" alt="yellow"    />
      </div>
      <div className="max-w-[600px] px-12 py-5 rounded-md bg-pink-500  text-4xl font-bold">
     HOUSE OF LIFE
      </div>
      </>
    )}
  </div>
)}

    </div>
  );
}
