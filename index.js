//reset
function reset(){
    location.reload()
}
//timer

const startmin = 10
let time = startmin*60
const starttime = time
let timedisplay = document.getElementById("clk")

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function gametimer(){
        let minutes = Math.floor(time/60)
        let seconds = checkTime(time % 60)
        timedisplay.textContent = minutes +":"+ seconds
        if (time > 0){ 
            time --
        } 
}
//clkplay
function clkplay(){
    setInterval(gametimer, 1000)
    
}
//clkpause
function clkpause(){
    alert("Game Paused \nPress 'OK' to continue" )
}
//clkstop
function clkstop(){
    alert("Restart Timer?")
    setTimeout(() => {
        time = starttime
        gametimer() 
    }, 500);
}
//home score1(), score2(), score3()
let homescore = document.getElementById("score1")
let homepts = 0;
homescore.textContent= homepts

function homescore1(){
    let uphomepts = homepts += 1
    homescore.textContent= uphomepts
    homepts = uphomepts
    
}
function homescore2(){
    let uphomepts = homepts += 2
    homescore.textContent= uphomepts
    homepts = uphomepts
}
function homescore3(){
    let uphomepts = homepts += 3
    homescore.textContent= uphomepts
    homepts = uphomepts
}
//away score1(), score2(), score3()
let awayscore = document.getElementById("score2")
let awaypts = 0;
awayscore.textContent= awaypts

function awayscore1(){
    let upawaypts = awaypts += 1
    awayscore.textContent= upawaypts
    awaypts = upawaypts
}
function awayscore2(){
    let upawaypts = awaypts += 2
    awayscore.textContent= upawaypts
    awaypts = upawaypts
}
function awayscore3(){
    let upawaypts = awaypts += 3
    awayscore.textContent= upawaypts
    awaypts = upawaypts
}
//period add and min
let periods = document.getElementById("periods")
let initperiod = 0
periods.textContent = initperiod

function periodadd() {
    let upperiod = initperiod += 1
    periods.textContent = upperiod
    initperiod = upperiod
}

function periodmin() {
    let upperiod = initperiod -= 1
    periods.textContent = upperiod
    initperiod = upperiod
    if (initperiod < 0){
        alert("Error: no negative period")
        initperiod += 1
        periods.textContent = initperiod
    }
}
//home foul add and min

let homefoul = document.getElementById("foul1")
let initfoul1 = 0
homefoul.textContent = initfoul1

function homefouladd() {
    let upfoul1 = initfoul1 += 1
    homefoul.textContent = upfoul1
    initfoul1 = upfoul1
}

function homefoulmin() {
    let upfoul1 = initfoul1 -= 1
    homefoul.textContent = upfoul1
    initfoul1 = upfoul1
    if (initfoul1 < 0){
        alert("Error: no negative fouls")
        initfoul1 += 1
        homefoul.textContent = initfoul1
    }
}
//away add and min

let awayfoul = document.getElementById("foul2")
let initfoul2 = 0
awayfoul.textContent = initfoul2

function awayfouladd() {
    let upfoul2 = initfoul2 += 1
    awayfoul.textContent = upfoul2
    initfoul2 = upfoul2
}

function awayfoulmin() {
    let upfoul2 = initfoul2 -= 1
    awayfoul.textContent = upfoul2
    initfoul2 = upfoul2
    if (initfoul2 < 0){
        alert("Error: no negative fouls")
        initfoul2 += 1
        awayfoul.textContent = initfoul2
    }
}