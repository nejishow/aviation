<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4">
            <Menu></Menu>
        </div>
        <div class="col-12 col-md-8">
            <h3>Politique de Supervision</h3>

        </div>
    </div>
</div>
</template>

<script>
import Menu from "../../components/SideMenu";
export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Politique de supervision',
        meta: [{
            vmid: 'description',
            name: 'description',
            content: "Politique de supervisison de l'Aviation Civile de Djibouti"
        }]
    },
    components: {
        Menu,
    },
};
</script><script>
import Menu from "../../components/SideMenu";
export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        bodyAttrs: {
            class: ['dark-mode', 'mobile']
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                'http-equiv': "Content-Type",
                content: "text/html; charset=utf-8"
            },

        ]
    },
    components: {
        Menu,
    },
};
</script>
