// JavaScript to handle navigation and interactive functionality

// Select all navigation links and sections
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove 'active' class from all links and sections
        links.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add 'active' class to clicked link
        this.classList.add('active');

        // Get the target section based on the clicked link's href
        const targetId = this.getAttribute('href').substring(1); // Remove '#'
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// Initial setup: display the home section by default when the page loads
document.getElementById('home').classList.add('active');
document.querySelector('a[href="#home"]').classList.add('active');

// Quiz Data
const quizQuestions = [
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: "Blue Whale",
        image: "https://t4.ftcdn.net/jpg/06/12/84/91/360_F_612849175_VdGuXafWtboIaZA7bT92hleb0BLoy6cu.jpg" // Replace with actual image URL
    },
    {
        question: "Which tree is known for producing acorns?",
        options: ["Oak", "Pine", "Maple", "Birch"],
        answer: "Oak",
        image: "https://media.gettyimages.com/id/90590330/photo/english-oak-tree-in-field-of-buttercups.jpg?s=612x612&w=gi&k=20&c=jnTYaHuqw8ZVtiXG0Ew9oaEnFdwEKnwrGEFPvL98OiQ=" // Replace with actual image URL
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        answer: "Mount Everest",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHJIaBb3hzk9G_HwvHqlKhboXwi9BocaUjQ&s" // Replace with actual image URL
    },
    {
        question: "Which bird is known for its ability to mimic human speech?",
        options: ["Parrot", "Eagle", "Sparrow", "Pigeon"],
        answer: "Parrot",
        image: "https://media.gettyimages.com/id/157375891/photo/scarlet-macaws.jpg?s=612x612&w=gi&k=20&c=5jVfrSz6tacK7gRQwBucl_XkCrVQRf-vUQK7aArXOh8=" // Replace with actual image URL
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Karakum", "Gobi", "Antarctic Desert"],
        answer: "Antarctic Desert",
        image: "https://www.auroraexpeditions.com.au/wp-content/uploads/2020/02/is-antarctica-a-dessert.jpg" // Replace with actual image URL
    },
    {
        question: "Which flower is known as the 'Queen of the Night'?",
        options: ["Cactus Flower", "Cherry Blossom", "Lotus", "Night-blooming Cereus"],
        answer: "Night-blooming Cereus",
        image: "https://media.istockphoto.com/id/172276177/photo/night-blooming-cereus-half-opened.jpg?s=612x612&w=0&k=20&c=1mwBDn5xv3hWjmtvBz3HsYF47_eWXIzfKed-wEwIR5g=" // Replace with actual image URL
    },
    {
        question: "What is the primary source of energy for plants?",
        options: ["Water", "Soil", "Sunlight", "Air"],
        answer: "Sunlight",
        image: "https://www.shutterstock.com/image-photo/beautiful-panorama-landscape-sun-forest-260nw-1099386764.jpg" // Replace with actual image URL
    },
    {
        question: "Which animal is known for its long neck and legs?",
        options: ["Elephant", "Kangaroo", "Giraffe", "Horse"],
        answer: "Giraffe",
        image: "https://media.istockphoto.com/id/105286198/photo/giraffe.jpg?s=612x612&w=0&k=20&c=VYYVbXgKD0XsX-IV2JJl2DmowZYqwpnBVRfNzNfT-kQ=" // Replace with actual image URL
    },
    {
        question: "Which species of tree is famous for its fall foliage color changes?",
        options: ["Oak", "Pine", "Maple", "Cedar"],
        answer: "Maple",
        image: "https://cdn.pixabay.com/photo/2021/05/11/18/55/red-maple-6246624_640.jpg" // Replace with actual image URL
    },
    {
        question: "Which is the largest species of bear?",
        options: ["Polar Bear", "Grizzly Bear", "Panda", "Black Bear"],
        answer: "Polar Bear",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEIbj-85-1TD8Cxrq6i9bfn-895OaMJuqzw&s" // Replace with actual image URL
    }
];


