"use client";
import { useState } from "react";
import VideoBackground from "@/components/VideoBackground";
const questions = [
  {
    id: 1,
    text: "IF YOU HAD TO CREATE A  POTION, WHAT WOULD YOU MAKE?",
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
        color: "Pink",
        image: "/Assets/choose-a-power/tertiary.svg",
        backgroundanimated: false,
      },
    ],
  },

  {
    id: 3,
    text: "WHAT ARE YOU MOST LOOKING FORWARD TO LEARNING AT SCHOOL OF INVENTION?",
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
    text: "THREE BOXES ARE REPLACED BEFORE YOU, WHICH ONE WOULD YOU CHOOSE?",
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
  const [result, setResults] = useState('');

  const startQuiz = async () => {
    await delay(1000);
    setQuizStarted(true);
  };

  const handleOptionSelect = async (selectedOption) => {
    if (!quizStarted || sortingCeremonyEnded) {
      return;
    }

    const { label, color } = selectedOption;
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { option: label, color: color },
    ]);

    if (currentQuestion < questions.length - 1) {
      await delay(1000);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateResult();
      await delay(1000);
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
    let mostSelected = 'Pink';
    if (count.Yellow === count.Pink && count.Yellow === count.Blue) {
      mostSelected = 'Pink';
    } else {
      mostSelected = Object.keys(count).reduce((a, b) =>
        count[a] > count[b] ? a : b
      );
    }

    return mostSelected;
  };

  const handleContinue = async () => {
   
    await delay(1000);
    setStatus(true);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  return (
    <div
      className={
        quizStarted
          ? "bg-container relative text-white h-[100vh] bg-neutral-800 grid items-center"
          : "pb-12 bg-neutral-800 grid items-center z-[10] h-[100vh] text-white"
      }
    >
      <div className="mx-auto max-w-[1200px]">
        {!quizStarted ? (
          <div className="flex flex-col mx-auto">
            <img src="/Assets/logo.svg" className="h-28 w-28 mx-auto" alt="" />
            <p className="text-white Abnes text-5xl mt-[45.49px] text-center">
              SOI
            </p>
            <h1 className="mx-auto guardian text-center leading-[45px] font-[400] lg:text-[59.69px] pt-16 ">
              DISCOVER <br/> YOUR <br/> HOUSE
            </h1>
            <div className="mx-auto pt-20">
              <button
                onClick={startQuiz}
                className="text-center conthraxSb hover:text-[#00FFFF] border-[#00FFFF] border-2 py-[25px] rounded-2xl px-[183px]  text-[35px] font-normal"
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
                    <li className="flex conthraxSb absolute -mt-36 px-16 w-[1000px] left-1/2 transform -translate-x-1/2 lg:text-4xl pb-3 font-normal justify-center text-center">
                      {questions[currentQuestion].text} <br />
                    </li>
                  </div>
                </>
                <div className="lg:flex conthraxSb cursor-pointer mt-40 gap-32 lg:justify-between grid justify-center">
                  {questions[currentQuestion].options.map((option) => (
                    <div
                      key={option.label}
                      onClick={() => handleOptionSelect(option)}
                      className="text-center hover:scale-105 duration-500 min-h-[200px] z-[1000] w-full"
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
                        className={`lg:text-[25px] conthraxSb mt-7 bg-opacity-50 font-normal ${
                          option.backgroundanimated
                            ? "bg-gray-500 rounded-2xl px-12 py-0.5 lg:text-[44px]"
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
                    <div className="absolute -mt-40 max-w-[1400px] left-1/2 transform -translate-x-1/2 lg:px-20 lg:text-[28px] pb-3 font-normal justify-center text-center">
                      <h1 className="text-[45.123px] conthraxSb  px-0 lg:w-[800px] text-center">
                        THE SORTING CEREMONY IS ABOUT TO END
                      </h1>
                      <div className="grid pt-32 justify-center">
                        <button
                          onClick={handleContinue}
                          className="text-center text-[35.093px] conthraxSb my-3 border-[#00FFFF] w-[340px] border-2 py-4 rounded-2xl px-12"
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
                className="w-full h-important object-cover"
                controls={false}
              >
                <source src="/Assets/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="content-overlay">
              <div className="absolute -mt-40 max-w-[1400px] left-1/2 bottom-0 top-[28%] transform -translate-x-1/2 lg:px-20 lg:text-[28px] font-normal justify-center text-center">
                <div className="h-screen h-important">
                  <div className="flex flex-col justify-center relative items-center">
                    {result === "Pink" && (
                      <>
                        <p className="lg:text-[45px] conthraxSb">
                          CONGRATULATIONS...
                        </p>
                        <p className="lg:text-[45px] w-[600px] conthraxSb">
                          YOU ARE SELECTED FOR
                        </p>
                        <div>
                          <img
                            className="mt-6"
                            src="/Assets/pink-status.svg"
                            alt="pink"
                          />
                        </div>
                        <div className="max-w-[600px] px-12 py-5 rounded-2xl mt-12 bg-pink-500 text-[35px] conthraxSb">
                          HOUSE OF LIFE
                        </div>
                        <button
                          className="pb-2 pt-40"
                          onClick={() => window.location.reload()}
                        >
                          BACK TO THE MAIN MENU
                        </button>
                      </>
                    )}
                    {result === "Blue" && (
                      <>
                        <p className="lg:text-[45px] conthraxSb">
                          CONGRATULATIONS...
                        </p>
                        <p className="lg:text-[45px] w-[600px] conthraxSb">
                          YOU ARE SELECTED FOR
                        </p>
                        <div>
                          <img
                            className="mt-6"
                            src="/Assets/blue-status.svg"
                            alt="blue"
                          />
                        </div>
                        <div className="max-w-[600px] px-12 py-5 rounded-2xl bg-blue-500 mt-12 text-[35px] conthraxSb">
                          HOUSE OF PACE
                        </div>
                        <button
                          className="pb-2 pt-32 conthraxSb"
                          onClick={() => window.location.reload()}
                        >
                          BACK TO THE MAIN MENU
                        </button>
                      </>
                    )}
                    {result === "Yellow" && (
                      <>
                        <p className="lg:text-[45px] conthraxSb">
                          CONGRATULATIONS...
                        </p>
                        <p className="lg:text-[45px] w-[600px] conthraxSb">
                          YOU ARE SELECTED FOR
                        </p>
                        <div>
                          <img
                            className="mt-6"
                            src="/Assets/yellow-status.svg"
                            alt="yellow"
                          />
                        </div>
                        <div className="max-w-[600px] px-12 py-5 rounded-2xl mt-12 bg-yellow-500 text-[35px] conthraxSb">
                          HOUSE OF GADGETS
                        </div>
                        <button
                          className="pt-32 conthraxSb"
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
            <div className="flex conthraxSb flex-col justify-center items-center">
              {result === "Yellow" && (
                <>
                  <p className="lg:text-[45px] font-normal">
                    CONGRATULATIONS...
                  </p>
                  <p className="lg:text-[45px] w-[600px] font-normal">
                    YOU ARE SELECTED FOR
                  </p>
                  <div>
                    <img
                      className="mt-6"
                      src="/Assets/yellow-status.svg"
                      alt="yellow"
                    />
                  </div>
                  <div className="max-w-[600px]  shadow-2xl shadow-gray-700  conthraxSb px-12 py-5 rounded-md bg-yellow-500 text-[35px] font-normal">
                    HOUSE OF GADGETS
                  </div>
                  <button
                    className="pt-32 conthraxSb"
                    onClick={() => window.location.reload()}
                  >
                    BACK TO THE MAIN MENU
                  </button>
                </>
              )}
              {result === "Blue" && (
                <>
                  <p className="lg:text-[45px] conthraxSb">
                    CONGRATULATIONS...
                  </p>
                  <p className="lg:text-[45px] w-[600px] conthraxSb">
                    YOU ARE SELECTED FOR
                  </p>
                  <div>
                    <img
                      className="mt-6"
                      src="/Assets/blue-status.svg"
                      alt="yellow"
                    />
                  </div>
                  <div className="max-w-[600px]  shadow-2xl shadow-gray-700 conthraxSb px-12 py-5 rounded-md bg-blue-500 mt-12 text-[35px] font-normal">
                    HOUSE OF PACE
                  </div>
                  <button
                    className="pt-32 conthraxSb pb-2"
                    onClick={() => window.location.reload()}
                  >
                    BACK TO THE MAIN MENU
                  </button>
                </>
              )}
              {result === "Pink" && (
                <>
                  <p className="lg:text-[45px] conthraxSb">
                    CONGRATULATIONS...
                  </p>
                  <p className="lg:text-[45px] w-[600px] conthraxSb">
                    YOU ARE SELECTED FOR
                  </p>
                  <div>
                    <img
                      className="mt-6"
                      src="/Assets/pink-status.svg"
                      alt="yellow"
                    />
                  </div>
                  <div className="max-w-[600px]  shadow-2xl shadow-gray-700  px-12 py-5 rounded-md bg-pink-500 text-[35px] conthraxSb">
                    HOUSE OF LIFE
                  </div>
                  <button
                    className="pb-2 pt-40"
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
