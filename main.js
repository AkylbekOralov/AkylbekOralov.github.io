// ######## Music ############
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Әуенді тоқтату';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Әуенді қосу';
    }
});

// ######## Timer ############

var countDownDate = new Date("Aug 22, 2024 12:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let timertext = days < 10 ? "0" + days + ":" : days + ":";
    timertext += hours < 10 ? "0" + hours + ":" : hours + ":";
    timertext += minutes < 10 ? "0" + minutes + ":" : minutes + ":";
    timertext += seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").textContent = timertext;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").textContent = "00:00:00:000";
    }
}, 1000);

// ######## Form ############

document.getElementById('add').addEventListener('click', function() {
    var countField = document.getElementById('count');
    var count = parseInt(countField.value);
    countField.value = count + 1;
});

document.getElementById('subtract').addEventListener('click', function() {
    var countField = document.getElementById('count');
    var count = parseInt(countField.value);
    if (count > 1) {
        countField.value = count - 1;
    }
});

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        checkboxes.forEach(function(cb) {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });
    });
});

function form() {
    var name = document.getElementById('name').value;
    var option1 = document.getElementById('option1').value;
    var option2 = document.getElementById('option2').value;
    var count = document.getElementById('count').value;

    alert("{name} + {option1}+{option2}+{count}");
}