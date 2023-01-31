<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <ShiftsHeader />
    <div class="row">
      <div class="col-12 shift-details-table">
        <!-- Horizontal Table -->
        <div class="card table-responsive hide-scroll-bars d-none d-lg-block">
          <table id="" class="table table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Nurse Name</th>
                <th scope="col">Speciality Band</th>
                <th scope="col">Hospital</th>
                <th scope="col">Pay</th>
                <th scope="col">Confirmed With</th>
                <th scope="col">Candidate Caller</th>
                <th scope="col">Client Caller</th>
                <th scope="col">Paymen Method</th>
                <th scope="col">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/01/2023 <br /><br />09:00</td>
                <td>12/01/2023 <br /><br />19:00</td>
                <td>John Doe</td>
                <td>Outpatients</td>
                <td>Milton Hospital</td>
                <td>£38</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Aurene</td>
                <td>Paye</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- End Horizontal Table -->
        <!-- Vertical Table -->
        <div class="card table-responsive hide-scroll-bars d-lg-none">
          <table id="" class="table table-sm table-hover">
            <tbody>
              <tr>
                <th scope="col">Start Time</th>
                <td>12/01/2023 <br /><br />09:00</td>
              </tr>

              <tr>
                <th scope="col">End Time</th>
                <td>12/01/2023 <br /><br />19:00</td>
              </tr>
              <tr>
                <th scope="col">Nurse Name</th>
                <td>John Doe</td>
              </tr>
              <tr>
                <th scope="col">Speciality Band</th>
                <td>Outpatients</td>
              </tr>
              <tr>
                <th scope="col">Hospital</th>
                <td>Milton Hospital</td>
              </tr>
              <tr>
                <th scope="col">Pay</th>
                <td>£38</td>
              </tr>
              <tr>
                <th scope="col">Confirmed With</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="col">Candidate Caller</th>
                <td>Otto</td>
              </tr>

              <tr>
                <th scope="col">Client Caller</th>
                <td>Aurene</td>
              </tr>
              <tr>
                <th scope="col">Paymen Method</th>
                <td>Paye</td>
              </tr>
              <tr>
                <th scope="col">Note</th>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- End Vertical Table -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from "../../components/HeaderBottom.vue"
import HeaderTop from "../../components/HeaderTop.vue"
import ShiftsHeader from "./components/ShiftsHeader.vue"

export default {
  name: "LayoutShiftsDetails",
  components: {
    HeaderTop,
    HeaderBottom,
    ShiftsHeader,
  },
}
</script>
