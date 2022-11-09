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

// action: show promotion video to buy pet
console.log(wantToHavePet)

// action: show promotion for 50% discount for people that don't have pet
console.log(wantToHavePet && !hasPet)

// action: show ad that it's very good idea to have a pet
console.log(!hasPet && !wantToHavePet)


// hasCar
// isRich
// action: promote very expensive car wash
console.log(hasCar && isRich)

// action: promote 50% discount for expensive car for people that don't have car
console.log(isRich && !hasCar)

// action: promote cheap car wash
console.log(hasCar && !isRich)


// hasTicket
// isChild
// action: let in zoo
console.log(hasTicket || isChild)


// isRegistered
// hasPaid
// action: send email to promote course
if(isRegistered && !hasPaid) {
    // send email to promote course
}
// we target people who have registered AND have NOT paid


// isGoodEmployee
// gotVacation
// action: give bonus to people that are good employees or that used no vacation
if (isGoodEmployee || !gotVacation) {
    // give bonus
}


// isTeacher
// hasGoodGrades
// hasMisbehaved
// isForeigner
// action: give free coffee
if (isTeacher || (hasGoodGrades && !hasMisbehaved) || (isForeigner && !hasMisbehaved)) {
    // give coffee
}

(true false false)
false true false
false false true

false (false && !true) (false && !true)

false (true && !false) (false && !false) =
false (true && true) (false && true) =
false true false





// || - or
// && - and