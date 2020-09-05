<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-8">
        <h3 class="mb-5 mt-5">Mot du directeur</h3>

        <md-card class="ceo">
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="4:3">
              <img
                src="../../assets/ceo.jpg"
                class="img-fluid"
                alt="photo directeur Daoud Ali Abdou"
              />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title font-weight-bold">Daoud Ali Abdou</span>
                <span class="md-subhead font-weight-bold"
                  >Directeur de l'Autorité de l'aviation civile de
                  Djibouti</span
                >
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        <md-card>
          <md-card-content>
            It is a particular honor for me to welcome you all-ECAA website
            visitors, to take a look at our recently revised website that
            displays the overall picture of the Authority. Ethiopia is one of
            the countries which commenced air transport service earlier in the
            world. In addition to the National carrier, private air operators
            are currently engaged in aviation consulting, training and flight
            services. Thus, it’s now time, more than ever, to embark on critical
            regulation of the growing huge industry through knowledge and skills
            as well as producing sufficient and quality aviation personnel.
            Established in 1944, the Ethiopian Civil Aviation Authority (ECAA)
            is bestowed upon the responsibility to administer and handle all
            airports and aviation matters while signing the convention of the
            International Civil Aviation Organization (ICAO) and became founding
            member of the Organization same year. Since then ECAA has registered
            remarkable achievements in scaling up standards of international and
            local destinations, flight route inspection, air traffic control and
            safety, ensuring international standards of air navigation equipment
            and controlling airports service delivery as well as putting in
            place principles and standards of the International Civil Aviation
            Organization (ICAO). The Ethiopian Civil Aviation Authority
            Regulatory Division has also been showing commendable progress in
            updating its status approved by the US Federal Aviation
            Administration (AFA) and ICAO USOAP Audit while implementing Quality
            Management System (ISO 9001/2015) and capacity building program. The
            Ethiopian Government sees the aviation sector as integral to
            securing that future growth of this country, the Eastern Africa
            region and Africa in general. Our airports, airlines and associate
            industries facilitate to generate the required financial resource.
            Currently ECAA is revamping its training center, ECATA, which has
            recently earned ICAO TRAINAIR PLUS membership to create more
            opportunities for youth to train in aviation and related areas. Dear
            visitors, we, professionals in the aviation sector are always
            chasing the perfect, the utmost care, safety and security in air
            transport service. This communication channel, therefore, helps look
            into standards, requirement, rules, regulations, principles and
            related issues as well as latest developments in our aviation
            sector. Together, we need to reach as many social media followers as
            possible with information on how to ensure aviation safety, and I
            once again would like to welcome you to our website, hoping that you
            have significant, adequate and contemporary information on ECAA and
            latest development on the country’s aviation sector. Thank you for
            visiting !
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    // if no subcomponents specify a metaInfo.title, this title will be used
    return {
      title: "Mot du directeur",
      meta: [
        {
          vmid: "description",
          name: "description",
          content:
            " Mot du directeur de l'aviation civile de djibouti, Mr. Daoud Ali Abdou est le directeur par interim de l'Autorité de l'Aviation Civile de Djibouti",
        },
      ],
    };
  },
  data() {
    return {
      test: "Voila",
    };
  },
};
</script>

<style lang="css" scoped>
.ceo {
  width: 500px;
}
</style>
