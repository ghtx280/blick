const blick = {
  class: {
    m: {
      prop: 'margin', def: 'px'
    },
    mt: {
      prop: 'margin-top', def: 'px'
    },
    mr: {
      prop: 'margin-right', def: 'px'
    },
    mb: {
      prop: 'margin-bottom', def: 'px'
    },
    ml: {
      prop: 'margin-left', def: 'px'
    },
    p: {
      prop: 'padding', def: 'px'
    },
    pt: {
      prop: 'padding-top', def: 'px'
    },
    pr: {
      prop: 'padding-right', def: 'px'
    },
    pb: {
      prop: 'padding-bottom', def: 'px'
    },
    pl: {
      prop: 'padding-left', def: 'px'
    },
    b: {
      prop: 'border-width', def: 'px'
    },
    bt: {
      prop: 'border-top-width', def: 'px'
    },
    br: {
      prop: 'border-right-width', def: 'px'
    },
    bb: {
      prop: 'border-bottom-width', def: 'px'
    },
    bl: {
      prop: 'border-left-width', def: 'px'
    },
    bc: {
      prop: 'border-color'
    },
    bs: {
      prop: 'border-style'
    },
    border: {
      one: 'border:1px solid',
      prop:'border',
      def:'px'
    },
    scale: {
      prop: 'scale',
      def: ''
    },
    rotate: {
      prop: 'rorate',
      def: 'deg'
    },
    translate: {
      prop: 'translate',
      def: 'px'
    },
    skewX: {
      func: true,
      prop: 'transform:skewX(',
      def: 'deg)'
    },
    skewY: {
      func: true,
      prop: 'transform:skewY(',
      def: 'deg)'
    },
    accent: {
      prop: 'accent-color'
    },
    caret: {
      prop: 'caret-color'
    },
    fill: {
      prop: 'fill'
    },
    stroke: {
      prop: 'stroke'
    },
    accent: {
      prop: 'accent-color'
    },
    unappearance: {
      one: 'appearance:none',

    },
    flip: {
      one: 'scale:-1 -1',
      prop: 'scale',
      vals: {
        x: '-1 1',
        y: '1 -1'
      },
      def: ''
    },
    w: {
      prop: 'width',
      vals: { full: '100%', half: '50%' },
      def: 'px'
    },
    h: {
      prop: 'height',
      vals: { full: '100%', half: '50%' },
      def: 'px'
    },
    minW: {
      prop: 'min-width',
      vals: { full: '100%', half: '50%' },
      def: 'px'
    },
    minH: {
      prop: 'min-height',
      vals: { full: '100%', half: '50%' },
      def: 'px'
    },
    maxW: {
      prop: 'max-width',
      vals: { full: '100%', half: '50%' },
      def: 'px'
    },
    maxH: {
      prop: 'max-height',
      vals: { full: '100%', half: '50%' },
      def: 'px'
    },
    hue: {
      func: true,
      prop: 'filter:hue-rotate(',
      def: 'deg)'
    },
    d: {
      prop: 'display',
    },
    hide: {
      one: "display:none"
    },
    pos: {
      prop: "position"
    },
    center: {
      one: "margin:0 auto"
    },
    invert: {
      one: "filter:invert()"
    },
    round: {
      one: 'border-radius:9999px',
      prop: 'border-radius',
      def: 'px'
    },
    select: {
      prop: 'user-select'
    },
    fit: {
      prop: 'object-fit'
    },
    bg: {
      prop: 'background'
    },
    c: {
      prop: 'color'
    },
    over: {
      prop: 'overflow'
    },
    overX: {
      prop: 'overflow-x'
    },
    overY: {
      prop: 'overflow-y'
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
      prop: 'cursor'
    },
    over: {
      prop: 'overflow'
    },
    flip: {
      prop: 'scale',
      vals: {
        x: '-1 1',
        y: '1 -1',
        both: '-1 -1'
      },
      def: ''
    },
    resize: {
      prop: 'resize',
      vals: {
        x: 'horizontal',
        y: 'vertical',
      }
    },
    top: {
      prop: 'top',
      def: 'px'
    },
    right: {
      prop: 'right',
      def: 'px'
    },
    bottom: {
      prop: 'bottom',
      def: 'px'
    },
    left: {
      prop: 'left',
      def: 'px'
    },
    ratio: {
      prop: 'aspect-ratio',
      vals: {
        'sqr': '1/1',
        'vid': '16/9'
      }
    },
    box: {
      prop: 'box-sizing',
      vals:{
        content:'content-box',
        border:'border-box'
      }
    },
    float: {
      prop: 'float',
    },
    clear: {
      prop: 'clear',
      vals: {
        x: 'horizontal',
        y: 'vertical',
        both: 'both'
      }
    },
    z: {
      prop: 'z-index',
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
      prop: 'opacity'
    },
    blend: {
      prop: 'mix-blend-mode'
    },
    blur: {
      func: true,
      prop: 'filter:blur(',
      def: 'px)'
    },
    brightness: {
      func: true,
      prop: 'filter:brightness(',
      def: ')'
    },
    contrast: {
      func: true,
      prop: 'filter:contrast(',
      def: ')'
    },
    saturate: {
      func: true,
      prop: 'filter:saturate(',
      def: ')'
    },
    contrast: {
      func: true,
      prop: 'filter:contrast(',
      def: ')'
    },
    grayscale: {
      func: true,
      prop: 'filter:grayscale(',
      def: '%)'
    },
    sepia: {
      func: true,
      prop: 'filter:sepia(',
      def: '%)'
    },
    resize: {
      prop: 'resize',
      vals: {
        x: 'horizontal',
        y: 'vertical',
        both: 'both'
      }
    },
    pointer: {
      one:'cursor:pointer'
    },
    sharp: {
      one:'border-radius:0!important'
    },
    fsz: {
      prop: 'font-size',
      def: 'px'
    },
    fst: {
      prop: 'font-style'
    },
    ffm:{
      prop: 'font-family',
      vals: {
        sans: 'var(--font-sans)',
        serif:'var(--font-serif)',
        mono: 'var(--font-mono)'
      }
    },
    fwg:{
      prop: 'font-weight',
      def:''
    },
    list:{
      prop: 'list-style'
    },
    align:{
      prop: 'text-align'
    },
    decorate:{
      prop: 'text-decoration'
    },
    outline:{
      prop: 'outline',
      def:'px'
    },
  },
  flex: {
    order: {
      prop: 'order',
      def: ''
    },
    basis: {
      prop: 'flex-basis'
    },
    col: {
      one: 'flex-direction:column',
      prop: 'flex-direction:column;align-items',
      vals: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end'
      }
    },
    row: {
      one: 'flex-direction:row',
      prop: 'flex-direction:row;justify-content',
      vals: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end'
      }
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
      prop: 'flex-wrap',
      vals: {
        rev: 'wrap-reverse'
      }
    },
    grow: {
      one: 'flex-grow:1',
      prop: 'flex-grow',
      vals: { '0': '0' }
    },
    shrink: {
      prop: 'flex-shrink',
    },
    jc: {
      prop: 'justify-content',
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
      prop: 'justify-items',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        st: 'stretch',
      }
    },
    ac: {
      prop: 'align-content',
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
      prop: 'align-items',
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
      func:true,
      prop: 'grid-template-columns:repeat(',
      def:',1fr)'
    },
    rows: {
      func:true,
      prop: 'grid-template-rows:repeat(',
      def:',1fr)'
    },
    jc: {
      prop: 'justify-content',
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
      prop: 'justify-items',
      vals: {
        c: 'center',
        bl: 'baseline',
        s: 'flex-start',
        e: 'flex-end',
        st: 'stretch',
      }
    },
    ac: {
      prop: 'align-content',
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
      prop: 'align-items',
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
    cols:{
      prop:'columns'
    },
    lh: {
      prop:'line-height'
    },
    bold: {
      one: 'font-weight:bold'
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
    vertical: {
      one: 'writing-mode:vertical-lr'
    },
    wrap: {
      one: 'word-wrap:break-word'
    },
    shadow: {
      one: 'text-shadow:3px 3px 2px #0000004d'
    },
    dots: {
      one: 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%'
    },
    align: {
      prop: 'vertical-align'
    },
    space:{
      prop:'white-space'
    },
    break:{
      prop:'word-break',
      vals:{
        all:'word-break:break-all',
        keep:'word-break:keep-all',
      }
    },
  },
  screen: {
    min: '576px',
    max: '1024px'
  },
  short_state: {
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
  layers(e) {
    this.cmps = e
  }
}

const bstl = document.createElement('style')
document.head.append(bstl)

let cssStr = ''
const mq = {
  m: '',
  t: '',
  d: ''
}

const BLICK_GCS = (sel, str, st, val) => `[${sel}~="${str}"]${st ? st : ''}{${val}}`
const BLICK_SHORT_STATE = stt => blick.short_state[stt] ?? ":" + stt

function BLICK_RENDER() {
  if (blick.cmps && document.querySelectorAll('[class*="@"],[text*="@"],[flex*="@"],[grid*="@"]').length) {
    Object.entries(blick.cmps).forEach(([model, i]) => {
      Object.entries(i).forEach(([key, el]) => {
        document.querySelectorAll(`[${model}]`).forEach(elem => {
          elem.setAttribute(model, elem.getAttribute(model).replaceAll("@" + key, el))
        })
      })
    })
  }

  document.querySelectorAll('[class]')
    .forEach(el => el.getAttribute('class').replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'class')))
  document.querySelectorAll('[flex]')
    .forEach(el => el.getAttribute('flex').replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'flex')))
  document.querySelectorAll('[grid]')
    .forEach(el => el.getAttribute('grid').replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'grid')))
  document.querySelectorAll('[text]')
    .forEach(el => el.getAttribute('text').replaceAll(/\s+/g, ' ').trim().split(' ').forEach(e => BLICK_GET(e, 'text')))

  bstl.textContent = '[flex]{display:flex}[grid]{display:grid}.wrapper{margin:auto}' + cssStr +
    `@media(max-width:${blick.screen.min}){.wrapper{width:100%}${mq.m}}` +
    `@media(min-width:${blick.screen.min}) and (max-width:${blick.screen.max}){.wrapper{width:${blick.screen.min}}${mq.t}}` +
    `@media(min-width:${blick.screen.max}){.wrapper{width:${blick.screen.max}}${mq.d}}`
}

