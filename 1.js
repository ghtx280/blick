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

let newRule, done

function setStyle() {

	Object.entries(obj).map(([key, val]) => {
			document.querySelectorAll(`[class*="${key}-"]`).forEach(el => {
					el.classList.forEach(cl => {
							if (cl.startsWith(key)) {
									let cssVal = cl.split('-')[1]
									if (cssVal.includes('+')) newRule = `[class~="${key}-${cssVal}"]{${val.prop}:${cssVal.split('+').map(e=>isNaN(e)?e:e+val.defVal).join(' ')}}`
									else if (isNaN(cssVal)) newRule = `[class~="${key}-${cssVal}"]{${val.prop}:${cssVal}}`
									else newRule = `[class~="${key}-${cssVal}"]{${val.prop}:${cssVal}${val.defVal}}`
									if (!st.textContent.includes(newRule) && newRule) st.textContent += newRule
							}
					})
			})
	})

	document.querySelectorAll(`[flex],[grid]`).forEach(el => {
			Array.from(el.attributes).forEach(v => {
					v.value.split(' ').forEach(b => {
							done = b.slice(1, 1e2)
							if (b.startsWith('y')) {
									newRule = `[flex~="y${done}"],[grid~="y${done}"]{column-gap:${done}px}`
							} else if (b.startsWith('x')) {
									newRule = `[flex~="x${done}"],[grid~="x${done}"]{row-gap:${done}px}`
							} else {
									done = parseFloat(b)
									if (done) newRule = `[flex~="${done}"],[grid~="${done}"]{gap:${done}px}`
							}
							if (!st.textContent.includes(newRule) && newRule) st.textContent += newRule
					})
			})
	})

	document.querySelectorAll(`[text]`).forEach(el => {
			Array.from(el.attributes).forEach(v => {
					v.value.split(' ').forEach(b => {
							done = parseFloat(b)
							if (done) newRule = `[text~="${done}"]{--fsz:${done}px !important}`
							if (!st.textContent.includes(newRule) && newRule) st.textContent += newRule
					})
			})
	})
}

new MutationObserver(setStyle).observe(document.documentElement, {
	attributes: true,
	attributeFilter: ["class", 'flex', 'grid', 'hover', 'text'],
	childList: true,
	subtree: true
});


// console.log(Object.keys(obj).map(el => '[class*="'+el+'-"]').join(','));

// function setStyle() {
// 	document.querySelector('body').style.display = 'none';

// 	Object.entries(obj).map(([key, val]) => {
// 			document.querySelectorAll(`[class*="${key}-"]`).forEach(el => {
// 					el.classList.forEach(cl => {
// 							if (cl.includes(key)) {
// 									let cssVal = cl.split('-')[1]
// 									if (key == 'bg' || key == 'c' || key == 'bc')
// 											newRule = `[class~="${key}-${cssVal}"]{${val}:${cssVal} !important;}`
// 									else if (key == 'hue')
// 											newRule = `[class~="${key}-${cssVal}"]{${val}:${cssVal}deg;}`
// 									else if (cssVal.includes('+')) {
// 											let machVal = ""
// 											cssVal.split('+').map(e => machVal += e + 'px ')
// 											newRule = `[class~="${key}-${cssVal}"]{${val}:${machVal.trim()};}`
// 									} else newRule = `[class~="${key}-${cssVal}"]{${val}:${cssVal}px;}`
// 									if (!st.textContent.includes(newRule)) st.textContent += newRule
// 							}
// 					})
// 			})
// 	})

// 	document.querySelectorAll(`[flex],[grid]`).forEach(el => {
// 			Array.from(el.attributes).forEach(v => {
// 					v.value.split(' ').forEach(b => {
// 							done = b.slice(1, 1e2)
// 							if (b.startsWith('y')) {
// 									newRule = `[flex~="y${done}"],[grid~="y${done}"]{column-gap:${done}px;}`
// 							} else if (b.startsWith('x')) {
// 									newRule = `[flex~="x${done}"],[grid~="x${done}"]{row-gap:${done}px;}`
// 							} else {
// 									done = parseFloat(b)
// 									if (done) newRule = `[flex~="${done}"],[grid~="${done}"]{gap:${done}px;}`
// 							}
// 							if (!st.textContent.includes(newRule) && newRule) st.textContent += newRule
// 					})
// 			})
// 	})

// 	document.querySelectorAll(`[text]`).forEach(el => {
// 			Array.from(el.attributes).forEach(v => {
// 					v.value.split(' ').forEach(b => {
// 							done = parseFloat(b)
// 							if (done) newRule = `[text~="${done}"]{font-size:${done}px;}`
// 							if (!st.textContent.includes(newRule) && newRule) st.textContent += newRule
// 					})
// 			})
// 	})

// 	document.querySelector('body').style.display = '';
// }






// document.head.innerHTML += 
// '<link rel="stylesheet" href="https://blick.netlify.app/all.min.css">'

// dir.map(o => {
//     document.querySelectorAll(`[flex*=${o}],[grid*=${o}]`).forEach(el => {
//         let attr = el.attributes[0]
//         attr.value.split(' ').map(m => {
//             if (m.includes(o)){
//                 let done = m.slice(1,1e2)
//                 newRule = `[flex~=${o}${done}],[grid~=${o}${done}]{column-gap:${done}px;}`
//                 if (!st.textContent.includes(newRule)) st.textContent += newRule
//             } 
//         })
//     })
// })




// var cssObj = {}
// Array.from(st.sheet.cssRules).forEach(el => {
//   let getSel = el.selectorText
//   let getVal = el.style.cssText
//   let getArr = getVal.split(' ').join('').slice(0,-1).split(';')
//   cssObj[getSel] = getArr
// });
// console.log(cssObj);