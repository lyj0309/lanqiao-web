const d = document.getElementById("defaultlight")
const r = document.getElementById("redlight")
const g = document.getElementById("greenlight")


// TODO：完善此函数 显示红色颜色的灯
function red() {
    g.style.display = "none"
    d.style.display = "none"
    r.style.display = "inline-block"
}

// TODO：完善此函数  显示绿色颜色的灯
function green() { 
    g.style.display = "inline-block"
    d.style.display = "none"
    r.style.display = "none"
}

// TODO：完善此函数
function trafficlights() {
    setTimeout(() => {
        red()
    }, 3000)
    setTimeout(() => {
        green()
    }, 6000)

}

trafficlights();
