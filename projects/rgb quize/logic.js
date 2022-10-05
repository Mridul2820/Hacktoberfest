/* game mode */
var isEasyMode = true;
var scoreRightNow = 0;
var isSuccess = false;

/* getting html elements  */
const menu_button = document.querySelector(".fa-bars");
const nav_menu = document.querySelector(".nav-menu");
const nav_options = document.getElementsByClassName("nav-menu");
const options = Array.from(document.querySelectorAll('.options-container .opt'));
const replay_btn = document.querySelector(".replay")
const question = document.querySelector(".question")
const color_shower = document.querySelector(".color-shower");
const easy_btn = document.querySelector(".easy")
const hard_btn = document.querySelector(".hard")
const comment = document.querySelector(".comment");
const score = document.querySelector(".score");
const play_again = document.querySelector(".play-again");
const hidden_btn = document.querySelector(".hidden");
const heart = document.querySelector(".animation");
/* for comments */
const FAILURE_COMMENT = ['You can do it! 😀', 'focus! 😯', 'you can!!!😄', 'try again!🥲']
const SUCCESS_COMMENT = ['You Made it boi!😎', 'you are awesome!🥳', 'You just crack it!🤩', 'Yippy..!😍', 'success..!!🤑']
const like = new Audio('../../assets/like.mp3')
const win = new Audio("../../assets/win.mp3")
const empty = new Audio("../../assets/empty.wav")
    /* starting game first time */
startGame();


/*utiltity functions */
function random(min, max) {
    return Math.floor(Math.random() * (max - min));
}

function random_element(colorAR) {
    return colorAR[random(0, colorAR.length)];
}

function make_opacity_0(comp) {
    comp.classList.add("opt-opacity-zero")
}

function make_opacity_1(comp) {
    comp.classList.remove("opt-opacity-zero")
}

function make_all_opacity_1() {
    for (let i = 0; i < options.length; ++i) {
        make_opacity_1(options[i]);
    }
}

function make_all_opacity_1_and_apply_color(color) {
    for (let i = 0; i < options.length; ++i) {
        make_opacity_1(options[i]);
        options[i].style.backgroundColor = color;
    }
}

function make_all_display() {
    for (let i = 0; i < options.length; ++i) {
        options[i].style.display = "block";
    }
}

function make_last_3_display_none() {
    for (let i = 3; i < options.length; ++i) {
        options[i].style.display = "none";
    }
}

function remove_spaces(text) {
    /* replace all the spaces */
    return text.replace(/ /gi, '');
}

function give_success_comment() {
    comment.innerHTML = random_element(SUCCESS_COMMENT)
}

function give_failure_comment() {
    comment.innerHTML = random_element(FAILURE_COMMENT)
}

function reset_comment() {
    comment.innerHTML = `Welcome to <img src="../../assets/logo.svg" alt="RGBquize">`;
}

function set_score() {
    score.innerText = `score : ${scoreRightNow < 10 ? '0' + scoreRightNow : scoreRightNow}`;
}

function remove_event_listeners() {
    for (let i = 0; i < options.length; ++i) {
        options[i].removeEventListener('click', check_answer)
    }
}
/* game functions */
function replay() {
    play_again.style.display = 'none';
    make_all_opacity_1();
    startGame();
    reset_comment();
    isSuccess = false;
}

function startGame() {
    if (isEasyMode) {
        easy_mode();
    } else {
        hard_mode();
    }
}

function setQuestion(correct) {
    question.innerText = `Chose the correct option for ${correct}`
}

function success(color) {
    scoreRightNow++;
    set_score();
    color_shower.style.backgroundColor = color;
    make_all_opacity_1_and_apply_color(color);
    give_success_comment();
    remove_event_listeners();
    isSuccess = true;
    play_again.style.display = 'block';
    win.play();
}

function failure(comp) {
    make_opacity_0(comp)
    give_failure_comment();
    empty.play();
}

function check_answer(ans, correct, comp) {
    if (!isSuccess) {
        if (remove_spaces(ans) === correct) {
            success(correct);
        } else {
            failure(comp);
        }
    }

}

function easy_mode() {
    /* hiding the last three options */
    make_last_3_display_none();
    let number_of_options = 3;
    let colorAR = [
        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
    ]
    let correct_option = random_element(colorAR);
    setQuestion(correct_option)
    for (let i = 0; i < number_of_options; i++) {
        options[i].style.backgroundColor = `${colorAR[i]}`;
        options[i].addEventListener('click',
            function() { check_answer(options[i].style.backgroundColor, correct_option, options[i]) });
    }
}

function hard_mode() {
    make_all_display();
    let number_of_options = 6;
    let colorAR = [
        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,

        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
        `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`,
    ]
    let correct_option = random_element(colorAR);
    setQuestion(correct_option)
    for (let i = 0; i < number_of_options; i++) {
        options[i].style.backgroundColor = `${colorAR[i]}`;
        options[i].addEventListener('click',
            function() { check_answer(options[i].style.backgroundColor, correct_option, options[i]) });
    }
}

/* menu function */
function menu_function() {
    if (menu_button.className.includes('fa-bars')) {
        menu_button.classList.replace('fa-bars', 'fa-times');
        nav_menu.classList.add('active-menu');
    } else {
        menu_button.classList.replace('fa-times', 'fa-bars');
        nav_menu.classList.remove("active-menu");
    }
}


/* adding functions */
/* adding functionality to bar */
menu_button.addEventListener('click', menu_function);
/* making the nav menu close on clicking any of the option */
[...nav_options].map(e => {
    e.addEventListener('click', menu_function);
})
replay_btn.addEventListener('click', replay)

easy_btn.addEventListener('click', () => {
    isEasyMode = true;
    replay()
})
hard_btn.addEventListener('click', () => {
    isEasyMode = false;
    replay()
})
play_again.addEventListener('click', () => {
    replay();
    play_again.style.display = 'none';
})
hidden_btn.addEventListener('click', function() {
    heart.style.animation = ' animate 2s ease';
    like.play();
    setTimeout(() => {
        heart.style.animation = 'none';
    }, 2000)
})