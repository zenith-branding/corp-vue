     <template>
 <!-- Page Header -->
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">Candidate Details</h1>
            <p class="main-sub-heading">Full information about the candidate</p>
            <!-- END Title Area !-->
          </div>
        </div>
        <div
          class="col-sm-6 d-sm-flex justify-content-end align-items-center pb-xs-5 pt-3 pt-md-0"
        >
          <div class="button-area d-flex">
            <!-- Search Button Button !-->
            <a href="#" title="Add" class="btn btn-primary mr-3">
              <i class="far fa-search icon left mr-2"></i>Search
            </a>
            <!-- END Search Button Button !-->
            <!-- Search Input Field !-->
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <!-- END Search Input Field !-->
          </div>
        </div>
      </div>
    </div>
    <!-- END Page Header -->
    </template>

<script>
export default {
  name: "CandidatesHeader",
  components: {},
}
</script>