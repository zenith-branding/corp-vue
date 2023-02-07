<template>
  <div class="row container">
    <div class="col-12 card px-0">
      <div class="card-header d-flex justify-content-between bg-primary px-5 py-3">
       
        <a href="#/" class="logo router-link-active" title="Medical Locums">
          <img
            src="../../../assets/mlg-logo.png"
            alt="Medical Locums"
            class="d-none d-sm-block"
          />
        </a>
        <div class="navbar-content d-flex flex-column align-items-end">
          <span class="pb-1 mb-auto"> Status: <strong>Pending</strong> </span>
          <span class="pb-1 mb-auto"> Ref No: <strong>ML-87122</strong> </span>
           <span>Invoice Date <strong>01/01/2023</strong></span>
        </div>
        
      </div>
      <div class="card-body p-5">
        <div class="row my-5 ">
          <div class="col-sm-6">
            <h6 class="mb-3">Client's details:</h6>
            <div>
              <strong>Ramsay Health Care</strong>
            </div>
            <div>43-190 Alanod, Milton Keynes</div>
            <div>Email: john@email.com</div>
            <div>Phone: +44 123 456 789</div>
          </div>

          <div class="col-sm-6 mb-5">
            <h6 class="mb-3">Candidate's details:</h6>
            <div>
              <strong>John Doe</strong>
            </div>
            <div>43-190 Alanod, Milton Keynes</div>
            <div>Email: john@email.com</div>
            <div>Phone: +44 123 456 789</div>
          </div>
        </div>

        <div class="table-responsive-sm mt-5">
          <table class="table data-heavy table-striped">
            <thead>
              <tr>

                <th>Candidate Payment Nett</th>
                <th>Client Payment Nett </th>
                <th>Candidate Payment VAT</th>
                <th>Client Payment VAT </th>

                <th class="right">MarkUp</th>
                <th class="center">Employee NI</th>
                <th class="right">Contract Ref No</th>
                <th class="right">Employer NI</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td class="left strong">266.00</td>
                <td class="left">315.93</td>
                <td class="left strong">266.00</td>
                <td class="left">315.93</td>

                <td class="right">53.77</td>
                <td class="center">0.00</td>
                <td class="right">CON-23392</td>
                <td class="center">0.00</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div class="row my-5">
          <div class="col-lg-4 col-sm-5"></div>

          <div class="col-lg-4 col-sm-5 ml-auto">
            <table class="table table-clear">
              <tbody>
                <tr>
                  <td class="left">
                    <strong>Contract Consultant</strong>
                  </td>
                  <td class="right">Rodney Doe</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>Contract Actual Value</strong>
                  </td>
                  <td class="right">£53.77</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomingInvoicesTemplate",
  components: {},
}
</script>
