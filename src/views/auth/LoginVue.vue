<template>
    <!-- <layout-default> -->
        <div class="auth-main-area-inner">
            <div class="content-area">
                <img src="@/assets/images/logo-icon.png" alt="Gud Ideas Corp" class="logo">
                <h1 class="heading">Sign In.</h1>
            </div>
            <div class="form-area">
                <form method="POST" action="/dashboard" class="form-wrapper">
                    <div class="input-wrapper">
                        <label for="email" class="form-label">Email Address</label>
                        <input name="email" id="email" type="email" class="field" />
                    </div>
                    <div class="input-wrapper">
                        <label for="password" class="form-label">Password</label>
                        <input name="password" id="password" type="password" class="field" />
                    </div>
                    <div class="input-wrapper rm-fp">
                        <div class="remember-me">
                            <label for="remember" class="checkbox-wrapper">
                                <div class="checkbox-area">
                                    <input id="remember" type="checkbox" name="remember" data-field-toggle-type="checkbox">
                                    <span></span>
                                </div>
                                <div class="label-area">
                                    <span class="form-label">Remember Me</span>
                                </div>
                            </label>
                        </div>
                        <div class="forgot-password">
                            <router-link to="/password/reset" class="btn btn-link">Forgot Password?</router-link>
                        </div>
                    </div>
                    <div class="input-wrapper button-wrapper">
                        <!-- <button type="submit" class="btn btn-brand btn-block">Sign In</button> !-->
                        <router-link to="/" type="submit" class="btn btn-brand btn-block">Sign In</router-link>
                    </div>
                    <div class="input-wrapper button-wrapper text-center">
                        <a class="btn btn-link" href="https://www.medical-locums.co.uk"><i class="far fa-long-arrow-left icon left"></i>Back to Website</a>
                    </div>
                </form>
            </div>
        </div>
    <!-- </layout-default> -->
</template>

<script>
import LayoutDefault from '../../layouts/LayoutDefault'

export default {
  name: 'Login',
  components: {
    // LayoutDefault
  }
}
</script>
