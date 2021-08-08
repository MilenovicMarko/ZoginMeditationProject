const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.hamburger-menu');
    
    document.querySelector('.hamburger-menu').classList.add('hamburger-menu-active');
 


    burger.addEventListener('click', () => {
        
        nav.classList.toggle('hamburger-menu-active');
    });


}   


const CounterFunction = () =>{
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter,index)=>{
        const updateCounter = () =>{
            const limit = parseInt(counter.getAttribute('limit'));
            const count = parseInt(counter.innerText); // onaj broj koji se trenutno nalazi u counter.innerText jer ce svakako rekurzivno pozove zbog setTimeouta
            if(count < limit){ // razlicita brzina za razlicite indekse
                switch(index){
                    case 0:
                    counter.innerText = count + 50;
                    setTimeout(updateCounter,10);
                    break;
                   
                    case 1:
                    counter.innerText = count + 1;
                    setTimeout(updateCounter,5);
                    break;

                    case 2:
                    counter.innerText = count + 1;
                    setTimeout(updateCounter,100);
                    break;
                    case 3:
                    counter.innerText = count + 10;
                    setTimeout(updateCounter,10);
                    break;
                }
            }
           
        }
        updateCounter();
    })
}



const app = () => {
    navSlide();
    CounterFunction();

}

app();