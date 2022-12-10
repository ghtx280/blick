const blick = {
  class: {
    m: {
      prop: 'margin:$', def: 'px'
    },
    my:{
      prop:"margin-top:$;margin-bottom:$",
      def:"px"
    },
    mx:{
      prop:"margin-left:$;margin-right:$",
      def:"px"
    },
    mt: {
      prop: 'margin-top:$', def: 'px'
    },
    mr: {
      prop: 'margin-right:$', def: 'px'
    },
    mb: {
      prop: 'margin-bottom:$', def: 'px'
    },
    ml: {
      prop: 'margin-left:$', def: 'px'
    },
    p: {
      prop: 'padding:$', def: 'px'
    },
    py:{
      prop:"padding-top:$;padding-bottom:$",
      def:"px"
    },
    px:{
      prop:"padding-left:$;padding-right:$",
      def:"px"
    },
    pt: {
      prop: 'padding-top:$', def: 'px'
    },
    pr: {
      prop: 'padding-right:$', def: 'px'
    },
    pb: {
      prop: 'padding-bottom:$', def: 'px'
    },
    pl: {
      prop: 'padding-left:$', def: 'px'
    },
    b: {
      prop: 'border-width:$', def: 'px'
    },
    bt: {
      prop: 'border-top-width:$', def: 'px'
    },
    br: {
      prop: 'border-right-width:$', def: 'px'
    },
    bb: {
      prop: 'border-bottom-width:$', def: 'px'
    },
    bl: {
      prop: 'border-left-width:$', def: 'px'
    },
    bc: {
      prop: 'border-color:$'
    },
    bs: {
      prop: 'border-style:$'
    },
    border: {
      one: 'border:1px solid',
      prop:'border:$',
      def:'px'
    },
    scale: {
      prop: 'scale:$',
      def: ''
    },
    rotate: {
      prop: 'rotate:$',
      def: 'deg'
    },
    translate: {
      prop: 'translate:$',
      def: 'px'
    },
    skewX: {
      prop: 'transform:skewX($)',
      def: 'deg'
    },
    skewY: {
      prop: 'transform:skewY($)',
      def: 'deg'
    },
    accent: {
      prop: 'accent-color:$'
    },
    caret: {
      prop: 'caret-color:$'
    },
    fill: {
      prop: 'fill:$'
    },
    stroke: {
      prop: 'stroke:$'
    },
    unappearance: {
      one: 'appearance:none',
    },
    flip: {
      one: 'scale:-1 -1',
      prop: 'scale:$',
      vals: {
        x: '-1 1',
        y: '1 -1'
      }
    },
    w: {
      prop: 'width:$',
      vals: {
        full: '100%',
        half: '50%',
        min:'min-content',
        fit:'fit-content',
        max:'max-content',
        screen:'100vw'
      },
      def: 'px'
    },
    h: {
      prop: 'height:$',
      vals: {
        full: '100%',
        half: '50%',
        min:'min-content',
        fit:'fit-content',
        max:'max-content',
        screen:'100vh'
      },
      def: 'px'
    },
    minW: {
      prop: 'min-width:$',
      vals: {
        full: '100%',
        half: '50%',
        min:'min-content',
        fit:'fit-content',
        max:'max-content',
        screen:'100vw'
      },
      def: 'px'
    },
    minH: {
      prop: 'min-height:$',
      vals: {
        full: '100%',
        half: '50%',
        min:'min-content',
        fit:'fit-content',
        max:'max-content',
        screen:'100vh'
      },
      def: 'px'
    },
    maxW: {
      prop: 'max-width:$',
      vvals: {
        full: '100%',
        half: '50%',
        min:'min-content',
        fit:'fit-content',
        max:'max-content',
        screen:'100vw'
      },
      def: 'px'
    },
    maxH: {
      prop: 'max-height:$',
      vals: {
        full: '100%',
        half: '50%',
        min:'min-content',
        fit:'fit-content',
        max:'max-content',
        screen:'100vh'
      },
      def: 'px'
    },
    hue: {
      prop: 'filter:hue-rotate($)',
      def: 'deg'
    },
    d: {
      prop: 'display:$',
      vals: {
        inblock:'inline-block',
        inflex:'display:inline-flex',
        ingrid:'display:inline-grid'
      }
    },
    inline:{
      one:'display:inline'
    },
    block:{
      one:'display:block'
    },
    inblock:{
      one:'display:inline-block'
    },
    inflex:{
      one:'display:inline-flex'
    },
    ingrid:{
      one:'display:inline-grid'
    },
    uppercase:{
      one: "text-transform:uppercase"
    },
    lowercase:{
      one: "text-transform:lowercase"
    },
    capitalize:{
      one: "text-transform:capitalize"
    },
    hide: {
      one: "display:none!"
    },
    pos: {
      prop: "position:$"
    },
    absolute:{
      one:'position:absolute'
    },
    relative:{
      one:'position:relative'
    },
    sticky:{
      one:'position:sticky'
    },
    fixed:{
      one:'position:fixed'
    },
    center: {
      one: "margin:auto"
    },
    invert: {
      prop:'filter:invert($)'
    },
    round: {
      one: 'border-radius:9999px',
      prop: 'border-radius:$',
      def: 'px'
    },
    select: {
      prop: 'user-select:$'
    },
    fit: {
      prop: 'object-fit:$'
    },
    bg: {
      prop: 'background:$',
      _vals:{
        fixed:'background-attachment:fixed',
        local:'background-attachment:local',
        scroll:'background-attachment:scroll',
        'clip-border':'background-clip:border-box',
        'clip-padding':'background-clip:padding-box',
        'clip-content':'background-clip:content-box',
        'clip-text':'background-clip:text',
        'origin-border':	'background-origin:border-box',
        'origin-padding':	'background-origin:padding-box',
        'origin-content':	'background-origin:content-box',
      },
      
    },
    c: {
      prop: 'color:$'
    },
    over: {
      prop: 'overflow:$'
    },
    overX: {
      prop: 'overflow-x:$'
    },
    overY: {
      prop: 'overflow-y:$'
    },
    snap: {
      vals: {
        x: 'scroll-snap-type:x mandatory',
        y: 'scroll-snap-type:y mandatory',
        start: 'scroll-snap-align:start',
        center: 'scroll-snap-align:center',
        end: 'scroll-snap-align:end',
        stop: 'scroll-snap-stop: always',
      }
    },
    shadow: {
      vals: {
        box:'box-shadow:3px 4px 3px #0000004d',
        text:'text-shadow:3px 4px 3px #0000004d'
      }
    },
    cursor: {
      prop: 'cursor:$'
    },
    resize: {
      prop: 'resize:$',
      vals: {
        x: 'horizontal',
        y: 'vertical',
      }
    },
    top: {
      prop: 'top:$',
      def: 'px'
    },
    right: {
      prop: 'right:$',
      def: 'px'
    },
    bottom: {
      prop: 'bottom:$',
      def: 'px'
    },
    left: {
      prop: 'left:$',
      def: 'px'
    },
    ratio: {
      prop: 'aspect-ratio:$',
      vals: {
        'sqr': '1/1',
        'vid': '16/9'
      }
    },
    box: {
      prop: 'box-sizing:$',
      vals:{
        content:'content-box',
        border:'border-box'
      }
    },
    float: {
      prop: 'float:$',
    },
    clear: {
      prop: 'clear:$',
      vals: {
        x: 'horizontal',
        y: 'vertical',
        both: 'both'
      }
    },
    z: {
      prop: 'z-index:$',
    },
    visible: {
      one: 'visibility:visible',
    },
    invisible: {
      one: 'visibility:hidden',
    },
    collapse: {
      one: 'visibility:collapse',
    },
    opacity: {
      prop: 'opacity:$'
    },
    blend: {
      prop: 'mix-blend-mode:$'
    },
    blur: {
      prop: 'filter:blur($)',
      def: 'px'
    },
    brightness: {
      prop: 'filter:brightness($)',
    },
    contrast: {
      prop: 'filter:contrast($)',
    },
    saturate: {
      prop: 'filter:saturate($)',
    },
    contrast: {
      prop: 'filter:contrast($)',
    },
    grayscale: {
      prop: 'filter:grayscale($)',
      def: '%'
    },
    sepia: {
      prop: 'filter:sepia($)',
      def: '%'
    },
    pointer: {
      one:'cursor:pointer'
    },
    sharp: {
      one:'border-radius:0!'
    },
    fsz: {
      prop: 'font-size:$',
      def: 'px'
    },
    fst: {
      prop: 'font-style:$'
    },
    ffm:{
      prop: 'font-family:$',
      vals: {
        sans: 'var(--font-sans)',
        serif:'var(--font-serif)',
        mono: 'var(--font-mono)'
      }
    },
    fwg:{
      prop: 'font-weight:$',
      def:''
    },
    
    wsp:{
      prop:'white-space:$'
    },
    list:{
      prop: 'list-style:$'
    },
    align:{
      prop: 'text-align:$'
    },
    decorate:{
      prop: 'text-decoration:$'
    },
    tdc:{
      prop: 'text-decoration:$',
      vals:{
        line:'underline'
      }
    },
    outline:{
      prop: 'outline:$',
      def:'px'
    },
    grad: {
      prop: 'background:linear-gradient($)',
      def:'deg',
      join:','
    },
    flex:{
      one:'display:flex',
      vals:{
        center:'justify-content:center;align-items:center',
        col:'flex-direction:column',
        'col-rev':'flex-direction:column-reverse',
        row:'flex-direction:row',
        'row-rev':'flex-direction:row-reverse',
        space:'justify-content:space-between;align-items:center',
        wrap:'flex-wrap:wrap',
        "wrap-rev":'flex-wrap:wrap-reverse',
        nowrap:'flex-wrap:nowrap',
        stretch: 'align-items:stretch'
      }
    },
    gap:{
      prop:'gap:$',
      def:'px'
    },
    gapX:{
      prop:'column-gap:$',
      def:'px'
    },
    gapY:{
      prop:'row-gap:$',
      def:'px'
    },
    jc: {
      prop: 'justify-content:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        sb: 'space-between',
        sa: 'space-around',
        se: 'space-evenly',
      }
    },
    ji: {
      prop: 'justify-items:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        st: 'stretch',
      }
    },
    ac: {
      prop: 'align-content:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        sb: 'space-between',
        sa: 'space-around',
        se: 'space-evenly',
      }
    },
    ai: {
      prop: 'align-items:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        st: 'stretch',
      }
    },
    order: {
      prop: 'order:$',
    },
    basis: {
      prop: 'flex-basis:$'
    },
    grow:{
      one:'flex-grow:1',
      prop:'flex-grow:$'
    },
    shrink: {
      one:'flex-shrink:1',
      prop: 'flex-shrink:$',
    },
  },
  flex: {
    order: {
      prop: 'order:$'
    },
    basis: {
      prop: 'flex-basis:$'
    },
    col: {
      one: 'flex-direction:column',
      // prop: 'flex-direction:column;align-items',
      vals: {
        start:  'flex-direction:column;align-items:flex-start',
        center: 'flex-direction:column;align-items:center',
        end:    'flex-direction:column;align-items:flex-end',
        rev:    'flex-direction:column-reverse'
      }
    },
    row: {
      one: 'flex-direction:row',
      // prop: 'flex-direction:row;justify-content',
      vals: {
        start:  'flex-direction:row;justify-content:flex-start',
        center: 'flex-direction:row;justify-content:center',
        end:    'flex-direction:row;justify-content:flex-end',
        rev:    'flex-direction:row-reverse'
      }
    },
    colRev: {
      one: 'flex-direction:column-reverse',
    },
    rowRev: {
      one: 'flex-direction:row-reverse',
    },
    center: {
      one: 'justify-content:center;align-items:center'
    },
    space: {
      one: 'justify-content:space-between;align-items:center'
    },
    stretch: {
      one: 'align-items:stretch'
    },
    wrap: {
      one: 'flex-wrap:wrap',
      prop: 'flex-wrap:$',
      vals: {
        rev: 'wrap-reverse'
      }
    },
    grow: {
      one: 'flex-grow:1',
      prop: 'flex-grow:$'
    },
    shrink: {
      one:'flex-shrink:1',
      prop: 'flex-shrink:$',
    },
    jc: {
      prop: 'justify-content:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        sb: 'space-between',
        sa: 'space-around',
        se: 'space-evenly',
      }
    },
    ji: {
      prop: 'justify-items:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        st: 'stretch',
      }
    },
    ac: {
      prop: 'align-content:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        sb: 'space-between',
        sa: 'space-around',
        se: 'space-evenly',
      }
    },
    ai: {
      prop: 'align-items:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        st: 'stretch',
      }
    },
  },
  grid: {
    cols: {
      prop: 'grid-template-columns:repeat($,1fr)',
    },
    rows: {
      prop: 'grid-template-rows:repeat($,1fr)',
    },
    jc: {
      prop: 'justify-content:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        sb: 'space-between',
        sa: 'space-around',
        se: 'space-evenly',
      }
    },
    ji: {
      prop: 'justify-items:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        st: 'stretch',
      }
    },
    ac: {
      prop: 'align-content:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        sb: 'space-between',
        sa: 'space-around',
        se: 'space-evenly',
      }
    },
    ai: {
      prop: 'align-items:$',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        st: 'stretch',
      }
    },
  },
  text: {
    tp:{
      one:'color:transparent!'
    },
    cols:{
      prop:'columns:$'
    },
    lh: {
      prop:'line-height:$'
    },
    bold: {
      one: 'font-weight:bold'
    },
    bolder: {
      one: 'font-weight:bolder'
    },
    wg: {
      prop: 'font-weight:$'
    },
    thin: {
      one: 'font-weight:lighter'
    },
    normal: {
      one: 'font-weight:normal'
    },
    italic: {
      one: 'font-style: italic'
    },
    delete: {
      one: 'text-decoration-line:line-through'
    },
    line: {
      one: 'text-decoration-line:underline'
    },
    overline: {
      one: 'text-decoration-line:overline'
    },
    up: {
      one: 'text-transform:uppercase'
    },
    low: {
      one: 'text-transform:lowercase'
    },
    cap: {
      one: 'text-transform:capitalize'
    },
    center: {
      one: 'text-align:center'
    },
    left: {
      one: 'text-align:left'
    },
    right: {
      one: 'text-align:right'
    },
    justify: {
      one: 'text-align:justify'
    },
    mono: {
      one: 'font-family:var(--font-mono)'
    },
    serif: {
      one: 'font-family:var(--font-serif)'
    },
    sans: {
      one: 'font-family:var(--font-sans)'
    },
    font: {
      prop: 'font-family:$'
    },
    vertical: {
      one: 'writing-mode:vertical-lr'
    },
    wrap: {
      one: 'word-wrap:break-word'
    },
    shadow: {
      one: 'text-shadow:3px 3px 2px #0000004d',
      prop:'text-shadow:$',
      def:'px',
    },
    stroke: {
      prop:'-webkit-text-stroke:$',
      def:'px',
    },
    dots: {
      one: 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%'
    },
    align: {
      prop: 'vertical-align:$'
    },
    space:{
      prop:'white-space:$'
    },
    break:{
      prop:'word-break:$',
      vals:{
        all:'break-all',
        keep:'keep-all',
      }
    },
  },
  screen: {
    min: '576px',
    max: '1024px'
  },
  states: {
    h: ':hover',
    f: ':focus',
    c: ':checked',
    a: ':active',
    first: '>*:first-child',
    last: '>*:last-child',
    odd: '>*:nth-child(odd)',
    even: '>*:nth-child(even)',
    all: '>*',
    after: '::after',
    before: '::before',
  },
  attr:{
    text:'text',
    flex:'flex',
    grid:'grid'
  },
  autoTheme:false,
  layers(e) {
    this.cmps = e
  },
  add(a,b,c){
    if (typeof a == 'string') {
      this[a][b]=c
    } else {
      a.forEach(e=>{
        this[e[0]][e[1]]=e[2]
      })
    }
    
  }
}

