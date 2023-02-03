<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn m-5 btn-primary"
    data-toggle="modal"
    data-target="#exampleModalRight"
  >
    Right Side Drawer add on click toggle show true
  </button>

  <button
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#exampleModalLeft"
  >
    Left Side Drawer
  </button>

  <!-- Modal -->
  <!-- add to div below if toggle true class show -->
  <div
    class="modal fade drawer right-align" 
    id="exampleModalRight"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Right Align Modal title
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade drawer left-align"
    id="exampleModalLeft"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Left Align Modal title
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserModal",
  components: {},
}
</script>

<style scoped>
/*From Right/Left */
.modal.drawer {
  display: flex !important;
  pointer-events: none;
}
.modal.drawer * {
  pointer-events: none;
}
.modal.drawer .modal-dialog {
  margin: 0px;
  display: flex;
  flex: auto;
  transform: translate(25%, 0);
}
.modal.drawer .modal-dialog .modal-content {
  border: none;
  border-radius: 0px;
}
.modal.drawer .modal-dialog .modal-content .modal-body {
  overflow: auto;
}
.modal.drawer.show {
  pointer-events: auto;
}
.modal.drawer.show * {
  pointer-events: auto;
}
.modal.drawer.show .modal-dialog {
  transform: translate(0, 0);
}
.modal.drawer.right-align {
  flex-direction: row-reverse;
}
.modal.drawer.left-align:not(.show) .modal-dialog {
  transform: translate(-25%, 0);
}
</style>
