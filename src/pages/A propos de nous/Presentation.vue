<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4">
            <Menu></Menu>
        </div>
        <div class="col-12 col-md-8">
            <h3>Presentation</h3>
            <h5 class=" mt-5 font-weight-bold">Our Vision:</h5>
            Building internationally competent and secured civil aviation by 2025.

            <h5 class=" mt-5 font-weight-bold">Our Mission:</h5>

            To enable the public get access to reliable Air transport service by
            ensuring Aviation safety and security through effective regulatory
            function, environmental protection, provision of Air navigation
            services, by strengthening global cooperation and partnership.

            <h5 class=" mt-5 font-weight-bold">
                The objective of the Authority shall be:
            </h5>

            To promote and maintain an efficient and economical civil air service
            and general aviation service system and to ensure the provision of
            highly secure and safe air service; To develop domestic and
            international air transportation networks and to ensure a reliable and
            sustainable air transport system; To implement and enforce laws,
            regulations and directives relating to civil aviation as well as reaties
            to which Ethiopia is a party.

            <h5 class=" mt-5 font-weight-bold">Our Value:</h5>

            <ol class="list-group">
                <li class="ml-5">Safety First</li>
                <li class="ml-5">Team Work</li>
                <li class="ml-5">Think Globally Act Locally</li>
                <li class="ml-5">Committed to Excellence</li>
                <li class="ml-5">Our Efforts our Achievement</li>
            </ol>
        </div>
    </div>
</div>
</template>

<script>
import Menu from "../../components/SideMenu";
export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Présentation',
        meta: [{
            vmid: 'description',
            name: 'description',
            content: "Présentation Authorité de l'Aviation Civile de Djibouti"
        }]
    },
    components: {
        Menu,
    },
};
</script>
