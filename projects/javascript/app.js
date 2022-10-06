let displayCard = document.querySelector('.card--component');





let errorComponent = document.querySelector('.error--Component');






const upDateUiError = ()=>{
    // console.log('error bhai')
    if(displayCard.style.display==='block')
        displayCard.style.display = 'none';
    errorComponent.classList.remove('d-none');
};



const externalLinks = document.querySelectorAll('.picRepos');

console.log(externalLinks);


externalLinks.forEach((el)=>{

    el.classList.add('text-info');
    
});

const upDateUiSuccess = (data) =>{


    if(data.message!== 'Not Found')
    {

        if(!errorComponent.classList.contains('d-none'))
        {
            errorComponent.classList.add('d-none');

        }

        document.querySelector('.spinup').style.display = 'none';
        displayCard.style.display = 'block';
        // document.querySelector('.popper').setAttribute('src',`${data.avatar_url}`);
        const yesOrNo = (data.hireable) === true ? "AVAILABLE" : "UNAVAILABLE";

        document.querySelector('.linkname').textContent = `${data.name} , ${yesOrNo} ForHire`;
        document.querySelector('.linkname').classList.add('text-primary');
        document.querySelector('.linkname').setAttribute('href',`${data.html_url}`);

        document.querySelector('.place').textContent = `${data.location}`;
        const baseAdd = 'https://twitter.com/'
        if (data.twitter_username!== null)
        {
            externalLinks[0].textContent = `Twitter : ${data.twitter_username} 🔗`;
            externalLinks[0].innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
            </svg>`;
            
            externalLinks[0].setAttribute('href',baseAdd+data.twitter_username);

        }
        else{
            externalLinks[0].textContent = `Twitter : --- `;
            externalLinks[0].setAttribute('href','#');
        }

        if(data.blog === "")
        {
            externalLinks[1].textContent = `Portfolio : --- `;

            externalLinks[1].setAttribute('href','#');
        }
        else{

            externalLinks[1].textContent = `Portfolio : 💗`;

            externalLinks[1].setAttribute('href',`${data.blog}`);

        }

        if(data.bio !== null)
        {
            document.querySelector('.current').textContent = data.bio;
        }
        else{
            document.querySelector('.current').textContent = 'BIO : --';
        }

        console.log(data);

    }else{

        document.querySelector('.spinup').style.display = 'none';
        upDateUiError();
    }

}
const searchForm = document.querySelector('.search');

searchForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    const name = searchForm.searchName.value.trim();

    searchForm.reset();


    // console.log(name);
    if(name) {


        document.querySelector('.spinup').style.display = 'flex';


        getProfile(name).then((data) => {

            upDateUiSuccess(data);

        }).catch((err) => {

            console.log('check it out');

        });
    }

});
