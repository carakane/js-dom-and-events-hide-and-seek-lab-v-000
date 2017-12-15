function getFirstSelector(selector) {
  return(document.querySelector(selector))
}

function nestedTarget() {
  return(document.querySelector("#nested .target"))
}

function deepestChild() {
  let list = document.getElementById("grand-node")
  let listChild = list.children[0]

  while (listChild) {
    list = listChild
    listChild = list.children[0]
  }
  
  return list
}

function increaseRankBy(n) {
  let list = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + n).toString()
  }
}
