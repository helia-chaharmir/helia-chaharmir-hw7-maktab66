class Media{
    constructor(mediaName,year){
        this.mediaName=mediaName 
        this.year=year  
    }
    print(){
        console.log(`name:${this.mediaName},product of year:${this.year} `)
    }
}
class Book extends Media{
     constructor(mediaName,year,author){
         super(mediaName,year)
         this.author=author
     }
     showInfo(){
         return `name of author ${this.author}`
     }    
}
class Film extends Media{
    constructor(mediaName,year,typeFilm){
        super(mediaName,year)
        this.typeFilm=typeFilm
      }
    showInfo(){
        console.log(`kind of film:${this.typeFilm} `)
    }
}

const filmObj = new Film("breakingBad",1990,"action")
filmObj.print()
filmObj.showInfo()
const bookObj=new Book("secret",1980,"unknown")
bookObj.print()
console.log(bookObj.showInfo())
