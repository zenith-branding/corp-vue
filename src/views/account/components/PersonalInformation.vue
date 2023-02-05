<template>
  <div class="row button-row mb-3 p-1 pt-4">
    <div class="col-sm-12">
      <h4 class="card-title text-brand">General</h4>
      <p class="card-text sub-heading pb-3">Basic information about you</p>

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
        <input type="text" class="form-control my-4" placeholder="John" />
      </div>
      <!-- Surname -->
      <div class="d-flex flex-row border-bottom">
        <label for="Surname" class="account-label">Surname:</label>
        <input type="text" class="form-control my-4" placeholder="Doe" />
      </div>

      <!-- Date of Birth -->
      <div class="d-flex flex-row border-bottom">
        <label for="Date of Birth" class="account-label">Date of Birth:</label>

        <Datepicker
          v-model="date"
          class="my-4"
          placeholder="12/10/1978"
          :enable-time-picker="false"
        ></Datepicker>
      </div>

      <h4 class="card-title text-brand pt-5">Contact Details</h4>
      <p class="card-text sub-heading">Your contact information</p>
      <!-- Email -->
      <div class="d-flex flex-row border-bottom">
        <label for="Email" class="account-label mt-3">Email:</label>
        <input
          type="text"
          class="form-control mb-4 mt-2"
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
      <!-- Landline Phone -->
      <div class="d-flex flex-row border-bottom">
        <label for="Landline Phone" class="account-label"
          >Landline Phone:</label
        >
        <input
          type="text"
          class="form-control my-4"
          placeholder="01354898956"
        />
      </div>
      <h4 class="card-title text-brand pt-5">Address Details</h4>
      <p class="card-text sub-heading">Your address details</p>
      <!-- Address -->
      <div class="d-flex flex-row border-bottom">
        <label for="Address line 1" class="account-label mt-3"
          >Address line 1:</label
        >
        <input
          type="text"
          class="form-control mb-4 mt-2"
          placeholder="Alanod"
        />
      </div>
      <div class="d-flex flex-row border-bottom">
        <label for="Address line 2" class="account-label"
          >Address line 2:</label
        >
        <input
          type="text"
          class="form-control my-4"
          placeholder="Chippenham Dr"
        />
      </div>
      <div class="d-flex flex-row border-bottom">
        <label for="City" class="account-label">City:</label>
        <input
          type="text"
          class="form-control my-4"
          placeholder="Milton Keynes"
        />
      </div>
      <div class="d-flex flex-row border-bottom">
        <label for="Postcode" class="account-label">Postcode:</label>
        <input type="text" class="form-control my-4" placeholder="MK10 0AN" />
      </div>
      <div class="d-flex flex-row border-bottom">
        <label for="Country" class="account-label">Country:</label>
        <input
          type="text"
          class="form-control my-4"
          placeholder="United Kingdom"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-4 float-right">Update</button>
    </div>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker"
import "@vuepic/vue-datepicker/dist/main.css"

export default {
  name: "PersonalInformation",
  components: {
    Datepicker,
  },
  data() {
    return {
      date: null,
    }
  },
}
</script>
