let number0fFilms;

function start(){
    number0fFilms = +prompt("Сколько Фильмов вы посмотрели?", "");
    while(number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)){
        number0fFilms = +prompt("Сколько Фильмов вы посмотрели?", "");
    }
}
start();
const PersonalMovieDB = {
    count:(number0fFilms) ,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
function ShomMyDB(){
    if(PersonalMovieDB.privat == false){
        console.log(PersonalMovieDB);
    }
}

ShomMyDB();
function WriteYouGengers(){
    for(let i = 1; i < 4; i++){
        PersonalMovieDB.geners[i-1]=prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

WriteYouGengers();
function rememberMyFilms(){
 for(let i = 0; i < 2; i++) {       
    const a=prompt("какой последний фильм вы посмотрели", ""),
          b=prompt("Насколько вы его можете оценить?", "");
            if(a != null && b != null && a != "" && b != "" && a.length <50) {
            PersonalMovieDB.movies[a]=b; 
            console.log("хорош");
            }
            else {
            console.log("error");
            i--
            }
}
}


function DetectPersonalLevel(){
    if(PersonalMovieDB.count>0 && PersonalMovieDB.count<11){
        alert("malo");
    } else if(PersonalMovieDB.count>9 && PersonalMovieDB.count <31){
        alert("clasic");
    } else if(PersonalMovieDB.count>30){
        alert("kinoman");
    }else {
        alert("ошибка");
    }
}