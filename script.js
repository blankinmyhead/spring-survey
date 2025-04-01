const questions = [
    {
        question: "가장 괜찮은 푸앙이는?",
        answers: [
            "데이트보다는 기도해야 한다며 크리스마스 약속 날 말 안 하고 교회 가는 푸앙이",
            "꾸미는 게 중요하다며 매번 화장하다가 약속 2시간 늦고 오히려 화내는 푸앙이",
            "생명이 중요하다며 먹고있는 최고급 한우 바닥으로 내팽겨치고 드러눕는 푸앙이"
        ]
    },
    {
        question: "전애인 결혼식장에 갈 때 나의 차림은?\n(대신 전애인이 날날 알아봄)",
        answers: [
            "‘나 너 말고 딴 사람 생겼어’ 2D캐릭터 그려진 티셔츠와 베개",
            "’너의 결혼식이 아닌 나의 무대’ 락커와 같은 스모키,펑크스타일",
            "’너 보러 온거 아니야 일하러 온거야’ 땀에 젖은 결혼식장 주차장 안내원 옷"
        ]
    },
    {
        question: "다음 중 가장 가고싶은 곳은?",
        answers: [
            "바람 엄청 불고 추운 에베레스트",
            "사람 많아 꽉 끼는 퇴근 지하철",
            "벌레가 많고 찝찝한 신비로운 정글"
        ]
    },
    {
        question: "좀비로 둘러싸인 상황에서 챙기고 싶은 물건은?",
        answers: [
            "‘나는 이미 죽었어’ 깔끔한 하얀 손수건",
            "‘갈 때 가더라도 때깔 좋게’ 참치마요 삼각김밥",
            "‘이 좀비 내 이상형이야’ 좀비가 이상형으로 보이는 선글라스"
        ]
    },
    {
        question: "벚꽃 사진을 찍는 나의 스타일은?",
        answers: [
            "깔끔하게 벚꽃과 나만 나오게 찍는다",
            "벚꽃과 깔맞춤, 봄을 나타내는 아이템과 함께 최대한 봄을 즐기는 모습을 찍는다",
            "떨어진 벚꽃에 누워서 찍는다"
        ]
    },
    {
        question: "모처럼 맞은 자유로운 주말, 나의 모습은?",
        answers: [
            "‘나 문화인이야 ㅋ’ 이해 안 되는 10만 원짜리 미술전시회 가기",
            "‘내가 제일 잘나가’ 사람 북적이는 이태원 클럽 가서 트월킹",
            "‘아 내가 알아서 한다고’ 집이지만 엄마 잔소리가 곁들여진"
        ]
    },
    {
        question: "친구에게 줄 생일선물은?",
        answers: [
            "‘너도 한번 당해봐’ 내가 작년에 친구에게 받은 9X9 큐브",
            "‘잠옷으로는 이게 딱이지’ 세상 화려한 몸빼바지",
            "‘바퀴벌레부터 5만원까지’ 뭐가 나올지 모르는 신비로운 랜덤박스"
        ]
    },
    {
        question: "봄에 내가 느끼는 기분은?",
        answers: [
            "‘작년과는 다르다’ 오늘부터 갓생살겠어",
            "‘옷은 많지만 입을 옷이 없네’ 봄 신상 세일은 못 참지",
            "‘봄이라고 난리네’ 커플들 다 사라졌으면.."
        ]
    },
    {
        question: "자고 일어났더니 내가 무엇으로 변해있었을까?",
        answers: [
            "‘깔끔하긴 한데..’ 누가 쓰다 버린 물티슈",
            "‘화려하긴 한데..’ 누가 앉아 있는 치질예방 꽃무늬쿠션",
            "‘애매하긴 한데..’ 누가 먹고 뱉은 청포도 사탕"
        ]
    },
    {
        question: "술먹고 숙취로 고생하는 다음날, 굳이 먹어야한다면?",
        answers: [
            "‘상쾌함함 그자체인 숙취해소제’ 민트크림파스타",
            "‘띠드버거 사뚜떼요’ 무지개색, 모든 맛이 느껴지는 치즈햄부기햄부거",
            "‘와사비가 내려와’ 뜨끈한 와사비 왕창 라면"
        ]
    }
];