const bstl = document.createElement('style')
document.head.append(bstl)

let cssStr = ''
const mq = {
  m: '',
  t: '',
  d: '',
  'm-t':'',
  't-d':'',
  'm-d':'',
  dark:''
}


const BLICK_GCS = (sel, str, st, val) => sel == 'class' ? `.${str}${st || ''}{${val}}` : `[${sel}~="${str}"]${st || ''}{${val}}`
const BLICK_STATES = stt => blick.states[stt] ?? ":" + stt

function BLICK_RENDER() {
  console.time('blickCss. styles created. time')
  if (blick.cmps && document.querySelectorAll(`[class*="@"],[${blick.attr.text}*="@"],[${blick.attr.grid}*="@"],[${blick.attr.flex}*="@"]`).length) {
    Object.entries(blick.cmps).forEach(([model, i]) => {
      Object.entries(i).forEach(([key, el]) => {
        document.querySelectorAll(`[${model}]`).forEach(elem => {
          elem.setAttribute(model, elem.getAttribute(model).replaceAll("@" + key, el))
        })
      })
    })
  }

  document.querySelectorAll(`[class]`)
    .forEach(el => el.getAttribute('class').replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'class')))
  document.querySelectorAll(`[${blick.attr.flex}]`)
    .forEach(el => el.getAttribute(blick.attr.flex).replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'flex')))
  document.querySelectorAll(`[${blick.attr.grid}]`)
    .forEach(el => el.getAttribute(blick.attr.grid).replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'grid')))
  document.querySelectorAll(`[${blick.attr.text}]`)
    .forEach(el => el.getAttribute(blick.attr.text).replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'text')))

  BLICK_SET_STYLE()

  console.timeEnd('blickCss. styles created. time')
  }

