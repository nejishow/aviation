<template>
<div class="row justify-content-center mt-5">
    <div class="col-sm-12 col-md-5 card p-5 border-info mt-5 mb-5">
        <h4 class="mr-auto ml-auto mb-5">Connection</h4>
        <div class="form-group">
            <div class="form-group">
                <label class="form-check-label small font-italic font-weight-bold">Votre email</label>
                <input id="email" v-model="email" type="text" class="form-control" placeholder="email" />
            </div>
            <div class="form-group">
                <label class="form-check-label small font-italic font-weight-bold">Votre mot de passe</label>
                <input id="password" v-model="password" type="password" class="form-control" placeholder="mot de passe" />
            </div>
            <div class="form-group d-flex">
                <button v-if="!loading" class="btn btn-group btn-outline-success" @click="submit()">
                    Connection
                </button>
                <button class="btn btn-group btn-outline-success" v-if="loading">
                    <div class="spinner-border" role="status">
                        <span class="sr-only small">Loading...</span>
                    </div>
                </button>
            </div>
        </div>
        <span class="text-danger bg-white rounded-pill text-center">{{
        error
      }}</span>
    </div>
</div>
</template>

<script>
import authService from "../services/auth.service";
export default {
    metaInfo() {
        // if no subcomponents specify a metaInfo.title, this title will be used
        return {
            meta: [{
                    name: 'robots',
                    content: "noindex"
                },
                {
                    name: 'googlebot',
                    content: "noindex"
                }
            ]
        }
    },
    data() {
        return {
            email: "",
            password: "",
            error: "",
            loading: false,
        };
    },
    methods: {
        submit() {
            this.loading = true;
            var email = this.email;
            var password = this.password;
            return authService
                .signIn({
                    email,
                    password
                })
                .then((data) => {
                    this.$store.dispatch("setUser", data.data.user)
                    localStorage.setItem("token", data.data.token);
                    localStorage.setItem("id", data.data.user._id);
                    this.$router.push({
                        path: '/'
                    })
                })
                .catch((error) => {
                    this.loading = false;
                    this.error = error.response.data;
                    this.$router.push({
                        path: '/'
                    })

                });
        },
    },
};
</script>