const results = [
    {
        title: "나만의 벚꽃 찾기 결과: 화려한 ‘왕벚꽃’",
        image: "img\\왕벚꽃.png",
        jpg:   "img\\왕벚꽃QR.png",
        description: `
당신의 벚꽃은<span style="color:#c9556e; font-weight:bold;"> 왕벚꽃</span>입니다!
<span style="color:#c9556e;">
왕벚꽃은 크고 탐스러운 꽃잎이 한꺼번에 만개하며,
사람들의 시선을 단숨에 사로잡는 아름다운 꽃이죠.</span>

당신도 마찬가지로, 단기적인 성공보다는 꾸준한 노력과 성장을 통해
더욱 빛나는 미래를 만들어 나가는 사람일 것입니다.
지금까지 걸어온 길도, 앞으로 나아갈 길도 당신만의 빛나는 색으로 가득 채워지길 바랍니다.

<span style="font-weight:bold;">왕벚꽃처럼 눈부시게, 당당하게, 그리고 아름답게 </span>당신만의 인생을 피워나가세요.`
    },

    {
        title: "나만의 벚꽃 찾기 결과: 우아한 ‘겹벚꽃’",
        image: "img\\겹벚꽃.png",
        jpg:   "img\\겹벚꽃QR.png",
        description: `
당신의 벚꽃은<span style="color:#c14d4d; font-weight:bold;"> 겹벚꽃</span>입니다!
<span style="color:#c14d4d;">
겹겹이 쌓인 풍성한 꽃잎이 매력적인 겹벚꽃은,</span>
마치 봄날의 작은 축제처럼 보는 이들에게 따뜻하고 화사한 기운을 전해 줍니다.

급하게 피어 금방 지는 꽃이 아니라, 오랜 시간 공들여 피어나 그 아름다움을 오래도록 유지하는 겹벚꽃처럼,
당신의 노력과 성장은 시간이 지날수록 더욱 빛을 발할 것입니다.

<span style="color:#c14d4d;">겹벚꽃이 바람에 흩날릴 때, 그 우아함과 강렬함이 오랫동안 기억되는 것처럼,
당신 또한 당신만의 방식으로 세상에 따뜻한 흔적을 남길 것입니다.
천천히, 그러나 확실하게.</span>

<span style="font-weight:bold;">당신만의 속도로, 당신만의 색깔</span>로 인생을 아름답게 피워나가세요!`
    },

    {
        title: "나만의 벚꽃 찾기 결과: 신비로운 ‘청벚꽃’",
        image: "img\\청벚꽃.png",
        jpg:   "img/\\청벚꽃QR.png",
        description: `
당신의 벚꽃은 <span style="color:#29725f; font-weight:bold;">청벚꽃</span>입니다.
<span style="color:#29725f;">
청벚꽃은 흔히 볼 수 있는 분홍빛 벚꽃과는 달리,
푸른빛을 띠는 독특한 색감으로 신비로운 매력을 지닌 꽃입니다.</span>
마치 비밀스러운 숲속에서 조용히 피어나는 듯한 이 꽃은, 희귀하고도 특별한 존재감을 자랑하죠.

<span style="color:#29725f;">당신도 마찬가지입니다.
처음에는 조용하고 신비로운 사람처럼 보일지 몰라도, 당신만의 방식으로 세상을 채색하며,
언젠가 가장 아름다운 순간을 맞이하게 될 것입니다.</span>

<span style="font-weight:bold;">당신만의 푸른빛으로, 당신만의 속도로, 당신만의 방식</span>으로 세상을 물들이세요.
청벚꽃처럼 우아하게, 그러나 누구보다도 특별하게!`
    }
]

// 전역 상태
let countdownTimerId = null;
let currentQuestionIndex = 0;
let answerCounts = [0, 0, 0];
let firstQuestionAnswer = null;
let finalResultIndex = null;
let shuffledQuestions = []; // 섞인 질문 배열

// DOM
const startScreen   = document.getElementById("start-screen");
const questionScreen= document.getElementById("question-screen");
const resultScreen  = document.getElementById("result-screen");

const questionText  = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const questionNumber= document.getElementById("question-number");

const resultTitle   = document.getElementById("result-title");
const resultImage   = document.getElementById("result-image");
const resultDesc    = document.getElementById("result-description");

const startButton   = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const viewJpgButton = document.getElementById("view-jpg-button");

const imageModal    = document.getElementById("image-modal");
const titleSpecificImg = document.getElementById("title-specific-image");
const countdownElem = document.getElementById("countdown");

const closeModalButton = document.getElementById("close-modal");

closeModalButton.addEventListener("click", () => {
    imageModal.style.display = "none";
    // 카운트다운 급종료
    if (countdownTimerId !== null) {
        clearInterval(countdownTimerId);
        countdownTimerId = null;
    }
});


