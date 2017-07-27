// var n1=document.getElementById("n1");
// var pre=document.getElementById("pre");
// var last=document.getElementById("last");
// var searchValue=document.getElementById("searchValue");
// var startSearch=document.getElementById("startSearch");
// clearInterval() 方法可取消由 setInterval() 设置的 timeout
var time=null;
var nodeList=[];//存储遍历结果
var i=0;//用来遍历nodeList的计数器，调用changecolor之前一定要先清空

function changeColor(targetNodeId){
	time=setTimeout(function(){
		if(i<nodeList.length){
			//将目标结点变色
			nodeList[i].style.backgroundColor="orange";
			//将非目标结点变白
			nodeList.forEach(function(node){
				if(node!=nodeList[i]){
					node.style.background="#fff";
				}
			});
			if(targetNodeId){
				if(targetNodeId[i].id==targetNodeId){
					clearInterval(time);
				}
			}
			i++;
		}else{//让循环多执行一次，最后一次让所有的元素变白
			if(i==nodeList.length){
				nodeList[nodeList.length-1].style.backgroundColor="#fff";
			}
			clearInterval(time);
		}
	},500);
}

function preTraverse(node){
	if(node!=null){
		nodeList.push(node);
		for(var i=0;i<node.children.length;i++){
			preTraverse(node.children[i]);
		}
	}
}
function lastTraverse(node){
	if(node != null){
		
		for(var i = 0; i < node.children.length; i++){
			lastTraverse(node.children[i]);
		}
		nodeList.push(node);
	}
}


function startPreTraverse(){
	nodeList=[];
	i=0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！
	var node=document.getElementById("n1");
	clearInterval(time);//如果调用该遍历前调用过其他变
	time=null;
	preTraverse(node);//构造nodeList,该数组中存储的为遍历结果
	changeColor();
}

function startLastTraverse(){
	nodeList = [];//存储遍历结果
	i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！
	var node = document.getElementById("n1");
	clearInterval(time);//如果调用该遍历前调用过其他变
	time = null;
	lastTraverse(node);//构造nodeList,该数组中存 储的为遍历结果
	changeColor();
}

function search(){
	var targetNodeId=document.getElementById("searchValue").value;
	if(targetNodeId){
		nodeList=[];
		i=0;
		var node=document.getElementById("n1");
			clearInterval(time);
			time=null;
			preTraverse(node);
			changeColor(targetNodeId);
	}else{
		alert("请输入n1-n22");
	}
}

document.getElementById("pre").addEventListener("click",startPreTraverse,false);
document.getElementById("last").addEventListener("click",startLastTraverse,false);
document.getElementById("startSearch").addEventListener("click",search,false);
