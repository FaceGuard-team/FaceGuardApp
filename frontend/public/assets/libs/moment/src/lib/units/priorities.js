var priorities={};export function addUnitPriority(i,r){priorities[i]=r}export function getPrioritizedUnits(i){var r=[];for(var t in i)r.push({unit:t,priority:priorities[t]});return r.sort((function(i,r){return i.priority-r.priority})),r}