function BLICK_GET(str, model) {
  // console.log(str);
  let sp = str.split(':')
  let state = sp[1] ? BLICK_SHORT_STATE(sp[0]) : false
  let dec = state ? splitIndex(sp[1], '-') : splitIndex(sp[0], '-')
  let prop = dec[1] ? dec[0] : dec[0]
  let val = dec[1] ? dec[1] : false
  let one = !val ? blick[model][prop]?.one : false
  let sel = blick[model]?.[prop]
  let create

  if (['flex', 'grid'].includes(model)) {
    create = one || ((sel?.prop ? sel.prop + (sel.func ? '' : ':') : '') + (BLICK_CALC_VAL(val, prop, model) || 'gap:' + prop + (!isNaN(prop) ? 'px' : '')))
  }
  if (model === 'text') {
    prop = str.startsWith("$")?str:prop
    val  = str.startsWith("$")?false:val
    let txtVal = BLICK_CALC_VAL(prop)
    create = one||((sel?.prop?sel.prop+':':'')+(BLICK_CALC_VAL(val,prop,model)||(parseFloat(prop)?('font-size:'+txtVal+(!isNaN(prop)?'px':'')):('color:'+txtVal))))
  }
  if (model === 'class') {
    if (!sel) return false
    create = one || ((sel?.prop ? sel.prop + (sel.func ? '' : ':') : '') + BLICK_CALC_VAL(val, prop))
  }

  create = create.includes('_') ? create.replaceAll('_',' ') : create



  if ([':m', ':t', ':d'].includes(state)) {
    state = state.slice(1)
    let renStr = BLICK_GCS(model, str, false, create)
    !mq[state].includes(renStr) ? mq[state] += renStr : false
  }
  else {
    let renStr = BLICK_GCS(model, str, state, create)
    !cssStr.includes(renStr) ? cssStr += renStr : false
  }
}

function splitIndex(elem, ind) {
  if (elem.includes(ind)) {
    let a = elem.slice(0, elem.indexOf(ind))
    let b = elem.slice(elem.indexOf(ind) + 1)
    return [a, b]
  } else return [elem]

}

function BLICK_CALC_VAL(u, prop, model = 'class') {
  return u && u.split('+').map(e =>
    e.includes('/') ? e.split('/')[0] / e.split('/')[1] * 100 + '%'
      : e.includes('$') ? `var(--${e.slice(1)})`
        : isNaN(e) ? blick[model]?.[prop]?.vals?.[e] ?? e
          : e + (blick[model]?.[prop]?.def ?? '')
  ).join(' ')
}

document.addEventListener("DOMContentLoaded", () => {
  BLICK_RENDER()
  new MutationObserver((e) => {
    // console.log('upd',e);
    BLICK_RENDER()
  }).observe(document.body, {
    attributes: true,
    attributeFilter: ["class", 'flex', 'grid', 'text'],
    childList: true,
    subtree: true
  });
})