let currentQuestion = 0;
let score = 0;

// Function to load the current quiz question
function loadQuiz() {
    const quiz = quizQuestions[currentQuestion];
    const quizContainer = document.getElementById("quizContainer");
    const quizImage = document.getElementById("quizImage");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    // Set quiz question and options
    quizImage.src = quiz.image;
    questionElement.innerText = quiz.question;
    optionsElement.innerHTML = '';
    quiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

// Function to check the answer and move to the next question
function checkAnswer(answer) {
    const quizResult = document.getElementById("quizResult");
    const quiz = quizQuestions[currentQuestion];

    if (answer === quiz.answer) {
        score++; // Increase score for correct answer
        quizResult.innerText = "Correct!";
    } else {
        quizResult.innerText = `Wrong! The correct answer was: ${quiz.answer}`;
    }

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            loadQuiz(); // Load next question
        } else {
            displayScore(); // If all questions are completed, display the score
        }
    }, 2000);
}

// Function to display the final score after all questions are answered
function displayScore() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = `<h3>Your final score is: ${score} / ${quizQuestions.length}</h3>`;
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    quizContainer.appendChild(restartButton);
}

// Function to restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    loadQuiz(); // Load the first question
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = ''; // Clear the score and restart button
}

// Load the first quiz question
loadQuiz();

// Joke Functionality
async function fetchJoke() {
    const jokes = [
        {
            setup: "Why don't skeletons fight each other?",
            punchline: "They don't have the guts."
        },
        {
            setup: "Why did the scarecrow win an award?",
            punchline: "Because he was outstanding in his field."
        },
        {
            setup: "Why don't eggs tell jokes?",
            punchline: "Because they'd crack each other up."
        },
        {
            setup: "I told my wife she was drawing her eyebrows too high.",
            punchline: "She looked surprised."
        },
        {
            setup: "Why don't some couples go to the gym?",
            punchline: "Because some relationships don't work out."
        },
        {
            setup: "I used to play piano by ear...",
            punchline: "But now I use my hands."
        },
        {
            setup: "Why did the tomato turn red?",
            punchline: "Because it saw the salad dressing."
        },
        {
            setup: "Why was the math book sad?",
            punchline: "Because it had too many problems."
        },
        {
            setup: "What do you call fake spaghetti?",
            punchline: "An impasta."
        },
        {
            setup: "What do you call a pile of cats?",
            punchline: "A meow-tain."
        },
        {
            setup: "I couldn't figure out how to put my seatbelt on.",
            punchline: "Then it clicked."
        },
        {
            setup: "Why did the coffee file a police report?",
            punchline: "It got mugged."
        },
        {
            setup: "What did one ocean say to the other ocean?",
            punchline: "Nothing, they just waved."
        },
        {
            setup: "Why don’t oysters donate to charity?",
            punchline: "Because they are shellfish."
        },
        {
            setup: "I used to be a baker...",
            punchline: "But I couldn't make enough dough."
        }
    ];

    // Randomly select a joke from the list
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Display the joke
    document.getElementById("joke").innerText = randomJoke.setup + " " + randomJoke.punchline;
    document.getElementById("jokeEmoji").innerText = "😂";
}


// Weather Functionality
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        document.getElementById("weather").innerText = "Please enter a city name.";
        return;
    }

    try {
        const apiKey = '0b55a5b427cd5245783af0009db7b1fb'; // Replace with your API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById("weather").innerText = "City not found.";
        } else {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            document.getElementById("weather").innerText = `Weather in ${city}: ${weatherDescription}, Temp: ${temperature}°C, Humidity: ${humidity}%`;
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById("weather").innerText = "Error fetching weather data.";
    }
}
let currentIndex = 0;

// Function to move the carousel images
function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    // Update currentIndex with the direction and loop back
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}
