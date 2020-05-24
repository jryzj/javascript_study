<template>
	<div>
		<h3>hello, here is zjvuestudy</h3>
		<p>{{appName}}---{{appAge}}</p>
		<slot name="first"></slot>
		<slot name="second"></slot>
		<slot name="third"></slot>
	</div>
</template>

<script>
export default{
	name:"zvs1",
	data(){
		return {}
	},
	props:{
		appName:{
			type:String,
			default:"appName",
			required:false
		},
		appAge:{
			type:Number,
			default:0,
			required:false
		}
	//props:[app-name,app-age]	

	}
}
	
</script>
<style scoped>
div{
	background-color:#34C1F6;
	border:1px #EAF0F0 solid;
}
	
</style>