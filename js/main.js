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
            background:rgb(30,30,30);
            color:white;
        }
    #code{
        padding:16px;
        border:1px solid #666 ;
    }

    /*  黑白感觉颜色太单调了，让我写代码，
    *弄个编辑器，让代码高亮起来吧~
    */
    .token.selector {
    }
    .token.function {
    }
    .token.punctuation {
    }
    .token.property {
    }




    /*加点3D效果吧
    *那样看起来会舒服点
    *好，我先来写点代码实现
    */
    #code{
        // width:30%;   
        height:100vh;
        overflow:hidden;
    }

    /*好了，
    *让我来准备一张白纸，我就可以开始写字了，请看右边。
    */ 
    #code{
        width:50%;
        position:fixed;
        top:0;
        left:0;
    }
    #paper{
        width:50%;
        position:fixed;
        top:0;
        right:0;
        overflow:auto;
        padding:16px
    }
    #paper>.content{
        display:block;
        width:100%;
        background:white;
        color:black;
        border:1px solid red ;
    }

    `;
var result2 = `
    /*接下来我们用mark.js把markdown变成html样式*/
    `;

var result3 = `
    /*好了，今天就先到这里吧
     *谢谢观看
    */
    `;
var md = `
    # 自我介绍
    我叫 XXX
    1990 年 1 月出生
    XXX 学校毕业
    自学前端半年
    希望应聘前端开发岗位
    # 技能介绍
    熟悉 JavaScript CSS
    # 项目介绍
    1. XXX 轮播
    2. XXX 简历
    3. XXX 画板
    # 联系方式
    - QQ xxxxxxxx
    - Email xxxxxxxx
    - 手机 xxxxxxx
    # 联系方式
    - QQ xxxxxxxx
    - Email xxxxxxxx
    - 手机 xxxxxxx
    # 联系方式
    - QQ xxxxxxxx
    - Email xxxxxxxx
    - 手机 xxxxxxx
    # 联系方式
    - QQ xxxxxxxx
    - Email xxxxxxxx
    - 手机 xxxxxxx
    # 联系方式
    - QQ xxxxxxxx
    - Email xxxxxxxx
    - 手机 xxxxxxx
    # 联系方式
    - QQ xxxxxxxx
    - Email xxxxxxxx
    - 手机 xxxxxxx
    # 联系方式
    - QQ xxxxxxxx
    - Email xxxxxxxx
    - 手机 xxxxxxx
    # 联系方式
    - QQ xxxxxxxx
    - Email xxxxxxxx
    - 手机 xxxxxxx
    
    `;

// writeCode("", result, () => {
//   createPaper(() => {
//     writeCode(result, result2, () => {
//       return 0;
//     });
//   });
// });

writeCode("", result, () => {
  // writeCode call the function
  createPaper(() => {
    writeMarkdown(md, () => {
      writeCode(result, result2, () => {
        
        convertMarkdownToHtml(() => {
            
          writeCode(result + result2, result3, () => {
            console.log("完成");
          });
        });
      });
    });
  });
});

function writeCode(prefix, code, fn) {
  // 往页面里面插入代码
  // prefix前缀，每次执行writeCode的时候加上prefix前缀,防止后一次的代码覆盖前次
  // code:传入的代码
  // fn:传入的函数，用于回调

  var domCode = document.querySelector("#code");
  let n = 0;

  var interval = setInterval(() => {
    n = n + 1;
    domCode.scrollTop = domCode.scrollHeight; //每次写入页面便上滑到底部，保证最后的代码能看到
    domCode.innerHTML = Prism.highlight(
      prefix + code.substring(0, n),
      Prism.languages.css,
      "css"
    );
    // console.log(domCode.innerHTML)
    styleTag.innerHTML = prefix + code.substring(0, n);

    if (n > code.length) {
      clearInterval(interval);
      fn && fn.call(); //回调函数,如果fn为真(存在) ,就执行fn.call()

      // fn2()
      // fn3(result)
    }
  }, 0);
}

function createPaper(fn){
    var paper = document.createElement('div') 
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
  }

function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector("#paper>.content");
  let n = 0;
  let id = setInterval(() => {
    n += 1;
    domPaper.innerHTML = markdown.substring(0, n);
    domPaper.scrollTop = domPaper.scrollHeight;
    if (n >= markdown.length) {
      window.clearInterval(id);
      fn && fn.call();
    }
  }, 0);
}

function convertMarkdownToHtml(fn) {
  var div = document.createElement("div");
  div.className = "html markdown-body";
  div.innerHTML = marked(md);
  let markdownContainer = document.querySelector("#paper > .content");
  markdownContainer.replaceWith(div);
  fn && fn.call();
}
