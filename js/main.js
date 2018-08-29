// 需要往页面里面插入的结果
var result = `
    /* 欢迎来看关于我的介绍，下面我来介绍一下我自己
    * 我是陈远 ，一名前端工程师。
    * 
    */  

   *{
        transition: all 1s ;
    }
    body {
            background:#ddd;
        }
    #code{
        padding:16px;
        border:1px solid #666 ;
    }

    /*  黑白感觉颜色太单调了，让我写代码，
    *弄个编辑器，让代码高亮起来吧~
    */
    .token.selector {
        color: #690;
    }
    .token.function {
        color: #DD4A68;
    }
    .token.punctuation {
        color: #999;
    }
    .token.property {
        color: #690;
    }




    /*加点3D效果吧
    *那样看起来会舒服点
    *好，我先来写点代码实现
    */
    #code{
        width:30%;
        transform: rotate(360deg);
    }

    `;
var result2 = `

    /*好了，
    *让我来准备一张白纸，开始写我的简历了
    */ 
    

    #paper {
        width:100px;
        height:100px;
        background:red;
    }
    `;

writeCode("", result, () => {
  createPaper(() => {
    writeCode(result, result2, () => {
      return 0;
    });
  });
});

function writeCode(prefix, code, fn) {
  // 往页面里面插入代码
  // prefix前缀，每次执行writeCode的时候加上prefix前缀
  // code:传入的代码
  // fn:传入的函数，用于回调

  var domCode = document.querySelector("#code");
  let n = 0;

  var interval = setInterval(() => {
    n = n + 1;
    domCode.innerHTML = Prism.highlight(
      prefix + code.substring(0, n),
      Prism.languages.css,
      "css"
    );
    // console.log(domCode.innerHTML)
    styleTag.innerHTML = prefix + code.substring(0, n);

    if (n > code.length) {
      clearInterval(interval);
      fn.call(); //回调函数

      // fn2()
      // fn3(result)
    }
  }, 10);
}

function createPaper(fn) {
  var paper = document.createElement("div");
  paper.id = "paper";
  document.body.appendChild(paper);
  fn.call();
}

