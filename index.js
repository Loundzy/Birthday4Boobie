$(function(){
    //path,num,caption
    var imagesArry = [
        { 
            imgPath : 'images/us/us1.jpg', 
            imgNum : 0,
            caption: "The first picture we ever took together(I'm pretty sure). Who would have thought I found my lobster when you started at the Source. I got it right with the caption here tho, cause you have remained my best friend and the love of my life <3" 
        },
        {
            imgPath : 'images/us/us2.png', 
            imgNum : 1,
            caption: "We are LOSERS! And I love it cause we are losers together. No matter how our interests manage to change over time we never lose our interact in each other. I have faith that we will continue to grow together no matter how much we grow individually. I love you."
        },
        { 
            imgPath : 'images/us/us3.png', 
            imgNum : 2,
            caption: "This one is just selfish and for me mostly :P You are beautiful and I never lose site of how apparent that is on the inside and outside. Really wish I could feel these lips against mine right now...<3"
        },
        { 
            imgPath : 'images/us/us4.jpeg', 
            imgNum : 3,
            caption: "I have not been to many concerts, and none of which did I have to pee as bad as waiting in this line. You may have enjoyed it (too much) but you always stayed attentive to what I was going through. That's something I love so much about you. You take care of how I feel better than anyone. Thank you."
        },
        { 
            imgPath : 'images/us/us5.png', 
            imgNum : 4,
            caption: "Correct me if I am wrong, but this was your first hockey game, right? I may not look happy but I had a lot of fun being apart of that with you and getting to share something that really special and important to me with you was a lot of fun. I will not forget it and look forward to many more (once we are brining in the dough :P)."
        },
        { 
            imgPath : 'images/us/us6.png', 
            imgNum : 5,
            caption: "I'm probably wrong here for timing, but this makes me thing about when you got back from Chicago. I missed you so much and I was so happy to finally get to really and have my favorite person back. I dont think this was taken around that time, but the energy fits how I felt and will feel finally getting to be close to you again."
        },
        { 
            imgPath : 'images/us/us7.png', 
            imgNum : 6,
            caption: "Again, I picked this cause I miss you >_< You look cute. I do wish we took more pictures together and that you would share them with me so I can have them. I mean, I do love the nudes and selfies but the us-ies are pretty nice too. Could really use being able to look through more pictures of us right now..."
        },
        { 
            imgPath : 'images/us/us8.jpg', 
            imgNum : 7,
            caption: "Our better late than never Valentines Day. Just like with your birthday, we will still celebrate and it will be something we will not forget. Hard as being apart is from you right now it will make seeing you that much more special after the wait, just like this dinner date :P"
        },
        { 
            imgPath : 'images/us/us9.jpg', 
            imgNum : 8,
            caption: "And last but not least, our recent venture out for my work christmas party. Our lives are changing and growing and being able to share my new exiting workplace that marks a big step forward for me was very special. It was nice to be able to let loose and have some fun and I really had a BLAST with you. From the first picture until now, nothing has changes as my most fun and fondest memories are always ones I share with you. Enjoy the bonus Ive left on the page ;)"
        }
    ]
    
    var dayCount = readCookie('startDate') //will return null if ther eis no cookie
    var startDate = new Date('04/05/2020')
    // var cardImgs = [...document.querySelectorAll('.uk-card > a.uk-link-reset')]
    var cardImgs = $('.uk-card > a.uk-link-reset')
    var cardThum = $('.uk-card > a.uk-link-reset img')

    var day, nextDay, month, year;
    day = new Date().getDate()
    month = new Date().getMonth()
    year = new Date().getFullYear()
    var currentDate = `${month + 1}/${day}/${year}`
    nextDay = new Date(`${month + 1}/${day +1}/${year}`).toISOString()
    $('.countDown').attr('uk-countdown', `date: ${nextDay}`)
    

    if (new Date(currentDate) >= new Date('04/05/2020')){
        if(dayCount) {
            //do sutff if page has loaded before
            var startDate = readCookie('startDate')
            dayCount = diffInDays(currentDate, startDate)
            
            if(dayCount > 0) {
                for (var i = 0; i <= dayCount; i++) {
                    cardImgs[i].setAttribute('href', imagesArry[i].imgPath)
                    cardImgs[i].setAttribute('data-caption', imagesArry[i].caption) 
                    cardThum[i].setAttribute('src', 'images/unlocked.jpg')
                }
            } else {
                cardImgs[0].setAttribute('href', imagesArry[0].imgPath)
                cardImgs[0].setAttribute('data-caption', imagesArry[0].caption)
                cardThum[0].setAttribute('src', 'images/unlocked.jpg')
            }
        } else {
            //create cookie for first time
            cardImgs[0].setAttribute('href', imagesArry[0].imgPath)
            cardImgs[0].setAttribute('data-caption', imagesArry[0].caption)
            cardThum[0].setAttribute('src', 'images/unlocked.jpg')
            dayCount = 0;
    
            
            // createCookie('numOfDaysPast', 1, 30)
            createCookie('startDate', `${month +1}/${day}/${year}`, 30)
        }
    } else {
        $('.uk-alert-danger').removeClass('uk-hidden')
    }
})

function diffInDays(date2, date1) {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
