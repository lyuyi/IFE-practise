var root=document.getElementById("root");
var btnPreOrder=document.getElementById("preOrder");
var btnInOrder=document.getElementById("inOrder");
var btnPostOrder=document.getElementById("postOrder");
var timer=0;

//显示正在遍历的结点
function showNode(node){
    //alert(node.tagName);
    node.style.backgroundColor="#ffffff";
    setTimeout(function(){
        node.style.backgroundColor="#ff524a";
    },timer+=500);//等待500毫秒后改变目标节点颜色（白->红）
    setTimeout(function(){
        node.style.backgroundColor="#ffffff";
    },timer+=500);//显示500毫秒红色后变白色
}

//前序遍历,根左右
function preOrder(nodes){
    if(nodes){
        showNode(nodes);//显示当前结点
        preOrder(nodes.children[0]);//递归左子树
        preOrder(nodes.children[1]);//递归右子树
    }
}

//中序遍历,左根右
function inOrder(nodes){
    if(nodes){
        inOrder(nodes.children[0]);
        showNode(nodes);
        inOrder(nodes.children[1]);
    }
}

//后序遍历,左右根
function postOrder(nodes){
    if(nodes){
        postOrder(nodes.children[0]);
        postOrder(nodes.children[1]);
        showNode(nodes);
    }
}

//绑定按钮
btnPreOrder.onclick=function(){
    preOrder(root);
    timer=0;
};
btnInOrder.addEventListener("click",function () {
    inOrder(root);
    timer=0;
},false);
btnPostOrder.addEventListener("click",function () {
    postOrder(root);
    timer=0;
},false);