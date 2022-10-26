window.addEventListener('click',function(e){
    if(e.target.href!==undefined){
        chrome.tabs.create({url:e.target.href})
    }
})

window.onload = function() {
    document.getElementById("src-btn").addEventListener("click", function() {
        chrome.tabs.create({url:"https://github.com/yuqian5/eclass-confetti"});
    });
}
