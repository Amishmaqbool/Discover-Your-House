"use client";
import { useState } from "react";
import VideoBackground from "@/components/VideoBackground";
const questions = [
  {
    id: 1,
    text: "IF YOU HAD TO CREATE A OPTION , WHAT WOULD YOU MAKE?",
    backgroundanimated: true,
    options: [
      {
        label: "ETERNITY",
        color: "Pink",
        image: "/Assets/choose-a-option/primary.svg",
        backgroundanimated: false,
      },
      {
        label: "INTELLECT",
        color: "Blue",
        image: "/Assets/choose-a-option/secondary.svg",
        backgroundanimated: false,
      },
      {
        label: "CREATIVITY",
        color: "Yellow",
        image: "/Assets/choose-a-option/tertiary.svg",
        backgroundanimated: false,
      },
    ],
  },
  {
    id: 2,
    text: "IF YOU HAD ANY POWER WHAT WOULD YOU CHOOSE?",
    options: [
      {
        label: "STRENGTH",
        color: "Yellow",
        image: "/Assets/choose-a-power/primary.svg",
        backgroundanimated: false,
      },
      {
        label: "SHAPESHIFT",
        color: "Blue",
        image: "/Assets/choose-a-power/secondary.svg",
        backgroundanimated: false,
      },
      {
        label: "HEAL",
        color: "Blue",
        image: "/Assets/choose-a-power/tertiary.svg",
        backgroundanimated: false,
      },
    ],
  },

  {
    id: 3,
    text: "WHAT ARE  YOU MOST LOOKING FORWARD TO LEARNING AT SCHOOL OF INVENTION ?",
    options: [
      {
        label: "FLYING",
        color: "Yellow",
        image: "/Assets/school-of-invention/primary.svg",
        backgroundanimated: false,
      },
      {
        label: "TELEPORTING",
        color: "Blue",
        image: "/Assets/school-of-invention/secondary.svg",
        backgroundanimated: false,
      },
      {
        label: "CURING",
        color: "Pink",
        image: "/Assets/school-of-invention/tertiary.svg",
        backgroundanimated: false,
      },
    ],
  },
  {
    id: 4,
    text: "THREE BOXES ARE REPLACED BEFORE YOU WHICH ONE WOULD YOU CHOOSE?",
    options: [
      {
        label: "TOOLS",
        color: "Blue",
        image: "/Assets/three-boxes/primary.svg",
        backgroundanimated: false,
      },
      {
        label: "PAINTS",
        color: "Yellow",
        image: "/Assets/three-boxes/secondary.svg",
        backgroundanimated: false,
      },
      {
        label: "BLOOD",
        color: "Pink",
        image: "/Assets/three-boxes/tertiary.svg",
        backgroundanimated: false,
      },
    ],
  },
  {
    id: 5,
    text: "CHOOSE TO CONTINUE?",
    options: [
      {
        label: "RIVER",
        color: "Pink",
        image: "/Assets/choose-to-continue/primary.svg",
        backgroundanimated: false,
      },
      {
        label: "TREE",
        color: "Yellow",
        image: "/Assets/choose-to-continue/secondary.svg",
        backgroundanimated: false,
      },
      {
        label: "MOON",
        color: "Blue",
        image: "/Assets/choose-to-continue/tertiary.svg",
        backgroundanimated: false,
      },
    ],
  },
  {
    id: 6,
    text: "",
    options: [
      { label: "DANCE", color: "Yellow", image: "", backgroundanimated: true },
      { label: "DISCOVER", color: "Blue", image: "", backgroundanimated: true },
      { label: "DREAM", color: "Pink", image: "", backgroundanimated: true },
    ],
  },
  {
    id: 7,
    text: "CHOOSE A PET",
    options: [
      {
        label: null,
        color: "Blue",
        image: "/Assets/choose-a-pet/primary.svg",
        backgroundanimated: false,
      },
      {
        label: null,
        color: "Pink",
        image: "/Assets/choose-a-pet/secondary.svg",
        backgroundanimated: false,
      },
      {
        label: null,
        color: "Yellow",
        image: "/Assets/choose-a-pet/tertiary.svg",
        backgroundanimated: false,
      },
    ],
  },
];

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sortingCeremonyEnded, setSortingCeremonyEnded] = useState(false);
  const [status, setStatus] = useState(false);
  const [result, setResults] = useState("");
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
      setResults(result);
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
    console.log(count);
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
    setStatus(true);
  };

  return (
    <div
      className={
        quizStarted
          ? "bg-container relative text-white bg-neutral-800 grid items-center"
          : "pb-12 bg-neutral-800 grid items-center h-[100vh] z-[10] text-white"
      }
    >
      <div className="mx-auto max-w-[1000px]">
        {!quizStarted ? (
          <div className="flex flex-col mx-auto">
            <img src="/Assets/logo.svg" className="h-28 w-28 mx-auto" alt="" />
            <h1 className="mx-auto lg:text-[48px] pt-[24px] font-bold">
              DISCOVER YOUR HOUSE
            </h1>
            <div className="mx-auto pt-10">
              <button
                onClick={startQuiz}
                className="text-center font-[ConthraxSb-Regular] hover:text-[#00FFFF] border-[#00FFFF] border-2 py-4 rounded-md px-12  text-3xl font-bold"
              >
                START THE SORTING CEREMONY
              </button>
            </div>
          </div>
        ) : (
          <>
            {!sortingCeremonyEnded && (
              <div className="z-[1000]">
                <>
                  <div className="video-container">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                      controls={false}
                    >
                      <source src="/Assets/bg-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="content-overlay">
                    <li className="flex absolute -mt-44  left-1/2 transform -translate-x-1/2 lg:px-20 lg:text-[28px] pb-3 font-bold justify-center text-center">
                      {questions[currentQuestion].text} <br />
                    </li>
                  </div>
                </>
                <div className="lg:flex cursor-pointer mt-40 gap-20 lg:justify-between grid justify-center ">
                  {questions[currentQuestion].options.map((option) => (
                    <div
                      key={option.label}
                      onClick={() => handleOptionSelect(option)}
                      className="text-center hover:scale-110 min-h-[200px] z-[1000] w-full"
                    >
                      {option.image && (
                        <div>
                          <img
                            className=" shadow-2xl  bg-black bg-transparent h-[400px] w-[800px]"
                            src={option?.image}
                            alt=""
                          />
                        </div>
                      )}
                      <button
                        className={`lg:text-[25px] mt-7 bg-opacity-50 font-bold ${
                          option.backgroundanimated
                            ? "bg-gray-500 rounded-md px-12 py-0.5 lg:text-[44px]"
                            : ""
                        }`}
                      >
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
          {!status && (
            <div className="absolute top-0 items-center grid left-0 bg-container h-[100%]">
              <div className="grid justify-center ">
                <>
                  <div className="video-container">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                      controls={false}
                    >
                      <source src="/Assets/bg-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="content-overlay">
                    <div className="absolute -mt-40 max-w-[1400px] left-1/2 transform -translate-x-1/2 lg:px-20 lg:text-[28px] pb-3 font-bold justify-center text-center">
                      <h1 className="text-[32px] font-bold max-w-[600px] text-center">
                        THE SORTING CEREMONY IS ABOUT TO END
                      </h1>
                      <div className="grid pt-14 justify-center">
                        <button
                          onClick={handleContinue}
                          className="text-center font-bold my-3 border-[#00FFFF] w-[340px] border-2 py-4 rounded-md px-12"
                        >
                          CONTINUE
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          )}
        </>
      )}
      {status && (
        <div className="">
          <div>
            <div className="video-container">
              <video
                autoPlay
                loop
                muted
                className="w-full h-important   object-cover"
                controls={false}
              >
                <source src="/Assets/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="content-overlay">
              <div className="absolute -mt-40 max-w-[1400px] left-1/2 transform -translate-x-1/2 lg:px-20 lg:text-[28px] pb-3 font-bold justify-center text-center">
                <div className="h-screen h-important">
                  <div className="flex flex-col h-screen justify-center items-center">
                  {result === "Pink" && (
                  <>
                    <p className="lg:text-[35px] font-bold">
                      CONGRATULATIONS...
                    </p>
                    <p className="lg:text-[35px] font-semibold">
                      YOU ARE SELECTED FOR
                    </p>
                    <div>
                      <img
                        className="mt-6"
                        src="/Assets/pink-status.svg"
                        alt="yellow"
                      />
                    </div>
                    <div className="max-w-[600px] px-12 py-5 rounded-md bg-pink-500  text-4xl font-bold">
                      HOUSE OF LIFE
                    </div>
                    <button
                      className="pt-40 pb-2"
                      onClick={() => window.location.reload()}
                    >
                      BACK TO THE MAIN MENU
                    </button>
                  </>
                )}
        {result === "Blue" && (
                  <>
                    <p className="lg:text-[45px] font-bold">CONGRATULATIONS!</p>
                    <p className="lg:text-[45px] tracking-[0.1rem] font-semibold">
                      YOU ARE SELECTED FOR...
                    </p>
                    <div>
                      <img
                        className="mt-6"
                        src="/Assets/blue-status.svg"
                        alt="yellow"
                      />
                    </div>
                    <div className="max-w-[600px] px-12 py-5 rounded-md bg-blue-500 mt-12 text-4xl font-bold">
                      HOUSE OF PACE
                    </div>
                    <button
                      className="pt-40 pb-2"
                      onClick={() => window.location.reload()}
                    >
                      BACK TO THE MAIN MENU
                    </button>
                  </>
                )}
      {result === "Yellow" && (
                  <>
                    <p className="lg:text-[58px] font-bold">CONGRATULATIONS!</p>
                    <p className="lg:text-[43px] font-semibold">
                      YOU ARE SELECTED FOR...
                    </p>
                    <div>
                      <img
                        className="mt-6"
                        src="/Assets/yellow-status.svg"
                        alt="yellow"
                      />
                    </div>
                    <div className="max-w-[600px] px-12 py-5 pt-12 rounded-md bg-yellow-500 text-4xl font-bold">
                      HOUSE OF GADGETS
                    </div>
                    <button
                      className="pt-40"
                      onClick={() => window.location.reload()}
                    >
                      BACK TO THE MAIN MENU
                    </button>
                  </>
                )}
                  </div>

                </div>
              </div>
            </div>
          </div>
          {status && (
            <div className="flex flex-col justify-center items-center">
              {result === "Yellow" && (
                <>
                  <p className="lg:text-[58px] font-bold">CONGRATULATIONS!</p>
                  <p className="lg:text-[43px] font-semibold">
                    YOU ARE SELECTED FOR...
                  </p>
                  <div>
                    <img
                      className="mt-6"
                      src="/Assets/yellow-status.svg"
                      alt="yellow"
                    />
                  </div>
                  <div className="max-w-[600px] px-12 py-5 pt-12 rounded-md bg-yellow-500 text-4xl font-bold">
                    HOUSE OF GADGETS
                  </div>
                  <button
                    className="pt-40"
                    onClick={() => window.location.reload()}
                  >
                    BACK TO THE MAIN MENU
                  </button>
                </>
              )}
              {result === "Blue" && (
                <>
                  <p className="lg:text-[45px] font-bold">CONGRATULATIONS!</p>
                  <p className="lg:text-[45px] tracking-[0.1rem] font-semibold">
                    YOU ARE SELECTED FOR...
                  </p>
                  <div>
                    <img
                      className="mt-6"
                      src="/Assets/blue-status.svg"
                      alt="yellow"
                    />
                  </div>
                  <div className="max-w-[600px] px-12 py-5 rounded-md bg-blue-500 mt-12 text-4xl font-bold">
                    HOUSE OF PACE
                  </div>
                  <button
                    className="pt-40 pb-2"
                    onClick={() => window.location.reload()}
                  >
                    BACK TO THE MAIN MENU
                  </button>
                </>
              )}
              {result === "Pink" && (
                <>
                  <p className="lg:text-[35px] font-bold">CONGRATULATIONS...</p>
                  <p className="lg:text-[35px] font-semibold">
                    YOU ARE SELECTED FOR
                  </p>
                  <div>
                    <img
                      className="mt-6"
                      src="/Assets/pink-status.svg"
                      alt="yellow"
                    />
                  </div>
                  <div className="max-w-[600px] px-12 py-5 rounded-md bg-pink-500  text-4xl font-bold">
                    HOUSE OF LIFE
                  </div>
                  <button
                    className="pt-40 pb-2"
                    onClick={() => window.location.reload()}
                  >
                    BACK TO THE MAIN MENU
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
