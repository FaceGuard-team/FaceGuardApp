import toInt from"./to-int";export default function compareArrays(t,n,o){var r,e=Math.min(t.length,n.length),a=Math.abs(t.length-n.length),h=0;for(r=0;r<e;r++)(o&&t[r]!==n[r]||!o&&toInt(t[r])!==toInt(n[r]))&&h++;return h+a}