<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth register-full-bg">
                <div class="row w-100">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-light text-left p-5">
                            <h2>Register</h2>
                            <h4 class="font-weight-light">Hello! let's get started</h4>
                            <div class="pt-4">
                                <form @submit.prevent="doRegister">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Name" v-model="user.name">
                                        <i class="mdi mdi-account"></i>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address" v-model="user.email">
                                        <i class="mdi mdi-account"></i>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password">
                                        <i class="mdi mdi-eye"></i>
                                    </div>
                                    <div class="mt-5">
                                        <button class="btn btn-block btn-primary btn-lg font-weight-medium" type="submit">Register</button>
                                    </div>
                                    <div class="mt-3 text-center">
                                        <router-link :to="{name: 'login'}" class="auth-link">Login</router-link>
                                    </div>
                                </form>                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegisterForm',
        data: () => ({
            user: { name: '', email: '', password: '' }
        }),
        
        mounted() { },
        
        methods: {
            
            doLogin () 
            {
                this.$http.post(`${window.basePath}/auth/login`, this.user)
                .then(response => {
                    this.$auth.setToken(response.data.token)
                    this.$router.push({ path: '/' })
                })
                .catch(err => {
                    alert('verify your credentials')
                })
            },
            
            doRegister () 
            {
                this.$http.post(`${window.basePath}/auth/register`, this.user)
                .then(response => {
                    this.doLogin()
                })
                .catch(err => {
                    alert('Error on create user')
                })
            }
            
        }
    }
</script>

<style scoped>
    .register-full-bg {
        background: url('http://www.bootstrapdash.com/demo/star-admin-free/jquery/images/auth/register_1.jpg');
        background-size: cover;
    }
</style>