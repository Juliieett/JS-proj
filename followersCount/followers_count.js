let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;

}

function checkCountValue() {
    if(count === 10) {
        alert("Your insta gained 10 followers b");
    } else if (count === 20) {
        alert("Your insta gained 20 !");
    }
}