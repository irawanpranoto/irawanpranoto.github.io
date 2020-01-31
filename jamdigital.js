window.setTimeout("waktu()", 1000);

function waktu() {
    let waktu = new Date();
    //let timezone = waktu.getTimezoneOffset;
    setTimeout("waktu()", 1000);
    document.getElementById("jam").innerHTML = waktu.getHours();
    document.getElementById("menit").innerHTML = waktu.getMinutes();
    document.getElementById("detik").innerHTML = waktu.getSeconds();
    // document.getElementById("Jam-Digital").innerText = "jam" + ":" + "menit" + "detik";

    // if (waktu > 12) {
    //     waktu = watu = 12;
    //     meridiem = "PM";
    // }
    // if (waktu === 0) {
    //     waktu = 12;
    // }
}

function seconds_with_leading_zeros(dt) {
    return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date();
console.log(seconds_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt));