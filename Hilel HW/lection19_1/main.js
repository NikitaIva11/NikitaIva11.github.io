const rangeBar = document.querySelector('.range')
const rangeNum = document.querySelector('.range_info')
const diagram_visual_param = document.querySelector('.diagram_visual_param')
const diagram_percent = document.querySelector('.diagram_percent')



class diagram{
    static percent(value){
        if(parseInt(value)>100){
            return;
        }
        diagram_visual_param.style.height = value + 'px'
        if(value<20){
            diagram_percent.style.height = value*0.02 + 'px'
        }else if(value<=50){
            diagram_percent.style.height = value*0.04 + 'px'
        }else if(value<=75){
            diagram_percent.style.height = value*0.06 + 'px'
        }else if(value<=100){
            diagram_percent.style.height = value*0.08 + 'px'
        }
    }
    static rangeFunc(){
        rangeNum.value = rangeBar.value
        this.percent(rangeBar.value)

    }
    static rangeNum(){
        rangeBar.value = rangeNum.value
        this.percent(rangeNum.value)
    }
}
rangeBar.addEventListener('input',e=>diagram.rangeFunc(e))
rangeNum.addEventListener('input',e=>diagram.rangeNum(e))