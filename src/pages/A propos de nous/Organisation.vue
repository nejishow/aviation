<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4">
            <Menu></Menu>
        </div>
        <div class="col-12 col-md-8">
            <h3>Organisation</h3>

        </div>

    </div>
</div>
</template>

<script>
import Menu from "../../components/SideMenu";
export default {
    metaInfo() {
        // if no subcomponents specify a metaInfo.title, this title will be used
        return {
            title: 'Organisation',
            meta: [{
                    vmid: 'description',
                    name: 'description',
                    content: "Organisation de l'Authorité de l'Aviation Civile de Djibouti"
                }
            ]
        }
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
    },
    components: {
        Menu,
    },
};
</script>
