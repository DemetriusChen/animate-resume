    function writeCode(params) {
        
    }
    
    
    
    
    var text = `
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
        弄个编辑器，让代码高亮起来吧~
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
    
        var n = 0
    
        var interval = setInterval(function () {
            code.innerHTML = text.substring(0, n)
            code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, "css")
            styleTag.innerText = text.substring(0, n)
            n++
            if (n > text.length) {
                clearInterval(interval)
                fn2()
                fn3(text)
            }
        }, 1)
    
        function fn2(params) {
            var paper = document.createElement('div')
            paper.id = 'paper'
            document.body.appendChild(paper)
        }
        function fn3(preResult) {
            var result = `

       /*好了，
        *让我来准备一张白纸，开始写我的简历了
        */ 
            

            #paper {
                width:100px;
                height:100px;
                background:red;
            }
            `
            var n = 0;
            var interval = setInterval(() => {
                n += 1
                code.innerHTML = preResult + result.substring(0,n)
                code.innerHTML =  Prism.highlight(code.innerHTML, Prism.languages.css, "css")
                styleTag.innerText = preResult + result.substring(0,n)
                if (n >= result.length) {
                    window.clearInterval(interval)
                }
            }, 50)
    
        }