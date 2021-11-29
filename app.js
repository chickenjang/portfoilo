// 부드러운 이동
const aTags = document.querySelectorAll(".link");

aTags.forEach((v)=>{
    v.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(e.currentTarget)
        let target = document.querySelector(e.currentTarget.getAttribute('href'));
        window.scrollTo ({
                'behavior': 'smooth',
                'top': target.offsetTop
        });
    })
})

let a = document.querySelector('#slides');
a.style.height = `${String(innerHeight)}px`;
// a.style.height = `${String(innerWidth)*9/16}px`;