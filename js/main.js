
// 1. display library //
var library = [  
   { 
       author: 'Bill Gates', 
       title: 'The Road Ahead', 
       readingStatus: true 
   }, 
   { 
       author: 'Steve Jobs', 
       title: 'Walter Isaacson', 
       readingStatus: true 
   }, 
   { 
       author: 'Suzanne Collins', 
       title:  'Mockingjay: The Final Book of The Hunger Games',  
       readingStatus: false 
   }]; 


   for(i=0;i<library.length;i++)
   { 
    if(library[i].readingStatus){
    console.log(`author:${library[i].author}`);
    console.log(`title:${library[i].title}`);
    console.log(`reading:${library[i].readingStatus}`);
   }}
   

// 2. replace 6 // 

let obj = { 

    foo: { a: "hello", b: "world" }, 
    
    bar: ["example", "mem", null, { xyz: 6 }, 88], 
    
    qux: [4, 8, 12] 
    
    }; 



    obj.bar[3].xyz=606;

    console.log(obj);


// 3. 

const users = [ 

    { 
  
      first_name: 'Mike', 
  
      last_name: 'Sheridan' 
  
    }, 
  
    { 
  
      first_name: 'Tim', 
  
      last_name: 'Lee' 
  
    }, 
  
    { 
  
      first_name: 'John', 
  
      last_name: 'Carte' 
  
    } 
  
  ]; 

  let use=users.map((users)=>users.first_name+users.last_name)

  console.log(use);

// 4. 

    const name = [ 

  { 

    first_name: 'Mike', 

    last_name: 'Sheridan', 

    age: 30 

  }, 

  { 

    first_name: 'Tim', 

    last_name: 'Lee', 

    age: 45 

  }, 

  { 

    first_name: 'John', 

    last_name: 'Carte', 

    age: 25 

  } 

]; 

let name4=name.map((name)=>name.last_name)

console.log(name4);

// 5. 

const user = [ 

    { 
  
      first_name: 'Mike', 
  
      location: 'London' 
  
    }, 
  
    { 
  
      first_name: 'Tim', 
  
      location: 'US' 
  
    }, 
  
    { 
  
      first_name: 'John', 
  
      location: 'Australia' 
  
    } 
  
  ]; 

  let name5=user.map((user)=>`${user.first_name} lives in ${ user.location}`)

  console.log(name5);


//   6. 

const employees = [ 

    { name: 'David Carlson', age: 30 }, 
  
    { name: 'John Cena', age: 34 }, 
  
    { name: 'Mike Sheridan', age: 25 }, 
  
    { name: 'John Carte', age: 50 } 
  
  ]; 

  let empl6=employees.filter((emp)=>emp.age>30)

  console.log(empl6)


//   7.


const students = [ 

  { name: 'Quincy', grade: 96 }, 

  { name: 'Jason', grade: 84 }, 

  { name: 'Alexis', grade: 100 }, 

  { name: 'Sam', grade: 65 }, 

  { name: 'Katie', grade: 90 } 

]; 

let mark=students.filter((mark)=>mark.grade>=90)

console.log(mark);

// 8.

let userDet = [ 

    { name: 'John', age: 25, occupation: 'gardener' }, 

    { name: 'Lenny', age: 51, occupation: 'programmer' }, 

    { name: 'Andrew', age: 43, occupation: 'teacher' }, 

    { name: 'Peter', age: 81, occupation: 'teacher' }, 

    { name: 'Anna', age: 47, occupation: 'programmer' }, 

    { name: 'Albert', age: 76, occupation: 'programmer' }, 

] 


let details=userDet.filter((userDet)=>(userDet.occupation=="programmer"))

console.log(details);