<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth login-full-bg">
                <div class="row w-100">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-dark text-left p-5">
                            <h2>Login</h2>
                            <h4 class="font-weight-light">Hello! let's get started</h4>
                            <div class="pt-5">
                                <form @submit.prevent="doLogin">
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
                                        <button class="btn btn-block btn-warning btn-lg font-weight-medium" type="submit">Login</button>
                                    </div>
                                    <div class="mt-3 text-center">
                                        <router-link :to="{name: 'register'}" class="auth-link text-white">Create account</router-link>
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
        name: 'Logsuccessrm',
        data: () => ({
            user: {email: '', password: ''}
        }),
        
        mounted () 
        {},
        
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
            }
            
        }
    }
</script>

<style scoped>
    .auth.login-full-bg {
        background: url('http://www.bootstrapdash.com/demo/star-admin-free/jquery/images/auth/login_1.jpg');
        background-size: cover;
    }
</style>