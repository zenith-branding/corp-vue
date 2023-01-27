<template>
  <LayoutUsersDetails>
    <div class="row">
      <div class="col-sm-12 p-4">
        <div class="card accordion" id="accordionExample">
          <!-- Addresses -->
          <div class="accordion-item">
            <h4 class="card-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Addresses
              </button>
            </h4>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body row">
                <div class="col-md-8 col-sm-12">
                  <h3 class="card-title">Personal address</h3>
                  <p>Alanod, Chippenham Dr</p>
                  <p>Milton Keynes</p>
                  <p>MK10 0AN</p>

                </div>
                <div class="col-md-8 col-sm-12 text-right">
                  <div class="button-area">
                          <a
                            href="#"
                            title="Edit Details"
                            class="btn btn-brand"
                          >
                            <i class="far fa-pencil icon left"></i>Edit Details
                          </a>
                        </div>
                  <button class="btn btn-primary">Edit Details</button></div>
              </div>
            </div>
          </div>
          <!-- Contact Numbers -->
          <div class="accordion-item">
            <h4 class="card-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Contact Numbers
              </button>
            </h4>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.card-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <!-- Emails -->
          <div class="accordion-item">
            <h4 class="card-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Email Addresses
              </button>
            </h4>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.card-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <!-- Activity -->
          <div class="accordion-item">
            <h4 class="card-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Activity
              </button>
            </h4>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutUsersDetails>
</template>

<script>
import LayoutUsersDetails from "./Components/LayoutUsersDetails.vue"

export default {
  name: "UsersDetails",
  components: {
    LayoutUsersDetails,
  },
}
</script>
