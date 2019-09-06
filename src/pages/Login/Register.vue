<template>
    <div class="register">
        <div class="right-content">
        <div class="from-box">
          <el-form ref="rform" :model="rform" :rules="rformRule" label-width="90px">
            <el-form-item  label="用户名" prop="userName">
              <el-input v-model="rform.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="rform.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phoneNum">
              <el-input v-model="rform.phoneNum" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="rform.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
              <el-input type="password" v-model="rform.confirmPassword"  placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button>注册</el-button>
              <el-button type="primary">去登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>
<script>
export default{
    name:'Register',
    data(){
        return{
            
            rform:{
                userName:"",
                email:"",
                phoneNum:"",
                password:""
            },
            rformRule: {
                userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        phoneNum: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirmPassword: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
            }
            
        }
        
    }
}
</script>
<style lang="css" scoped>
.right-content{
  width:80%;
  margin:0 auto;
  margin-top:100px;
}
   .from-box{
       width:50%
   } 
</style>