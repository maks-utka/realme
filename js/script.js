const number0fFilms = prompt("Сколько Фильмов вы посмотрели?", "");

const obj = {
    count:(number0fFilms) ,
    movies: {},
    actors: {},
    gengers: arr =[],
    privat: false
};


for(let i = 0; i < 2; i++) {
    
        
const a=prompt("какой последний фильм вы посмотрели", ""),
      b=prompt("Насколько вы его можете оценить?", "");
     if(a != null && b != null && a != "" && b != "" && a.length <50) {
        obj.movies[a]=b; 
        console.log("хорош");
        
     } else {
         console.log("error");
         i--
     }



};
console.log(obj);
if(obj.count>0 && obj.count<11){
    alert("malo");
} else if(obj.count>9 && obj.count <31){
    alert("clasic");
} else if(obj.count>30){
    alert("kinoman");
}else {
    alert("ошибка");
}