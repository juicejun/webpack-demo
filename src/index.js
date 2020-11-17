import "./style.css"
import "./x.scss"
import "./y.less"
import "./z.styl"
import png from './assets/resource/1.JPG'
console.log(png)
const div = document.getElementById('app')

div.innerHTML=`
<img src="${png}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        module.default()
    },()=>{
        console.log('模块加载失败')
    })
}

div.appendChild(button)