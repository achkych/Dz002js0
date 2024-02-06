let day = Math.floor(Math.random() * 31) + 1
;
if (day >= 1 && day <= 10) {
    console.log(`Chislo ${day} попадает в первую декаду месяца`);
} else if (day >= 11 && day <= 20) {
    console.log(`Chislo ${day} попадает во вторую декаду месяца`);
} else if (day >= 21 && day <= 31) {
    console.log(`Chislo ${day} попадает в третью декаду месяца`);
}