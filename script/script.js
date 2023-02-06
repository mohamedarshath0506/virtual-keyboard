/**
 *
 * script.js
 * @author- Arshath
 * @date- 30/11/2022
 */
var aa = true;
var textarea = document.getElementById("typing");

function number(number1) {
  if (aa) {
    textarea.innerHTML += number1.toUpperCase();
  } else {
    textarea.innerHTML += number1.toLowerCase();
  }
  console.log(aa);
}

function uncheck() {
  var method = textarea.innerHTML;
  var clearValue = method.substring(0, method.length - 1);
  document.getElementById("typing").innerHTML = clearValue;

  var spacing = textarea.innerHTML;
  var text = spacing.replace("&nbsp;", "");
  document.getElementById("typing").innerHTML = text;
}

function small() {
  var qKey = document.getElementById("q-btn");
  var q = qKey.innerHTML;
  var wKey = document.getElementById("w-btn");
  var w = wKey.innerHTML;
  var eKey = document.getElementById("e-btn");
  var e = eKey.innerHTML;
  var rKey = document.getElementById("r-btn");
  var r = rKey.innerHTML;
  var tKey = document.getElementById("t-btn");
  var t = tKey.innerHTML;
  var yKey = document.getElementById("y-btn");
  var y = yKey.innerHTML;
  var uKey = document.getElementById("u-btn");
  var u = uKey.innerHTML;
  var iKey = document.getElementById("i-btn");
  var i = iKey.innerHTML;
  var oKey = document.getElementById("o-btn");
  var o = oKey.innerHTML;
  var pKey = document.getElementById("p-btn");
  var p = pKey.innerHTML;
  var aKey = document.getElementById("a-btn");
  var a = aKey.innerHTML;
  var sKey = document.getElementById("s-btn");
  var s = sKey.innerHTML;
  var dKey = document.getElementById("d-btn");
  var d = dKey.innerHTML;
  var fKey = document.getElementById("f-btn");
  var f = fKey.innerHTML;
  var gKey = document.getElementById("g-btn");
  var g = gKey.innerHTML;
  var hKey = document.getElementById("h-btn");
  var h = hKey.innerHTML;
  var jKey = document.getElementById("j-btn");
  var j = jKey.innerHTML;
  var kKey = document.getElementById("k-btn");
  var k = kKey.innerHTML;
  var lKey = document.getElementById("l-btn");
  var l = lKey.innerHTML;
  var zKey = document.getElementById("z-btn");
  var z = zKey.innerHTML;
  var xKey = document.getElementById("x-btn");
  var x = xKey.innerHTML;
  var cKey = document.getElementById("c-btn");
  var c = cKey.innerHTML;
  var vKey = document.getElementById("v-btn");
  var v = vKey.innerHTML;
  var bKey = document.getElementById("b-btn");
  var b = bKey.innerHTML;
  var nKey = document.getElementById("n-btn");
  var n = nKey.innerHTML;
  var mKey = document.getElementById("m-btn");
  var m = mKey.innerHTML;

  if (aa) {
    aa = false;
    qKey.innerHTML = q.toLowerCase();
    wKey.innerHTML = w.toLowerCase();
    eKey.innerHTML = e.toLowerCase();
    rKey.innerHTML = r.toLowerCase();
    tKey.innerHTML = t.toLowerCase();
    yKey.innerHTML = y.toLowerCase();
    uKey.innerHTML = u.toLowerCase();
    iKey.innerHTML = i.toLowerCase();
    oKey.innerHTML = o.toLowerCase();
    pKey.innerHTML = p.toLowerCase();
    aKey.innerHTML = a.toLowerCase();
    sKey.innerHTML = s.toLowerCase();
    dKey.innerHTML = d.toLowerCase();
    fKey.innerHTML = f.toLowerCase();
    gKey.innerHTML = g.toLowerCase();
    hKey.innerHTML = h.toLowerCase();
    jKey.innerHTML = j.toLowerCase();
    kKey.innerHTML = k.toLowerCase();
    lKey.innerHTML = l.toLowerCase();
    zKey.innerHTML = z.toLowerCase();
    xKey.innerHTML = x.toLowerCase();
    cKey.innerHTML = c.toLowerCase();
    vKey.innerHTML = v.toLowerCase();
    bKey.innerHTML = b.toLowerCase();
    nKey.innerHTML = n.toLowerCase();
    mKey.innerHTML = m.toLowerCase();
  } else {
    aa = true;
    qKey.innerHTML = q.toUpperCase();
    wKey.innerHTML = w.toUpperCase();
    eKey.innerHTML = e.toUpperCase();
    rKey.innerHTML = r.toUpperCase();
    tKey.innerHTML = t.toUpperCase();
    yKey.innerHTML = y.toUpperCase();
    uKey.innerHTML = u.toUpperCase();
    iKey.innerHTML = i.toUpperCase();
    oKey.innerHTML = o.toUpperCase();
    pKey.innerHTML = p.toUpperCase();
    aKey.innerHTML = a.toUpperCase();
    sKey.innerHTML = s.toUpperCase();
    dKey.innerHTML = d.toUpperCase();
    fKey.innerHTML = f.toUpperCase();
    gKey.innerHTML = g.toUpperCase();
    hKey.innerHTML = h.toUpperCase();
    jKey.innerHTML = j.toUpperCase();
    kKey.innerHTML = k.toUpperCase();
    lKey.innerHTML = l.toUpperCase();
    zKey.innerHTML = z.toUpperCase();
    xKey.innerHTML = x.toUpperCase();
    cKey.innerHTML = c.toUpperCase();
    vKey.innerHTML = v.toUpperCase();
    bKey.innerHTML = b.toUpperCase();
    nKey.innerHTML = n.toUpperCase();
    mKey.innerHTML = m.toUpperCase();
  }
  console.log("s", aa);
}

const person = {
  first_name: "Mohamed",
  last_name: "Arsath",
  age: 18,
  place: "chennai",
  male: true,
  items: ["stirng"],
  test: function (input) {
    return { full_name: input };
  },
};

person.age = 20;
person.last_name = "akeef";
person.email = "test@gmail.com";
person.baby = ["john", "britto"];

const person1 = {};

console.log("person", person1);

function greeting(input) {
  person.age = input;
  person.baby.unshift("test");
  person.items.pop();
  person.male = false;
  person.place = "thondi";

  person1.full_name = person.first_name + person.last_name;

  console.log("input", input, person, person1);
}

// greeting(person);
