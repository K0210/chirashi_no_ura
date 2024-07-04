class jk{
  grade: 1|2|3|4|undefined;
  age: 16|17|18|19|undefined;
  constructor(grade: number){
      if(grade==1||grade==2||grade==3||grade==4){
	this.grade=grade;
    }
    else{
      this.grade= undefined;
      this.age=undefined;
    }
      if(grade== 1){
        this.age = 16;
    }
    else if(grade==2){
        this.age = 17;
    }
    else if(grade==3){
        this.age = 18;
    }
    else if(grade==4){
        this.age = 19;
    }
  }
  toString(){
    let name:string
    if (this.grade==1){
      name = 'fjk'
    }
    else if (this.grade==2){
      name = 'sjk'
    }
    else{
      name = 'ljk'
    }
    return name
  }
}
const a = new jk(2)
alert(a.age)