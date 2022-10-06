console.log('hello world!');
let apiKey = 'd6528377b9db4782b9c7b61aa30133cb'
// let source = 'the-times-of-india'

let newsAccordion = document.getElementById('newsAccordion');


const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=&apiKey=${apiKey}`, true);
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, true);

let obj;
xhr.onload = function () {
    if (this.status === 200) {
        let str = ''
        // console.log(JSON.parse(this.responseText))
        obj = JSON.parse(this.responseText).articles;
        console.log(obj)
        obj.forEach(function (e, index) 
        {
            // console.log(e.description);
            str += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        ${e.title}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#newsAccordion">
                    <div class="accordion-body">
                        ${e.description}
                        <a href=${e.url} target="_blank" style="text-decoration:none"">Read More Here</a>
                    </div>
                </div>
            </div>`
        })
        newsAccordion.innerHTML=str;
    }
}


let search = document.getElementById('searchId');
search.addEventListener("input", function()
{
    let val = search.value.toLowerCase();
    let cards = document.getElementsByClassName('accordion-item');
    Array.from(cards).forEach(function(element)
    {
        let cardTxt = element.getElementsByTagName("button")[0].innerText.toLowerCase();
        if(cardTxt.includes(val)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});

xhr.send()

// 2 examples to show how we get the httprequest from the website

// 1st one
// var url = 'https://newsapi.org/v2/everything?' +
//     'q=Apple&' +
//     'from=2022-02-28&' +
//     'sortBy=popularity&' +
//     'apiKey=d6528377b9db4782b9c7b61aa30133cb';

// var req = new Request(url);

// fetch(req)
//     .then(function (response) {
//         console.log(response.json());
//     })


// 2nd one
// var url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-02-28&sortBy=popularity&apiKey=d6528377b9db4782b9c7b61aa30133cb';

// var req = new Request(url);

// fetch(req)
//     .then(function (response) {
//         console.log(response.json());
//     })