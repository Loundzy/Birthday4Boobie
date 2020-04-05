$(function(){
    //path,num,caption
    var imagesArry = [
        { 
            imgPath : 'images/us/us1.jpg', 
            imgNum : 0,
            caption: "testing" 
        },
        {
            imgPath : 'images/us/us2.jpg', 
            imgNum : 1,
            caption: ""
        },
        { 
            imgPath : 'images/us/us3.jpg', 
            imgNum : 2,
            caption: ""
        },
        { 
            imgPath : 'images/us/us4.jpg', 
            imgNum : 3,
            caption: ""
        },
        { 
            imgPath : 'images/us/us5.jpg', 
            imgNum : 4,
            caption: ""
        },
        { 
            imgPath : 'images/us/us6.jpg', 
            imgNum : 5,
            caption: ""
        },
        { 
            imgPath : 'images/us/us7.jpg', 
            imgNum : 6,
            caption: ""
        },
        { 
            imgPath : 'images/us/us8.jpg', 
            imgNum : 7,
            caption: ""
        },
        { 
            imgPath : 'images/us/us9.jpg', 
            imgNum : 8,
            caption: ""
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
    

    if (currentDate >= new Date('04/05/2020')){
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
    }

    // var imgContainer = [...document.querySelectorAll('.uk-card')]

    // imgContainer.map(con => {
    //     con.addEventListener('click', function(){
    //         alert(1)

    //         if($('.uk-lightbox-items')) {
    //             var myArr = [...$('.uk-lightbox-items li')]
    //             var i = dayCount+1

    //             for(var j = 0; j < myArr.length; j++) {
    //                 if(j > i) {
    //                     myArr.parentNode.removeChild(i)       
    //                 }
    //             }
    //         }
    //     })
    // })

    // imgContainer.addEventListener('click', function () { alert(1) })

    //delay-controls	Number	3000	Delay time before controls fade out in ms.
    // createCookie('bdo_programcommitmentid', `${tpc.find('bdo_programcommitment_config').get_value()}`, 7);
    // var progCommitId = readCookie('bdo_programcommitmentid')
})

// function removeHiddenImages(){
//     alert(1)
    
//     var myArr = [...$('.uk-lightbox-items li')]
//     var i = dayCount+1

//     for(var j = 0; j < myArr.length; j++) {
//         if(j > i) {
//             myArr.parentNode.removeChild(i)       
//         }
//     }
    
    
    // var j = index+1
    // var toBeRemoved = myArr.splice(j)

    // toBeRemoved.map(li, pos => {
    //     li.parent().child()[pos]
    // })
// }

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
