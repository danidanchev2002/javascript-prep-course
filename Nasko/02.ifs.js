console.log(true || false);  // 1 or 0 -> 1
console.log(false || true); // 0 or 1 -> 1
console.log(true || true);  // 1 or 1 -> 1

// 1 and 0

console.log(true && false)
const age = 26;

const isAdult = age >= 18; // true/false
const isLoggedIn = true;







































// isAdult
// isLoggedIn
// let the user in if its an adult or if he is logged in
console.log(isAdult || isLoggedIn)


// isCurrentStudent
// hasGoodGrade
// give diploma to student if he is current student and has good grade
console.log(isCurrentStudent && hasGoodGrade);

// isLoggedIn
// hasPaidForCourse
// action: show course
console.log(isLoggedIn && hasPaidForCourse)

// hasPet
// wantToHavePet
// action: show promotion video for pet food
console.log(hasPet)

// action: show cute pet videos
console.log(hasPet || wantToHavePet)


// hasCar
// isRich
// action: promote very expensive car wash
console.log(hasCar && isRich)


// hasTicket
// isChild
// action: let in zoo
console.log(hasTicket || isChild)


// isRegistered
// hasPaid
// action: send email to promote course
console.log(isRegistered && !hasPaid)
// we target people who have registered AND have NOT paid




// || - or
// && - and