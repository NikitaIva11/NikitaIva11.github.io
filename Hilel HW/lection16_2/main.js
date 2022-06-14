class times {

    getHours() {
        let date = new Date()
        return date.getHours();
    }
    getMinutes(){
        let date = new Date()
        return date.getMinutes();
    }
    getSeconds(){
        let date = new Date()
        return date.getSeconds();
    }
    getFullTime(){
        let date = new Date()
        let fullTime = `${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`;
        return fullTime;
    }
    getTimer(){
        let timer = 0;
        return function timerPlus(){
            return ++timer
        }
    }
    renderTimer(target){
        const div  = document.createElement('div');
        div.classList.add('clock');
        const fullTimeSpan = document.createElement('span');
        const timerSpan = document.createElement('span');

        const title = document.getElementsByTagName('TITLE')[0];

        let spanTimer = this.getTimer();
        let titleTimer = this.getTimer();

        div.appendChild(fullTimeSpan);
        div.appendChild(timerSpan);

        setInterval(()=>{
            fullTimeSpan.innerHTML = `${this.getFullTime()} / `;
            timerSpan.innerHTML = spanTimer() + ' sec';
            title.innerHTML = `${this.getFullTime()} / ${titleTimer()} sec`;
        },1000);

        target.appendChild(div);
    }
}
const startTimes = new times();
startTimes.renderTimer(document.body)