function BLICK_SET_STYLE() {
  bstl.textContent = `[${blick.attr["flex"]}]:not([${blick.attr["flex"]}~=off]){display:flex}[${blick.attr["grid"]}]:not([${blick.attr["grid"]}~=off]){display:grid}.wrapper{margin:auto}` + cssStr +
  `@media(max-width:${blick.screen.min}){.wrapper{width:100%}${mq.m}${mq['m-t']}${mq['m-d']}}` +
  `@media(min-width:${blick.screen.min}) and (max-width:${blick.screen.max}){.wrapper{width:${blick.screen.min}}${mq.t}${mq['m-t']}${mq['t-d']}}` +
  `@media(min-width:${blick.screen.max}){.wrapper{width:${blick.screen.max}}${mq.d}${mq['m-d']}${mq['t-d']}}`+
  (blick.autoTheme ? "@media(prefers-color-scheme:dark){" + mq.dark + "}" : (document.body.classList.contains('theme-dark') ? mq.dark : ''))
}

  
function BLICK_GET(str, model) {

  let sp    = str.split(':')
  let state = sp[1]  ? BLICK_STATES(sp[0]) : false
  let dec   = state  ? BLICK_SPLIT_INDEX(sp[1], '-') : BLICK_SPLIT_INDEX(sp[0], '-')
  let prop  = dec[1] ? dec[0] : dec[0]
  let val   = dec[1] ? dec[1] : false
  let one   = !val   ? blick[model][prop]?.one : false
  let sel   = blick[model]?.[prop]
  let create


  const createVals = () => one 
  || sel?._vals?.[val]
  || sel?.prop?.replaceAll('$',BLICK_CALC_VAL(sel.vals ? (sel.vals[val] ?? val) : val))
  || sel?.vals?.[val] 

  if (prop) {
    if (model === 'flex' || model === 'grid') {
      create = createVals() 
      || 'gap:'+prop+(isNaN(prop)?'':'px')
    }
    if (model === 'text') {
      prop = str.startsWith("$")?str:prop
      val  = str.startsWith("$")?false:val

      let txtVal = BLICK_CALC_VAL(prop)
      create = createVals()
      || (parseFloat(prop) ? 'font-size:' + txtVal + (isNaN(prop)?'':'px') : 'color:' + txtVal)
    }
    if (model === 'class') {
      if (!sel) return false
      create = createVals()
    }

    create = create?.includes('_') ? create.replaceAll('_',' ') : create
    create = create?.includes('!') ? create.replaceAll('!','!important') : create

    Array.from(new Set(str.match(/[$/.+:!#()%@*^=]/g)))?.forEach(e=>str=str.replaceAll(e,`\\${e}`))

    if ([':m',':t',':d',':m-t',':m-d',':t-d',':dark'].includes(state)) {
      state = state.slice(1)
      let renStr = BLICK_GCS(blick.attr[model]??'class', str, false, create)
      !mq[state].includes(renStr) ? mq[state] += renStr : false
    }
    else {
      let renStr = BLICK_GCS(blick.attr[model]??'class', str, state, create)
      !cssStr.includes(renStr) ? cssStr += renStr : false
    }
  }

  function def(val) {
    if (!isNaN(val)) {
      return val + (sel?.def ?? '')
    }
    else return val
  }

  function BLICK_CALC_VAL(val) {
    if (val) {
      return val.split('+').map(i => {
        if (i.includes('/')) {
          return parseFloat((i.split("/")[0] / i.split("/")[1] * 100).toFixed(2))+'%'
        }
        else if (i.includes('$')) {
          return `var(--${i.slice(1)})`
        }
        else {
          return def(i)
        }
      }).join(sel?.join ?? ' ')
    }
    else return ''
  }
}


function BLICK_SPLIT_INDEX(elem, ind) {
  if (elem.includes(ind)) {
    let a = elem.slice(0, elem.indexOf(ind))
    let b = elem.slice(elem.indexOf(ind) + 1)
    return [a, b]
  } else return [elem]

}

document.addEventListener("DOMContentLoaded", () => {
  BLICK_RENDER()
  new MutationObserver(e => {
    
    console.time('blickCss. styles updated. time')
    e.forEach(m => {
      if (!!m.addedNodes.length) {
        m.addedNodes.forEach(g=>{
          g.getAttribute('class')?.replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'class'))
          g.getAttribute(blick.attr.flex)?.replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'flex'))
          g.getAttribute(blick.attr.grid)?.replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'grid'))
          g.getAttribute(blick.attr.text)?.replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'text'))
        })
      }
      if (m.attributeName) {
        m.target.getAttribute('class'            )?.replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'class'))
        m.target.getAttribute(blick.attr.text)?.replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'text'))
        m.target.getAttribute(blick.attr.flex)?.replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'flex'))
        m.target.getAttribute(blick.attr.grid)?.replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'grid'))
      }
    })
    BLICK_SET_STYLE()
    console.timeEnd('blickCss. styles updated. time')
  }).observe(document.body, {
    attributes: true,
    attributeFilter: [
      'class',
      blick.attr.flex,
      blick.attr.grid,
      blick.attr.text
    ],
    childList: true,
    subtree: true
  });
})