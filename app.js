const surah = new Audio('');
surahplay();


const surahs = [
    {
        id:'1',
        surahName:`Dafina Karpuzi<br>

        "<div class=subtitle">Dafina Karpuzi</div>`,
        poster: "kuran.jpg",

        },
        {
            id:'2',
            surahName:`Dafina Karpuzi<br>
    
            "<div class=subtitle">Dafina Karpuzi</div>`,
            poster: "kuran.jpg",
        },
               
            {
                id:'3',
                surahName:`Dafina Karpuzi<br>
        
                "<div class=subtitle">Dafina Karpuzi</div>`,
                poster: "kuran.jpg",
        
                },
                {
                    id:'4',
                    surahName:`Dafina Karpuzi<br>
            
                    "<div class=subtitle">Dafina Karpuzi</div>`,
                    poster: "kuran.jpg",
            
                    },
                    {
                        id:'5',
                        surahName:`Dafina Karpuzi<br>
                
                        "<div class=subtitle">Dafina Karpuzi</div>`,
                        poster: "kuran.jpg",
                
                        },
                        {
                            id:'6',
                            surahName:`Dafina Karpuzi<br>
                    
                            "<div class=subtitle">Dafina Karpuzi</div>`,
                            poster: "kuran.jpg",
                    
                            },
                            {
                                id:'7',
                                surahName:`Dafina Karpuzi<br>
                        
                                "<div class=subtitle">Dafina Karpuzi</div>`,
                                poster: "kuran.jpg",
                        
                                },
                                {
                                    id:'8',
                                    surahName:`Dafina Karpuzi<br>
                            
                                    "<div class=subtitle">Dafina Karpuzi</div>`,
                                    poster: "kuran.jpg",
                            
                                    },
                                    {
                                        id:'9',
                                        surahName:`Dafina Karpuzi<br>
                                
                                        "<div class=subtitle">Dafina Karpuzi</div>`,
                                        poster: "kuran.jpg"
                                
                                        },
                                        {
                                            id:'10',
                                            surahName:`Dafina Karpuzi<br>
                                    
                                            "<div class=subtitle">Dafina Karpuzi</div>`,
                                            poster: "kuran.jpg",
                                    
                                            },
                                            {
                                                id:'11',
                                                surahName:`Dafina Karpuzi<br>
                                        
                                                "<div class=subtitle">Dafina Karpuzi</div>`,
                                                poster: "kuran.jpg",
                                        
                                                },
                                                {
                                                    id:'12',
                                                    surahName:`Dafina Karpuzi<br>
                                            
                                                    "<div class=subtitle">Dafina Karpuzi</div>`,
                                                    poster: "kuran.jpg",
                                            
                                                    }
]



Array.from(document.getElementsByClassName('surahItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = surahs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = surahs[i].surahName;

});

//per buttonin me lshu muziken
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(surah.paused || surah.currentTime <= 0){
surah.play();
wave.classList.add('active1');
masterPlay.classList.remove('bi-play-fill');
masterPlay.classList.add('bi bi-pause-fill');
    }else{
        surah.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
masterPlay.classList.remove('bi bi-pause-fill');

    }
});


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{

    e.addEventListener('click', (el)=>{
        index = el.target.id;
       // console.log(index);
       surah.src = `audio/${index}.mp3`;
       poster_master_play.src=`img/${index}.jpg`;
      
       surah.play();

    })
})

















//slideri per popular sure//

let mostbeautiful_surah_left = document.getElementById('mostbeautiful_surah_left');
let mostbeautiful_surah_right = document.getElementById('mostbeautiful_surah_right');
let mostbeautiful_surah = document.getElementsByClassName('mostbeautiful_surah')[0];


mostbeautiful_surah_right.addEventListener('click', ()=>{
    mostbeautiful_surah.scrollLeft +=330;
})

mostbeautiful_surah_left.addEventListener('click', ()=>{
    mostbeautiful_surah.scrollLeft -=330;
})


//slideri per popular sheikh me rrath//
let pop_sheikh_left = document.getElementById('pop_sheikh_left');
let pop_sheikh_right = document.getElementById('pop_sheikh_right');
let item  = document.getElementsByClassName('item')[0];


pop_sheikh_right.addEventListener('click', ()=>{
    item.scrollLeft +=330;
})

pop_sheikh_left.addEventListener('click', ()=>{
    item.scrollLeft -=330;
})