// 이벤트
startButton.addEventListener("click", startTest);
restartButton.addEventListener("click", restartTest);
viewJpgButton.addEventListener("click", showPngAndCountdown);

// Fisher-Yates (Knuth) Shuffle 알고리즘을 사용하여 배열을 섞음
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTest() {
    // 화면 전환: 시작>질문
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
    // ▶ 버튼 숨기기
    viewJpgButton.style.display = "none";

    // init
    currentQuestionIndex = 0;
    answerCounts = [0, 0, 0];
    firstQuestionAnswer = null;
    finalResultIndex = null;
    imageModal.style.display = "none";

    // 질문 배열 섞기
    shuffledQuestions = shuffleArray([...questions]);

    showQuestion();
}


function showQuestion() {
    const qData = shuffledQuestions[currentQuestionIndex];

    // 애니메이션 효과 사용할려면 // >> 이거 제거하기
    // questionText.classList.remove("fadeInUp");
    void questionText.offsetWidth; // Reflow 강제
    // questionText.classList.add("fadeInUp");

    // questionText에 한 글자씩 출력
    typewriter(questionText, qData.question, 40); // 타이핑 속도 40ms 예시

    // 아래 부분은 그대로
    answerButtons.innerHTML = "";
    qData.answers.forEach((answer, idx) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.addEventListener("click", () => nextQuestion(idx + 1));
        answerButtons.appendChild(btn);
    });

    questionNumber.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
}


function typewriter(element, text, speed = 50) {

    let i = 0;
    element.textContent = ""; // 초기화 >> 오류 수정

    typingTimer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;

        // 모든 글자를 다 출력하면 타이머 해제
        if (i >= text.length) {
            clearInterval(typingTimer);
            typingTimer = null;
        }
    }, speed);
}


function nextQuestion(chosenAnswer) {

    // 타이핑 오류 수정
    if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
    }

    if (currentQuestionIndex === 0) {
        firstQuestionAnswer = chosenAnswer;
        if (chosenAnswer === 1) {
            answerCounts[0] += 1.5;
        } else {
            answerCounts[chosenAnswer - 1] += 1;
        }
    } else {
        answerCounts[chosenAnswer - 1] += 1;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // 화면 전환: 질문->결과
    questionScreen.style.display = "none";
    resultScreen.style.display = "block";
    // ▶ 버튼 보이기
    viewJpgButton.style.display = "block";

    const maxCount = Math.max(...answerCounts);
    const resultIndices = [];
    answerCounts.forEach((count, idx) => {
        if (count === maxCount) {
            resultIndices.push(idx);
        }
    });

    let resultIndex;
    if (resultIndices.length > 1) {
        // 동률일 때: 첫 질문 답변 기준
        resultIndex = firstQuestionAnswer - 1;
    } else {
        resultIndex = resultIndices[0];
    }
    finalResultIndex = resultIndex;

    // 결과 내용 삽입
    resultTitle.textContent = results[resultIndex].title;
    resultImage.src         = results[resultIndex].image;
    resultDesc.innerHTML    = results[resultIndex].description;
}

// ▶ 버튼 누르면 QR사진 표시 + 30초 후 자동으로 다시 시작
function showPngAndCountdown() {
    if (finalResultIndex == null) return;

    // 혹시 남아있던 타이머가 있으면 먼저 정리
    if (countdownTimerId) {
        clearInterval(countdownTimerId);
        countdownTimerId = null;
    }

    const rData = results[finalResultIndex];
    titleSpecificImg.src = rData.jpg;
    imageModal.style.display = "block";

    let timeLeft = 30;
    countdownElem.textContent = `종료까지 ${timeLeft}초 남았습니다.`;

    // 전역 변수 countdownTimerId 에 직접 할당
    countdownTimerId = setInterval(() => {
        timeLeft--;
        countdownElem.textContent = `종료까지 ${timeLeft}초 남았습니다.`;

        if (timeLeft <= 0) {
            clearInterval(countdownTimerId);
            countdownTimerId = null;
            imageModal.style.display = "none";
            restartTest();
        }
    }, 1000);
}

// 다시 하기(시작화면으로)
function restartTest() {
    // 화면 전환: 결과->시작
    resultScreen.style.display = "none";
    startScreen.style.display  = "flex";

    // ▶ 버튼 숨기기
    viewJpgButton.style.display = "none";
    imageModal.style.display = "none";

    // re-init
    currentQuestionIndex = 0;
    answerCounts = [0, 0, 0];
    firstQuestionAnswer = null;
    finalResultIndex = null;
    shuffledQuestions = []; // 섞인 질문 배열 초기화
}