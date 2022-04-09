let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数

// TODO：待补充代码
const pagination = document.getElementById("pagination")

const list = document.getElementsByClassName("list-group")[0]
let prev = document.getElementById("prev");
let next = document.getElementById("next");

axios.get("js/carlist.json").then(res => {
  maxPage = parseInt((res.data.length / 5) + 1)
  pagination.innerText = "共" + maxPage + "页，当前" + pageNum + "页"

  console.log(res.data)


  const geneHtml = function (page) {
    if (pageNum == 1) {
      prev.className = "page-item disabled"
    }else    if (pageNum == maxPage) {
      next.className = "page-item disabled"
    }else{
      next.className = "page-item"
      prev.className = "page-item"

    }


    const data = res.data.slice((page - 1) * 5, (page - 1) * 5 + 5)
    console.log(data)
    let res1 = ""
    for (const item of data) {

      res1 += `      <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">`+ item.name + ` uni-app</h5>
          <small>`+ (item.price / 100).toFixed(2) + `元</small>
        </div>
        <p class="mb-1">`+ item.description + `</p>
      </a>
    </div>`
    }
    list.innerHTML = res1
  }
  geneHtml(pageNum)
  // 点击上一页
  prev.onclick = function () {

    pageNum--
    pagination.innerText = "共" + maxPage + "页，当前" + pageNum + "页"

    geneHtml(pageNum)
    // TODO：待补充代码
  };
  // 点击下一页
  next.onclick = function () {
    pageNum++
    pagination.innerText = "共" + maxPage + "页，当前" + pageNum + "页"
    geneHtml(pageNum)

    // TODO：待补充代码
  };

})

