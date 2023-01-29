<template>
  <div class="my-2">
    <ul class="card list-group list-group-flush">
      <li class="list-group-item font-weight-bold">John Doe</li>
      <li class="list-group-item font-weight-bold">ID-1421</li>
      <li class="list-group-item">
        <div class="ms-2 me-auto">
          <span class="text-muted">Your Status</span>
          <div class="font-weight-bold pt-1">
            <span class="badge badge-pill badge-success">Active</span>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="ms-2 me-auto">
          <span class="text-muted">Your Role</span>
          <div class="font-weight-bold pt-1">Admin</div>
        </div>
      </li>
      <li class="list-group-item d-flex">
        <a href="#" class="icon-button sidebar bg-primary mr-2" title="Email">
          <i class="fa fa-envelope"></i
        ></a>
        <span class="value pt-1">
          <a href = "mailto: info@mlg.co.uk">info@mlg.co.uk</a>
        </span>
      </li>
      <li class="list-group-item d-flex">
        <a href="#" class="icon-button sidebar bg-primary mr-2" title="Contact Number">
          <i class="fa fa-mobile"></i
        ></a>
        <span class="value pt-1">
          <a href="tel:555-666-7777">555-666-7777</a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AccountSidebar",
  components: {},
}
</script>
