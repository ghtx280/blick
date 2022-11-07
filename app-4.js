let data
const app = {
  data(b) {
    data = new Proxy(b, {
      get(c, a) {
        return Reflect.get(c, a)
      },
      set(d, a, b) {   
        return Reflect.set(d, a, b), update(a)
      }
    })
  }
}
const store = {}
const end = (c, a) => c.slice(0, -a);
const keywords = 'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void'
const checkKeywords = (a, b) => Boolean(a.split(',').filter(el => b.includes(el)).length)
const js = str => {
  if (!checkKeywords(keywords, String(str))) {
    Object.keys(data).forEach(el => {
      if (str.includes(el)) str = str.replaceAll(el, 'data.' + el)
    })
    return Function(`return ${str}`)()
  }

}

const q = e => document.querySelectorAll(e)

const attr = (elem, str, st, val) => {
  if (st=="has") return elem.hasAttribute(str)
  if (st=="set") return elem.setAttribute(str, val)
  if (st=="get") return elem.getAttribute(str)
  else return elem.getAttribute(str)
}


function parseAttr(b){
  const c=[],d=(d,a)=>c.push({prop:d,value:a}),
  e=a=>a.slice(0,a.indexOf(":")).trim(),
  f=a=>a.slice(a.indexOf(":")+1).trim(),
  g=c=>e(c?c:b).split("&").forEach(a=>{d(a.trim(),f(c?c:b))});
  return b.includes(";")
  ?b.split(";").forEach(a=>a.includes("&")?g(a):d(e(a),f(a)))
  :b.includes("&")?g():d(e(b),f(b)),c
}
// ЗРОБИТИ ЗМІНУ КЛАСІВ
let old
function update(zm) {
  store[zm].forEach(e=>{
    
    if (e.bind) {
      parseAttr(e.bind).forEach(sho =>{
        if (sho.prop == 'class') sho.prop = 'className'
        if (sho.prop == 'text')  sho.prop = 'innerText'
        
        
        if (sho.prop == 'this') {
          if (data[sho.value] != e.el) data[sho.value] = e.el 
        }
        else if (sho.prop == 'className') {
          
          // let cls = e.el.className
          // let val = js(sho.value)
          // if (!old) cls += ' '+ val
          // else cls = cls.replace(oldVal,val)
          // oldVal = val
          e.el.className = js(sho.value)
          // console.log(js(sho.value));
          // if (data[sho.value] != e.el) data[sho.value] = e.el 
        }
        else if (sho.prop == 'innerText'){
          if (data[sho.value] != e.el[sho.prop] ) data[sho.value] = e.el[sho.prop] 
        }
        else e.el[sho.prop] = js(sho.value)
        
        
      })
    }
    if (e.if) {
      if(js(e.if)){
        e.el.style.display = ''
      }
      else {
        e.el.style.display = 'none'
      }
    }
    if (e.css) {
      parseAttr(e.css).forEach(sho =>{
        e.el.style[sho.prop] = js(sho.value)
      })
    }
    if (e.in) {
      let g = e.in
      let h = g.match(/\{([^}]+)\}/g)
      let d = h.map(a => a.slice(1, a.length-1).trim())

      for (let c in h) g = g.replaceAll(h[c], js(d[c]))

      e.el.innerText = g
    }
  })
}
  
  
document.addEventListener("DOMContentLoaded", () => {
  if (data) {
    Object.keys(data).forEach(key =>{if(typeof(data[key])!='function')store[key]=[]})
  }

  function setStore(elem,str){
    Object.keys(store).forEach(key =>{
      if (attr(elem,str).includes(key)||elem.innerText.includes(key)){
        let obj = {el:elem}
        if (str == 'in') obj[str] = elem.innerText
        else obj[str] = attr(elem,str)
        store[key].push(obj)
      }
    })
  }

  const selectors = 'on,in,if,bind,css'
  const querySelAll = selectors.split(',').map(sel => '['+sel+']').join()

  q(querySelAll).forEach(el => {
    if (el.hasAttribute('in')  ) setStore(el,'in')     
    if (el.hasAttribute('if')  ) setStore(el,'if')      
    if (el.hasAttribute('css') ) setStore(el,'css') 
    if (el.hasAttribute('bind')) {
      let ev = 'change'
      let at = attr(el, 'bind')
      if (at.includes('value') || at.includes('checked')) {
        parseAttr(at).forEach(pars=>{
          if (pars.prop == 'value') ev = 'input'
          el.addEventListener(ev, ()=>{data[pars.value] = el[pars.prop]})
        })
      }
      setStore(el,'bind')
    }   
    if (el.hasAttribute('on')  ) {
      parseAttr(attr(el, 'on')).forEach(pars=>{
        el.addEventListener(pars.prop,function(){js(pars.value)})
      })
    }
  })
  Object.keys(store).forEach(key=>update(key))
  

})











// function getLink(link,str){
//  return `<a href="${link.includes('http')?link:'https://'+link}">${str?str:link}</a>`
// }

// let text = 'hello world'.split('').join(' ').toUpperCase()

// console.log(getLink('https://youtube.com','click me'));





















// ДОДАТИ ЕЛЕМЕНТИ В СТОР ЗАКІНЧИВ НА ТОМУ ЩО ХОТІВ ЗРОБИТИ СЕЛЕКТОРИ ЩОБ ОТРИМАТИ ВСІ ЕЛЕМЕНТИ

// store = {
//   msg:[{
//     elems:el,
//     if:"",
//     //...

//   },{
//     elems:el,
//     if:"",
//     //...

//   }]
// }



  // q('[on]').forEach(elem=>{
    
  // })



  // console.timeEnd()
  // q("[b-val]").forEach(b => {
  //   b.value = data[attr(b, "b-val", 'get')],
  //   b.addEventListener("input", () => {
  //     data[attr(b, "b-val", 'get')] = b.value
  //   })
  // }), q("[each]").forEach(a => {
  //   let b = attr(a, 'each', "get").split("of").map(a => a.trim());
  //   store = store.filter(b => b.elem !== a)
  //    for (let c of data[b[1]]) {
  //     let str
  //     let e = a.cloneNode(!0),
  //       f = e.innerText.trim().match(/\{([^}]+)\}/g),
  //       g = f.map(b => b.substring(1, b.length - 1).trim());
  //     e.removeAttribute("each"), a.before(e), g.forEach(a => {
  //       if (a.includes(b[0])) str = a.replaceAll(b[0], c)
  //       else str = g[0]
  //       e.innerText = e.innerText.replaceAll(f[g.indexOf(a)], js('"'+str+'"'))
  //     }), store.push({
  //       elem: e,
  //       text: e.innerText
  //     })
  //   }
  //   a.remove(), store = store.filter(b => b.elem !== a)
  // })
  // styleElems = startSelector('style')
  // bindElems  = startSelector('bind')
  // eventElems = startSelector('on')
  // getElems   = startSelector('get')
  
  // eventElems.forEach(el => {
  //   el.elem.addEventListener(el.sel, () => { js(el.val) })
  // });
  // bindElems.forEach(el => {
  //   if (el.sel == 'this' ) return false
  //   let ev = 'change'
  //   if (el.sel == 'value') ev = 'input'
  //   el.elem.addEventListener(ev, function () {
  //     data[el.val] = el.elem[el.sel]
  //   })
  // });


  // insertData()

  // console.log(store);
