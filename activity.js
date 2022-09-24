// 1. Find courses whose instructor is "Sir Alvin" and is priced greater than or equal to 20000
//-show only its name and price


db.getCollection('Courses').find(
    {
        instructor: "Sir Alvin",
        price: {$gte:20000}




}, {_id: 0, name:true, price:true})





// 2. Find courses whose instructor is "Ma'am Tine" and is inactive.
// -show only its name and price					


db.getCollection('Courses').find(
    {
        instructor: "Ma'am Tine",
        isActive: false




}, {_id: 0, name:true, price:true})


// 3. Find courses with letter 'r' in its 
//name and has a price lower than or equal to 25000

db.getCollection('Courses').find(
    {
        name: {$regex: /r/i},
        price: {$lte:25000}




})


// 4. Update all courses with price less than 21000 to inactive.

db.Courses.updateMany(
    {price: {$lt:21000}},
    {$set: {isActive: false}}


)

// 5. Delete all courses with price greater than or equal to 25000.
db.Courses.deleteMany(
    {price: {$gte:25000}}
    
    

)