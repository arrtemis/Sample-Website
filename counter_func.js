// JavaScript function to update the count in local storage
function updateCount(count) {
    var countElement = document.getElementById("count");
    countElement.innerHTML = count;
    // Save the current count to local storage
    localStorage.setItem('thighsCount', count);
}

// JavaScript function to increment the count
function incrementCount() {
    var currentCount = parseInt(localStorage.getItem('thighsCount')) || 0;
    updateCount(currentCount + 1);
}

// JavaScript function to decrement the count
function decrementCount() {
    var currentCount = parseInt(localStorage.getItem('thighsCount')) || 0;
    if (currentCount > 0) {
        updateCount(currentCount - 1);
    }
}

// JavaScript function to reset the count
function resetCount() {
    updateCount(0);
}

// On page load, retrieve the count from local storage and display it
document.addEventListener('DOMContentLoaded', function () {
    var countElement = document.getElementById("count");
    var storedCount = localStorage.getItem('thighsCount');

    if (storedCount !== null) {
        countElement.innerHTML = storedCount;
    }
});
