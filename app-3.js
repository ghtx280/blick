let dataObj, fucnObj, str, data, styleElems, bindElems, eventElems, store = [];
const app = {
        data(a) {
            dataObj = a, data = new Proxy(a, {
                get: function(b, c) {
                    return Reflect.get(b, c)
                },
                set: function(c, d, a) {
                    return dataObj[d] = a, insertData(), Reflect.set(c, d, a)
                }
            })
        }
    },
    end = (b, c) => b.slice(0, -c),
    keywords = "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void",
    checkKeywords = (c, a) => !!c.split(",").filter(b => a.includes(b)).length,
    js = a => {
        if (!checkKeywords(keywords, a + "")) return Object.keys(data).forEach(b => {
            a.includes(b) && (a = a.replaceAll(b, "data." + b))
        }), Function(`return ${a}`)()
    },
    q = a => document.querySelectorAll(a),
    attr = (a, b, c) => c ? a.setAttribute(b) : a.getAttribute(b);

function startSelector(a) {
    let b = [];
    for (let c of q("body *")) Array.from(c.attributes).map(d => {
        d.name.startsWith(a) && b.push({
            elem: c,
            sel: d.name.split(":")[1],
            val: d.value
        })
    });
    return b
}

function insertData() {
    q("[in]").forEach(c => {
        let e;
        store.forEach(a => a.elem == c ? e = [a.elem, a.text] : "");
        let b = e[1],
            f = b.match(/\{([^}]+)\}/g),
            h = f.map(b => b.substring(1, b.length - 1).trim());
        for (let d in f) {
            let c = f[d],
                e = h[d];
            b = b.replaceAll(c, js(e))
        }
        c.innerText = b
    }), q("[if]").forEach(function(b) {
        b.style.display = !!js(attr(b, "if")) ? "" : "none"
    }), styleElems.forEach(a => {
        a.elem.style[a.sel] = js(a.val)
    }), bindElems.forEach(a => {
        "class" == a.sel && (a.sel = "className"), a.elem[a.sel] = js(a.val)
    })
}
document.addEventListener("DOMContentLoaded", () => {
    q("[in]").forEach(function(a) {
        store.push({
            elem: a,
            text: a.innerText
        })
    }), q("[b-val]").forEach(a => {
        a.value = data[attr(a, "b-val")], a.addEventListener("input", () => {
            data[attr(a, "b-val")] = a.value
        })
    }), q("[each]").forEach(d => {
        let h = attr(d, "each").split("of").map(b => b.trim());
        store = store.filter(a => a.elem !== d);
        for (let b of data[h[1]]) {
            let c, i = d.cloneNode(!0),
                e = i.innerText.trim().match(/\{([^}]+)\}/g),
                f = e.map(a => a.substring(1, a.length - 1).trim());
            i.removeAttribute("each"), d.before(i), f.forEach(d => {
                c = d.includes(h[0]) ? d.replaceAll(h[0], b) : f[0], i.innerText = i.innerText.replaceAll(e[f.indexOf(d)], js("\"" + c + "\""))
            }), store.push({
                elem: i,
                text: i.innerText
            })
        }
        d.remove(), store = store.filter(a => a.elem !== d)
    }), styleElems = startSelector("style"), bindElems = startSelector("bind"), eventElems = startSelector("on"), eventElems.forEach(a => {
        a.elem.addEventListener(a.sel, () => {
            js(a.val)
        })
    }), bindElems.forEach(a => {
        a.elem.addEventListener("change", function() {
            data[a.val] = a.elem[a.sel]
        })
    }), insertData()
});