const obj = {
	bg: {
			prop: 'background-color',
			defVal: '!important'
	},
	m: {
			prop: 'margin',
			defVal: 'px'
	},
	mt: {
			prop: 'margin-top',
			defVal: 'px'
	},
	mr: {
			prop: 'margin-right',
			defVal: 'px'
	},
	mb: {
			prop: 'margin-bottom',
			defVal: 'px'
	},
	ml: {
			prop: 'margin-left',
			defVal: 'px'
	},
	p: {
		prop: 'padding',
		defVal: 'px'
	},
	pt: {
			prop: 'padding-top',
			defVal: 'px'
	},
	pr: {
			prop: 'padding-right',
			defVal: 'px'
	},
	pb: {
			prop: 'padding-bottom',
			defVal: 'px'
	},
	pl: {
			prop: 'padding-left',
			defVal: 'px'
	},
	c: {
			prop: 'color',
			defVal: '!important'
	},
	fsz: {
			prop: '--fsz',
			defVal: 'px'
	},
	round: {
			prop: 'border-radius',
			defVal: 'px'
	},
	rotate: {
			prop: 'rotate',
			defVal: 'deg'
	},
	hue: {
			prop: '--hue',
			defVal: 'deg'
	},
	w: {
			prop: 'width',
			defVal: 'px!important'
	},
	h: {
			prop: 'height',
			defVal: 'px!important'
	},
	b: {
			prop: 'border-width',
			defVal: '!important'
	},
	bt: {
		prop: 'border-top-width',
		defVal: 'px'
	},
	br: {
			prop: 'border-right-width',
			defVal: 'px'
	},
	bb: {
			prop: 'border-bottom-width',
			defVal: 'px'
	},
	bl: {
			prop: 'border-left-width',
			defVal: 'px'
	},
	bc: {
		prop: 'border-color',
		defVal: '!important'
	}
}



const st = document.createElement('style')
document.head.append(st)

// const queryStr = Object
// 	.keys(obj)
// 	.map(el => '[class*="' + el + '-"]')
// 	.join(',') + ',[flex],[grid],[text]'

var rules = ''
var newRule = (q, w, r, t, s) => {
	let str = `[${q}~="${w}"]{${r}:${t + s}!important}`
	if (!rules.includes(str)) rules += str
}
var newFnGRule = (q, w, r, t, s) => {
	let str = `[${q}~="${t}"],[${w}~="${t}"]{${r}:${t + s}}`
	if (!rules.includes(str)) rules += str
}

function setStyle() {
	
	Array.from(document.querySelectorAll("[text]")).forEach(e => {

		if (e.hasAttribute('flex') || e.hasAttribute('grid')) {
			let flexGap = e.getAttribute('flex')
			let gridGap = e.getAttribute('grid')

			let pushToFnG = n => {
				if (parseFloat(n) || n.startsWith('x') || n.startsWith('y')){
					if (n.startsWith('x'))
						newFnGRule('flex', 'grid', 'row-gap', n.slice(1, 1e2), 'px')
					else if (n.startsWith('y'))
						newFnGRule('flex', 'grid', 'column-gap', n.slice(1, 1e2), 'px')
					else
						newFnGRule('flex', 'grid', 'gap', n, 'px')
				}
				else return false
			}

			if (flexGap) flexGap.split(' ').forEach(a => pushToFnG(a))
			if (gridGap) gridGap.split(' ').forEach(a => pushToFnG(a))
		}

		if (e.hasAttribute('text')) {
			let num = e.getAttribute('text').match(/\d+/)
			let fsz = parseFloat(num ? num[0] : !1)
			if (fsz) newRule('text', fsz, '--fsz', fsz, 'px')
		}

		if (e.hasAttribute('class')) {
			let clss = e.getAttribute('class')
			let keys = Object.keys(obj)

			clss.split(' ').forEach(e => {
				keys.forEach(g => {
					if (e.startsWith(g + '-')) {
						let cssVal = e.split('-')[1]
						if (cssVal.includes('+')) newRule('class', e, obj[g].prop, cssVal.split('+').map(e=>isNaN(e)?e:e+obj[g].defVal).join(' '), '')	
						else if (isNaN(cssVal)) newRule('class', e, obj[g].prop, cssVal, '')
						else newRule('class', e, obj[g].prop, cssVal, obj[g].defVal)
					}
				})
			})
		}




	})

	st.textContent = rules
	
	// if(!document.querySelector('script[data-console=off]'))console.log('%c blickCss ',`color:white;background-color:green;border-radius:12px 0 10px 0;padding:4px;font-weight:bold`,'All styles have been updated');
	}




// document.addEventListener('DOMContentLoaded', setStyle, false)

new MutationObserver(setStyle).observe(document.documentElement, {
	attributes: true,
	attributeFilter: ["class", 'flex', 'grid', 'hover', 'text'],
	childList: true,
	subtree: true
});

	


