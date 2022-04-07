<template>
  <nav-bar :id="user_id" />
  <div class="report">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />
    <div class="container-fluid">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div
            class="card-header"
            id="headingOne"
            style="background-color: rgb(55, 66, 88); color: rgb(247, 68, 100)"
          >
            <h2 class="mb-0">
              <button
                class="btn"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                WEEKLY REPORTS
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>

        <div class="card">
          <div
            class="card-header"
            id="headingTwo"
            style="background-color: rgb(55, 66, 88); color: rgb(247, 68, 100)"
          >
            <h2 class="mb-0">
              <button
                class="btn"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                YEARLY REPORTS
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      user_id: this.id,
      label: "Reports",
      href: "/reports",
    };
  },
};
</script>

<style>
.title {
  color: rgb(247, 68, 100);
  margin: 100px;
  font-weight: bold;
}
.card-body {
  background-color: rgb(55, 66, 88);
  color: rgb(247, 68, 100);
}
.accordion {
  width: 70%;
}
</style>