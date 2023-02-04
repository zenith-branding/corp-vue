<template>
  <!-- <a href="#" title="Add" class="btn btn-primary" @click="myModal = !myModal">
    <i class="far fa-plus icon left mr-2"></i>Create user
  </a> -->
  <!-- <button class="btn-primary"  @click="myModal = !myModal" value="add">modal</button> -->
  <!--  -->
  <transition name="fade">
    <div v-if="myModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="moda-content">
              <div class="modal-header">
                <button class="close" @click="myModal = !myModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h4 class="modal-title">title here</h4>
              <div class="modal-body">
                <div class="form-group">form here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "UserModal",
  components: {},

  data() {
    return {
      myModal: false,
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-dialog {
  background: #fdfdfd;
}
</style>
