     <template>
 <!-- Page Header -->
    <div class="main-heading-wrapper py-3">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">Timesheets Details</h1>
            <p class="main-sub-heading">Full information about the Shift</p>
            <!-- END Title Area !-->
          </div>
        </div>
        <div
          class="col-sm-6 d-sm-flex justify-content-end align-items-center pb-xs-5"
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
              placeholder="Search Timesheets"
              aria-label="Timesheets Search"
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
  name: "TimesheetsHeader",
  components: {},
}
</script>