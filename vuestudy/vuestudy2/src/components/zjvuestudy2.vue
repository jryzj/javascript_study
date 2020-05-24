<template>
	<div>
	<form v-on:keyup='inputData'>
	<label >Name:</label>
	<input id="name"type="text">
	<label >Age:</label>
	<input id="age" type="text">
	<br>
</form>
<!--	<button v-on:click='inputData'>input</button>  -->
</div>
	
</template>
<script>
export default{
	name:"zvs2",
	methods:{
	inputData : function(){
	var appName=document.getElementById("name").value;
	var appAge=Number(document.getElementById("age").value);	
	this.$emit('eventGetData',{name:appName,age:appAge});
}
},
props:{

}
}
	
</script>
<style scoped>
div{
	background-color:#E4FE68;
	border:1px solid #F9E189;
}
	
</style>
