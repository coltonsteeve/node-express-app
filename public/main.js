function numGen() {
    let randomNum = Math.floor(Math.random()*10 + 1);
    document.getElementById('numGen').innerHTML = '<h2>' + randomNum + '</h2>';
}