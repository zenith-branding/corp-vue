<template>
   <div id="Users-all-Users" class="card card-table mt-2">
      <div class="card-body">
        <div class="row card-table-header">
          <div class="col-md-6 col-sm-12">
            <div class="content-area py-2">
              <h4 class="card-title text-brand">Activity</h4>
              <p class="card-text pb-4 sub-heading" id="Users-all-Users-counts">
                <span class="total"></span> Latest Users Acivity in The System
              </p>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-scroll-bars">
          <table id="Users-all-Users-table" class="table table-sm table-hover">
            <thead class="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">Model</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>id</td>
                <td> user.forename </td>
                <td> user.email </td>
                <td>Create</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td>Note</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/Users/view"
                    class="icon-button"
                    title="View Medical Locums Group"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
                            <tr>
                <td>id</td>
                <td> user.forename </td>
                <td> user.email </td>
                <td>Create</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td>Note</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/Users/view"
                    class="icon-button"
                    title="View Medical Locums Group"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
                            <tr>
                <td>id</td>
                <td> user.forename </td>
                <td> user.email </td>
                <td>Create</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td>Note</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/Users/view"
                    class="icon-button"
                    title="View Medical Locums Group"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "DashboardTable",
  components: {},
}
</script>
