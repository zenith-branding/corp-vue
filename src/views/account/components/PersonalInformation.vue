<template>
  <div class="row button-row mb-3 p-1 pt-4">
    <div class="col-sm-12">
      <h4 class="card-title text-brand">General</h4>
      <p class="card-text sub-heading  pb-3">Basic information about you</p>
      
      <!-- Title -->
      <div class="d-flex flex-row border-bottom">
        <label for="Title" class="account-label mt-2">Title:</label>
        <select class="custom-select mb-4" id="inlineFormCustomSelect">
              <option selected disabled>Title</option>
              <option value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Mx">Mx</option>
            </select>
      </div>
      <!-- Forename -->
      <div class="d-flex flex-row border-bottom">
        <label for="forename" class="account-label">Forename:</label>
        <input
          type="text"
          class="form-control my-4"
          placeholder="John"
        />
      </div>
      <!-- Surname -->
      <div class="d-flex flex-row border-bottom">
        <label for="Surname" class="account-label">Surname:</label>
        <input
          type="text"
          class="form-control my-4"
          placeholder="Doe"
        />
      </div>

      <!-- Date of Birth -->
      <div class="d-flex flex-row border-bottom">
        <label for="Date of Birth" class="account-label">Date of Birth:</label>
        <input
          type="text"
          class="form-control my-4"
          placeholder="info@mlg.co.uk"
        />
       
      </div>


      <h4 class="card-title text-brand pb-3">Contact Numbers</h4>
      <p class="card-text sub-heading">
        Contact details
      </p>
            <!-- Email -->
      <div class="d-flex flex-row border-bottom">
        <label for="Email" class="account-label">Email:</label>
        <input
          type="text"
          class="form-control my-4"
          placeholder="info@mlg.co.uk"
        />
      </div>
            <!-- Mobile Phone -->
      <div class="d-flex flex-row border-bottom">
        <label for="Mobile Phone" class="account-label">Mobile Phone:</label>
        <input
          type="text"
          class="form-control my-4"
          placeholder="07354898956"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PersonalInformation",
    components: {
  },
}
</script>
